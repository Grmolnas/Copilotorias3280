import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardElevated, CardElevatedContent } from "@/components/ui/card-elevated";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Brain, BookOpen, CheckCircle, Search, Sparkles, Shield, Zap } from "lucide-react";
const Inicio = () => {
  return <div className="bg-transparent animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-tight">
              Copiloto RIAS 3280
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Asistente educativo para talento humano en salud basado en la Resolución 3280/2018
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/copiloto">
                <Button variant="premium" size="lg" className="w-full sm:w-auto">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Abrir Copiloto
                </Button>
              </Link>
              <Link to="/recursos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 shadow-soft hover:shadow-medium transition-all">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Ver Recursos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <CardElevated className="animate-fade-in-up delay-100">
            <Badge className="inline-block mb-4 bg-primary/10 text-primary border-0 hover:bg-primary/20">
              PARA PROFESIONALES
            </Badge>
            
            <div className="mb-4">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl mb-3 text-gray-900">
              Copiloto RAG
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Responde consultas sobre intervenciones de la RIAS, extrayendo información exclusivamente de fichas técnicas validadas.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 aspect-video flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-primary/40" />
            </div>
          </CardElevated>

          {/* Feature 2 */}
          <CardElevated className="animate-fade-in-up delay-200">
            <Badge className="inline-block mb-4 bg-primary/10 text-primary border-0 hover:bg-primary/20">
              CONFIABLE
            </Badge>
            
            <div className="mb-4">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl mb-3 text-gray-900">
              Información Validada
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Utiliza RAG (Retrieval Augmented Generation) sobre un corpus cerrado de PDFs validados, sin acceso a internet ni otras fuentes.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">25 fichas técnicas validadas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Actualización constante</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Respuestas con citas directas</span>
              </div>
            </div>
          </CardElevated>

          {/* Feature 3 */}
          <CardElevated className="animate-fade-in-up delay-300">
            <Badge className="inline-block mb-4 bg-primary/10 text-primary border-0 hover:bg-primary/20">
              ACCESO RÁPIDO
            </Badge>
            
            <div className="mb-4">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl mb-3 text-gray-900">
              Para Todo el Equipo
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Diseñado para médicos, enfermeras, auxiliares y promotores que necesitan consultar lineamientos de la Resolución 3280/2018.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 aspect-video flex items-center justify-center">
              <Users className="w-16 h-16 text-primary/40" />
            </div>
          </CardElevated>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 md:py-32 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              Cómo usarlo
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Tres pasos simples para acceder a información validada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Step 1 */}
            <CardElevated>
              <CardElevatedContent className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-3xl bg-primary text-white flex items-center justify-center text-4xl font-serif font-medium shadow-card-float">
                    1
                  </div>
                  
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-gray-900">Pregunta</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Formula tu consulta sobre una intervención específica o procedimiento de la RIAS
                  </p>
                </div>
                <MessageSquare className="w-16 h-16 text-primary/20" />
              </CardElevatedContent>
            </CardElevated>

            {/* Step 2 */}
            <CardElevated>
              <CardElevatedContent className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-3xl bg-primary text-white flex items-center justify-center text-4xl font-serif font-medium shadow-card-float">
                    2
                  </div>
                  
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-gray-900">Respuesta con citas</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recibe información validada con referencias exactas a las fichas técnicas
                  </p>
                </div>
                <BookOpen className="w-16 h-16 text-primary/20" />
              </CardElevatedContent>
            </CardElevated>

            {/* Step 3 */}
            <CardElevated>
              <CardElevatedContent className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-3xl bg-primary text-white flex items-center justify-center text-4xl font-serif font-medium shadow-card-float">
                    3
                  </div>
                  
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-gray-900">Verifica</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Contrasta con las fichas originales disponibles en la Biblioteca
                  </p>
                </div>
                <CheckCircle className="w-16 h-16 text-primary/20" />
              </CardElevatedContent>
            </CardElevated>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <CardElevated className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <p className="font-serif text-5xl md:text-6xl font-medium text-primary mb-3">25</p>
            <p className="text-gray-600 text-lg">Fichas técnicas validadas</p>
          </CardElevated>
          
          <CardElevated className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <p className="font-serif text-3xl md:text-4xl font-medium text-primary mb-3">26/10/2025</p>
            <p className="text-gray-600 text-lg">Última actualización del corpus</p>
          </CardElevated>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6">
            Comienza a consultar ahora
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            Accede a información validada y confiable para tu práctica profesional
          </p>
          <Link to="/copiloto">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all">
              <MessageSquare className="mr-2 h-5 w-5" />
              Abrir Copiloto
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Inicio;