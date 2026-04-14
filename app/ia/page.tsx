const SparkleRed = ({ id }: { id: string }) => (
  <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 16 16" fill="none">
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF5454" />
        <stop offset="100%" stopColor="#FF8C42" />
      </linearGradient>
    </defs>
    <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" fill={`url(#${id})`} />
  </svg>
)

const PatronItem = ({ titulo, desc, prefix, i }: { titulo: string; desc: string; prefix: string; i: number }) => (
  <div className="flex gap-4 p-4 rounded-lg">
    <SparkleRed id={`${prefix}-${i}`} />
    <div>
      <p className="font-semibold text-text-main mb-0.5">{titulo}</p>
      <p className="text-sm" style={{ color: '#686A6C' }}>{desc}</p>
    </div>
  </div>
)

export default function IAPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-eyebrow">IA</span>
        <h1 className="page-title">Escribir con IA en Holded</h1>
        <p className="page-description">
          Los modelos de lenguaje generan texto estadísticamente probable, el que funciona para la mayoría de los casos. El resultado es un estilo genérico, inflado y predecible. Esta sección existe para evitarlo.
        </p>
      </div>

      <nav className="page-toc">
        <a href="#patrones">25 patrones a evitar</a>
        <a href="#vocabulario">Vocabulario prohibido</a>
        <a href="#proceso">Proceso de revisión</a>
        <a href="#checklist">Checklist</a>
        <a href="#ejemplo">Ejemplo</a>
      </nav>

      {/* Patrones */}
      <div id="patrones" className="content-section">
        <h2 className="section-title">25 patrones que hay que evitar</h2>
        <p className="section-description">
          Todos los patrones que se indican a continuación son los que suele generar la IA. <strong>Evítalos todos.</strong>
        </p>

        <h3 className="subsection-title">Patrones de contenido</h3>
        <div className="space-y-1 mb-6">
          {[
            ['Inflación de importancia', 'No "marcando un momento pivotal en la evolución de...". Sí: "se creó en 2015 para automatizar la conciliación bancaria".'],
            ['Menciones de notoriedad gratuitas', 'No "aparece en El País, Expansión y Cinco Días". Sí: "en una entrevista en Expansión de 2024, el CEO explicó...".'],
            ['Análisis superficiales con gerundio', 'No "simbolizando... reflejando... mostrando...". Eliminar o desarrollar con fuentes y datos reales.'],
            ['Lenguaje promocional', 'No "situado en el corazón del ecosistema tecnológico". Sí: "es un software de gestión para pymes en España".'],
            ['Atribuciones vagas', 'No "los expertos creen que juega un papel crucial". Sí: "según una encuesta de 2023 del INE...".'],
            ['Desafíos formulaicos', 'No "a pesar de los desafíos... sigue prosperando". Nombrar el desafío concreto y qué se hizo al respecto.'],
          ].map(([titulo, desc], i) => (
            <PatronItem key={titulo} titulo={titulo} desc={desc} prefix="pc" i={i} />
          ))}
        </div>

        <h3 className="subsection-title">Patrones de lenguaje</h3>
        <div className="space-y-1 mb-6">
          {[
            ['Vocabulario de IA', 'Evitar "además... testimonio... panorama... mostrando... apalancarse... explorar en profundidad...". Usar "también... sigue siendo... sector... muestra".'],
            ['Perífrasis del verbo ser', 'No "sirve como... cuenta con... presume de... se erige como". Sí: "es... tiene... es".'],
            ['Paralelismos negativos', 'No "no es solo X, es Y". Hacer el punto directamente.'],
            ['Regla de tres', 'No "innovación, inspiración e insights". Usar el número natural de elementos; dos o cuatro también está bien.'],
            ['Variación de sinónimos', 'No "protagonista... personaje principal... figura central... héroe". Elegir el término más claro y repetirlo.'],
            ['Rangos falsos', 'No "desde el Big Bang hasta la materia oscura". Listar los temas reales directamente.'],
          ].map(([titulo, desc], i) => (
            <PatronItem key={titulo} titulo={titulo} desc={desc} prefix="pl" i={i} />
          ))}
        </div>

        <h3 className="subsection-title">Patrones de estilo</h3>
        <div className="space-y-1 mb-6">
          {[
            ['Guiones largos', 'No usar nunca el guion largo (—). Sustituir siempre por comas, puntos o dos puntos. No: "las instituciones—no las personas—sin embargo esto continúa". Sí: "las instituciones, no las personas; sin embargo esto continúa".'],
            ['Abuso de negritas', 'No "OKRs, KPIs, CMC". Las negritas solo para énfasis genuino.'],
            ['Listas con cabecera en negrita inline', 'No "Rendimiento: El rendimiento mejoró...". Convertir a prosa o usar encabezados reales.'],
            ['Títulos en Title Case', 'No "Negociaciones Estratégicas Y Alianzas". Sí: "Negociaciones estratégicas y alianzas".'],
            ['Emojis en contenido web o blog', 'Eliminar. Solo se permiten en email y redes sociales, con moderación.'],
            ['Comillas tipográficas curvas', 'Usar siempre comillas rectas.'],
            ['Palabras compuestas con guion innecesario', 'No "cross-functional, data-driven, client-facing". Eliminar el guion o reformular.'],
          ].map(([titulo, desc], i) => (
            <PatronItem key={titulo} titulo={titulo} desc={desc} prefix="pe" i={i} />
          ))}
        </div>

        <h3 className="subsection-title">Patrones de comunicación</h3>
        <div className="space-y-1 mb-6">
          {[
            ['Artefactos de chatbot', 'No "¡Espero que te sea útil! Dime si necesitas algo más...". Eliminar completamente.'],
            ['Disclaimers de corte de conocimiento', 'No "aunque los detalles son limitados en las fuentes disponibles...". Buscar la fuente o eliminar la afirmación.'],
            ['Tono adulador', 'No "¡Buena pregunta! Tienes toda la razón". Responder directamente al punto.'],
          ].map(([titulo, desc], i) => (
            <PatronItem key={titulo} titulo={titulo} desc={desc} prefix="pco" i={i} />
          ))}
        </div>

        <h3 className="subsection-title">Relleno y cobertura</h3>
        <div className="space-y-1 mb-6">
          {[
            ['Frases de relleno', 'No "con el fin de", "debido al hecho de que", "es importante señalar que". Sí: "para", "porque", y hacer el punto directamente.'],
            ['Cobertura excesiva', 'No "podría potencialmente posiblemente". Sí: "puede".'],
            ['Conclusiones genéricas', 'No "el futuro se ve brillante", "nos esperan tiempos emocionantes". Sí: planes concretos, fechas o datos.'],
          ].map(([titulo, desc], i) => (
            <PatronItem key={titulo} titulo={titulo} desc={desc} prefix="pr" i={i} />
          ))}
        </div>
      </div>

      {/* Vocabulario prohibido */}
      <div id="vocabulario" className="content-section">
        <h2 className="section-title">Vocabulario prohibido</h2>
        <p className="section-description">
          Palabras y expresiones que chocan con la voz de Holded. <strong>No usarlas nunca.</strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9CA3AF' }}>En inglés</p>
            <div className="flex flex-wrap gap-2">
              {['leverage', 'testament', 'landscape', 'showcase', 'nestled', 'pivotal', 'groundbreaking', 'seamless', 'empower', 'unlock', 'foster', 'delve', 'tapestry', 'harness', 'beacon', 'bustling', 'moreover', 'furthermore', 'spearhead', 'unpack', 'supercharge', 'game-changer', 'cutting-edge', 'revolutionize', 'at the end of the day', 'it goes without saying', 'needless to say', 'in today\'s rapidly evolving', 'at its core', 'the fact of the matter is'].map(w => (
                <span key={w} className="px-2.5 py-1 bg-white border border-border rounded-full text-sm font-mono" style={{ color: '#EF4444' }}>{w}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9CA3AF' }}>En español</p>
            <div className="flex flex-wrap gap-2">
              {['un testimonio de', 'un pilar fundamental', 'en el panorama actual', 'sin lugar a dudas', 'cabe destacar que', 'es importante señalar que', 'no es de extrañar que', 'en este sentido', 'en la actualidad', 'potenciar de manera integral', 'impulsar de forma transversal', 'en el marco de', 'herramienta transformadora', 'solución integral', 'ecosistema innovador', 'apalancarse en', 'sinergia'].map(w => (
                <span key={w} className="px-2.5 py-1 bg-white border border-border rounded-full text-sm font-mono" style={{ color: '#EF4444' }}>{w}</span>
              ))}
            </div>
          </div>
        </div>

        <h3 className="subsection-title">Sustituciones frecuentes</h3>
        <div className="mb-8 rounded-lg border border-border overflow-hidden bg-white">
          <table className="guide-table">
            <thead>
              <tr><th>En lugar de</th><th>Usar</th></tr>
            </thead>
            <tbody>
              {[
                ['leverage', 'usar'],
                ['showcase', 'mostrar'],
                ['empower', 'ayudar'],
                ['seamless', 'describir qué ocurre realmente'],
                ['landscape', '"sector" o el mercado concreto'],
                ['at its core', 'nada: hacer el punto directamente'],
                ['cabe destacar que', 'nada: enunciar el hecho'],
                ['solución integral', 'lo que realmente hace el producto'],
              ].map(([evita, usa]) => (
                <tr key={evita}>
                  <td className="font-mono" style={{ color: '#EF4444' }}>{evita}</td>
                  <td style={{ color: '#686A6C' }}>{usa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Proceso */}
      <div id="proceso" className="content-section">
        <h2 className="section-title">Proceso de revisión obligatorio</h2>
        <p className="section-description">
          <strong>Todo contenido pasa por este proceso antes de publicarse.</strong>
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              paso: 'Paso 1 · Escribir el primer borrador',
              items: [
                'Seguir los pilares de voz de marca y evitar los 25 patrones anteriores.',
                'Escribir para el segmento de audiencia específico.',
                'Usar datos reales, referencias normativas y ejemplos concretos.',
              ],
            },
            {
              paso: 'Paso 2 · Revisión "¿Es una IA?"',
              items: [
                'Vocabulario prohibido: buscar todas las palabras de las listas anteriores.',
                'Inflación de importancia: ¿alguna frase hace que algo suene más importante de lo que es?',
                'Atribuciones vagas: ¿cada afirmación tiene una fuente, fecha o dato concreto?',
                'Lenguaje promocional: ¿esta frase sobreviviría en Wikipedia?',
                'Variación de sinónimos: ¿se han usado tres palabras distintas para lo mismo?',
                'Regla de tres: ¿hay tripletes sospechosos? ("innovación, inspiración y excelencia")',
                'Artefactos de chatbot: ¿hay algún "espero que te sea útil" o "dime si necesitas algo"?',
                'Frases de relleno: ¿hay algún "con el fin de", "es importante señalar", "debido al hecho de que"?',
                'Conclusiones genéricas: ¿el final hace un punto concreto o simplemente señala el futuro?',
                'Guiones largos: ¿hay algún guion largo (—) en el texto? Reescribir con comas, puntos o dos puntos.',
                'Reescribir cada frase marcada.',
              ],
            },
            {
              paso: 'Paso 3 · Revisión de especificidad',
              items: [
                'Por cada párrafo, preguntar: "¿Podría aparecer este párrafo en el contenido de un competidor sin cambios?" Si la respuesta es sí, es demasiado genérico.',
                'Añadir una funcionalidad o flujo de trabajo concreto de Holded.',
                'Añadir una normativa, fecha o dato real.',
                'Añadir un ejemplo concreto del día a día de la audiencia objetivo.',
              ],
            },
          ].map(({ paso, items }) => (
            <div key={paso} className="p-5 bg-white rounded-lg border border-border">
              <p className="font-semibold text-text-main mb-3">{paso}</p>
              <ul className="space-y-1.5">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#686A6C' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div id="checklist" className="content-section">
        <h2 className="section-title">Checklist de publicación</h2>
        <p className="section-description">
          <strong>Ejecutar antes de finalizar cualquier contenido.</strong>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            'Escrito para una audiencia específica (pymes, autónomos, asesorías, solution partners o público general).',
            'Usa "tú", no "usted".',
            'Sin palabras del vocabulario prohibido.',
            'Cada afirmación tiene una fuente, número o detalle concreto.',
            'Sin inflación de importancia: las cosas son lo que son.',
            'Sin variación de sinónimos: un término por concepto.',
            'Sin tripletes de regla de tres salvo que sean realmente tres elementos.',
            'Sin artefactos de chatbot ni frases de relleno.',
            'Encabezados en sentence case, no en Title Case.',
            'Sin emojis en web ni blog.',
            'Sin guiones largos en ningún caso.',
            'La conclusión es específica, no genérica.',
            'Ha pasado la revisión "¿Es una IA?" (paso 2).',
            'Ha pasado la revisión de especificidad (paso 3).',
            'Keyword principal en título, meta description, primer párrafo y un H2.',
            'Meta description de menos de 155 caracteres con keyword y beneficio.',
            'Entre 3 y 5 enlaces internos a contenido relacionado de Holded.',
            'Las secciones empiezan con una respuesta directa antes de desarrollar (AEO).',
            'Los términos clave tienen snippets de definición que la IA puede extraer.',
            'Sección FAQ con <AccordionMDX> si se responden 3 o más preguntas.',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-border text-sm">
              <span className="w-4 h-4 rounded border-2 border-border flex-shrink-0 mt-0.5" />
              <span style={{ color: '#686A6C' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ejemplo */}
      <div id="ejemplo" className="content-section">
        <h2 className="section-title">Ejemplo completo</h2>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-text-main mb-3">Antes (suena a IA)</p>
            <div className="example-block example-dont">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#EF4444' }}>No</p>
              <p className="mb-3">¡Gran pregunta! Aquí tienes un artículo sobre este tema. ¡Espero que te sea útil!</p>
              <p className="mb-3">La facturación electrónica sirve como un testimonio perdurable del potencial transformador de la digitalización, marcando un momento pivotal en la evolución de la gestión empresarial. En el panorama tecnológico actual, en rápida evolución, estas herramientas innovadoras están redefiniendo cómo las empresas idean, iteran y entregan, subrayando su papel vital en los flujos de trabajo modernos.</p>
              <p>En su esencia, la propuesta de valor es clara: agilizar procesos, potenciar la colaboración y fomentar la alineación. No se trata solo de automatizar facturas; se trata de desbloquear la eficiencia a escala. Cabe destacar que, a pesar de los desafíos típicos de las tecnologías emergentes, el ecosistema sigue prosperando. En conclusión, el futuro se ve brillante.</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-text-main mb-3">Después (voz Holded)</p>
            <div className="example-block example-do">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#16A34A' }}>Sí</p>
              <p className="mb-3">La factura electrónica será obligatoria en España para todas las operaciones entre empresas y autónomos a partir de 2026, según la Ley Crea y Crece (Ley 18/2022).</p>
              <p className="mb-3">En la práctica, esto significa que cada factura que emitas tendrá que ir en formato estructurado (Facturae 3.2.x), firmada electrónicamente y enviada a través de una plataforma de intercambio autorizada. Si ya facturas con Holded, la mayor parte del trabajo ya está hecho: el sistema genera facturas en el formato correcto y las envía automáticamente.</p>
              <p className="mb-2 font-semibold">Lo que sí tienes que hacer ahora:</p>
              <ul className="space-y-1">
                {[
                  'Comprueba que tu certificado digital está vigente (FNMT o DNIe).',
                  'Activa la facturación electrónica en Ajustes > Facturación.',
                  'Envía una factura de prueba a tu asesor para verificar que el formato es correcto.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-0.5">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">Si trabajas con una asesoría, pueden acceder a tus facturas directamente desde su panel de Holded, sin que tengas que enviar PDFs por email.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
