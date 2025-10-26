import './styles.css';

const GpcCancerProstata = () => {
  const fechaAct = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: '2-digit' });

  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          <article id="gpc-prostata">
            {/* Encabezado principal */}
            <header className="recurso-hero">
              <div>
                <div className="recurso-chips">
                  <span className="recurso-chip">🩺 Guía de práctica clínica resumida</span>
                </div>
                <h1>Detección temprana de cáncer de próstata (RPMS)</h1>
                <p style={{ fontSize: '11.5px', marginTop: '6px', opacity: 0.9 }}>
                  Ámbito: Colombia · Referencia: RPMS · Versión 1.0 · {fechaAct}
                </p>
              </div>
            </header>

            {/* 1) Propósito y Alcance */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-white">
                <div className="recurso-two">
                  <div>
                    <h2>1️⃣ Propósito</h2>
                    <p>Detectar cáncer de próstata en estadios tempranos mediante <strong>tamización de oportunidad</strong> con <strong>PSA cuantitativo</strong> y <strong>tacto rectal</strong>, en el marco de <strong>decisión informada</strong>.</p>
                  </div>
                  <div>
                    <h2>🎯 Alcance y población</h2>
                    <p>Hombres <strong>50–75 años</strong>. Considerar inicio desde los <strong>40 años</strong> cuando existan <strong>factores de riesgo</strong> (antecedente familiar, afrodescendencia).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2) Tamización y métodos */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>2️⃣ Tamización y métodos</h2>
                <ul style={{ marginTop: '8px' }}>
                  <li>🧪 <strong>PSA cuantitativo</strong> + 🩺 <strong>tacto rectal</strong> como estrategia combinada</li>
                  <li>📅 <strong>Frecuencia:</strong> cada <strong>5 años</strong> si resultados normales</li>
                  <li>🤝 <strong>Decisión informada</strong>: explicar beneficios y riesgos antes de tamizar</li>
                  <li>🗂️ <strong>Logística PSA–tacto rectal</strong>:
                    <ul style={{ marginTop: '4px', paddingLeft: '20px' }}>
                      <li>Solicitar PSA previamente para tener resultado al momento del tacto</li>
                      <li>Si tacto rectal se realiza antes: tomar PSA ≥10 días después</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            {/* 3) Roles y Competencias */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-white">
                <h2>3️⃣ Roles y competencias</h2>
                <div className="recurso-three" style={{ marginTop: '8px' }}>
                  <div className="recurso-box recurso-white-bg">
                    <h3>👨‍⚕️ Medicina</h3>
                    <ul className="recurso-list-tight">
                      <li>Realiza tacto rectal y valoración</li>
                      <li>Ordena PSA y explica decisión informada</li>
                      <li>Remite a urología según resultados</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>🧪 Laboratorio</h3>
                    <ul className="recurso-list-tight">
                      <li>Toma y procesamiento de PSA</li>
                      <li>Control de calidad</li>
                      <li>Informe oportuno</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>👩‍⚕️ Enfermería</h3>
                    <ul className="recurso-list-tight">
                      <li>Consejería previa y posterior</li>
                      <li>Gestión de citas</li>
                      <li>Seguimiento de resultados</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 4) Esquemas y actividades */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>4️⃣ Esquemas y actividades</h2>
                <table className="recurso-table" style={{ marginTop: '8px' }}>
                  <thead>
                    <tr>
                      <th>Método</th>
                      <th>Edad/Población</th>
                      <th>Frecuencia</th>
                      <th>Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>PSA + tacto rectal</strong></td>
                      <td>50–75 años</td>
                      <td><strong>Cada 5 años</strong></td>
                      <td>Realizar bajo decisión informada. Solicitar PSA antes de la consulta.</td>
                    </tr>
                    <tr>
                      <td><strong>PSA + tacto rectal</strong></td>
                      <td>≥40 años con riesgo</td>
                      <td><strong>Cada 5 años</strong></td>
                      <td>Tamizaje de oportunidad en presencia de factores de riesgo.</td>
                    </tr>
                    <tr>
                      <td><strong>Criterios de salida</strong></td>
                      <td>&gt;75 años</td>
                      <td>—</td>
                      <td>Decisión individualizada según comorbilidades y expectativa de vida.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5) Manejo de resultados */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-white">
                <div className="recurso-two">
                  <div>
                    <h2>5️⃣ Manejo de resultados</h2>
                    <ul style={{ marginTop: '8px' }}>
                      <li><strong>Tacto rectal anormal</strong> → remitir a urología (prioritario)</li>
                      <li><strong>PSA anormal + tacto normal</strong> → repetir PSA; si persiste elevado, urología</li>
                      <li><strong>PSA anormal + tacto anormal</strong> → urología para estudios diagnósticos</li>
                      <li><strong>Biopsia anormal</strong> → generar alerta y gestionar según ruta específica</li>
                    </ul>
                  </div>
                  <div>
                    <h2>⏱️ Tiempos de oportunidad</h2>
                    <ul style={{ marginTop: '8px' }}>
                      <li><strong>PSA (toma → informe)</strong>: ≤15 días</li>
                      <li><strong>Consulta urología</strong>: ≤4 semanas</li>
                      <li>Si tacto primero: tomar PSA ≥10 días después</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 6) Consejería y Educación */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>6️⃣ Consejería y educación</h2>
                <div className="recurso-two" style={{ marginTop: '8px' }}>
                  <div>
                    <ul>
                      <li>Explicar riesgos/beneficios de la tamización</li>
                      <li>PSA elevado no siempre significa cáncer</li>
                      <li>Factores de riesgo: edad, antecedente familiar, afrodescendencia</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Importancia de reclamar/entender resultado</li>
                      <li>Preparación y consideraciones del PSA y tacto rectal</li>
                      <li>Asistencia oportuna a urología cuando se indique</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="recurso-footer">
              <p><strong>Información obtenida de:</strong> <em>Resolución 3280 de 2018</em>, <strong>11. Detección temprana de cáncer de próstata</strong>, pp. 175–177.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default GpcCancerProstata;
