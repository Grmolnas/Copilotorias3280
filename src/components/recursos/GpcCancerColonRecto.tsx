import './styles.css';

const GpcCancerColonRecto = () => {
  const fechaAct = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: '2-digit' });

  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          <article id="gpc-ccr">
            {/* Encabezado principal */}
            <header className="recurso-hero">
              <div>
                <div className="recurso-chips">
                  <span className="recurso-chip">🩺 Guía de práctica clínica resumida</span>
                </div>
                <h1>Detección temprana de cáncer de colon y recto (RPMS)</h1>
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
                    <p>Detectar lesiones de <strong>cáncer de colon y recto (CCR)</strong> en estadios tempranos mediante <strong>tamización poblacional organizada</strong>, entrega oportuna de resultados y rutas diagnósticas eficaces.</p>
                  </div>
                  <div>
                    <h2>🎯 Alcance y población</h2>
                    <p>Hombres y mujeres de <strong>50–75 años</strong> residentes en el territorio nacional. Conducta individualizada fuera de este rango en presencia de riesgo o síntomas.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2) Tamización y métodos */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>2️⃣ Tamización y métodos</h2>
                <ul style={{ marginTop: '8px' }}>
                  <li>🧪 <strong>Sangre oculta en materia fecal (FIT)</strong>: realizar <strong>3 muestras en días diferentes</strong>. Frecuencia: <strong>cada 2 años</strong> con resultado negativo</li>
                  <li>🔎 <strong>Colonoscopia</strong>: opción de tamización <strong>cada 10 años</strong> cuando esté disponible; diagnóstica si FIT positivo</li>
                  <li>⚠️ <strong>Sintomáticos</strong> (pérdida peso, sangrado, masa, cambio hábito intestinal) → ruta diagnóstica inmediata</li>
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
                      <li>Valora riesgos/síntomas</li>
                      <li>Ordena FIT o colonoscopia</li>
                      <li>Activa ruta diagnóstica cuando aplique</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>👩‍⚕️ Enfermería</h3>
                    <ul className="recurso-list-tight">
                      <li>Consejería e instrucciones de toma</li>
                      <li>Gestión de citas y seguimiento</li>
                      <li>Búsqueda activa de pendientes</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>🩻 Laboratorio / Endoscopia</h3>
                    <ul className="recurso-list-tight">
                      <li>Procesa FIT e informa ≤15 días</li>
                      <li>Realiza colonoscopia y biopsia</li>
                      <li>Reporte oportuno</li>
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
                      <td><strong>FIT (3 muestras)</strong></td>
                      <td>50–75 años</td>
                      <td><strong>Bienal</strong> (cada 2 años)</td>
                      <td>Entregar kit e instrucciones (3 días distintos). Gestionar entrega de resultados.</td>
                    </tr>
                    <tr>
                      <td><strong>Colonoscopia</strong></td>
                      <td>50–75 años</td>
                      <td><strong>Decenal</strong> (cada 10 años)</td>
                      <td>Como alternativa de tamización cuando disponible. Diagnóstica si FIT positivo.</td>
                    </tr>
                    <tr>
                      <td><strong>Criterios de salida</strong></td>
                      <td>&gt;75 años</td>
                      <td>—</td>
                      <td>Decisión individualizada según riesgo/comorbilidad y expectativa de vida.</td>
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
                      <li><strong>FIT negativo</strong> → continuar esquema bienal</li>
                      <li><strong>FIT positivo</strong> → solicitar colonoscopia; búsqueda activa y cita prioritaria</li>
                      <li><strong>Colonoscopia/biopsia con hallazgos</strong> → generar alerta y gestionar según ruta específica</li>
                    </ul>
                  </div>
                  <div>
                    <h2>⏱️ Tiempos de oportunidad</h2>
                    <ul style={{ marginTop: '8px' }}>
                      <li><strong>Tamización (toma→informe)</strong>: ≤15 días</li>
                      <li><strong>Resultados positivos</strong>: comunicar y gestionar colonoscopia con prioridad</li>
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
                      <li>Factores de riesgo y síntomas de alarma</li>
                      <li>Alimentación saludable: fibra, evitar carnes procesadas</li>
                      <li>Actividad física regular</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Instrucciones</h3>
                    <ul>
                      <li>Importancia de tamización cada 2 años desde los 50</li>
                      <li>Toma de 3 muestras FIT en días diferentes</li>
                      <li>Conservación y entrega adecuada</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="recurso-footer">
              <p><strong>Información obtenida de:</strong> <em>Resolución 3280 de 2018</em>, <strong>12. Detección temprana de cáncer de colon y recto</strong>, pp. 177–180.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default GpcCancerColonRecto;
