import "@/components/recursos/styles.css";

const GuiaAdolescencia = () => {
  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          
          {/* Encabezado principal */}
          <section className="recurso-hero">
            <div>
              <h1>📘 Guía resumida — Adolescencia (RPMS)</h1>
              <div className="recurso-chips">
                <span className="recurso-chip">R3280/2018</span>
                <span className="recurso-chip">Curso de vida: Adolescencia</span>
                <span className="recurso-chip">Formato: Guía</span>
              </div>
            </div>
            <div className="recurso-meta">
              <div><b>Versión/Fecha:</b> v2.0 — 2025-10-25</div>
              <div><b>Código:</b> r3280_rpms_adolescencia_guia_v20251025</div>
              <div><b>Tiempo de lectura:</b> 4–5 min</div>
            </div>
          </section>

          {/* 1) Propósito y Alcance */}
          <section className="recurso-two" style={{marginTop:"12px"}}>
            <div className="recurso-card">
              <h2>🎯 Propósito</h2>
              <p>Estandarizar la valoración integral, detección temprana y protección específica en personas adolescentes, garantizando confidencialidad, enfoque de derechos y toma de decisiones informada. <em>(R3280, 3.3.3; Directrices Adolescencia)</em></p>
            </div>
            <div className="recurso-card">
              <h2>🧭 Alcance / Población</h2>
              <p>Adolescentes de <b>12 a 17 años, 11 meses y 29 días</b>. Incluye salud física, mental y sexual y reproductiva; hábitos y estilos de vida; identificación de violencias; riesgos por SPA; salud bucal, visual y auditiva; vacunación; educación individual/familiar/grupal. <em>(R3280, 3.3.3; Directrices Adolescencia, págs. 123–132)</em></p>
            </div>
          </section>

          {/* 2) Intervenciones clave (individuales) */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>✅ Intervenciones clave (individuales)</h2>
            <ul className="recurso-list-tight">
              <li className="recurso-bullet"><i>🔒</i><span>Garantizar confidencialidad y un espacio a solas con la persona adolescente.</span></li>
              <li className="recurso-bullet"><i>🧠</i><span>Tamizaje de salud mental: <b>RQC</b> (12–15A), <b>SRQ</b> (≥16A); evaluar ideación/conducta suicida.</span></li>
              <li className="recurso-bullet"><i>🧪</i><span>SSR: prueba de embarazo si sospecha; pruebas rápidas de <b>VIH</b> y <b>sífilis</b> si relaciones sin protección; oferta de anticoncepción (incl. DIU/implante) y preservativos.</span></li>
              <li className="recurso-bullet"><i>💉</i><span>Vacunación según esquema vigente (incluye <b>Td</b> ≥10A según antecedente; <b>VPH</b> niñas ≥9A).</span></li>
              <li className="recurso-bullet"><i>🦷</i><span>Salud bucal: profilaxis y remoción de placa; barniz de flúor 2/año; detartraje según necesidad.</span></li>
              <li className="recurso-bullet"><i>👁️</i><span>Salud visual: agudeza con optotipos; auditiva/comunicativa: inspección/otoscopia y, si aplica, <b>VALE</b>.</span></li>
              <li className="recurso-bullet"><i>🏫</i><span>Evaluar desempeño escolar, convivencia y factores de riesgo psicosocial.</span></li>
              <li className="recurso-bullet"><i>👪</i><span>Funcionalidad familiar (APGAR), Familiograma/Ecomapa; indagar violencias y activar rutas.</span></li>
            </ul>
          </section>

          {/* 2b) Intervenciones colectivas */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-vlight">
            <h2>🏫 Intervenciones colectivas (escuela y comunidad)</h2>
            <p>Acciones educativas y de promoción orientadas a grupos de adolescentes, familias y comunidad educativa para fortalecer capacidades, prevenir riesgos y promover entornos protectores. <em>(R3280, 3.3.3, págs. 54–56; Directrices Adolescencia, págs. 123–132)</em></p>

            <table className="recurso-table" style={{marginTop:"6px"}}>
              <thead>
                <tr>
                  <th>Componente</th>
                  <th>Población objetivo</th>
                  <th>Periodicidad / Metodología</th>
                  <th>Responsables</th>
                  <th>Notas / Articulación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Salud mental y habilidades para la vida</td>
                  <td>Grupos de aula / colectivos juveniles</td>
                  <td>Sesiones estructuradas (talleres participativos)</td>
                  <td>Medicina/Enfermería con Psicología</td>
                  <td>Ruta de salud mental; coordinación con orientación escolar</td>
                </tr>
                <tr>
                  <td>SSR y prevención de ITS/VIH y embarazo no intencional</td>
                  <td>Adolescentes y cuidadores</td>
                  <td>Educación grupal con enfoque de derechos</td>
                  <td>Equipo de salud (incl. enfermería)</td>
                  <td>Derivación a servicios amigables y anticoncepción</td>
                </tr>
                <tr>
                  <td>Prevención de consumo de SPA</td>
                  <td>Estudiantes / familias</td>
                  <td>Talleres y consejería breve</td>
                  <td>Salud mental / Medicina / Enfermería</td>
                  <td>Ruta local de SPA; articulación intersectorial</td>
                </tr>
                <tr>
                  <td>Convivencia, violencias y autocuidado</td>
                  <td>Aulas / comunidad educativa</td>
                  <td>Actividades lúdicas y pedagógicas</td>
                  <td>Equipo de salud con Trabajo Social</td>
                  <td>Activación de rutas de violencias</td>
                </tr>
                <tr>
                  <td>Estilos de vida saludables (AF, alimentación, pantallas)</td>
                  <td>Grupos escolares</td>
                  <td>Sesiones prácticas y retos saludables</td>
                  <td>Medicina / Enfermería / Nutrición</td>
                  <td>Vincular PAE, deporte escolar y entornos saludables</td>
                </tr>
                <tr>
                  <td>Salud bucal colectiva</td>
                  <td>Grados priorizados por riesgo</td>
                  <td>Jornadas preventivas y educativas</td>
                  <td>Odontología</td>
                  <td>Derivar a consulta odontológica si hallazgos</td>
                </tr>
              </tbody>
            </table>

            <div className="recurso-two" style={{marginTop:"8px"}}>
              <div className="recurso-box recurso-white-bg">
                <h3>Monitoreo y evaluación</h3>
                <ul className="recurso-list-tight">
                  <li>Lista de asistencia y registro por grupo/fecha.</li>
                  <li>Chequeo de satisfacción / aprendizaje (pre-post breve).</li>
                  <li>Remisiones efectivas desde lo colectivo a consultas individuales.</li>
                </ul>
              </div>
              <div className="recurso-box recurso-white-bg">
                <h3>Gestión y articulación</h3>
                <ul className="recurso-list-tight">
                  <li>Agenda con instituciones educativas y actores comunitarios.</li>
                  <li>Coordinación con protección, juventud y deporte.</li>
                  <li>Comunicación de riesgos y rutas locales vigentes.</li>
                </ul>
              </div>
            </div>
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
                  <td>12–14A, 15–17A</td>
                  <td>2 atenciones</td>
                </tr>
                <tr>
                  <td>Enfermería</td>
                  <td>13A, 16A</td>
                  <td>2 atenciones</td>
                </tr>
                <tr>
                  <td>Odontología</td>
                  <td>12–17A</td>
                  <td>1 vez/año</td>
                </tr>
                <tr>
                  <td>Salud visual</td>
                  <td>Según necesidad</td>
                  <td>Priorizar población vulnerable</td>
                </tr>
                <tr>
                  <td>Educación en salud (individual/familiar/grupal)</td>
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
                  <td>Td ≥10A según antecedente; VPH en niñas ≥9A</td>
                </tr>
                <tr>
                  <td>Tamizaje de riesgo en salud mental</td>
                  <td>RQC (12–15A); SRQ (≥16A)</td>
                  <td>En cada control</td>
                </tr>
                <tr>
                  <td>Tamizaje de consumo de SPA</td>
                  <td>Si hay sospecha</td>
                  <td>AUDIT/ASSIST</td>
                </tr>
                <tr>
                  <td>Tamizaje de agudeza visual</td>
                  <td>Si hay quejas</td>
                  <td>Optotipos</td>
                </tr>
                <tr>
                  <td>Tamizaje auditivo</td>
                  <td>Si hay quejas</td>
                  <td>VALE</td>
                </tr>
                <tr>
                  <td>Citología vaginal</td>
                  <td>Mujeres ≥25A</td>
                  <td>Según esquema 1–3–3</td>
                </tr>
                <tr>
                  <td>Prueba de embarazo</td>
                  <td>Si sospecha</td>
                  <td>Confirmar y orientar</td>
                </tr>
                <tr>
                  <td>Pruebas rápidas ITS (VIH, sífilis)</td>
                  <td>Si relaciones sin protección</td>
                  <td>Oferta activa</td>
                </tr>
                <tr>
                  <td>Profilaxis y remoción de placa</td>
                  <td>≥12A</td>
                  <td>1 vez/año</td>
                </tr>
                <tr>
                  <td>Barniz de flúor</td>
                  <td>≥1A (en adolescencia ≥12A)</td>
                  <td>2 veces/año</td>
                </tr>
                <tr>
                  <td>Detartraje supragingival</td>
                  <td>Según necesidad</td>
                  <td></td>
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
                  <li>Garantizar confidencialidad y espacio a solas.</li>
                  <li>Anamnesis completa: antecedentes, hábitos, riesgos.</li>
                  <li>Salud mental: aplicar RQC/SRQ; evaluar riesgo suicida.</li>
                  <li>SSR: indagar prácticas, ofrecer tamizajes y anticoncepción.</li>
                  <li>Examen físico: signos vitales, piel, tiroides, mamas.</li>
                  <li>Salud visual: agudeza con optotipos.</li>
                  <li>Salud auditiva: inspección, otoscopia y VALE si aplica.</li>
                  <li>Valorar riesgo laboral/ocupacional.</li>
                  <li>Evaluar funcionalidad familiar (APGAR, Familiograma).</li>
                </ol>
                <p style={{color:"var(--recurso-muted)"}}><em>(R3280, págs. 54–56; 123–132)</em></p>
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
                      <td>RQC/SRQ positivo o riesgo de trastorno mental / conducta suicida</td>
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
                      <td>ITS o embarazo no intencional</td>
                      <td>Servicios amigables / Ginecología</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>Agudeza visual/auditiva alterada</td>
                      <td>Optometría / ORL-Audiología</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>Hallazgos en examen físico (ej. tiroides, mamas)</td>
                      <td>Especialidades según hallazgo</td>
                      <td>Según protocolo</td>
                    </tr>
                    <tr>
                      <td>Riesgo laboral</td>
                      <td>Ruta de riesgo laboral</td>
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
                  <td>RQC (tamizaje de riesgo en salud mental)</td>
                  <td>Detección de problemas de salud mental</td>
                  <td>12–15A; de rutina</td>
                  <td>Medicina / Enfermería / Psicología</td>
                  <td>Activar ruta de salud mental si resultado positivo</td>
                </tr>
                <tr>
                  <td>SRQ (tamizaje de riesgo en salud mental)</td>
                  <td>Detección de problemas de salud mental</td>
                  <td>≥16A; de rutina</td>
                  <td>Medicina / Enfermería / Psicología</td>
                  <td>Activar ruta de salud mental si resultado positivo</td>
                </tr>
                <tr>
                  <td>AUDIT / ASSIST</td>
                  <td>Tamizaje de consumo de SPA</td>
                  <td>Si hay sospecha</td>
                  <td>Medicina / Enfermería / Psicología</td>
                  <td>Activar ruta de SPA si resultado positivo</td>
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
                  <td>Agudeza visual con optotipos</td>
                  <td>Tamizaje visual</td>
                  <td>Si hay quejas</td>
                  <td>Personal entrenado (Optometría / Medicina)</td>
                  <td>Remitir si hallazgos alterados [según lineamiento institucional]</td>
                </tr>
                <tr>
                  <td>Carga global de enfermedad (OMS)</td>
                  <td>Identificar comorbilidades</td>
                  <td>En cada control</td>
                  <td>Medicina / Enfermería</td>
                  <td>Priorizar según carga</td>
                </tr>
              </tbody>
            </table>
            <p style={{color:"var(--recurso-muted)"}}><em>(R3280, págs. 54–56; 123–132)</em></p>
          </section>

          {/* 6) Consejería y educación */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>💬 Consejería y educación</h2>
            <ul className="recurso-list-tight">
              <li>Salud sexual y reproductiva: métodos anticonceptivos; prevención de ITS/VIH; embarazo saludable.</li>
              <li>Salud mental: manejo del estrés; prevención del suicidio; búsqueda de ayuda profesional.</li>
              <li>Prevención del consumo de SPA: riesgos asociados; estrategias de afrontamiento; recursos de apoyo.</li>
              <li>Estilos de vida saludables: alimentación balanceada; actividad física regular; sueño adecuado.</li>
              <li>Prevención de violencias: identificación de situaciones de riesgo; mecanismos de denuncia; autocuidado.</li>
              <li>Derechos sexuales y reproductivos; consentimiento informado; confidencialidad.</li>
            </ul>
          </section>

          {/* 7) Indicadores y errores */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-vlight">
            <h2>📊 Indicadores & ⚠️ Errores frecuentes</h2>
            <div className="recurso-two">
              <div className="recurso-box recurso-white-bg">
                <h3>Indicadores (≤3)</h3>
                <ul className="recurso-list-tight">
                  <li>Cobertura de atenciones programadas (12–17A).</li>
                  <li>Tamizajes completados (RQC/SRQ, VIH/sífilis si aplica, agudeza visual si quejas).</li>
                  <li>Cobertura de vacunación según esquema.</li>
                </ul>
              </div>
              <div className="recurso-box recurso-white-bg">
                <h3>Errores frecuentes</h3>
                <ul className="recurso-list-tight">
                  <li>No garantizar confidencialidad ni espacio a solas.</li>
                  <li>No aplicar RQC/SRQ ni evaluar riesgo suicida.</li>
                  <li>Omitir tamizajes de VIH/sífilis si aplica.</li>
                  <li>No ofrecer consejería en SSR ni anticoncepción.</li>
                  <li>No activar rutas (violencias, SPA) cuando corresponde.</li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="recurso-footer">
            <div>Normativa: Resolución 3280/2018 — Intervenciones individuales y colectivas en Adolescencia (3.3.3, págs. 54–56 y 123–132).</div>
            <div>Nota de uso: material educativo; no sustituye el juicio clínico ni las políticas institucionales vigentes.</div>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default GuiaAdolescencia;
