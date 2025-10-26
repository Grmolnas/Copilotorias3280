import "@/components/recursos/styles.css";

const GuiaVejez = () => {
  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          
          {/* Encabezado principal */}
          <section className="recurso-hero">
            <div>
              <h1>📘 Guía resumida — Vejez (RPMS)</h1>
              <div className="recurso-chips">
                <span className="recurso-chip">R3280/2018</span>
                <span className="recurso-chip">Curso de vida: Vejez</span>
                <span className="recurso-chip">Formato: Guía</span>
              </div>
            </div>
            <div className="recurso-meta">
              <div><b>Versión/Fecha:</b> v1.0 — 2025-10-25</div>
              <div><b>Código:</b> r3280_rpms_vejez_guia_v20251025</div>
              <div><b>Tiempo de lectura:</b> 6–7 min</div>
            </div>
          </section>

          {/* 1) Propósito y Alcance */}
          <section className="recurso-two" style={{marginTop:"12px"}}>
            <div className="recurso-card">
              <h2>🎯 Propósito</h2>
              <p>Proveer un estándar operativo para la valoración integral, la detección temprana y la protección específica en personas mayores, promoviendo el envejecimiento activo, la funcionalidad y la autonomía. <em>(R3280, 3.3.6, págs. 70–77; Directrices Vejez, págs. 148–157)</em></p>
            </div>
            <div className="recurso-card">
              <h2>🧭 Alcance / Población</h2>
              <p><b>Personas de 60 años y más</b>. Incluye: valoración clínica y funcional, salud mental, riesgo cardiometabólico, tamizajes oncológicos según edad/sexo, salud bucal, visual y auditiva, vacunación (influenza anual) y educación individual/grupal. <em>(R3280, 3.3.6, págs. 70–77; Directrices Vejez, págs. 148–157)</em></p>
            </div>
          </section>

          {/* 2) Intervenciones clave */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>✅ Intervenciones clave</h2>
            <ul className="recurso-list-tight">
              <li className="recurso-bullet"><i>🧠</i><span>Salud mental y cognición: cribado de depresión (Whooley), ansiedad (GAD-2) y deterioro cognitivo (<b>Minimental</b>); valorar ideación/conducta suicida; apoyo a cuidadores (<b>Zarit</b>).</span></li>
              <li className="recurso-bullet"><i>🧍</i><span>Funcionalidad: <b>Barthel</b>, <b>Lawton-Brody</b>, <b>Fried</b> (fragilidad); marcha/equilibrio con <em>Timed Up and Go</em> (anormal {'>'} 15 s o incapacidad).</span></li>
              <li className="recurso-bullet"><i>❤️</i><span>Riesgo cardiovascular/metabólico: paquete quinquenal (glicemia, perfil lipídico, creatinina, uroanálisis) y cálculo de riesgo (Framingham / FINDRISC).</span></li>
              <li className="recurso-bullet"><i>🎗️</i><span>Tamizajes oncológicos: próstata (<b>PSA + TR</b> cada 5 años 50–75A), colon (SOHMF cada 2 años ≥50A hasta 75A), mama (ECE anual ≥40A; mamografía 50–69A cada 2 años), cuello uterino (citología 25–65A 1–3–3 y/o <b>ADN‑VPH 30–65A 1–5–5</b>).</span></li>
              <li className="recurso-bullet"><i>🦷</i><span>Salud bucal: odontología bianual; profilaxis anual y detartraje según necesidad.</span></li>
              <li className="recurso-bullet"><i>👂</i><span>Salud sensorial: optotipos; lista de factores de riesgo auditivo y otoscopia si aplica.</span></li>
              <li className="recurso-bullet"><i>💊</i><span>Revisión de medicamentos: identificar <b>polifarmacia</b> y potenciales interacciones; adherencia y uso seguro.</span></li>
              <li className="recurso-bullet"><i>🛡️</i><span>Vacunación: <b>influenza anual</b> y esquema vigente.</span></li>
              <li className="recurso-bullet"><i>👪</i><span>Familia/redes: <b>APGAR</b>, Familiograma, Ecomapa; detección de violencias y abandono; orientación a cuidadores.</span></li>
            </ul>
          </section>

          {/* 3) Roles y competencias */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-vlight">
            <h2>🩺 Roles y competencias</h2>
            <div className="recurso-three">
              <div className="recurso-box">
                <h3>👨‍⚕️ Medicina / Medicina familiar</h3>
                <ul className="recurso-list-tight">
                  <li>Valoración clínica integral y funcional; estratificación de riesgo.</li>
                  <li>Orden e interpretación de tamizajes; activación de rutas (cáncer, mental, violencias, SPA).</li>
                </ul>
              </div>
              <div className="recurso-box">
                <h3>👩‍⚕️ Enfermería</h3>
                <ul className="recurso-list-tight">
                  <li>Valoración complementaria (funcional/nutricional), procedimientos y educación.</li>
                  <li>Orden de medicamentos/insumos/procedimientos definidos para la intervención.</li>
                </ul>
              </div>
              <div className="recurso-box">
                <h3>🦷 Odontología / Optometría</h3>
                <ul className="recurso-list-tight">
                  <li>Odontología: control bianual, profilaxis anual, detartraje según necesidad.</li>
                  <li>Optometría: tamizaje visual y remisión si alteración.</li>
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
                  <td>≥60A</td>
                  <td><b>1 vez cada 3 años</b> (valoración integral con énfasis funcional y mental).</td>
                </tr>
                <tr>
                  <td>Odontología</td>
                  <td>≥60A</td>
                  <td><b>1 vez cada 2 años</b>. Profilaxis anual; detartraje según necesidad.</td>
                </tr>
                <tr>
                  <td>Educación en salud (individual/grupal)</td>
                  <td>Según valoración</td>
                  <td>Derivar a <b>≥3 ciclos educativos</b> a lo largo de la vejez.</td>
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
                  <td>Riesgo cardiovascular/metabólico</td>
                  <td>≥60A</td>
                  <td>Quinquenal: glicemia, perfil lipídico, creatinina y uroanálisis; estimar riesgo (Framingham/FINDRISC).</td>
                </tr>
                <tr>
                  <td>Cáncer de próstata</td>
                  <td>Hombres 50–75A</td>
                  <td><b>PSA + tacto rectal cada 5 años</b>; biopsia según hallazgos.</td>
                </tr>
                <tr>
                  <td>Cáncer de colon y recto</td>
                  <td>≥50A (hasta 75A)</td>
                  <td><b>SOHMF cada 2 años</b> o colonoscopia según resultado.</td>
                </tr>
                <tr>
                  <td>Cáncer de mama</td>
                  <td>Mujeres 50–69A (mamografía)</td>
                  <td>Mamografía cada 2 años; ECE anual ≥40A.</td>
                </tr>
                <tr>
                  <td>Cáncer de cuello uterino</td>
                  <td>Mujeres 25–65A</td>
                  <td>Citología 1–3–3 y/o <b>ADN‑VPH 1–5–5</b> según esquema.</td>
                </tr>
                <tr>
                  <td>Hepatitis C</td>
                  <td>≥50A</td>
                  <td><b>Una vez en la vida</b> (prueba rápida).</td>
                </tr>
                <tr>
                  <td>ITS (VIH / Sífilis / Hep B)</td>
                  <td>Según riesgo</td>
                  <td>Pruebas rápidas por demanda ante relaciones sin protección.</td>
                </tr>
                <tr>
                  <td>Vacunación</td>
                  <td>≥60A</td>
                  <td><b>Influenza anual</b> + esquema PAI vigente.</td>
                </tr>
                <tr>
                  <td>Odontología: profilaxis / detartraje</td>
                  <td>≥60A</td>
                  <td>Profilaxis 1/año; detartraje según necesidad.</td>
                </tr>
                <tr>
                  <td>Asesoría en anticoncepción</td>
                  <td>Por demanda</td>
                  <td>Población masculina (p. ej., vasectomía) según necesidad y deseo.</td>
                </tr>
              </tbody>
            </table>
            <p style={{color:"var(--recurso-muted)", marginTop:"6px"}}><em>(R3280, 3.3.6, págs. 70–77; Directrices Vejez, págs. 148–157)</em></p>
          </section>

          {/* 5) Procedimiento y Derivación */}
          <section style={{marginTop:"12px"}} className="recurso-card">
            <h2>🔄 Procedimiento y Derivación</h2>
            <div className="recurso-two">
              <div className="recurso-box recurso-white-bg">
                <h3>Procedimiento (cómo)</h3>
                <ol style={{margin: "4px 0 8px 18px"}}>
                  <li>Anamnesis completa: enfermedades crónicas (HTA, DM, EPOC), cáncer, neurológicas; <b>consumo de tabaco/alcohol/SPA</b>; vacunación.</li>
                  <li>Riesgos acumulados y laborales; violencias y abandono; condiciones de vida.</li>
                  <li>Salud mental y afrontamiento; estado de ánimo; <b>sobrecarga del cuidador</b> (Zarit) si aplica.</li>
                  <li>Examen físico: signos vitales, examen bucal; columna; piel; <b>optotipos</b>; tamizaje auditivo (lista de riesgo) y otoscopia si aplica.</li>
                  <li>Antropometría: peso, talla, <b>IMC</b> y <b>circunferencia de cintura</b> (patrones OMS).</li>
                  <li>Funcionalidad: <b>Barthel, Lawton‑Brody, Fried</b>; marcha/equilibrio (<em>TUG</em>). Cognición: <b>Minimental</b>.</li>
                  <li>Familia y redes: <b>APGAR</b>, Familiograma y Ecomapa.</li>
                  <li>Plan de cuidado: ordenar tamizajes; educación; rutas (cáncer, mental, violencias); notificación en SP.</li>
                </ol>
                <p style={{color:"var(--recurso-muted)"}}><em>(Directrices Vejez, págs. 148–157)</em></p>
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
                      <td>Whooley/GAD-2 positivo, deterioro cognitivo, conducta suicida</td>
                      <td>Ruta de salud mental / Geriatría / Neuropsicología</td>
                      <td>Inmediato si riesgo / Prioritario</td>
                    </tr>
                    <tr>
                      <td>Fragilidad (Fried), dependencia (Barthel), disfunción (Lawton)</td>
                      <td>Rehabilitación / Fisioterapia / Terapia ocupacional</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>PSA/SOHMF/Mamografía/ADN‑VPH anormales</td>
                      <td>Ruta oncológica según protocolo</td>
                      <td>Prioritario</td>
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
                  <td>Tablas/gráficas nutricionales (OMS)</td>
                  <td>Clasificación nutricional</td>
                  <td>≥60A, cada consulta</td>
                  <td>Medicina / Enfermería</td>
                  <td>Plan nutricional / derivación si alteración</td>
                </tr>
                <tr>
                  <td>Barthel / Lawton‑Brody / Fried</td>
                  <td>Funcionalidad y fragilidad</td>
                  <td>Cada consulta</td>
                  <td>Medicina / Enfermería</td>
                  <td>Rehabilitación / apoyos si alteración</td>
                </tr>
                <tr>
                  <td>Minimental</td>
                  <td>Cribado cognitivo</td>
                  <td>Cada consulta o ante sospecha</td>
                  <td>Medicina</td>
                  <td>Neuropsicología / Geriatría si alteración</td>
                </tr>
                <tr>
                  <td>Calculadoras de riesgo CV (Framingham / FINDRISC)</td>
                  <td>Riesgo cardiovascular / DM</td>
                  <td>Con paquete quinquenal</td>
                  <td>Medicina / Enfermería</td>
                  <td>Intervención/derivación según umbral</td>
                </tr>
                <tr>
                  <td>APGAR familiar</td>
                  <td>Funcionalidad familiar</td>
                  <td>Cada consulta</td>
                  <td>Medicina / Enfermería</td>
                  <td>Orientación/derivación según puntaje</td>
                </tr>
              </tbody>
            </table>
            <div className="recurso-box recurso-white-bg" style={{marginTop:"8px"}}>
              <h3>Instrumentos sugeridos</h3>
              <ul className="recurso-list-tight">
                <li><b>Zarit</b> para sobrecarga del cuidador.</li>
                <li><b>AUDIT/ASSIST</b> (alcohol/SPA) según sospecha.</li>
                <li><b>Whooley</b> (depresión) y <b>GAD‑2</b> (ansiedad).</li>
                <li>Cuestionario de <b>riesgo de EPOC</b> según exposición.</li>
                <li>Lista de factores de riesgo para enfermedad del oído / otoscopia.</li>
              </ul>
            </div>
            <p style={{color:"var(--recurso-muted)"}}><em>(R3280, 3.3.6, págs. 70–77; Directrices Vejez, págs. 148–157)</em></p>
          </section>

          {/* 6) Consejería y educación */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>💬 Consejería y educación</h2>
            <ul className="recurso-list-tight">
              <li>Envejecimiento activo: actividad física segura, equilibrio, fuerza; prevención de caídas y fracturas (adecuación del hogar).</li>
              <li>Salud mental: manejo de duelos, soledad; redes de apoyo; descanso y sueño.</li>
              <li>Uso seguro de medicamentos y adherencia; evitar automedicación y polifarmacia.</li>
              <li>Alimentación saludable; hidratación; fotoprotección.</li>
              <li>Derechos y oferta social/territorial; apoyo a cuidadores.</li>
            </ul>
          </section>

          {/* 7) Indicadores y errores */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-vlight">
            <h2>📊 Indicadores & ⚠️ Errores frecuentes</h2>
            <div className="recurso-two">
              <div className="recurso-box recurso-white-bg">
                <h3>Indicadores (≤5)</h3>
                <ul className="recurso-list-tight">
                  <li>Cobertura de valoración médica <b>cada 3 años</b> y odontológica <b>bianual</b>.</li>
                  <li>Cumplimiento del paquete cardiometabólico <b>quinquenal</b>.</li>
                  <li>Realización de escalas funcionales y Minimental en cada consulta.</li>
                  <li>Cobertura de <b>influenza anual</b>.</li>
                  <li>Derivaciones oportunas (salud mental, cáncer, rehabilitación, protección).</li>
                </ul>
              </div>
              <div className="recurso-box recurso-white-bg">
                <h3>Errores frecuentes</h3>
                <ul className="recurso-list-tight">
                  <li>No registrar las escalas funcionales (Barthel, Lawton, Fried, TUG).</li>
                  <li>Omitir Minimental ante sospecha de deterioro cognitivo.</li>
                  <li>No revisar polifarmacia ni interacciones medicamentosas.</li>
                  <li>No detectar sobrecarga del cuidador (Zarit).</li>
                  <li>No completar tamizajes oncológicos según edad/sexo.</li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="recurso-footer">
            <div>Normativa: Resolución 3280/2018 — Intervenciones individuales Vejez (3.3.6, págs. 70–77) y Directrices Vejez (págs. 148–157).</div>
            <div>Nota de uso: material educativo; no sustituye el juicio clínico ni las políticas institucionales vigentes.</div>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default GuiaVejez;
