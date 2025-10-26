import './styles.css';

const GpcCancerMama = () => {
  const fechaAct = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: '2-digit' });

  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          <article id="gpc-cancer-mama">
            {/* Encabezado principal */}
            <header className="recurso-hero">
              <div>
                <div className="recurso-chips">
                  <span className="recurso-chip">🩺 Guía de práctica clínica resumida</span>
                </div>
                <h1>Detección temprana de cáncer de mama (RPMS)</h1>
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
                    <p>Detectar lesiones de cáncer de mama en estadios tempranos mediante <strong>tamización organizada</strong>, con información, toma de pruebas, entrega de resultados y rutas de manejo oportunas.</p>
                  </div>
                  <div>
                    <h2>🎯 Alcance y población</h2>
                    <p>Dirigida a mujeres <strong>40–69 años</strong> (examen clínico anual) y <strong>50–69 años</strong> (mamografía cada 2 años).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2) Tamización y métodos */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>2️⃣ Tamización y métodos</h2>
                <ul style={{ marginTop: '8px' }}>
                  <li>🩺 <strong>Examen clínico de la mama (VCM)</strong> desde los 40 hasta 69 años, <strong>anual</strong></li>
                  <li>🖼️ <strong>Mamografía bilateral (2 proyecciones)</strong> en mujeres de 50–69 años, <strong>cada 2 años</strong></li>
                  <li>🧾 Registrar, asignar próxima cita y remitir según hallazgos</li>
                </ul>
              </div>
            </section>

            {/* 3) Roles y Competencias */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-white">
                <h2>3️⃣ Roles y competencias</h2>
                <div className="recurso-three" style={{ marginTop: '8px' }}>
                  <div className="recurso-box recurso-white-bg">
                    <h3>👩‍⚕️ Enfermería</h3>
                    <ul className="recurso-list-tight">
                      <li>Realiza examen clínico de mama</li>
                      <li>Consejería y gestión de citas</li>
                      <li>Educación sobre autoexamen</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>👨‍⚕️ Medicina</h3>
                    <ul className="recurso-list-tight">
                      <li>VCM y orden de mamografía</li>
                      <li>Entrega y explica resultados</li>
                      <li>Remite para biopsia cuando aplique</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>🖥️ Radiología</h3>
                    <ul className="recurso-list-tight">
                      <li>Toma/lectura de mamografía</li>
                      <li>Clasificación BI-RADS</li>
                      <li>Informe oportuno</li>
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
                      <td><strong>Examen clínico de mama</strong></td>
                      <td>40–69 años</td>
                      <td><strong>Anual</strong></td>
                      <td>Educar en señales de alarma; registrar y programar próxima valoración.</td>
                    </tr>
                    <tr>
                      <td><strong>Mamografía bilateral</strong></td>
                      <td>50–69 años</td>
                      <td><strong>Bienal</strong> (cada 2 años)</td>
                      <td>Gestionar toma → lectura → informe en ≤15 días calendario.</td>
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
                    <h2>5️⃣ Manejo de resultados (BI-RADS)</h2>
                    <ul style={{ marginTop: '8px' }}>
                      <li><strong>BI-RADS 1–2</strong> → continuar esquema: mamografía cada 2 años + VCM anual</li>
                      <li><strong>BI-RADS 3</strong> → adelantar intervenciones de seguimiento/diagnóstico</li>
                      <li><strong>BI-RADS 4A/4B/4C y 5</strong> → búsqueda activa, cita prioritaria y orden de biopsia</li>
                      <li><strong>Biopsia anormal</strong> → generar alerta y gestionar según ruta específica</li>
                    </ul>
                  </div>
                  <div>
                    <h2>⏱️ Tiempos de oportunidad</h2>
                    <ul style={{ marginTop: '8px' }}>
                      <li><strong>Mamografía</strong>: ≤15 días</li>
                      <li><strong>Biopsia (BI-RADS ≥4)</strong>: ≤30 días</li>
                      <li>Garantizar oportunidad del examen clínico</li>
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
                    <h3>Temas clave</h3>
                    <ul>
                      <li>Autoexamen de mama: promover y enseñar (no reemplaza tamización)</li>
                      <li>Factores de riesgo y protección</li>
                      <li>Importancia de reclamar resultados</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Señales de alarma</h3>
                    <ul>
                      <li>Masa en mama/axila</li>
                      <li>Cambio de color o retracción</li>
                      <li>Secreción/sangrado por pezón</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="recurso-footer">
              <p><strong>Información obtenida de:</strong> <em>Resolución 3280 de 2018</em>, <strong>10. Detección temprana de cáncer de mama</strong>, pp. 172–175.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default GpcCancerMama;
