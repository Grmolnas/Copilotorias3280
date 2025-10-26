import { useState } from "react";
import "./styles.css";

interface MetodoAnticonceptivo {
  nombre: string;
  eficacia: string;
  embarazos: string;
  categoria: "alta" | "media" | "baja";
}

const InfografiaEficaciaMetodos = () => {
  const [activeTab, setActiveTab] = useState<"cards" | "table">("cards");

  const metodos: MetodoAnticonceptivo[] = [
    // ALTA EFICACIA (>99%)
    { nombre: "Implante subdérmico", eficacia: ">99%", embarazos: "<1", categoria: "alta" },
    { nombre: "DIU de cobre", eficacia: "99.2-99.4%", embarazos: "0.6-0.8", categoria: "alta" },
    { nombre: "DIU hormonal", eficacia: "99.8%", embarazos: "0.2", categoria: "alta" },
    { nombre: "Esterilización femenina", eficacia: "99.5%", embarazos: "0.5", categoria: "alta" },
    { nombre: "Vasectomía", eficacia: "99.85%", embarazos: "0.15", categoria: "alta" },
    
    // EFICACIA MEDIA (91-99%)
    { nombre: "Inyectable mensual", eficacia: "94%", embarazos: "6", categoria: "media" },
    { nombre: "Inyectable trimestral", eficacia: "94%", embarazos: "6", categoria: "media" },
    { nombre: "Píldora combinada", eficacia: "91%", embarazos: "9", categoria: "media" },
    { nombre: "Parche anticonceptivo", eficacia: "91%", embarazos: "9", categoria: "media" },
    { nombre: "Anillo vaginal", eficacia: "91%", embarazos: "9", categoria: "media" },
    { nombre: "Condón masculino", eficacia: "82%", embarazos: "18", categoria: "media" },
    { nombre: "Condón femenino", eficacia: "79%", embarazos: "21", categoria: "media" },
    
    // BAJA EFICACIA (<80%)
    { nombre: "Diafragma", eficacia: "88%", embarazos: "12", categoria: "baja" },
    { nombre: "Método del ritmo", eficacia: "76%", embarazos: "24", categoria: "baja" },
    { nombre: "Retiro (coito interrumpido)", eficacia: "78%", embarazos: "22", categoria: "baja" },
    { nombre: "Espermicidas", eficacia: "72%", embarazos: "28", categoria: "baja" },
  ];

  const getTituloCategoria = (categoria: string) => {
    switch (categoria) {
      case "alta":
        return "🟢 Alta eficacia (>99%)";
      case "media":
        return "🟡 Eficacia media (80-99%)";
      case "baja":
        return "🔴 Eficacia baja (<80%)";
      default:
        return "";
    }
  };

  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          {/* Hero Section */}
          <div className="recurso-hero">
            <div>
              <h1>Eficacia de métodos anticonceptivos</h1>
              <div className="recurso-chips">
                <span className="recurso-chip">📊 Infografía</span>
                <span className="recurso-chip">Salud reproductiva</span>
                <span className="recurso-chip">Todos los cursos de vida</span>
              </div>
            </div>
            <div className="recurso-meta">
              <b>Fuente:</b> Resolución 3280 de 2018 - RPMS<br />
              <b>Versión:</b> 1.0
            </div>
          </div>

          {/* Tabs Navigation */}
          <div style={{ display: "flex", gap: "12px", marginTop: "16px", marginBottom: "16px" }}>
            <button 
              onClick={() => setActiveTab("cards")}
              style={{
                background: activeTab === "cards" ? "var(--recurso-blue-mid)" : "transparent",
                color: activeTab === "cards" ? "#fff" : "var(--recurso-blue-mid)",
                border: "2px solid var(--recurso-blue-mid)",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                transition: "all 0.2s ease"
              }}
            >
              📊 Tarjetas por eficacia
            </button>
            <button 
              onClick={() => setActiveTab("table")}
              style={{
                background: activeTab === "table" ? "var(--recurso-blue-mid)" : "transparent",
                color: activeTab === "table" ? "#fff" : "var(--recurso-blue-mid)",
                border: "2px solid var(--recurso-blue-mid)",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                transition: "all 0.2s ease"
              }}
            >
              📋 Tabla comparativa
            </button>
          </div>

          {/* Vista de Tarjetas */}
          {activeTab === "cards" && (
            <div>
              {(["alta", "media", "baja"] as const).map(categoria => (
                <div key={categoria} style={{ marginBottom: "20px" }}>
                  <h2>{getTituloCategoria(categoria)}</h2>
                  <div className="recurso-three" style={{ marginTop: "12px" }}>
                    {metodos
                      .filter(m => m.categoria === categoria)
                      .map(metodo => (
                        <div key={metodo.nombre} className="recurso-card recurso-white">
                          <h3 style={{ marginTop: "0", marginBottom: "8px" }}>{metodo.nombre}</h3>
                          <p style={{ fontSize: "12px", marginBottom: "4px" }}>
                            <b>Eficacia:</b> {metodo.eficacia}
                          </p>
                          <p style={{ fontSize: "12px", marginBottom: "0" }}>
                            <b>Embarazos:</b> {metodo.embarazos} por 100 mujeres/año
                          </p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Vista de Tabla */}
          {activeTab === "table" && (
            <div>
              <h2>📋 Comparación de métodos anticonceptivos</h2>
              <table className="recurso-table" style={{ marginTop: "12px" }}>
                <thead>
                  <tr>
                    <th>Método</th>
                    <th>Eficacia</th>
                    <th>Embarazos por 100 mujeres/año</th>
                  </tr>
                </thead>
                <tbody>
                  {metodos.map(metodo => (
                    <tr key={metodo.nombre}>
                      <td>{metodo.nombre}</td>
                      <td>{metodo.eficacia}</td>
                      <td>{metodo.embarazos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Footer */}
          <div className="recurso-footer">
            <p style={{ margin: "0", fontSize: "11px" }}>
              <b>Ministerio de Salud y Protección Social - Colombia</b><br />
              Resolución 3280 de 2018 - Ruta de Promoción y Mantenimiento de la Salud
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfografiaEficaciaMetodos;
