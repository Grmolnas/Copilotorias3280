import "@/components/recursos/styles.css";

const GuiaAdultez = () => {
  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          
          {/* Encabezado principal */}
          <section className="recurso-hero">
            <div>
              <h1>📘 Guía resumida — Adultez (RPMS)</h1>
              <div className="recurso-chips">
                <span className="recurso-chip">R3280/2018</span>
                <span className="recurso-chip">Curso de vida: Adultez</span>
                <span className="recurso-chip">Formato: Guía</span>
              </div>
            </div>
            <div className="recurso-meta">
              <div><b>Versión/Fecha:</b> v1.4 — 2025-10-25</div>
              <div><b>Código:</b> r3280_rpms_adultez_guia_v20251025</div>
              <div><b>Tiempo de lectura:</b> 5–6 min</div>
            </div>
          </section>

          {/* 1) Propósito y Alcance */}
          <section className="recurso-two" style={{marginTop:"12px"}}>
            <div className="recurso-card">
              <h2>🎯 Propósito</h2>
              <p>Estándar operativo para la valoración integral, detección temprana y protección específica en personas adultas, con enfoque de riesgos acumulados, curso de vida, derechos y trabajo digno. <em>(R3280, 3.3.5, págs. 62–69; Directrices Adultez, págs. 140–147)</em></p>
            </div>
            <div className="recurso-card">
              <h2>🧭 Alcance / Población</h2>
              <p>Personas de <b>29 a 59 años, 11 meses y 29 días</b>. Incluye: salud física, mental y SSR; tamizajes cardiometabólicos; detección temprana de cáncer; salud bucal, visual y auditiva; riesgos laborales/ocupacionales; vacunación; educación individual, familiar y grupal. <em>(R3280, 3.3.5, págs. 62–69; Directrices Adultez, págs. 140–147)</em></p>
            </div>
          </section>

          {/* 2) Intervenciones clave */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>✅ Intervenciones clave</h2>
            <ul className="recurso-list-tight">
              <li className="recurso-bullet"><i>🧠</i><span>Tamizaje de salud mental: <b>Whooley</b> (depresión) y <b>GAD-2</b> (ansiedad); valorar ideación/conducta suicida; <b>AUDIT/ASSIST</b> si sospecha de consumo. <em>(Aplicar instrumentos según riesgo identificado)</em></span></li>
              <li className="recurso-bullet"><i>❤️</i><span>Riesgo cardiovascular/metabólico: <b>cada 5 años</b> glicemia basal, perfil lipídico, creatinina y uroanálisis; estimar riesgo CV global.</span></li>
              <li className="recurso-bullet"><i>🧪</i><span>SSR e ITS: prueba de embarazo si sospecha; pruebas rápidas de <b>VIH</b>, <b>sífilis</b> y <b>Hepatitis C</b> según riesgo (Hepatitis C: transfusión &lt;1996 y ≥50A una vez en la vida); oferta de anticoncepción (incluye <b>LARC</b> y métodos definitivos) y preservativos.</span></li>
              <li className="recurso-bullet"><i>🎗️</i><span>Cáncer: <b>citología 25–65A (1–3–3)</b> y como <i>triage</i> si ADN‑VPH positivo; <b>ADN‑VPH 30–65A (1–5–5)</b>; <b>examen clínico de mama anual ≥40A</b> y <b>mamografía 50–69A cada 2 años</b>; <b>PSA + tacto rectal ≥50A cada 5 años</b>; <b>SOHMF ≥50A cada 2 años</b> o <b>colonoscopia cada 10 años</b>.</span></li>
              <li className="recurso-bullet"><i>🦷</i><span>Salud bucal: profilaxis/remoción de placa <b>1/año</b>; detartraje supragingival según necesidad; sellantes según riesgo.</span></li>
              <li className="recurso-bullet"><i>👁️</i><span>Salud visual: agudeza con optotipos; auditiva: <b>dos preguntas de percepción</b> y otoscopia si aplica.</span></li>
              <li className="recurso-bullet"><i>🏢</i><span>Riesgo laboral: caracterizar actividad, exposición y vínculo; activar ruta de riesgo/enfermedad laboral cuando corresponda.</span></li>
              <li className="recurso-bullet"><i>👪</i><span>Funcionalidad y redes: <b>APGAR</b>, Familiograma y Ecomapa; detección de violencias y activación de rutas.</span></li>
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
                  <li>Atención anual; barniz 2/año; sellantes según riesgo.</li>
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
                  <td>Medicina / Medicina Familiar</td>
                  <td>29–59A</td>
                  <td>Cada 5 años (o menos si riesgo)</td>
                </tr>
                <tr>
                  <td>Enfermería</td>
                  <td>29–59A</td>
                  <td>Según necesidad (seguimiento, procedimientos)</td>
                </tr>
                <tr>
                  <td>Odontología</td>
                  <td>29–59A</td>
                  <td>Anual (profilaxis); bianual (detartraje)</td>
                </tr>
                <tr>
                  <td>Optometría</td>
                  <td>Según necesidad</td>
                  <td>Si quejas visuales o factores de riesgo</td>
                </tr>
                <tr>
                  <td>Tamizajes CV/metabólico</td>
                  <td>29–59A</td>
                  <td>Paquete quinquenal (glicemia, lípidos, creatinina, uroanálisis)</td>
                </tr>
                <tr>
                  <td>Tamizajes oncológicos</td>
                  <td>Según edad/sexo</td>
                  <td>Ver tabla de protección específica</td>
                </tr>
                <tr>
                  <td>Vacunación</td>
                  <td>Según esquema</td>
                  <td>Td según antecedente</td>
                </tr>
                <tr>
                  <td>Salud mental</td>
                  <td>Según riesgo</td>
                  <td>Whooley, GAD-2, AUDIT/ASSIST</td>
                </tr>
                <tr>
                  <td>Riesgo laboral</td>
                  <td>Según actividad</td>
                  <td>Si exposición a riesgos</td>
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
                  <td>Citología</td>
                  <td>25–65A</td>
                  <td>1–3–3 (anual x3, luego trienal x3)</td>
                </tr>
                <tr>
                  <td>ADN-VPH</td>
                  <td>30–65A</td>
                  <td>1–5–5 (cada 5 años si negativo)</td>
                </tr>
                <tr>
                  <td>Examen clínico de mama</td>
                  <td>≥40A</td>
                  <td>Anual</td>
                </tr>
                <tr>
                  <td>Mamografía</td>
                  <td>50–69A</td>
                  <td>Cada 2 años</td>
                </tr>
                <tr>
                  <td>PSA + Tacto rectal</td>
                  <td>50–75A</td>
                  <td>Cada 5 años</td>
                </tr>
                <tr>
                  <td>SOHMF</td>
                  <td>≥50A</td>
                  <td>Cada 2 años (o colonoscopia c/10A)</td>
                </tr>
                <tr>
                  <td>Vacunación Td</td>
                  <td>Mujeres en edad fértil</td>
                  <td>Según antecedente</td>
                </tr>
                <tr>
                  <td>Pruebas rápidas ITS (VIH, sífilis, VHC)</td>
                  <td>Según riesgo</td>
                  <td>Oferta según antecedente</td>
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
                  <li>Anamnesis: antecedentes, exposición a riesgos, hábitos y estilos de vida.</li>
                  <li>Valoración de salud mental: aplicar Whooley y GAD-2; indagar ideación suicida.</li>
                  <li>Examen físico: signos vitales, TA, IMC, perímetro abdominal.</li>
                  <li>Salud sexual y reproductiva: indagar prácticas, planificar anticoncepción.</li>
                  <li>Revisión de vacunación y actualización según esquema.</li>
                  <li>Salud bucal: revisar higiene, lesiones y necesidad de remoción de placa.</li>
                  <li>Salud visual y auditiva: agudeza visual, tamizaje auditivo.</li>
                  <li>Valoración de riesgos laborales y exposición a tóxicos.</li>
                  <li>Funcionalidad familiar: APGAR, Familiograma y Ecomapa.</li>
                </ol>
                <p style={{color:"var(--recurso-muted)"}}><em>(R3280, págs. 62–69; Directrices Adultez, págs. 140–147)</em></p>
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
                      <td>Riesgo cardiovascular elevado</td>
                      <td>Medicina / Cardiología</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>Tamizajes oncológicos alterados</td>
                      <td>Ruta oncológica</td>
                      <td>Según protocolo</td>
                    </tr>
                    <tr>
                      <td>Salud mental alterada (depresión, ansiedad, riesgo suicida)</td>
                      <td>Salud mental / Psiquiatría</td>
                      <td>Prioritario / Inmediato si riesgo</td>
                    </tr>
                    <tr>
                      <td>ITS detectada</td>
                      <td>Ruta ITS</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>Riesgo laboral identificado</td>
                      <td>Ruta de riesgo laboral</td>
                      <td>Según protocolo</td>
                    </tr>
                    <tr>
                      <td>Violencias o abandono</td>
                      <td>Ruta de violencias / Trabajo social</td>
                      <td>Inmediato</td>
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
                  <td>Whooley (cribado de depresión)</td>
                  <td>Tamizaje de depresión</td>
                  <td>Si factores de riesgo</td>
                  <td>Medicina / Enfermería</td>
                  <td>Activar ruta de salud mental si positivo</td>
                </tr>
                <tr>
                  <td>GAD-2 (cribado de ansiedad)</td>
                  <td>Tamizaje de ansiedad</td>
                  <td>Si factores de riesgo</td>
                  <td>Medicina / Enfermería</td>
                  <td>Activar ruta de salud mental si positivo</td>
                </tr>
                <tr>
                  <td>AUDIT / ASSIST</td>
                  <td>Tamizaje de consumo de SPA</td>
                  <td>Si sospecha de consumo</td>
                  <td>Medicina / Enfermería</td>
                  <td>Activar ruta de SPA si positivo</td>
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
                  <td>Riesgo CV (Framingham / FINDRISC)</td>
                  <td>Estimar riesgo cardiovascular</td>
                  <td>Paquete quinquenal</td>
                  <td>Medicina / Enfermería</td>
                  <td>Manejar según riesgo y protocolo</td>
                </tr>
                <tr>
                  <td>Citología / ADN-VPH</td>
                  <td>Tamizaje de cáncer de cuello uterino</td>
                  <td>25–65A</td>
                  <td>Medicina / Enfermería</td>
                  <td>Manejar según protocolo</td>
                </tr>
                <tr>
                  <td>Examen clínico de mama / Mamografía</td>
                  <td>Tamizaje de cáncer de mama</td>
                  <td>≥40A / 50-69A</td>
                  <td>Medicina / Enfermería</td>
                  <td>Manejar según protocolo</td>
                </tr>
                <tr>
                  <td>PSA + Tacto Rectal</td>
                  <td>Tamizaje de cáncer de próstata</td>
                  <td>50–75A</td>
                  <td>Medicina</td>
                  <td>Manejar según protocolo</td>
                </tr>
                <tr>
                  <td>SOHMF</td>
                  <td>Tamizaje de cáncer de colon</td>
                  <td>≥50A</td>
                  <td>Medicina / Enfermería</td>
                  <td>Manejar según protocolo</td>
                </tr>
              </tbody>
            </table>
            <p style={{color:"var(--recurso-muted)"}}><em>(R3280, págs. 62–69; Directrices Adultez, págs. 140–147)</em></p>
          </section>

          {/* 6) Consejería y educación */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>💬 Consejería y educación</h2>
            <ul className="recurso-list-tight">
              <li>Estilos de vida saludables: alimentación balanceada, actividad física, sueño reparador.</li>
              <li>Salud sexual y reproductiva: planificación familiar, prevención de ITS.</li>
              <li>Prevención de consumo de SPA y promoción de salud mental.</li>
              <li>Detección temprana de cáncer y adherencia a tamizajes.</li>
              <li>Riesgos laborales y prevención de accidentes.</li>
              <li>Derechos en salud y mecanismos de exigibilidad.</li>
            </ul>
          </section>

          {/* 7) Indicadores y errores */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-vlight">
            <h2>📊 Indicadores & ⚠️ Errores frecuentes</h2>
            <div className="recurso-two">
              <div className="recurso-box recurso-white-bg">
                <h3>Indicadores (≤3)</h3>
                <ul className="recurso-list-tight">
                  <li>Cobertura de valoración integral en adultos (29–59A).</li>
                  <li>Tamizajes oncológicos completados según grupo de edad.</li>
                  <li>Remisiones efectivas a programas de riesgo cardiovascular y salud mental.</li>
                </ul>
              </div>
              <div className="recurso-box recurso-white-bg">
                <h3>Errores frecuentes</h3>
                <ul className="recurso-list-tight">
                  <li>No realizar tamizajes de salud mental (Whooley, GAD-2).</li>
                  <li>Omitir tamizajes oncológicos según edad y sexo.</li>
                  <li>No estimar riesgo cardiovascular ni ofrecer consejería.</li>
                  <li>No indagar sobre riesgos laborales y exposición a tóxicos.</li>
                  <li>No activar rutas de atención integral según hallazgos.</li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="recurso-footer">
            <div>Normativa: Resolución 3280/2018 — Intervenciones individuales Adultez (3.3.5, págs. 62–69) y Directrices Adultez (págs. 140–147).</div>
            <div>Nota de uso: material educativo; no sustituye el juicio clínico ni las políticas institucionales vigentes.</div>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default GuiaAdultez;
