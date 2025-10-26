import "@/components/recursos/styles.css";

const GuiaInfancia = () => {
  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          
          {/* Encabezado principal */}
          <section className="recurso-hero">
            <div>
              <h1>📘 Guía resumida — Infancia (RPMS)</h1>
              <div className="recurso-chips">
                <span className="recurso-chip">R3280/2018</span>
                <span className="recurso-chip">Curso de vida: Infancia</span>
                <span className="recurso-chip">Formato: Guía</span>
              </div>
            </div>
            <div className="recurso-meta">
              <div><b>Versión/Fecha:</b> v1.1 — 2025-10-25</div>
              <div><b>Código:</b> r3280_rpms_infancia_guia_v20251025</div>
              <div><b>Tiempo de lectura:</b> 3–4 min</div>
            </div>
          </section>

          {/* 1) Propósito y Alcance */}
          <section className="recurso-two" style={{marginTop:"12px"}}>
            <div className="recurso-card">
              <h2>🎯 Propósito</h2>
              <p>Estandarizar la valoración integral, la detección temprana y la protección específica en niñas y niños de 6 a 11 años para identificar y gestionar factores y conductas de riesgo antes de que generen afectaciones significativas. <em>(R3280, págs. 52–53; 115–123)</em></p>
            </div>
            <div className="recurso-card">
              <h2>🧭 Alcance / Población</h2>
              <p>Desde 6 años hasta 11 años 11 meses 29 días. Incluye: crecimiento y desarrollo (físico, motriz, cognitivo, socioemocional), nutrición, salud bucal, auditiva/comunicativa, visual y sexual; vacunación; tamizajes dirigidos; educación a niños/as y cuidadores. Complementariedad entre medicina/enfermería. <em>(R3280, págs. 52–53; 115–123)</em></p>
            </div>
          </section>

          {/* 2) Intervenciones clave */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>✅ Intervenciones clave</h2>
            <ul className="recurso-list-tight">
              <li className="recurso-bullet"><i>📈</i><span>Valorar crecimiento y desarrollo integral; IMC/edad, talla/edad con patrones OMS.</span></li>
              <li className="recurso-bullet"><i>💉</i><span>Verificar y completar esquema de vacunación (incluye Td ≥10A según antecedente; VPH en niñas ≥9A según esquema vigente).</span></li>
              <li className="recurso-bullet"><i>🦷</i><span>Salud bucal: profilaxis y remoción de placa; barniz de flúor 2/año; sellantes según necesidad.</span></li>
              <li className="recurso-bullet"><i>🔊</i><span>Salud auditiva/comunicativa: inspección/otoscopia y cuestionario VALE; visual: agudeza con optotipos.</span></li>
              <li className="recurso-bullet"><i>🧠</i><span>Salud mental: RQC si hay riesgo; indagar conducta suicida y consumo de SPA.</span></li>
              <li className="recurso-bullet"><i>👪</i><span>Dinámica familiar: Familiograma y APGAR; redes de apoyo (Ecomapa).</span></li>
              <li className="recurso-bullet"><i>📚</i><span>Educación individual, familiar y grupal; canalización a orientación familiar y servicios sociales si aplica.</span></li>
            </ul>
          </section>

          {/* 3) Roles y competencias */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-vlight">
            <h2>🩺 Roles y competencias</h2>
            <div className="recurso-three">
              <div className="recurso-box">
                <h3>👨‍⚕️ Medicina / Pediatría</h3>
                <ul className="recurso-list-tight">
                  <li>Valoración integral, diagnóstico y plan.</li>
                  <li>Remisión resolutiva a pediatría cuando se requiera estudio ampliado.</li>
                </ul>
              </div>
              <div className="recurso-box">
                <h3>👩‍⚕️ Enfermería</h3>
                <ul className="recurso-list-tight">
                  <li>Valoración complementaria y procedimientos.</li>
                  <li>Ordenamiento de insumos/medicamentos definidos para la atención.</li>
                </ul>
              </div>
              <div className="recurso-box">
                <h3>🦷 Odontología / Optometría</h3>
                <ul className="recurso-list-tight">
                  <li>Atención anual; flúor 2/año; sellantes según riesgo.</li>
                  <li>Agudeza visual por personal entrenado.</li>
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
                  <td>Medicina / Pediatría</td>
                  <td>6A, 8A, 10A</td>
                  <td>3 atenciones</td>
                </tr>
                <tr>
                  <td>Enfermería</td>
                  <td>7A, 9A, 11A</td>
                  <td>3 atenciones</td>
                </tr>
                <tr>
                  <td>Odontología</td>
                  <td>6–11A</td>
                  <td>1 vez/año</td>
                </tr>
                <tr>
                  <td>Educación en salud (niño/familia/grupo)</td>
                  <td>Según valoración</td>
                  <td>Ciclos recomendados (ver contenidos)</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 4b) Protección específica y detección */}
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
                  <td>Barniz de flúor</td>
                  <td>≥1A (en infancia 6–11A)</td>
                  <td>2 veces/año</td>
                </tr>
                <tr>
                  <td>Profilaxis y remoción de placa</td>
                  <td>≥1A</td>
                  <td>2 veces/año</td>
                </tr>
                <tr>
                  <td>Sellantes</td>
                  <td>Según riesgo (3–15A)</td>
                  <td>Según necesidad</td>
                </tr>
                <tr>
                  <td>Vacunación</td>
                  <td>Esquema vigente</td>
                  <td>Td ≥10A según antecedente; VPH en niñas ≥9A</td>
                </tr>
                <tr>
                  <td>Tamizaje de anemia (Hb/Hto)</td>
                  <td>Niñas 10–13A</td>
                  <td>Una vez</td>
                </tr>
                <tr>
                  <td>Desparasitación antihelmíntica</td>
                  <td>Prioritaria 5–14A</td>
                  <td>Según programa local</td>
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
                  <li>Examen físico: signos vitales y TA por percentiles; columna (escoliosis, cifosis); búsqueda de TB.</li>
                  <li>Nutrición: IMC/edad, talla/edad en patrones OMS.</li>
                  <li>Salud mental: aplicar RQC si hay riesgo.</li>
                  <li>Auditiva/comunicativa: inspección, otoscopia, cuestionario VALE.</li>
                  <li>Visual: agudeza con optotipos morfoscópicos/angulares.</li>
                  <li>Salud bucal: revisar funcionalidad; plan preventivo/terapéutico.</li>
                </ol>
                <p style={{color:"var(--recurso-muted)"}}><em>(R3280, págs. 115–123)</em></p>
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
                      <td>RQC positivo o riesgo de trastorno mental / conducta suicida</td>
                      <td>Ruta de salud mental / Psiquiatría infantil</td>
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
                      <td>Agudeza visual/auditiva alterada</td>
                      <td>Optometría / ORL-Audiología</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>Anemia confirmada o riesgo alto</td>
                      <td>Medicina / Nutrición</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>Alteraciones posturales (escoliosis/cifosis), TA elevada</td>
                      <td>Especialidades según hallazgo</td>
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
                  <td>Cuestionario VALE</td>
                  <td>Tamizaje de salud auditiva y comunicativa</td>
                  <td>6–11A; de rutina o si hay sospecha</td>
                  <td>Medicina / Enfermería</td>
                  <td>Remitir a ORL/Audiología si resultado en alerta</td>
                </tr>
                <tr>
                  <td>Agudeza visual con optotipos morfoscópicos/angulares</td>
                  <td>Tamizaje visual</td>
                  <td>≥6A</td>
                  <td>Personal entrenado (Optometría / Medicina)</td>
                  <td>Remitir si hallazgos alterados [según lineamiento institucional]</td>
                </tr>
                <tr>
                  <td>RQC (tamizaje de riesgo en salud mental)</td>
                  <td>Detección de problemas de salud mental</td>
                  <td>Aplicar si hay riesgo (conducta, rendimiento, convivencia)</td>
                  <td>Medicina / Enfermería / Psicología</td>
                  <td>Activar ruta de salud mental si resultado positivo</td>
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
                  <td>Antropometría OMS (IMC/edad; talla/edad)</td>
                  <td>Clasificar estado nutricional</td>
                  <td>6–11A en cada control</td>
                  <td>Medicina / Enfermería</td>
                  <td>Derivar a nutrición si alteración</td>
                </tr>
                <tr>
                  <td>Percentiles de TA (edad/talla/sexo)</td>
                  <td>Tamizaje de HTA</td>
                  <td>≥3A o indicación clínica</td>
                  <td>Medicina / Enfermería</td>
                  <td>Manejar según percentil y protocolo</td>
                </tr>
                <tr>
                  <td>Hb/Hto</td>
                  <td>Tamizaje de anemia</td>
                  <td>Niñas 10–13A</td>
                  <td>Medicina</td>
                  <td>Tratar/derivar según resultado</td>
                </tr>
                <tr>
                  <td>Riesgo bucal (barniz/sellantes)</td>
                  <td>Prevención de caries</td>
                  <td>6–11A</td>
                  <td>Odontología</td>
                  <td>Barniz 2/año; sellantes si riesgo</td>
                </tr>
              </tbody>
            </table>
            <p style={{color:"var(--recurso-muted)"}}><em>(R3280, págs. 52–53; 115–123)</em></p>
          </section>

          {/* 6) Consejería y educación */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-white recurso-border">
            <h2>💬 Consejería y educación</h2>
            <ul className="recurso-list-tight">
              <li>Preparación para pubertad: cambios corporales; menstruación/eyaculación saludable.</li>
              <li>Estilos de vida: alimentación balanceada; actividad física y deportes; limitar pantallas.</li>
              <li>Prevención de violencia y abuso; comunicación asertiva y establecimiento de límites.</li>
              <li>Prevención de accidentes y de exposición/consumo de SPA.</li>
              <li>Derechos de los niños y mecanismos de exigibilidad; rol activo del padre/cuidador.</li>
            </ul>
          </section>

          {/* 7) Indicadores y errores */}
          <section style={{marginTop:"12px"}} className="recurso-card recurso-vlight">
            <h2>📊 Indicadores & ⚠️ Errores frecuentes</h2>
            <div className="recurso-two">
              <div className="recurso-box recurso-white-bg">
                <h3>Indicadores (≤3)</h3>
                <ul className="recurso-list-tight">
                  <li>Cobertura de atenciones programadas (6–11A).</li>
                  <li>Tamizajes completados (VALE, visual, RQC si riesgo; Hb/Hto en niñas 10–13A).</li>
                  <li>Cobertura de acciones de salud bucal y vacunación según esquema.</li>
                </ul>
              </div>
              <div className="recurso-box recurso-white-bg">
                <h3>Errores frecuentes</h3>
                <ul className="recurso-list-tight">
                  <li>No aplicar RQC ante riesgo de problema mental.</li>
                  <li>No medir TA por percentiles ni registrar antropometría en patrones OMS.</li>
                  <li>Omitir evaluación de columna / búsqueda de TB.</li>
                  <li>No activar rutas (violencias, SPA) cuando corresponde.</li>
                  <li>No indicar Hb/Hto en niñas 10–13A cuando aplica.</li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="recurso-footer">
            <div>Normativa: Resolución 3280/2018 — Intervenciones individuales Infancia (3.3.2, págs. 52–53) y Directrices obligatorias (Atención en Infancia, págs. 115–123).</div>
            <div>Nota de uso: material educativo; no sustituye el juicio clínico ni las políticas institucionales vigentes.</div>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default GuiaInfancia;
