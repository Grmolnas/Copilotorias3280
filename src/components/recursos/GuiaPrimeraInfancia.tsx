const GuiaPrimeraInfancia = () => {
  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          {/* Encabezado principal */}
          <section className="recurso-hero">
            <div>
              <h1>📘 Guía resumida — Primera Infancia (RPMS)</h1>
              <div className="recurso-chips">
                <span className="recurso-chip">R3280/2018</span>
                <span className="recurso-chip">Curso de vida: Primera Infancia</span>
                <span className="recurso-chip">Formato: Guía</span>
              </div>
            </div>
            <div className="recurso-meta">
              <div><b>Versión/Fecha:</b> v1.2 — 2025-10-25</div>
              <div><b>Código:</b> r3280_rpms_primera-infancia_guia_v20251025</div>
              <div><b>Tiempo de lectura:</b> 2–3 min</div>
            </div>
          </section>

          {/* 1) Propósito y Alcance */}
          <section className="recurso-two" style={{ marginTop: '12px' }}>
            <div className="recurso-card">
              <h2>🎯 Propósito</h2>
              <p>Estandarizar acciones de valoración integral, detección temprana de alteraciones y protección específica en niñas y niños de Primera Infancia, para garantizar el desarrollo integral y prevenir riesgos. Dirigida a medicina general/familiar, pediatría y enfermería. <em>(R3280, págs. 49–52; 105–115)</em></p>
            </div>
            <div className="recurso-card">
              <h2>👶 Alcance / Población</h2>
              <p>Desde <b>8 días</b> hasta <b>5 años, 11 meses y 29 días</b>. Incluye: crecimiento y desarrollo; nutrición; salud auditiva/comunicativa, visual, bucal y sexual; vacunación; micronutrientes/desparasitación; educación a cuidadores. <em>(R3280, págs. 49–52; 105–115)</em></p>
            </div>
          </section>

          {/* 2) Intervenciones clave */}
          <section style={{ marginTop: '12px' }} className="recurso-card recurso-white recurso-border">
            <h2>✅ Intervenciones clave</h2>
            <ul className="recurso-list-tight">
              <li className="recurso-bullet"><i>🧠</i><span>Valorar desarrollo físico, cognitivo y socioemocional; aplicar EAD-3 por control.</span></li>
              <li className="recurso-bullet"><i>💉</i><span>Verificar y completar esquema de vacunación vigente.</span></li>
              <li className="recurso-bullet"><i>🍎</i><span>Ordenar fortificación/suplementación con micronutrientes y desparasitación según edad/riesgo.</span></li>
              <li className="recurso-bullet"><i>🔊</i><span>Tamizajes: auditivo neonatal; m-CHAT 18–30 meses; agudeza visual ≥3 años; VALE para salud auditiva/comunicativa.</span></li>
              <li className="recurso-bullet"><i>🦷</i><span>Salud bucal: barniz de flúor 2/año y sellantes según riesgo.</span></li>
              <li className="recurso-bullet"><i>👪</i><span>Consejería a cuidadores en crianza protectora, hábitos saludables, lactancia y signos de alarma.</span></li>
              <li className="recurso-bullet"><i>📊</i><span>Registrar e implementar indicadores de cumplimiento y calidad.</span></li>
            </ul>
          </section>

          {/* 3) Roles y competencias */}
          <section style={{ marginTop: '12px' }} className="recurso-card recurso-vlight">
            <h2>🩺 Roles y competencias</h2>
            <div className="recurso-three">
              <div className="recurso-box">
                <h3>👨‍⚕️ Medicina / Pediatría</h3>
                <ul className="recurso-list-tight">
                  <li>Valoración integral, diagnóstico, prescripción y remisiones.</li>
                  <li>Plan de manejo y seguimiento.</li>
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
                  <li>Atención anual desde 6 meses; barniz 2/año; sellantes según riesgo.</li>
                  <li>Agudeza visual por personal entrenado (≥3 años).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4) Periodicidad y actividades */}
          <section style={{ marginTop: '12px' }} className="recurso-card recurso-white recurso-border">
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
                  <td>1M, 4–5M, 9–11M, 18–23M, 24–29M, 30–35M, 3A, 5A</td>
                  <td>8 atenciones</td>
                </tr>
                <tr>
                  <td>Enfermería</td>
                  <td>2–3M, 6–8M, 12–18M, 24–29M, 30–35M, 4A</td>
                  <td>6 atenciones</td>
                </tr>
                <tr>
                  <td>Odontología</td>
                  <td>≥6 meses</td>
                  <td>1 vez/año</td>
                </tr>
                <tr>
                  <td>Apoyo a lactancia</td>
                  <td>1 mes</td>
                  <td>Según hallazgos</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 4b) Protección específica y suministro */}
          <section style={{ marginTop: '12px' }} className="recurso-card recurso-white recurso-border">
            <h2>🛡️ Protección específica y suministro</h2>
            <table className="recurso-table">
              <thead>
                <tr>
                  <th>Intervención</th>
                  <th>Edad / Criterio</th>
                  <th>Frecuencia / Dosis</th>
                  <th>Notas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vacunación</td>
                  <td>Esquema vigente</td>
                  <td>Según PAI</td>
                  <td>Completar pendientes</td>
                </tr>
                <tr>
                  <td>Fortificación casera (MNP)</td>
                  <td>6–23M</td>
                  <td>Ciclos cada 6 meses</td>
                  <td>Ordenar y verificar adherencia</td>
                </tr>
                <tr>
                  <td>Suplementación hierro y Vitamina A</td>
                  <td>24–59M</td>
                  <td>2 veces/año</td>
                  <td>Vit A 200.000 UI (única), hierro según esquema</td>
                </tr>
                <tr>
                  <td>Desparasitación antihelmíntica</td>
                  <td>≥12M (12–23M: esquema preescolar)</td>
                  <td>2 veces/año</td>
                  <td>Albendazol 200 mg VO (12–23M)</td>
                </tr>
                <tr>
                  <td>Tamizaje auditivo neonatal</td>
                  <td>RN</td>
                  <td>≤24h o antes del egreso</td>
                  <td>Si no se realizó, garantizar ≤3M</td>
                </tr>
                <tr>
                  <td>Barniz de flúor</td>
                  <td>≥1A</td>
                  <td>2 veces/año</td>
                  <td>Prevención de caries</td>
                </tr>
                <tr>
                  <td>Sellantes</td>
                  <td>3–15A</td>
                  <td>Según riesgo</td>
                  <td>Fosas y fisuras profundas</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 5) Procedimiento y Derivación */}
          <section style={{ marginTop: '12px' }} className="recurso-card">
            <h2>🔄 Procedimiento y Derivación</h2>
            <div className="recurso-two">
              <div className="recurso-box recurso-white-bg">
                <h3>Procedimiento (cómo)</h3>
                <ol style={{ margin: '4px 0 8px 18px' }}>
                  <li>Anamnesis (exposición a humo, fármacos, antecedentes perinatales).</li>
                  <li>Verificar tamizaje neonatal (auditivo, metabólico, cardiopatía congénita).</li>
                  <li>Hitos del desarrollo; aplicar <b>EAD-3</b> y <b>m-CHAT 18–30M</b>.</li>
                  <li>Examen físico completo; TA si ≥3A o indicado; búsqueda de TB si hay sospecha.</li>
                  <li>Antropometría con patrones OMS; actuar ante alteraciones.</li>
                  <li>Agudeza visual con optotipos desde 3A; inspección/otoscopia; <b>VALE</b> si aplica.</li>
                  <li>Salud bucal: barniz/sellantes según edad y riesgo.</li>
                  <li>Evaluación familiar: <b>APGAR</b>, Familiograma y Ecomapa; rutas de protección si hay sospecha de violencia.</li>
                </ol>
                <p style={{ color: 'var(--recurso-muted)' }}><em>(R3280, págs. 105–115)</em></p>
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
                      <td>Alteración del desarrollo o m-CHAT positivo</td>
                      <td>Pediatría / Neurodesarrollo</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>Tamizaje auditivo/visual anormal o pendiente</td>
                      <td>ORL/Audiología / Optometría</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>Alteración nutricional en patrones OMS</td>
                      <td>Nutrición / Programa de riesgo</td>
                      <td>Prioritario</td>
                    </tr>
                    <tr>
                      <td>Sospecha de violencia</td>
                      <td>Ruta de violencias / Trabajo social</td>
                      <td>Inmediato</td>
                    </tr>
                    <tr>
                      <td>Enfermedad aguda grave/compleja</td>
                      <td>Urgencias / Mayor nivel</td>
                      <td>Inmediato</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 5b) Instrumentos de obligatorio cumplimiento */}
          <section style={{ marginTop: '12px' }} className="recurso-card recurso-white recurso-border">
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
                  <td>EAD-3</td>
                  <td>Evaluación del desarrollo</td>
                  <td>En cada control</td>
                  <td>Medicina / Enfermería</td>
                  <td>Derivar a neurodesarrollo si alteración</td>
                </tr>
                <tr>
                  <td>m-CHAT</td>
                  <td>Tamizaje de TEA</td>
                  <td>18–30 meses</td>
                  <td>Medicina / Enfermería</td>
                  <td>Derivar según resultado positivo</td>
                </tr>
                <tr>
                  <td>VALE</td>
                  <td>Tamizaje auditivo/comunicativo</td>
                  <td>Según sospecha / hallazgo</td>
                  <td>Medicina / Enfermería</td>
                  <td>Remitir a ORL/Audiología si alerta</td>
                </tr>
                <tr>
                  <td>Agudeza visual (optotipos)</td>
                  <td>Tamizaje visual</td>
                  <td>≥3 años</td>
                  <td>Optometría / Medicina</td>
                  <td>Remitir si alteración</td>
                </tr>
                <tr>
                  <td>Antropometría OMS</td>
                  <td>Clasificar estado nutricional</td>
                  <td>En cada control</td>
                  <td>Medicina / Enfermería</td>
                  <td>Derivar si alteración</td>
                </tr>
                <tr>
                  <td>Percentiles de TA</td>
                  <td>Tamizaje de HTA</td>
                  <td>≥3 años o indicación clínica</td>
                  <td>Medicina / Enfermería</td>
                  <td>Manejar/derivar según percentil</td>
                </tr>
                <tr>
                  <td>Tamizaje auditivo neonatal</td>
                  <td>Detección de hipoacusia</td>
                  <td>Ideal ≤24h; garantizar ≤3M si pendiente</td>
                  <td>Equipo de salud / Hospitalario</td>
                  <td>Remitir a confirmación/seguimiento</td>
                </tr>
                <tr>
                  <td>APGAR Familiar</td>
                  <td>Funcionalidad familiar</td>
                  <td>Cuando aplique o ante sospecha</td>
                  <td>Medicina / Enfermería</td>
                  <td>Orientación/derivación según puntaje</td>
                </tr>
                <tr>
                  <td>Familiograma / Ecomapa</td>
                  <td>Redes y dinámica familiar</td>
                  <td>Según necesidad</td>
                  <td>Equipo de salud</td>
                  <td>Articulación intersectorial</td>
                </tr>
              </tbody>
            </table>
            <p style={{ color: 'var(--recurso-muted)' }}><em>(R3280, págs. 49–52; 105–115)</em></p>
          </section>

          {/* 6) Consejería y educación */}
          <section style={{ marginTop: '12px' }} className="recurso-card recurso-white recurso-border">
            <h2>💬 Consejería y educación</h2>
            <ul className="recurso-list-tight">
              <li>Lactancia materna exclusiva hasta 6 meses; técnica y señales de buen amamantamiento.</li>
              <li>Prevención de muerte súbita: posición supina; evitar colecho inseguro; ambiente libre de humo.</li>
              <li>Hábitos saludables: sueño, juego activo, limitar pantallas.</li>
              <li>Completar vacunas y tamizajes; señales de alarma y cuándo consultar.</li>
              <li>Fortalecer redes de apoyo y derechos de la niñez.</li>
            </ul>
          </section>

          {/* 7) Indicadores y errores */}
          <section style={{ marginTop: '12px' }} className="recurso-card recurso-vlight">
            <h2>📊 Indicadores & ⚠️ Errores frecuentes</h2>
            <div className="recurso-two">
              <div className="recurso-box recurso-white-bg">
                <h3>Indicadores (≤3)</h3>
                <ul className="recurso-list-tight">
                  <li>Cobertura de controles por edad (cronograma cumplido).</li>
                  <li>Tamizajes completados en tiempo (auditivo neonatal, EAD-3, m-CHAT, VALE, visual ≥3A).</li>
                  <li>Vacunas completas y protección específica (micronutrientes/desparasitación).</li>
                </ul>
              </div>
              <div className="recurso-box recurso-white-bg">
                <h3>Errores frecuentes</h3>
                <ul className="recurso-list-tight">
                  <li>No garantizar tamizaje auditivo ≤3M si no se realizó al nacer.</li>
                  <li>Omitir TA cuando está indicada.</li>
                  <li>No aplicar m-CHAT 18–30M ni registrar EAD-3 por control.</li>
                  <li>No actuar ante alteraciones antropométricas.</li>
                  <li>No activar ruta de violencias ante sospecha.</li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="recurso-footer">
            <div>Normativa: Resolución 3280/2018 — Intervenciones individuales Primera Infancia (3.3.1, págs. 49–52) y Directrices obligatorias (Atención en Primera Infancia, págs. 105–115).</div>
            <div>Nota de uso: material educativo; no sustituye el juicio clínico ni las políticas institucionales vigentes.</div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default GuiaPrimeraInfancia;
