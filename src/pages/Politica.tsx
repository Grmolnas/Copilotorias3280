import { CardElevated, CardElevatedContent, CardElevatedHeader, CardElevatedTitle } from "@/components/ui/card-elevated";
import { AlertTriangle, Shield, Database, FileCheck } from "lucide-react";

const Politica = () => {
  return (
    <div className="bg-transparent container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-normal text-gray-900">
            Política de Uso
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Lineamientos y alcances del Copiloto RIAS 3280
          </p>
        </div>

        {/* Important Notice */}
        <CardElevated className="border-red-200 bg-red-50/80 animate-fade-in delay-100">
          <CardElevatedContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900 text-lg mb-2">Alcance educativo</p>
                <p className="text-gray-700 leading-relaxed">
                  El Copiloto RIAS 3280 es una herramienta de <strong>apoyo educativo</strong> diseñada para consulta de información técnica sobre las intervenciones de promoción y mantenimiento de la salud. <strong>NO</strong> es un sistema de diagnóstico, prescripción médica ni sustituto del criterio clínico profesional.
                </p>
              </div>
            </div>
          </CardElevatedContent>
        </CardElevated>

        {/* Scope and Limitations */}
        <CardElevated className="animate-fade-in delay-200">
          <CardElevatedHeader>
            <CardElevatedTitle className="flex items-center gap-2 font-serif text-2xl">
              <Shield className="w-6 h-6 text-primary" />
              Alcance y limitaciones
            </CardElevatedTitle>
          </CardElevatedHeader>
          <CardElevatedContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Usos apropiados:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Consultar lineamientos técnicos de las intervenciones de la RIAS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Verificar periodicidad y criterios de aplicación de procedimientos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Repasar pasos o checklists de intervenciones específicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Identificar las fichas técnicas relevantes para cada caso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Apoyo en la formación y actualización del personal de salud</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Limitaciones importantes:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span><strong>NO</strong> realiza diagnósticos médicos ni prescribe tratamientos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span><strong>NO</strong> reemplaza la evaluación clínica individualizada de pacientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span><strong>NO</strong> tiene acceso a historias clínicas ni datos de pacientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span><strong>NO</strong> consulta fuentes externas ni internet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span><strong>NO</strong> sustituye la supervisión de personal médico calificado</span>
                </li>
              </ul>
            </div>
          </CardElevatedContent>
        </CardElevated>

        {/* Data Privacy */}
        <CardElevated className="animate-fade-in delay-300">
          <CardElevatedHeader>
            <CardElevatedTitle className="flex items-center gap-2 font-serif text-2xl">
              <Database className="w-6 h-6 text-primary" />
              Privacidad y protección de datos
            </CardElevatedTitle>
          </CardElevatedHeader>
          <CardElevatedContent className="space-y-4">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="font-semibold text-gray-900 mb-2">
                ⚠️ NO ingreses datos personales sensibles
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                No utilices información que permita identificar pacientes, como nombres, números de documento, historias clínicas o cualquier dato personal sensible en tus consultas al Copiloto.
              </p>
            </div>

            <div className="space-y-3 text-gray-600">
              <p>
                <strong className="text-gray-900">Formato adecuado de consultas:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>"¿Cuál es el esquema de vacunación para menores de 5 años?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>"¿Qué incluye el control prenatal en el primer trimestre?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>"¿Cuáles son los criterios para valoración del adulto mayor?"</span>
                </li>
              </ul>

              <p className="mt-4">
                <strong className="text-gray-900">Formato inadecuado:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>"Mi paciente Juan Pérez con CC 123456 necesita..."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>"La señora de la cama 3 que tiene diabetes..."</span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              Las consultas al Copiloto pueden ser registradas con fines de mejora del sistema. Por esta razón, es fundamental mantener la confidencialidad y no incluir información que comprometa la privacidad de los pacientes.
            </p>
          </CardElevatedContent>
        </CardElevated>

        {/* Sources */}
        <CardElevated className="animate-fade-in delay-100">
          <CardElevatedHeader>
            <CardElevatedTitle className="flex items-center gap-2 font-serif text-2xl">
              <FileCheck className="w-6 h-6 text-primary" />
              Fuentes de información
            </CardElevatedTitle>
          </CardElevatedHeader>
          <CardElevatedContent className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              El Copiloto RIAS 3280 consulta <strong>exclusivamente</strong> las fichas técnicas validadas que componen su corpus cerrado. Estas fichas están basadas en:
            </p>

            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Resolución 3280 de 2018</strong> del Ministerio de Salud y Protección Social</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Guías de práctica clínica oficiales del Ministerio de Salud</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Lineamientos técnicos de la Política de Atención Integral en Salud (PAIS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Normatividad vigente en Colombia sobre RIAS</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-900 font-semibold mb-2">
                Responsabilidad del usuario
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Es responsabilidad del profesional de salud verificar la información proporcionada consultando las fichas técnicas originales disponibles en la Biblioteca y contrastarla con su criterio clínico, las características individuales de cada caso y la supervisión correspondiente.
              </p>
            </div>
          </CardElevatedContent>
        </CardElevated>

        {/* Updates */}
        <CardElevated className="animate-fade-in delay-200">
          <CardElevatedHeader>
            <CardElevatedTitle className="font-serif text-2xl">Actualizaciones de la política</CardElevatedTitle>
          </CardElevatedHeader>
          <CardElevatedContent>
            <p className="text-gray-600 leading-relaxed">
              Esta política de uso puede actualizarse periódicamente para reflejar cambios en el funcionamiento del Copiloto, nuevas regulaciones o mejoras en el sistema. Se recomienda revisar esta sección regularmente.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <strong className="text-gray-900">Última actualización:</strong> 26 de octubre de 2025
            </p>
          </CardElevatedContent>
        </CardElevated>
      </div>
    </div>
  );
};

export default Politica;
