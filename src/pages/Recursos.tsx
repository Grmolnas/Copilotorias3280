import { useState, useMemo, ComponentType } from "react";
import { CardElevated, CardElevatedContent, CardElevatedHeader, CardElevatedTitle } from "@/components/ui/card-elevated";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { fichasTecnicas, cursosDeVida, intervenciones, FichaTecnica } from "@/data/biblioteca";
import { Search, Eye, FileDown, Frown } from "lucide-react";
import html2pdf from "html2pdf.js";
import GuiaPrimeraInfancia from "@/components/recursos/GuiaPrimeraInfancia";
import GuiaInfancia from "@/components/recursos/GuiaInfancia";
import GuiaAdolescencia from "@/components/recursos/GuiaAdolescencia";
import GuiaJuventud from "@/components/recursos/GuiaJuventud";
import GuiaAdultez from "@/components/recursos/GuiaAdultez";
import GuiaVejez from "@/components/recursos/GuiaVejez";
import GpcCancerCuelloUterino from "@/components/recursos/GpcCancerCuelloUterino";
import GpcCancerMama from "@/components/recursos/GpcCancerMama";
import GpcCancerProstata from "@/components/recursos/GpcCancerProstata";
import GpcCancerColonRecto from "@/components/recursos/GpcCancerColonRecto";
import GpcPlanificacionFamiliar from "@/components/recursos/GpcPlanificacionFamiliar";
import GpcLactanciaMaterna from "@/components/recursos/GpcLactanciaMaterna";
import GpcSaludBucal from "@/components/recursos/GpcSaludBucal";
import InfografiaEficaciaMetodos from "@/components/recursos/InfografiaEficaciaMetodos";
import "@/components/recursos/styles.css";

// Mapa de componentes React disponibles
const componentMap: Record<string, ComponentType> = {
  GuiaPrimeraInfancia,
  GuiaInfancia,
  GuiaAdolescencia,
  GuiaJuventud,
  GuiaAdultez,
  GuiaVejez,
  GpcCancerCuelloUterino,
  GpcCancerMama,
  GpcCancerProstata,
  GpcCancerColonRecto,
  GpcPlanificacionFamiliar,
  GpcLactanciaMaterna,
  GpcSaludBucal,
  InfografiaEficaciaMetodos,
};

