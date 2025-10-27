import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Database, RefreshCw, User, BookOpen, GraduationCap, Mail } from "lucide-react";

const Acerca = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Acerca del Copiloto RIAS 3280</h1>
          <p className="text-lg text-muted-foreground">
            Un asistente educativo especializado en promoción y mantenimiento de la salud
          </p>
        </div>

        {/* Mission */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Objetivo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              El Copiloto RIAS 3280 es una herramienta educativa diseñada para apoyar al talento humano en salud en la consulta de información sobre las intervenciones de promoción y mantenimiento establecidas en la <strong>Resolución 3280 de 2018</strong> del Ministerio de Salud y Protección Social de Colombia.
            </p>
            <p className="text-muted-foreground">
              Su propósito es facilitar el acceso rápido y confiable a lineamientos técnicos, promoviendo la calidad y estandarización en la atención de las Rutas Integrales de Atención en Salud (RIAS).
            </p>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              Metodología: RAG sobre corpus cerrado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-foreground font-medium">
                ¿Qué es RAG (Retrieval Augmented Generation)?
              </p>
              <p className="text-muted-foreground">
                RAG es una técnica que combina la búsqueda de información específica en documentos con la generación de respuestas por inteligencia artificial. Esto permite que el Copiloto:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Extraiga información directamente de las fichas técnicas validadas</li>
                <li>Cite las fuentes exactas de donde proviene la información</li>
                <li>Genere respuestas coherentes y contextualizadas</li>
                <li>Mantenga fidelidad con los documentos originales</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-accent/20 rounded-lg border border-accent">
              <p className="text-sm text-foreground">
                <strong>Corpus cerrado:</strong> El Copiloto <strong>NO</strong> tiene acceso a internet ni a fuentes externas. Solo consulta las fichas técnicas que han sido validadas e indexadas en su base de conocimiento interna.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recursos */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Recursos y Biblioteca
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              La sección de Recursos proporciona acceso directo a las fichas técnicas validadas y material educativo complementario:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Fichas técnicas en formato PDF organizadas por curso de vida</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Guías de práctica clínica (GPC) sobre cáncer de mama, próstata, colon, cuello uterino, planificación familiar, lactancia materna y salud bucal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Infografías educativas sobre eficacia de métodos anticonceptivos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Material de consulta organizado por: Primera Infancia, Infancia, Adolescencia, Juventud, Adultez y Vejez</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link to="/recursos">
                <Button variant="outline" className="w-full sm:w-auto">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explorar Recursos
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Prueba de Conocimientos */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Prueba de Conocimientos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Evalúa y fortalece tu comprensión sobre las intervenciones de la RIAS 3280 mediante un sistema interactivo de preguntas:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>12 temas disponibles:</strong> Cursos de vida (Primera Infancia, Infancia, Adolescencia, Juventud, Adultez, Vejez) y temas específicos (Planificación Familiar, Lactancia Materna, Salud Bucal, Cáncer de Mama, Cáncer de Próstata, Cáncer de Cuello Uterino)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>250 preguntas en total:</strong> Banco extenso de preguntas validadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>5 preguntas por sesión:</strong> Selección aleatoria para cada evaluación</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Retroalimentación inmediata:</strong> Explicaciones detalladas con referencias a las fichas técnicas</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link to="/prueba-conocimiento">
                <Button variant="outline" className="w-full sm:w-auto">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Iniciar Prueba
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Update Flow */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-primary" />
              Flujo de actualización
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                La información del Copiloto se actualiza siguiendo un proceso riguroso para garantizar la calidad y validez de los contenidos:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Creación de ficha técnica</h4>
                    <p className="text-sm text-muted-foreground">
                      Se elabora el documento siguiendo los lineamientos oficiales de la Resolución 3280/2018
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Validación técnica</h4>
                    <p className="text-sm text-muted-foreground">
                      Revisión por expertos en salud pública para verificar precisión y coherencia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Publicación en PDF</h4>
                    <p className="text-sm text-muted-foreground">
                      El documento validado se publica en formato PDF y se hace disponible en la Biblioteca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Re-indexación del corpus</h4>
                    <p className="text-sm text-muted-foreground">
                      El nuevo documento se procesa y se integra al sistema RAG para que el Copiloto pueda consultarlo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Desarrollador */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-6 h-6 text-primary" />
              Desarrollador
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Esta herramienta educativa fue desarrollada por el <strong className="text-foreground">Dr. Gabriel Molina</strong>, Médico especialista en Medicina Familiar, con el objetivo de facilitar el acceso a información validada sobre las Rutas Integrales de Atención en Salud establecidas en la Resolución 3280/2018.
            </p>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">Responsable del proyecto</p>
                  <p className="text-sm text-muted-foreground mt-1">Dr. Gabriel Molina</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Especialidad</p>
                  <p className="text-sm text-muted-foreground mt-1">Medicina Familiar</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a 
                    href="mailto:familiarmdrss@gmail.com" 
                    className="text-sm text-primary hover:underline"
                  >
                    familiarmdrss@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="bg-accent/20 border-accent">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Importante:</strong> El Copiloto RIAS 3280 es una herramienta de apoyo educativo. Las respuestas que proporciona deben ser verificadas con las fichas técnicas originales y no reemplazan el juicio clínico profesional ni la supervisión de personal calificado.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Acerca;
