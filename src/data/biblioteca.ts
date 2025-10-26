export interface FichaTecnica {
  id: number;
  titulo: string;
  tipo: "Infografía" | "Ficha" | "Guía";
  cursoDeVida: string;
  intervencion: string;
  tema: string;
  componentName?: string; // Nombre del componente React a renderizar
  htmlUrl?: string;       // URL para visualización web (opcional, deprecated)
  pdfUrl?: string;        // Ruta absoluta desde /public (ej: "/recursos/infografia-ccu.pdf")
  fuente?: string;
  version?: string;
}

export const fichasTecnicas: FichaTecnica[] = [
  {
    id: 1,
    titulo: "Guía resumida — Infancia",
    tipo: "Guía",
    cursoDeVida: "Infancia",
    intervencion: "Valoración integral",
    tema: "Crecimiento y Desarrollo",
    componentName: "GuiaInfancia",
    pdfUrl: "#",
    fuente: "Resolución 3280 de 2018 - RPMS",
    version: "1.1",
  },
  {
    id: 5,
    titulo: "Guía resumida — Adolescencia",
    tipo: "Guía",
    cursoDeVida: "Adolescencia",
    intervencion: "Valoración integral",
    tema: "Salud del Adolescente",
    componentName: "GuiaAdolescencia",
    pdfUrl: "#",
    fuente: "Resolución 3280 de 2018 - RPMS",
    version: "2.0",
  },
  {
    id: 9,
    titulo: "Guía resumida — Primera Infancia",
    tipo: "Guía",
    cursoDeVida: "Primera Infancia",
    intervencion: "Valoración integral",
    tema: "Crecimiento y Desarrollo",
    componentName: "GuiaPrimeraInfancia",
    pdfUrl: "/recursos/r3280_rpms_primera-infancia_guia_v20251025.pdf",
    fuente: "Resolución 3280 de 2018 - RPMS",
    version: "1.2",
  },
  {
    id: 10,
    titulo: "Guía resumida — Juventud",
    tipo: "Guía",
    cursoDeVida: "Juventud",
    intervencion: "Valoración integral",
    tema: "Salud integral",
    componentName: "GuiaJuventud",
    pdfUrl: "#",
    fuente: "Resolución 3280 de 2018 - RPMS",
    version: "1.3",
  },
  {
    id: 11,
    titulo: "Guía resumida — Adultez",
    tipo: "Guía",
    cursoDeVida: "Adultez",
    intervencion: "Valoración integral",
    tema: "Salud integral",
    componentName: "GuiaAdultez",
    pdfUrl: "#",
    fuente: "Resolución 3280 de 2018 - RPMS",
    version: "1.4",
  },
  {
    id: 12,
    titulo: "Guía resumida — Vejez",
    tipo: "Guía",
    cursoDeVida: "Vejez",
    intervencion: "Valoración integral",
    tema: "Envejecimiento activo",
    componentName: "GuiaVejez",
    pdfUrl: "#",
    fuente: "Resolución 3280 de 2018 - RPMS",
    version: "1.0",
  },
];

export const cursosDeVida = [
  "Todos",
  "Primera Infancia",
  "Infancia",
  "Adolescencia",
  "Juventud",
  "Adultez",
  "Vejez",
];

export const intervenciones = [
  "Todas",
  "Valoración integral",
];
