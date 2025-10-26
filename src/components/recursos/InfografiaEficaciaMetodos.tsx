import { useState } from "react";
import "./styles.css";

interface MetodoAnticonceptivo {
  nombre: string;
  abreviatura: string;
  usoHabitual: number;
  usoPerfecto: number | string;
  categoria: "muy-alta" | "alta" | "moderada" | "baja";
}

const InfografiaEficaciaMetodos = () => {
  const [activeTab, setActiveTab] = useState<"cards" | "table">("cards");

  const metodos: MetodoAnticonceptivo[] = [
    // MUY ALTA EFICACIA (≤1% embarazo)
    { nombre: "Implante progestágeno", abreviatura: "IM", usoHabitual: 0.05, usoPerfecto: 0.05, categoria: "muy-alta" },
    { nombre: "SIU Levonorgestrel", abreviatura: "SIU", usoHabitual: 0.1, usoPerfecto: 0.1, categoria: "muy-alta" },
    { nombre: "Esterilización masculina", abreviatura: "VASE", usoHabitual: 0.15, usoPerfecto: 0.10, categoria: "muy-alta" },
    { nombre: "DIU Cobre", abreviatura: "DIU", usoHabitual: 0.8, usoPerfecto: 0.6, categoria: "muy-alta" },
    { nombre: "Esterilización femenina", abreviatura: "LIG", usoHabitual: 0.5, usoPerfecto: 0.5, categoria: "muy-alta" },
    
    // ALTA EFICACIA (1-9% embarazo)
    { nombre: "Progestágeno inyectable (DMPA)", abreviatura: "DMPA", usoHabitual: 3, usoPerfecto: 0.3, categoria: "alta" },
    { nombre: "Inyectable combinado", abreviatura: "IMC", usoHabitual: 3, usoPerfecto: 0.05, categoria: "alta" },
    { nombre: "ACO combinados", abreviatura: "ACO", usoHabitual: 8, usoPerfecto: 0.3, categoria: "alta" },
    { nombre: "Anillo vaginal", abreviatura: "AN", usoHabitual: 8, usoPerfecto: 0.3, categoria: "alta" },
    { nombre: "Parche transdérmico", abreviatura: "PT", usoHabitual: 8, usoPerfecto: 0.3, categoria: "alta" },
    
    // EFICACIA MODERADA (10-19% embarazo)
    { nombre: "Condón masculino", abreviatura: "CM", usoHabitual: 15, usoPerfecto: 2, categoria: "moderada" },
    { nombre: "Diafragma + espermicida", abreviatura: "DF", usoHabitual: 16, usoPerfecto: 6, categoria: "moderada" },
    
    // EFICACIA BAJA (≥20% embarazo)
    { nombre: "Condón femenino", abreviatura: "CF", usoHabitual: 21, usoPerfecto: 5, categoria: "baja" },
    { nombre: "Abstinencia periódica", abreviatura: "AP", usoHabitual: 24, usoPerfecto: "1-9", categoria: "baja" },
    { nombre: "Coito interrumpido", abreviatura: "CI", usoHabitual: 27, usoPerfecto: 4, categoria: "baja" },
    { nombre: "Sin método", abreviatura: "SM", usoHabitual: 85, usoPerfecto: 85, categoria: "baja" },
  ];

  const getTituloCategoria = (categoria: string) => {
    switch (categoria) {
      case "muy-alta":
        return "🟢 Muy alta eficacia (≤1% embarazo)";
      case "alta":
        return "🟡 Alta eficacia (1-9% embarazo)";
      case "moderada":
        return "🟠 Eficacia moderada (10-19% embarazo)";
      case "baja":
        return "🔴 Eficacia baja (≥20% embarazo)";
      default:
        return "";
    }
  };

  const getNombreCategoria = (categoria: string) => {
    switch (categoria) {
      case "muy-alta":
        return "Muy alta";
      case "alta":
        return "Alta";
      case "moderada":
        return "Moderada";
      case "baja":
        return "Baja";
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
              <h1>Eficacia de métodos anticonceptivos — resumen visual</h1>
              <div className="recurso-chips">
                <span className="recurso-chip">📊 Infografía</span>
                <span className="recurso-chip">Salud reproductiva</span>
                <span className="recurso-chip">Todos los cursos de vida</span>
              </div>
              <p style={{ marginTop: "8px", fontSize: "14px", lineHeight: "1.5", marginBottom: "0" }}>
                Porcentaje de mujeres con embarazo <strong>no deseado</strong> durante el <strong>primer año</strong> de uso. 
                <span style={{ color: "var(--recurso-muted)" }}> Menor % = mayor eficacia. Se muestran uso habitual y uso perfecto.</span>
              </p>
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
              {(["muy-alta", "alta", "moderada", "baja"] as const).map(categoria => (
                <div key={categoria} style={{ marginBottom: "20px" }}>
                  <h2>{getTituloCategoria(categoria)}</h2>
                  <div className="recurso-three" style={{ marginTop: "12px" }}>
                    {metodos
                      .filter(m => m.categoria === categoria)
                      .map(metodo => (
                        <div key={metodo.nombre} className="recurso-card recurso-white">
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                            <div style={{
                              width: "38px", height: "38px", borderRadius: "50%",
                              background: "var(--recurso-blue-dark)", color: "#fff",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontWeight: "800", fontSize: "11px", flexShrink: "0"
                            }}>
                              {metodo.abreviatura}
                            </div>
                            <h3 style={{ margin: 0, fontSize: "14px", fontWeight: "700" }}>{metodo.nombre}</h3>
                          </div>

                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                            <span style={{ fontSize: "12px", color: "var(--recurso-muted)" }}>Uso habitual:</span>
                            <strong style={{ fontSize: "16px", color: "var(--recurso-blue-dark)" }}>
                              {metodo.usoHabitual}%
                            </strong>
                          </div>
                          
                          {metodo.nombre !== "Sin método" && (
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                              <span style={{ fontSize: "12px", color: "var(--recurso-muted)" }}>Uso perfecto:</span>
                              <strong style={{ fontSize: "16px", color: "var(--recurso-blue-dark)" }}>
                                {metodo.usoPerfecto}%
                              </strong>
                            </div>
                          )}

                          <div style={{
                            height: "8px", background: "var(--recurso-blue-light)",
                            borderRadius: "999px", overflow: "hidden", marginTop: "10px"
                          }}>
                            <div style={{
                              width: `${Math.max(4, (metodo.usoHabitual / 85) * 100)}%`,
                              height: "100%", background: "var(--recurso-blue-mid)",
                              transition: "width 0.3s ease"
                            }} />
                          </div>
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
                    <th>Uso habitual (% embarazo)</th>
                    <th>Uso perfecto (% embarazo)</th>
                    <th>Nivel de eficacia</th>
                  </tr>
                </thead>
                <tbody>
                  {[...metodos]
                    .sort((a, b) => a.usoHabitual - b.usoHabitual)
                    .map(metodo => (
                      <tr key={metodo.nombre}>
                        <td>
                          <strong>{metodo.nombre}</strong>
                          <span style={{ marginLeft: "8px", fontSize: "11px", color: "var(--recurso-muted)" }}>
                            ({metodo.abreviatura})
                          </span>
                        </td>
                        <td>{metodo.usoHabitual}%</td>
                        <td>{metodo.nombre === "Sin método" ? "—" : `${metodo.usoPerfecto}%`}</td>
                        <td>{getNombreCategoria(metodo.categoria)}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          )}

          {/* Sección MEC - Criterios OMS */}
          <div style={{ marginTop: "24px", padding: "16px", background: "var(--recurso-blue-light)", borderRadius: "12px" }}>
            <h3 style={{ margin: "0 0 12px 0", color: "var(--recurso-blue-dark)" }}>
              Seguridad de los métodos (OMS – Criterios de Elegibilidad, MEC)
            </h3>
            <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
              <div style={{ padding: "10px", background: "#fff", borderRadius: "8px" }}>
                <h4 style={{ margin: "0 0 4px 0", fontSize: "14px", color: "var(--recurso-blue-dark)" }}>
                  Cat. 1
                </h4>
                <p style={{ margin: 0, fontSize: "12px" }}>Sin restricción para usar el método.</p>
              </div>
              <div style={{ padding: "10px", background: "#fff", borderRadius: "8px" }}>
                <h4 style={{ margin: "0 0 4px 0", fontSize: "14px", color: "var(--recurso-blue-dark)" }}>
                  Cat. 2
                </h4>
                <p style={{ margin: 0, fontSize: "12px" }}>Ventajas superan riesgos teóricos o probados.</p>
              </div>
              <div style={{ padding: "10px", background: "#fff", borderRadius: "8px" }}>
                <h4 style={{ margin: "0 0 4px 0", fontSize: "14px", color: "var(--recurso-blue-dark)" }}>
                  Cat. 3
                </h4>
                <p style={{ margin: 0, fontSize: "12px" }}>Riesgos suelen superar ventajas; considerar alternativas.</p>
              </div>
              <div style={{ padding: "10px", background: "#fff", borderRadius: "8px" }}>
                <h4 style={{ margin: "0 0 4px 0", fontSize: "14px", color: "var(--recurso-blue-dark)" }}>
                  Cat. 4
                </h4>
                <p style={{ margin: 0, fontSize: "12px" }}>Riesgo de salud inaceptable; <strong>no usar</strong> el método.</p>
              </div>
            </div>
          </div>

          {/* Nota explicativa */}
          <div style={{ marginTop: "16px", padding: "12px", background: "var(--recurso-blue-light)", borderRadius: "8px" }}>
            <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.6" }}>
              <strong>Nota:</strong> Valores provenientes del cuadro oficial de la <em>Resolución 3280 de 2018</em> 
              (Punto 13 – Planificación familiar y anticoncepción, pp. 180–195). 
              "Uso habitual" refleja uso típico en la práctica real; "Uso perfecto" supone uso correcto y consistente.
            </p>
          </div>

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