const Recursos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurso, setSelectedCurso] = useState("Todos");
  const [selectedIntervencion, setSelectedIntervencion] = useState("Todas");
  const [selectedTipos, setSelectedTipos] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<FichaTecnica | null>(null);

  const handleGeneratePDF = () => {
    const element = document.getElementById("recurso-content");
    if (!element) return;

    const opt = {
      margin: 12,
      filename: `${current?.titulo?.replace(/\s+/g, "-") || "recurso"}.pdf`,
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm" as const, format: "a4" as const, orientation: "portrait" as const },
    };

    html2pdf().set(opt).from(element).save();
  };

  const tiposDisponibles = useMemo(() => {
    return Array.from(new Set(fichasTecnicas.map(f => f.tipo)));
  }, []);

  const toggleTipo = (tipo: string) => {
    setSelectedTipos(prev => 
      prev.includes(tipo) ? prev.filter(t => t !== tipo) : [...prev, tipo]
    );
  };

  const filteredFichas = fichasTecnicas.filter((ficha) => {
    const matchesSearch = ficha.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ficha.tema.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCurso = selectedCurso === "Todos" || ficha.cursoDeVida === selectedCurso;
    const matchesIntervencion = selectedIntervencion === "Todas" || ficha.intervencion === selectedIntervencion;
    const matchesTipo = selectedTipos.length === 0 || selectedTipos.includes(ficha.tipo);
    
    return matchesSearch && matchesCurso && matchesIntervencion && matchesTipo;
  });

  const FichaCard = ({ ficha, index }: { ficha: FichaTecnica; index: number }) => (
    <CardElevated 
      className="flex flex-col h-full animate-fade-in-up" 
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <CardElevatedHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="secondary" className="shrink-0">
            {ficha.cursoDeVida}
          </Badge>
          <Badge variant="outline" className="shrink-0">
            {ficha.tipo}
          </Badge>
        </div>
        <CardElevatedTitle className="font-serif text-xl leading-tight line-clamp-2 min-h-[2.5rem]">
          {ficha.titulo}
        </CardElevatedTitle>
        {(ficha.fuente || ficha.version) && (
          <p className="text-xs text-gray-500 mt-2">
            {ficha.fuente && <span>{ficha.fuente}</span>}
            {ficha.fuente && ficha.version && <span> • </span>}
            {ficha.version && <span>v{ficha.version}</span>}
          </p>
        )}
      </CardElevatedHeader>
      <CardElevatedContent className="pt-0 mt-auto">
        <div className="flex gap-2">
          <Button 
            className="flex-1" 
            variant="default"
            size="sm"
            onClick={() => {
              setCurrent(ficha);
              setOpen(true);
            }}
            aria-label={`Ver ${ficha.titulo}`}
          >
            <Eye className="w-4 h-4 mr-2" />
            Ver
          </Button>
          {ficha.pdfUrl && (
            <Button 
              className="flex-1" 
              variant="outline"
              size="sm"
              asChild
              aria-label={`Descargar ${ficha.titulo}`}
            >
              <a href={ficha.pdfUrl} download>
                <FileDown className="w-4 h-4 mr-2" />
                Descargar
              </a>
            </Button>
          )}
        </div>
      </CardElevatedContent>
    </CardElevated>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-normal text-gray-900">
            Recursos 3280
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fichas, infografías y checklists validados para las RIAS
          </p>
        </div>

        {/* Search and Filters */}
        <CardElevated className="animate-fade-in delay-100">
          <CardElevatedContent className="pt-6">
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar por título o tema..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  aria-label="Buscar recurso por título o tema"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">
                    Curso de vida
                  </label>
                  <Select value={selectedCurso} onValueChange={setSelectedCurso}>
                    <SelectTrigger aria-label="Filtrar por curso de vida">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {cursosDeVida.map((curso) => (
                        <SelectItem key={curso} value={curso}>
                          {curso}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">
                    Tipo de intervención
                  </label>
                  <Select value={selectedIntervencion} onValueChange={setSelectedIntervencion}>
                    <SelectTrigger aria-label="Filtrar por intervención">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {intervenciones.map((intervencion) => (
                        <SelectItem key={intervencion} value={intervencion}>
                          {intervencion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardElevatedContent>
        </CardElevated>

        {/* Chips de Tipo de Recurso */}
        <div className="flex flex-wrap items-center gap-3 animate-fade-in delay-200">
          <span className="text-sm font-medium text-gray-900">Tipo de recurso:</span>
          {tiposDisponibles.map((tipo) => (
            <Button
              key={tipo}
              variant={selectedTipos.includes(tipo) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleTipo(tipo)}
              className="rounded-full"
              aria-label={`Filtrar por ${tipo}`}
              aria-pressed={selectedTipos.includes(tipo)}
            >
              {tipo}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">
            Mostrando {filteredFichas.length} de {fichasTecnicas.length} recursos
          </p>
          <p className="text-xs text-gray-600">
            Documentos validados
          </p>
        </div>

        {/* Fichas Grid */}
        {filteredFichas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredFichas.map((ficha, index) => (
              <FichaCard key={ficha.id} ficha={ficha} index={index} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <CardElevated className="rounded-3xl border-2 border-white/20">
            <CardElevatedContent className="pt-16 pb-16 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                  <Frown className="w-10 h-10 text-gray-400" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-medium text-gray-900 mb-3">
                No hay resultados con estos filtros
              </h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
                Intenta ajustar los filtros, términos de búsqueda o chips de tipo de recurso para encontrar lo que necesitas.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCurso("Todos");
                  setSelectedIntervencion("Todas");
                  setSelectedTipos([]);
                }}
                aria-label="Limpiar todos los filtros"
              >
                Limpiar filtros
              </Button>
            </CardElevatedContent>
          </CardElevated>
        )}

        {/* Info Note */}
        <Card className="bg-blue-50/80 border-blue-200">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Nota:</strong> Las fichas técnicas son documentos oficiales que describen las intervenciones de promoción y mantenimiento de la salud establecidas en la Resolución 3280 de 2018. Cada ficha incluye objetivos, población objetivo, periodicidad, procedimientos y criterios de calidad.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* PDF Viewer Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>{current?.titulo}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto rounded-lg border h-full" id="recurso-content">
            {(() => {
              // Si hay componente React, renderizarlo
              if (current?.componentName && componentMap[current.componentName]) {
                const Component = componentMap[current.componentName];
                return <Component />;
              }

              // Fallback a PDF o imagen
              const url = current?.htmlUrl ?? current?.pdfUrl;
              if (!url) return <div className="flex items-center justify-center h-full text-gray-500">No hay contenido disponible</div>;
              
              if (url.toLowerCase().endsWith(".pdf")) {
                return (
                  <iframe 
                    title={current?.titulo || "Documento"} 
                    src={url} 
                    className="w-full h-full" 
                    loading="lazy" 
                  />
                );
              }
              
              return (
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={url} 
                    alt={current?.titulo} 
                    className="max-w-full max-h-full" 
                    loading="lazy" 
                  />
                </div>
              );
            })()}
          </div>
          <DialogFooter className="gap-2">
            {/* Si hay componente React, generar PDF desde HTML */}
            {current?.componentName && componentMap[current.componentName] && (
              <Button
                size="lg"
                variant="premium"
                onClick={handleGeneratePDF}
              >
                <FileDown className="w-4 h-4 mr-2" />
                Descargar PDF
              </Button>
            )}
            
            {/* Si no hay componente, descargar PDF estático */}
            {!current?.componentName && current?.pdfUrl && (
              <Button
                size="lg"
                variant="premium"
                asChild
              >
                <a 
                  href={current.pdfUrl} 
                  download
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Descargar PDF
                </a>
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Recursos;
