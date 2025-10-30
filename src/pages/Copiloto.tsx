import React from "react";
import { CardElevated, CardElevatedContent, CardElevatedDescription, CardElevatedHeader, CardElevatedTitle } from "@/components/ui/card-elevated";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Copy, MessageSquare, Info } from "lucide-react";

const preguntasEjemplo = [
  "¿Cuáles son los objetivos de la atención en Adolescencia según RPMS?",
  "¿Cuándo se inicia el tamizaje de cáncer cervicouterino?",
  "¿Qué incluye la valoración integral en Primera Infancia?",
  "¿Cuáles son las frecuencias de consulta en el curso de vida Adultez?",
  "¿Qué ruta se activa ante sospecha de violencia intrafamiliar?",
  "¿Cuáles son las intervenciones clave en Vejez según la Resolución 3280?",
];

const Copiloto: React.FC = () => {
  const { toast } = useToast();

  const copiarPregunta = async (texto: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      toast({
        title: "Pregunta copiada",
        description: "Pégala en el chat para consultarla",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo copiar la pregunta",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="grid lg:grid-cols-[320px_1fr] gap-8 md:gap-12">
        {/* Panel de Ideas - Arriba en móvil, izquierda en desktop */}
        <aside className="order-1 lg:order-1 space-y-6 relative z-10">
          <CardElevated className="rounded-3xl border-2 border-white/20 animate-fade-in">
            <CardElevatedHeader>
              <div className="flex items-start gap-2">
                <MessageSquare className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <CardElevatedTitle className="font-serif text-xl">Ideas para preguntar</CardElevatedTitle>
                  <CardElevatedDescription className="text-sm mt-1">
                    Copia y pega en el chat
                  </CardElevatedDescription>
                </div>
              </div>
            </CardElevatedHeader>
            <CardElevatedContent className="space-y-2">
              {preguntasEjemplo.map((pregunta, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => copiarPregunta(pregunta)}
                  className="w-full justify-start text-left h-auto py-3 px-4 rounded-xl hover:bg-primary/5 transition-colors whitespace-normal break-words"
                >
                  <Copy className="w-4 h-4 mr-2 shrink-0" />
                  <span className="text-xs leading-relaxed break-words">{pregunta}</span>
                </Button>
              ))}
            </CardElevatedContent>
          </CardElevated>

          {/* Alert informativa */}
          <Alert className="rounded-2xl border-2 border-white/20 bg-white/95 backdrop-blur-sm animate-fade-in delay-100">
            <Info className="h-4 w-4" />
            <AlertTitle>Basado en Resolución 3280</AlertTitle>
            <AlertDescription className="text-sm">
              Las respuestas se fundamentan en los recursos oficiales. Para más contexto, revisa{" "}
              <a href="/recursos" className="font-medium underline underline-offset-4 hover:text-primary">
                /recursos
              </a>
              .
            </AlertDescription>
          </Alert>
        </aside>

        {/* Card del Chat - Abajo en móvil, derecha en desktop */}
        <CardElevated className="order-2 lg:order-2 rounded-3xl border-2 border-white/20 overflow-hidden relative z-0 animate-fade-in delay-200">
          <CardElevatedHeader className="border-b border-gray-100">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <CardElevatedTitle className="font-serif text-3xl">Copiloto RIAS 3280</CardElevatedTitle>
                <CardElevatedDescription className="mt-2 text-base leading-relaxed">
                  Asistente educativo basado en recursos y normativa 3280. Pregunta sobre rutas de atención, cursos de vida y más.
                </CardElevatedDescription>
              </div>
              <Badge variant="secondary" className="shrink-0">
                Beta educativa
              </Badge>
            </div>
          </CardElevatedHeader>
          <CardElevatedContent className="p-0">
            <div className="w-full overflow-hidden" style={{ minHeight: "700px", height: "80vh" }}>
              <iframe
                src="https://udify.app/chatbot/slFuGDocw8uM3w5s"
                title="Copiloto RIAS 3280 (Dify)"
                className="w-full h-full border-0"
                style={{ minHeight: "700px" }}
                allow="microphone"
                aria-label="Chat Dify embebido"
              />
            </div>
          </CardElevatedContent>
        </CardElevated>
      </div>
    </main>
  );
};

export default Copiloto;
