import "@/components/recursos/styles.css";

const GuiaJuventud = () => {
  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          
          {/* Encabezado principal */}
          <section className="recurso-hero">
            <div>
              <h1>📘 Guía resumida — Juventud (RPMS)</h1>
              <div className="recurso-chips">
                <span className="recurso-chip">R3280/2018</span>
                <span className="recurso-chip">Curso de vida: Juventud</span>
                <span className="recurso-chip">Formato: Guía</span>
              </div>
            </div>
            <div className="recurso-meta">
              <div><b>Versión/Fecha:</b> <b>v1.3</b> — 2025-10-25</div>
              <div><b>Código:</b> r3280_rpms_juventud_guia_v20251025</div>
              <div><b>Tiempo de lectura:</b> 4–5 min</div>
            </div>
          </section>

          {/* 1) Propósito y Alcance */}
          <section className="recurso-two" style={{marginTop:"12px"}}>
            <div className="recurso-card">
              <h2>🎯 Propósito</h2>
              <p>Estandarizar la valoración integral, la detección temprana y la protección específica en personas jóvenes, fortaleciendo la autonomía, la toma de decisiones informada y los estilos de vida saludables. <em>(R3280, 3.3.4, págs. 57–61; Directrices RPMS Juventud, págs. 132–140)</em></p>
            </div>
            <div className="recurso-card">
              <h2>🧭 Alcance / Población</h2>
              <p>Jóvenes de <b>18 a 28 años, 11 meses y 29 días</b>. Incluye: salud física, mental y SSR; tamizajes de riesgo cardiovascular/metabólico; salud bucal, auditiva/comunicativa y visual; vacunación; hábitos y riesgos ocupacionales; educación individual, familiar y grupal. <em>(R3280, 3.3.4, págs. 57–61; Directrices RPMS Juventud, págs. 132–140)</em></p>
            </div>
          </section>

          {/* 2) Intervenciones clave */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>✅ Intervenciones clave</h2>
            <ul className="recurso-list-tight">
              <li className="recurso-bullet"><i>🧠</i><span>Tamizaje de salud mental: <b>SRQ</b> (adultos); evaluar ideación/conducta suicida; <b>AUDIT/ASSIST</b> si sospecha de consumo.</span></li>
              <li className="recurso-bullet"><i>🧪</i><span>SSR: prueba de embarazo si sospecha; pruebas rápidas de <b>VIH</b>, <b>sífilis</b> y <b>Hepatitis C</b> según riesgo; oferta de anticoncepción (incl. LARC y métodos definitivos) y preservativos.</span></li>
              <li className="recurso-bullet"><i>❤️</i><span>Riesgo cardiovascular/metabólico: glicemia basal, perfil lipídico, creatinina y uroanálisis <b>cada 5 años</b>.</span></li>
              <li className="recurso-bullet"><i>💉</i><span>Vacunación según esquema vigente (incluye <b>Td</b> en mujeres según antecedente).</span></li>
              <li className="recurso-bullet"><i>🦷</i><span>Salud bucal: profilaxis/remoción de placa 1/año; detartraje según necesidad.</span></li>
              <li className="recurso-bullet"><i>👂</i><span>Salud auditiva: dos preguntas de percepción; visual: agudeza con optotipos si hay quejas o control periódico.</span></li>
              <li className="recurso-bullet"><i>🏢</i><span>Valoración laboral/ocupacional: identificar riesgos y derivar a la Ruta de riesgo laboral si aplica.</span></li>
              <li className="recurso-bullet"><i>👪</i><span>Funcionalidad familiar y redes: <b>APGAR</b>, Familiograma y Ecomapa.</span></li>
            </ul>
          </section>

          {/* 3) Roles y competencias */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-vlight">
            <h2>🩺 Roles y competencias</h2>
            <div className="recurso-three">
              <div className="recurso-box">
                <h3>👨‍⚕️ Medicina / Medicina familiar</h3>
                <ul className="recurso-list-tight">
                  <li>Valoración integral con enfoque biopsicosocial.</li>
                  <li>Diagnóstico, plan de manejo y remisiones resolutivas.</li>
                </ul>
              </div>
              <div className="recurso-box">
                <h3>👩‍⚕️ Enfermería</h3>
                <ul className="recurso-list-tight">
                  <li>Valoración complementaria y procedimientos.</li>
                  <li>Ordenamiento de insumos/medicamentos definidos para la intervención.</li>
                </ul>
              </div>
              <div className="recurso-box">
                <h3>🦷 Odontología / Optometría</h3>
                <ul className="recurso-list-tight">
                  <li>Atención anual; profilaxis/detartraje según riesgo.</li>
                  <li>Tamizaje visual por personal entrenado.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4) Periodicidad y actividades */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>⏰ Periodicidad y actividades</h2>
            <table className="recurso-table">
              <thead>
                <tr>
                  <th>Actividad / Procedimiento</th>
                  <th>Edad / Intervalo</th>
                  <th>Frecuencia / Notas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Medicina / Medicina familiar</td>
                  <td>18–29A</td>
                  <td>Cada 1–3 años (según riesgo)</td>
                </tr>
                <tr>
                  <td>Enfermería</td>
                  <td>18–29A</td>
                  <td>Complementaria a medicina</td>
                </tr>
                <tr>
                  <td>Odontología</td>
                  <td>18–29A</td>
                  <td>Anual</td>
                </tr>
                <tr>
                  <td>Tamizajes CV/metabólico</td>
                  <td>18–29A</td>
                  <td>Paquete cada 5 años</td>
                </tr>
                <tr>
                  <td>Citología / ADN-VPH</td>
                  <td>Mujeres 25–29A</td>
                  <td>Según esquema vigente</td>
                </tr>
                <tr>
                  <td>Educación en salud (individual/grupal)</td>
                  <td>Según valoración</td>
                  <td>Ciclos recomendados (ver contenidos)</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 4b) Protección específica y tamizajes */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>🛡️ Protección específica y tamizajes</h2>
            <table className="recurso-table">
              <thead>
                <tr>
                  <th>Intervención</th>
                  <th>Edad / Criterio</th>
                  <th>Frecuencia / Notas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vacunación</td>
                  <td>Esquema vigente</td>
                  <td>Td en mujeres según antecedente</td>
                </tr>
                <tr>
                  <td>Citología</td>
                  <td>Mujeres 25–29A</td>
                  <td>Según esquema vigente</td>
                </tr>
                <tr>
                  <td>Pruebas rápidas VIH/Sífilis/Hepatitis C</td>
                  <td>Según riesgo</td>
                  <td>Oferta según antecedente</td>
                </tr>
                <tr>
                  <td>Tamizaje de riesgo CV/metabólico</td>
                  <td>18–29A</td>
                  <td>Paquete cada 5 años</td>
                </tr>
                <tr>
                  <td>Salud bucal</td>
                  <td>18–29A</td>
                  <td>Profilaxis anual; detartraje si aplica</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 5) Procedimiento y Derivación */}
          <section style={{marginTop:"12px"}} className="recurso-card">
            <h2>🔄 Procedimiento y Derivación</h2>
            <div className="recurso-two">
              <div className="recurso-box recurso-white-bg">
                <h3>Procedimiento (cómo)</h3>
                <ol style={{margin: "4px 0 8px 18px"}}>
                  <li>Anamnesis: antecedentes, exposición a humo, consumo de SPA, conducta suicida.</li>
                  <li>Dinámica familiar: Familiograma, APGAR; Ecomapa de apoyos.</li>
                  <li>Examen físico: signos vitales y TA por percentiles; agudeza visual/auditiva.</li>
                  <li>Salud mental: aplicar SRQ (adultos) y AUDIT/ASSIST si hay riesgo.</li>
                  <li>SSR: prueba de embarazo si sospecha; consejería en anticoncepción.</li>
                  <li>Valoración laboral/ocupacional: identificar riesgos.</li>
                </ol>
                <p style={{color:"var(--recurso-muted)"}}><em>(R3280, págs. 57–61; Directrices RPMS Juventud, págs. 132–140)</em></p>
              </div>
              <div className="recurso-box recurso-white-bg">
                <h3>Derivación (criterios principales)</h3>
                <table className="recurso-table">
                  <thead>
                    <tr>
                      <th>Criterio</th>
                      <th>Destino</th>
                      <th>Plazo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SRQ positivo o riesgo de trastorno mental / conducta suicida</td>
                      <td>Ruta de salud mental / Psiquiatría</td>
                      <td>Prioritario / Inmediato si riesgo</td>
                    </tr>
                    <tr>
                      <td>Consumo de SPA</td>
                      <td>Ruta integral de SPA / Salud mental</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>Exposición a violencias (incl. sexual)</td>
                      <td>Ruta de violencias / Trabajo social</td>
                      <td>Inmediato</td>
                    </tr>
                    <tr>
                      <td>Hallazgos en tamizaje CV/metabólico</td>
                      <td>Medicina / Nutrición / Cardiología</td>
                      <td>Según protocolo</td>
                    </tr>
                    <tr>
                      <td>Riesgo laboral identificado</td>
                      <td>Ruta de riesgo laboral / ARL</td>
                      <td>Según protocolo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 5b) Instrumentos de obligatorio cumplimiento */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>🧪 Instrumentos de obligatorio cumplimiento</h2>
            <table className="recurso-table">
              <thead>
                <tr>
                  <th>Instrumento</th>
                  <th>Objetivo</th>
                  <th>Edad / Criterio</th>
                  <th>Responsable</th>
                  <th>Acción / Umbral</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SRQ (tamizaje de riesgo en salud mental)</td>
                  <td>Detección de problemas de salud mental</td>
                  <td>≥18A</td>
                  <td>Medicina / Enfermería / Psicología</td>
                  <td>Activar ruta de salud mental si resultado positivo</td>
                </tr>
                <tr>
                  <td>AUDIT / ASSIST</td>
                  <td>Tamizaje de consumo de SPA</td>
                  <td>Si hay sospecha</td>
                  <td>Medicina / Enfermería</td>
                  <td>Remitir a programa de SPA si hallazgos</td>
                </tr>
                <tr>
                  <td>APGAR Familiar</td>
                  <td>Evaluar funcionalidad familiar</td>
                  <td>Cuando aplique o ante sospecha</td>
                  <td>Medicina / Enfermería</td>
                  <td>Orientación familiar y/o derivación según puntaje</td>
                </tr>
                <tr>
                  <td>Familiograma / Ecomapa</td>
                  <td>Caracterizar dinámica y redes de apoyo</td>
                  <td>Según necesidad</td>
                  <td>Equipo de salud</td>
                  <td>Integrar al plan de cuidado y articulación intersectorial</td>
                </tr>
                <tr>
                  <td>Glicemia basal, perfil lipídico, creatinina, uroanálisis</td>
                  <td>Tamizaje de riesgo CV/metabólico</td>
                  <td>≥18A cada 5 años</td>
                  <td>Medicina / Enfermería</td>
                  <td>Manejar según protocolo</td>
                </tr>
              </tbody>
            </table>
            <p style={{color:"var(--recurso-muted)"}}><em>(R3280, págs. 57–61; Directrices RPMS Juventud, págs. 132–140)</em></p>
          </section>

          {/* 6) Consejería y educación */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>💬 Consejería y educación</h2>
            <ul className="recurso-list-tight">
              <li>Salud sexual y reproductiva: métodos anticonceptivos; prevención de ITS/VIH y embarazo no intencional; derechos sexuales y reproductivos.</li>
              <li>Estilos de vida: alimentación balanceada; actividad física y deportes; limitar pantallas; sueño reparador.</li>
              <li>Prevención de violencia y abuso; comunicación asertiva y establecimiento de límites.</li>
              <li>Prevención de accidentes y de exposición/consumo de SPA.</li>
              <li>Salud laboral: riesgos ocupacionales; pausas activas; elementos de protección personal.</li>
            </ul>
          </section>

          {/* 7) Indicadores y errores */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-vlight">
            <h2>📊 Indicadores & ⚠️ Errores frecuentes</h2>
            <div className="recurso-two">
              <div className="recurso-box recurso-white-bg">
                <h3>Indicadores (≤3)</h3>
                <ul className="recurso-list-tight">
                  <li>Cobertura de atenciones programadas (18–29A).</li>
                  <li>Tamizajes completados (SRQ, CV/metabólico, citología si aplica).</li>
                  <li>Cobertura de acciones de SSR y vacunación según esquema.</li>
                </ul>
              </div>
              <div className="recurso-box recurso-white-bg">
                <h3>Errores frecuentes</h3>
                <ul className="recurso-list-tight">
                  <li>No aplicar SRQ ante riesgo de problema mental.</li>
                  <li>No ofrecer pruebas rápidas de VIH/Sífilis/Hepatitis C según riesgo.</li>
                  <li>Omitir tamizaje de riesgo CV/metabólico cada 5 años.</li>
                  <li>No activar rutas (violencias, SPA, riesgo laboral) cuando corresponde.</li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="recurso-footer">
            <div>Normativa: Resolución 3280/2018 — Intervenciones individuales Juventud (3.3.4, págs. 57–61) y Directrices RPMS Juventud (págs. 132–140).</div>
            <div>Nota de uso: material educativo; no sustituye el juicio clínico ni las políticas institucionales vigentes.</div>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default GuiaJuventud;
