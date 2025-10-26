import './styles.css';

const GpcPlanificacionFamiliar = () => {
  const fechaAct = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: '2-digit' });

  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          <article id="gpc-planif">
            {/* Encabezado principal */}
            <header className="recurso-hero">
              <div>
                <div className="recurso-chips">
                  <span className="recurso-chip">🩺 Guía de práctica clínica resumida</span>
                </div>
                <h1>Planificación familiar y anticoncepción (RPMS)</h1>
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
                    <p>Garantizar <strong>elección informada</strong>, <strong>provisión inmediata</strong> y <strong>continuidad</strong> del método anticonceptivo, enmarcado en derechos sexuales y reproductivos.</p>
                  </div>
                  <div>
                    <h2>🎯 Alcance y población</h2>
                    <p>Mujeres, hombres y parejas en edad fértil (incluye adolescentes), por demanda espontánea o remisión. Incluir <strong>pos evento obstétrico</strong>.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2) Componentes clave */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>2️⃣ Componentes clave</h2>
                <ul style={{ marginTop: '8px' }}>
                  <li>🤝 <strong>Consejería</strong> centrada en DSDR, planes de vida y preferencias</li>
                  <li>🩺 <strong>Elegibilidad OMS (MEC)</strong> y decisión informada</li>
                  <li>📦 <strong>Provisión inmediata</strong> del método elegido (sin esperar menstruación si se descarta embarazo)</li>
                  <li>🧪 <strong>Descartar gestación</strong> con criterios clínicos; si duda → prueba rápida</li>
                  <li>🛡️ <strong>Doble protección</strong> (condón) para ITS/VIH y <strong>anticoncepción de emergencia</strong></li>
                  <li>👶 <strong>Posparto/posaborto</strong>: ofertar método antes del alta; favorecer LARC</li>
                  <li>🧒 <strong>Adolescentes</strong>: pueden asistir solos; &lt;14 años con coito → activar ruta de violencia sexual</li>
                </ul>
              </div>
            </section>

            {/* 3) Oferta de métodos */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-white">
                <h2>3️⃣ Oferta de métodos y elección informada</h2>
                <div className="recurso-two" style={{ marginTop: '8px' }}>
                  <div>
                    <h3>🔹 LARC (larga duración)</h3>
                    <ul style={{ fontSize: '13px' }}>
                      <li><strong>Implante subdérmico</strong> – alta eficacia; inicio inmediato</li>
                      <li><strong>DIU de cobre</strong> – duración prolongada; elegible en nulíparas y adolescentes</li>
                    </ul>
                    <h3>🔹 Hormonales</h3>
                    <ul style={{ fontSize: '13px' }}>
                      <li><strong>Orales</strong> combinados (ACO); solo progestina (POP)</li>
                      <li><strong>Inyectables</strong>: mensual, trimestral (medroxiprogesterona)</li>
                      <li><strong>Parche</strong> transdérmico y <strong>anillo</strong> vaginal</li>
                    </ul>
                  </div>
                  <div>
                    <h3>🔹 No hormonales y permanentes</h3>
                    <ul style={{ fontSize: '13px' }}>
                      <li><strong>Condón</strong> masculino/femenino (doble protección)</li>
                      <li><strong>Métodos basados en fertilidad</strong> (MDE, MELA)</li>
                      <li><strong>Esterilización</strong> femenina y <strong>vasectomía</strong></li>
                    </ul>
                    <h3>🔹 Anticoncepción de emergencia</h3>
                    <ul style={{ fontSize: '13px' }}>
                      <li><strong>PAE</strong> (levonorgestrel 1.5mg; ulipristal 30mg) hasta 120h</li>
                      <li><strong>DIU cobre</strong> dentro de 120h – eficacia &gt;99%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 4) Controles y provisión */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>4️⃣ Controles y provisión</h2>
                <table className="recurso-table" style={{ marginTop: '8px', fontSize: '12px' }}>
                  <thead>
                    <tr>
                      <th>Actividad</th>
                      <th>Población</th>
                      <th>Periodicidad</th>
                      <th>Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Consejería + elección</strong></td>
                      <td>Todo usuario</td>
                      <td>En cada ingreso</td>
                      <td>Aplicar MEC OMS; documentar consentimiento.</td>
                    </tr>
                    <tr>
                      <td><strong>Suministro inmediato</strong></td>
                      <td>Elegible (no gestación)</td>
                      <td>El mismo día</td>
                      <td>Si duda de embarazo → prueba rápida.</td>
                    </tr>
                    <tr>
                      <td><strong>Provisión extendida</strong></td>
                      <td>AO e inyectables</td>
                      <td>Cada 3 meses</td>
                      <td>Entregar para 3 ciclos.</td>
                    </tr>
                    <tr>
                      <td><strong>Provisión condones</strong></td>
                      <td>Todo usuario</td>
                      <td>Cada 3 meses</td>
                      <td>15 unidades/mes (entregar para 3 meses).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5) Algoritmo operativo */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-white">
                <h2>5️⃣ Algoritmo operativo</h2>
                <ol style={{ marginTop: '8px', paddingLeft: '24px', fontSize: '13px' }}>
                  <li>Recibir en espacio privado, sin juicios</li>
                  <li>Indagar planes de vida, antecedentes, uso previo de métodos</li>
                  <li>Descartar embarazo (criterios clínicos o prueba rápida)</li>
                  <li>Aplicar MEC OMS y presentar todas las opciones (incluidos LARC y permanentes)</li>
                  <li>Decisión informada y registro; obtener consentimiento cuando aplique</li>
                  <li>Proveer el método hoy (no esperar menstruación)</li>
                  <li>Brindar educación, AE cuando corresponda y doble protección</li>
                  <li>Programar control según método y dispensación extendida</li>
                  <li>&lt;14 años con coito: activar ruta de violencia sexual y notificar</li>
                </ol>
              </div>
            </section>

            {/* 6) Consejería y educación */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>6️⃣ Consejería y educación</h2>
                <div className="recurso-two" style={{ marginTop: '8px' }}>
                  <div>
                    <ul style={{ fontSize: '13px' }}>
                      <li>Derechos SR: autonomía, confidencialidad, acceso oportuno</li>
                      <li>Uso correcto, eficacia, efectos y signos de alarma</li>
                      <li>Enfatizar doble protección (condón) para ITS/VIH</li>
                    </ul>
                  </div>
                  <div>
                    <ul style={{ fontSize: '13px' }}>
                      <li>AE: cuándo y cómo usarla</li>
                      <li>Importancia de reclamar resultados y asistir a control</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="recurso-footer">
              <p><strong>Información obtenida de:</strong> <em>Resolución 3280 de 2018</em>, <strong>13. Atención para la planificación familiar y anticoncepción</strong>, pp. 180–195.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default GpcPlanificacionFamiliar;
