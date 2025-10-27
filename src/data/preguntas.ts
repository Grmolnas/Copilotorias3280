import bancoPreguntasData from './bancos-preguntas.json';

// Interfaz para fuente detallada de cada pregunta
export interface FuentePregunta {
  seccion: string;
  pagina: string;
}

// Interfaz para fuente global del tema
export interface FuenteGlobal {
  doc_id: string;
  doc_titulo: string;
  doc_fecha: string;
}

// Interfaz principal de pregunta (adaptada al formato JSON)
export interface Pregunta {
  id: string;
  enunciado: string;
  opciones: string[];
  indice_correcto: number;
  explicacion_correcta: string;
  dificultad: "facil" | "media" | "dificil";
  tags: string[];
  fuente: FuentePregunta;
}

// Interfaz para banco de preguntas por tema
export interface BancoPreguntasTema {
  tema: string;
  topic_id: string;
  version: string;
  idioma: string;
  fuente_global: FuenteGlobal;
  preguntas: Pregunta[];
}

// Estructura consolidada de todos los bancos
export interface BancoPreguntasCompleto {
  temas: BancoPreguntasTema[];
}

// Importar datos JSON con type assertion
export const bancosPreguntas: BancoPreguntasCompleto = bancoPreguntasData as BancoPreguntasCompleto;

// Helper: Obtener preguntas por tema específico
export const getPreguntasPorTema = (topicId: string): Pregunta[] => {
  const tema = bancosPreguntas.temas.find(t => t.topic_id === topicId);
  return tema ? tema.preguntas : [];
};

// Helper: Obtener todas las preguntas de todos los temas
export const getTodasLasPreguntas = (): Pregunta[] => {
  return bancosPreguntas.temas.flatMap(tema => tema.preguntas);
};

// Helper: Obtener lista de temas disponibles
export const getTemasDisponibles = (): Array<{id: string, nombre: string}> => {
  return bancosPreguntas.temas.map(t => ({
    id: t.topic_id,
    nombre: t.tema
  }));
};

// Función de filtrado simplificada (solo por tema)
export const filtrarPreguntas = (
  todasPreguntas: Pregunta[],
  temaId?: string
): Pregunta[] => {
  if (!temaId || temaId === "todas") {
    return todasPreguntas;
  }
  return getPreguntasPorTema(temaId);
};

// Función de mezcla aleatoria usando algoritmo Fisher-Yates
export const mezclarPreguntas = (preguntas: Pregunta[]): Pregunta[] => {
  const preguntasCopia = [...preguntas];
  for (let i = preguntasCopia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [preguntasCopia[i], preguntasCopia[j]] = [preguntasCopia[j], preguntasCopia[i]];
  }
  return preguntasCopia;
};
