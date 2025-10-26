import './styles.css';

const GpcSaludBucal = () => {
  const fechaAct = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: '2-digit' });

  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          <article id="gpc-salud-bucal">
            {/* Encabezado principal */}
            <header className="recurso-hero">
              <div>
                <div className="recurso-chips">
                  <span className="recurso-chip">📘 Guía de práctica clínica resumida</span>
                </div>
                <h1>Atención en Salud Bucal (RPMS)</h1>
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
                    <p>Valorar integralmente la salud bucal, identificar riesgos y protectores, brindar educación para el autocuidado e implementar intervenciones de protección específica.</p>
                  </div>
                  <div>
                    <h2>🎯 Alcance y población</h2>
                    <p>Aplicable a <strong>todas las personas</strong> a lo largo del <strong>curso de vida</strong>. Mantener/mejorar funcionalidad para masticación, deglución, habla, socialización y autoestima.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2) Intervenciones clave */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>2️⃣ Intervenciones clave</h2>
                <ul style={{ marginTop: '8px' }}>
                  <li>✅ <strong>Profilaxis y remoción de placa</strong> con evaluación de técnica e índice de O'Leary cuando aplique</li>
                  <li>💉 <strong>Aplicación de flúor (barniz)</strong> en NNA; considerar trimestral en riesgo medio/alto</li>
                  <li>🧱 <strong>Sellantes</strong> en molares temporales y primeros/segundos molares permanentes; control semestral</li>
                  <li>🦷 <strong>Detartraje supragingival</strong> solo con indicación clínica (cálculo/manchas)</li>
                  <li>🧠 <strong>Valoración integral</strong>: anamnesis, examen intra/extraoral, funcionalidad</li>
                  <li>🍎 <strong>Educación</strong> en higiene, dieta y hábitos; plan de cuidado y seguimiento</li>
                </ul>
              </div>
            </section>

            {/* 3) Roles y Competencias */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-white">
                <h2>3️⃣ Roles y competencias</h2>
                <div className="recurso-three" style={{ marginTop: '8px' }}>
                  <div className="recurso-box recurso-white-bg">
                    <h3>🦷 Odontología</h3>
                    <ul className="recurso-list-tight">
                      <li>Valoración bucal completa</li>
                      <li>Indica/realiza profilaxis, flúor, sellantes</li>
                      <li>Define plan de cuidado y seguimiento</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>👩‍⚕️ Auxiliar/Higienista</h3>
                    <ul className="recurso-list-tight">
                      <li>Apoya profilaxis y educación</li>
                      <li>Uso de reveladores</li>
                      <li>Refuerzo de autocuidado</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>👨‍⚕️ Medicina/Enfermería</h3>
                    <ul className="recurso-list-tight">
                      <li>Articulación con valoración integral</li>
                      <li>Identifica riesgos sistémicos</li>
                      <li>Refuerza educación</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 4) Periodicidad y actividades */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>4️⃣ Periodicidad y actividades</h2>
                <table className="recurso-table" style={{ marginTop: '8px' }}>
                  <thead>
                    <tr>
                      <th>Actividad</th>
                      <th>Edad/Población</th>
                      <th>Frecuencia</th>
                      <th>Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Profilaxis / remoción de placa</strong></td>
                      <td>≥ 1 año</td>
                      <td>PI/Infancia/Adolescencia: cada 6 meses · Juventud: anual · Adultez/Vejez: cada 2 años</td>
                      <td>Reveladores, índice O'Leary, instrucción de técnica, crema dental con flúor.</td>
                    </tr>
                    <tr>
                      <td><strong>Flúor (barniz)</strong></td>
                      <td>PI, Infancia, Adolescencia</td>
                      <td>Cada 6 meses</td>
                      <td>En riesgo medio/alto, considerar cada 3 meses.</td>
                    </tr>
                    <tr>
                      <td><strong>Sellantes</strong></td>
                      <td>3–15 años (según erupción)</td>
                      <td>Según erupción</td>
                      <td>Molares temporales; 1.º y 2.º molares permanentes. Control cada 6 meses.</td>
                    </tr>
                    <tr>
                      <td><strong>Detartraje supragingival</strong></td>
                      <td>Según criterio clínico</td>
                      <td>Cuando haya cálculo/manchas</td>
                      <td>Evitar si no hay indicación para prevenir efectos no deseados.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5) Procedimiento */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-white">
                <h2>5️⃣ Procedimiento</h2>
                <ol style={{ marginTop: '8px', paddingLeft: '24px', fontSize: '13px' }}>
                  <li>Anamnesis (antecedentes bucales/sistémicos; hábitos; consumo; percepción)</li>
                  <li>Examen intra y extraoral; retirar prótesis; evaluar funcionalidad</li>
                  <li>Cuantificar placa (reveladores/índice de O'Leary) y riesgo</li>
                  <li>Ejecutar/intermediar intervenciones de protección específica</li>
                  <li>Educar (técnica de higiene, dieta, hábitos) y concertar plan de cuidado</li>
                  <li>Registrar, programar controles y seguimiento</li>
                </ol>
              </div>
            </section>

            {/* 6) Derivación */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>6️⃣ Derivación (criterios y destino)</h2>
                <ul style={{ marginTop: '8px', fontSize: '13px' }}>
                  <li><strong>Odontología resolutiva</strong>: caries cavitadas, periodontitis, dolor, abscesos, traumatismos</li>
                  <li><strong>Urgencias</strong>: dolor intenso, hemorragia, celulitis, compromiso sistémico</li>
                  <li><strong>Ortodoncia</strong>: maloclusiones con impacto funcional</li>
                  <li><strong>Rehabilitación</strong>: necesidad de prótesis o ajuste</li>
                  <li><strong>Social/PIC</strong>: necesidades educativas o barreras de acceso</li>
                </ul>
              </div>
            </section>

            {/* 7) Consejería y educación */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-white">
                <h2>7️⃣ Consejería y educación</h2>
                <div className="recurso-two" style={{ marginTop: '8px' }}>
                  <div>
                    <ul style={{ fontSize: '13px' }}>
                      <li>Derechos en salud y acceso oportuno</li>
                      <li>Técnica y frecuencia de higiene; supervisión en NNA</li>
                      <li>Reducir azúcares libres/bebidas azucaradas</li>
                    </ul>
                  </div>
                  <div>
                    <ul style={{ fontSize: '13px' }}>
                      <li>Evitar tabaco y alcohol</li>
                      <li>Cuidado de prótesis y dispositivos</li>
                      <li>Involucrar familia/cuidadores en plan de cuidado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="recurso-footer">
              <p><strong>Información obtenida de:</strong> <em>Resolución 3280 de 2018</em>, <strong>7. Atenciones en Salud Bucal</strong>, pp. 158–164.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default GpcSaludBucal;
