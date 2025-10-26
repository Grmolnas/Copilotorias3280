import './styles.css';

const GpcCancerCuelloUterino = () => {
  const fechaAct = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: '2-digit' });

  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          <article id="gpc-ccu">
            {/* Encabezado principal */}
            <header className="recurso-hero">
              <div>
                <div className="recurso-chips">
                  <span className="recurso-chip">🩺 Guía de práctica clínica resumida</span>
                </div>
                <h1>Detección temprana de cáncer de cuello uterino (RPMS)</h1>
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
                    <p>Disminuir la mortalidad por cáncer de cuello uterino mediante <strong>tamización organizada</strong>, diagnóstico oportuno y manejo adecuado, asegurando continuidad del cuidado y tiempos de oportunidad.</p>
                  </div>
                  <div>
                    <h2>🎯 Alcance y población</h2>
                    <p>Mujeres <strong>25–65 años</strong> (según método); consideración de <strong>VIA/VILI 30–50 años</strong> en zonas rurales dispersas con modalidad <em>ver y tratar</em>.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2) Tamización y métodos */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>2️⃣ Tamización y métodos</h2>
                <ul style={{ marginTop: '8px' }}>
                  <li>🧪 <strong>ADN-VPH (30–65 años)</strong>: toma de VPH con <strong>citología de triage simultánea</strong>. Esquema <strong>1–5–5</strong>.</li>
                  <li>🧫 <strong>Citología cervical (25–29 años)</strong>: esquema <strong>1–3–3</strong>.</li>
                  <li>🔎 <strong>VIA/VILI (30–50 años, rural disperso)</strong>: esquema <strong>1–3–3</strong> con <strong>ver y tratar</strong>.</li>
                  <li>⚕️ <strong>Sospecha clínica</strong>: ruta diagnóstica inmediata sin esperar tamizaje.</li>
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
                      <li>Toma de citología/ADN-VPH según competencia</li>
                      <li>VIA/VILI en personal entrenado</li>
                      <li>Gestión de muestras y registro</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>👨‍⚕️ Medicina</h3>
                    <ul className="recurso-list-tight">
                      <li>Valoración clínica y lectura de triage</li>
                      <li>Remisión a colposcopia y manejo</li>
                      <li>Seguimiento de resultados</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>🧬 Citopatología</h3>
                    <ul className="recurso-list-tight">
                      <li>Procesamiento de muestras con control de calidad</li>
                      <li>Informe oportuno de resultados</li>
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
                      <th>Frecuencia si negativo</th>
                      <th>Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Citología cervical</strong></td>
                      <td>25–29 años</td>
                      <td><strong>1–3–3</strong></td>
                      <td>Primera toma a los 25; si es normal, repetir a 3 años y luego cada 3 años.</td>
                    </tr>
                    <tr>
                      <td><strong>ADN-VPH con citología de triage</strong></td>
                      <td>30–65 años</td>
                      <td><strong>1–5–5</strong></td>
                      <td>Si VPH negativo, repetir cada 5 años. VPH positivo: leer citología de triage.</td>
                    </tr>
                    <tr>
                      <td><strong>VIA/VILI</strong></td>
                      <td>30–50 años (rural)</td>
                      <td><strong>1–3–3</strong></td>
                      <td>Estrategia ver y tratar (crioterapia si elegible).</td>
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
                      <li><strong>VPH negativo</strong> → continuar esquema cada 5 años</li>
                      <li><strong>VPH positivo + citología negativa</strong> → repetir VPH a 18 meses</li>
                      <li><strong>VPH positivo + citología anormal</strong> → colposcopia + biopsia ≤30 días</li>
                      <li><strong>Muestra insatisfactoria</strong> → repetir citología entre 3-4 semanas</li>
                      <li><strong>Sospecha de carcinoma</strong> → biopsia ≤7 días</li>
                    </ul>
                  </div>
                  <div>
                    <h2>⏱️ Tiempos de oportunidad</h2>
                    <ul style={{ marginTop: '8px' }}>
                      <li><strong>Toma → laboratorio</strong>: ≤5 días</li>
                      <li><strong>Toma → informe</strong>: ≤15 días</li>
                      <li><strong>Colposcopia</strong>: ≤30 días</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 6) Gestión y logística */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>6️⃣ Gestión y logística</h2>
                <ul style={{ marginTop: '8px' }}>
                  <li><strong>Calidad de la muestra</strong>: identificación, fijación, transporte; rechazar/repetir si insatisfactoria</li>
                  <li><strong>Centralización</strong> recomendada con control de calidad</li>
                  <li><strong>Zonas dispersas</strong>: jornadas coordinadas con VIA/VILI y crioterapia</li>
                  <li><strong>Registro y trazabilidad</strong>: listados nominales, seguimiento activo</li>
                </ul>
              </div>
            </section>

            {/* Footer */}
            <div className="recurso-footer">
              <p><strong>Información obtenida de:</strong> <em>Resolución 3280 de 2018</em> (Ministerio de Salud y Protección Social de Colombia), <strong>9. Detección temprana de cáncer de cuello uterino</strong>, pp. 167–172.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default GpcCancerCuelloUterino;
