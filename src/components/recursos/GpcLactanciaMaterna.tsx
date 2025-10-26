import './styles.css';

const GpcLactanciaMaterna = () => {
  const fechaAct = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: '2-digit' });

  return (
    <div className="recurso-container">
      <div className="recurso-page">
        <div className="recurso-inner">
          <article id="gpc-lactancia">
            {/* Encabezado principal */}
            <header className="recurso-hero">
              <div>
                <div className="recurso-chips">
                  <span className="recurso-chip">🩺 Guía de práctica clínica resumida</span>
                </div>
                <h1>Lactancia Materna (RPMS)</h1>
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
                    <p>Valorar la práctica de lactancia materna, <strong>promover y apoyar la lactancia materna exclusiva</strong> y resolver barreras, asegurando un inicio, mantenimiento y continuidad adecuados.</p>
                  </div>
                  <div>
                    <h2>🎯 Alcance y población</h2>
                    <p>Niñas y niños y sus madres entre <strong>8 y 30 días</strong> del nacimiento; y entre <strong>1 y 6 meses</strong>, según criterio del profesional.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2) Intervenciones clave */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>2️⃣ Intervenciones clave</h2>
                <ul style={{ marginTop: '8px' }}>
                  <li>✅ <strong>Evaluar y promover</strong> lactancia materna exclusiva (técnica: posición, agarre, succión)</li>
                  <li>🧭 <strong>Consejería personalizada</strong> basada en hallazgos (ajuste de técnica, manejo de problemas)</li>
                  <li>🍼 <strong>Extracción, conservación y transporte</strong> de leche materna cuando aplique</li>
                  <li>📈 <strong>Seguimiento del crecimiento</strong> y estado nutricional del RN/lactante</li>
                  <li>🤝 <strong>Articulación</strong> con Banco de Leche Humana, RIAS, servicios resolutivos</li>
                  <li>🧾 <strong>Notificación</strong> de eventos de interés en salud pública identificados</li>
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
                      <li>Valoración práctica de lactancia</li>
                      <li>Consejería y educación</li>
                      <li>Apoyo a extracción/almacenamiento</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>👨‍⚕️ Medicina</h3>
                    <ul className="recurso-list-tight">
                      <li>Evaluación integral del binomio</li>
                      <li>Manejo/remisión de complicaciones</li>
                      <li>Coordinación con RIAS</li>
                    </ul>
                  </div>
                  <div className="recurso-box recurso-white-bg">
                    <h3>🥗 Nutrición</h3>
                    <ul className="recurso-list-tight">
                      <li>Evaluación antropométrica</li>
                      <li>Educación alimentaria</li>
                      <li>Apoyo en dificultades de LM</li>
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
                      <th>Población/Edad</th>
                      <th>Frecuencia</th>
                      <th>Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Valoración y consejería en LM</strong></td>
                      <td>Madre–RN 8–30 días</td>
                      <td>En el contacto programado</td>
                      <td>Confirmar técnica (posición/agarre/succión), revisar signos de saciedad.</td>
                    </tr>
                    <tr>
                      <td><strong>Seguimiento LM exclusiva</strong></td>
                      <td>Lactante 1–6 meses</td>
                      <td>Según criterio del profesional</td>
                      <td>Reforzar técnica, resolver barreras, verificar ganancia de peso.</td>
                    </tr>
                    <tr>
                      <td><strong>Extracción y conservación</strong></td>
                      <td>Retorno a estudio/trabajo</td>
                      <td>Cuando aplique</td>
                      <td>Indicar tiempos, almacenamiento y transporte; opciones de apoyo (BLH).</td>
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
                  <li><strong>Anamnesis</strong>: preparación prenatal, inicio de LM, expectativas, frecuencia, técnica, barreras</li>
                  <li><strong>Examen físico</strong>: verificación de técnica con instrumento; valoración de mamas; peso del RN/lactante</li>
                  <li><strong>Información para la salud</strong>: beneficios de LM; extracción, conservación; manejo de problemas comunes</li>
                  <li><strong>Plan de cuidado</strong>: metas concertadas con madre/familia; apoyo práctico; manejo/remisión de complicaciones</li>
                  <li><strong>Articulación</strong>: RIAS, servicios resolutivos, PIC, grupos de apoyo LM, BLH</li>
                  <li><strong>Notificación</strong>: registrar y notificar EISP cuando aplique</li>
                </ol>
              </div>
            </section>

            {/* 6) Derivación */}
            <section style={{ marginTop: '12px' }}>
              <div className="recurso-card recurso-vlight">
                <h2>6️⃣ Derivación (criterios y destino)</h2>
                <ul style={{ marginTop: '8px', fontSize: '13px' }}>
                  <li><strong>Consulta médica resolutiva</strong>: signos de infección mamaria (mastitis), dolor severo, fiebre</li>
                  <li><strong>Nutrición</strong>: ganancia ponderal inadecuada, transición a alimentación complementaria</li>
                  <li><strong>Banco de Leche Humana</strong>: donación/recepción de LM; apoyo a extracción</li>
                  <li><strong>Trabajo social/PIC</strong>: barreras de acceso, grupos de apoyo para madres lactantes</li>
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
                      <li>Beneficios de la LM para madre y bebé</li>
                      <li>Técnica correcta (posición/agarre/succión)</li>
                      <li>Frecuencia/duración; señales de hambre/saciedad</li>
                    </ul>
                  </div>
                  <div>
                    <ul style={{ fontSize: '13px' }}>
                      <li>Extracción, conservación y transporte seguros</li>
                      <li>Manejo de problemas comunes (poca leche, grietas, mastitis)</li>
                      <li>Inicio oportuno de alimentación complementaria</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="recurso-footer">
              <p><strong>Información obtenida de:</strong> <em>Resolución 3280 de 2018</em>, <strong>8. Atención en salud para la valoración, promoción y apoyo de la lactancia materna</strong>, pp. 164–167.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default GpcLactanciaMaterna;
