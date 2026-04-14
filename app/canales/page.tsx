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

const EjemploGrid = ({ mal, bien }: { mal: string; bien: string }) => (
  <div className="example-grid">
    <div className="example-block example-dont">
      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#EF4444' }}>No</p>
      <p>{mal}</p>
    </div>
    <div className="example-block example-do">
      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#16A34A' }}>Sí</p>
      <p>{bien}</p>
    </div>
  </div>
)

const ReglaList = ({ items, prefix }: { items: string[]; prefix: string }) => (
  <div className="space-y-2 mb-6">
    {items.map((item, i) => (
      <div key={i} className="flex gap-4 p-3 rounded-xl">
        <SparkleRed id={`${prefix}-${i}`} />
        <p style={{ color: '#686A6C' }}>{item}</p>
      </div>
    ))}
  </div>
)

export default function CanalesPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-eyebrow">Canales</span>
        <h1 className="page-title">Guías por canal</h1>
        <p className="page-description">
          Normas específicas para escribir en cada canal: web, SEO y email. El tono varía, las reglas de voz no.
        </p>
      </div>

      <nav className="page-toc">
        <a href="#web">Web</a>
        <a href="#seo">SEO</a>
        <a href="#email">Email y newsletters</a>
      </nav>

      {/* WEB */}
      <div id="web" className="content-section">
        <h2 className="section-title">Reglas de escritura para la web</h2>
        <p className="section-description">
          El objetivo principal del copy web es <strong>informar de lo que se vende y convertir para prueba gratuita</strong>.
        </p>

        {/* Tipos de página */}
        <h3 className="subsection-title">Tipos de página</h3>
        <div className="space-y-2 mb-8">
          {[
            ['Funcionalidades', 'Explican una funcionalidad concreta del producto.'],
            ['De audiencia', 'Dirigidas a un perfil específico (autónomos, sectores, asesorías).'],
            ['De recursos', 'Webinars, guías, contenido descargable.'],
            ['De performance', 'Páginas de campaña, puramente orientadas a convertir.'],
            ['Especiales', 'Home y pricing.'],
          ].map(([tipo, desc], i) => (
            <div key={i} className="flex gap-4 p-3 rounded-xl">
              <SparkleRed id={`tipo-${i}`} />
              <div>
                <span className="font-semibold text-text-main">{tipo}: </span>
                <span style={{ color: '#686A6C' }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="section-description">
          La estructura y el lenguaje varían según la audiencia, pero todas comparten secciones que se repiten con reglas propias.
        </p>

        {/* Hero */}
        <h3 className="subsection-title">Sección Hero</h3>
        <p className="section-description">
          El Hero define la expectativa de toda la página. Debe comunicar <strong>qué hace la funcionalidad y qué beneficio tiene en menos de 5 segundos de lectura</strong>. Si la persona usuaria no hace más scroll, debe saber en qué consiste toda la página.
        </p>

        <h4 className="text-base font-semibold text-text-main mt-6 mb-2">H1</h4>
        <p className="section-description">
          <strong>Fórmula:</strong> verbo de acción + beneficio para el cliente. <strong>Longitud:</strong> 4 a 8 palabras. <strong>Tono:</strong> directo, rotundo, orientado al beneficio. Sin jerga, sin relleno.
        </p>
        <ReglaList prefix="h1" items={[
          'Empezar siempre con un verbo en imperativo o con un sustantivo de acción.',
          'El beneficio debe ser tangible, concreto y relevante para el cliente, no una característica del producto.',
          'Si es posible, incluir un dato cuantificable (tiempo, porcentaje, número de pasos).',
          'Usar solo mayúscula inicial.',
          'Se puede usar la negación como recurso ("Olvídate de...", "Sin...") para enfatizar el alivio del pain point.',
          'Nunca prometer con el titular sin un subtítulo que baje a tierra cómo se cumple esa promesa.',
        ]} />
        <EjemploGrid
          mal="Optimiza la gestión de nóminas de tu empresa de forma eficiente."
          bien='Genera nóminas en 5 segundos. / Olvídate de registrar tus gastos a mano. / Control horario que cumple la ley sin complicaciones.'
        />

        <h4 className="text-base font-semibold text-text-main mt-8 mb-2">Subheadline</h4>
        <p className="section-description">
          <strong>Longitud:</strong> 20 a 35 palabras (máximo 2 oraciones cortas). <strong>Tono:</strong> conversacional, concreto, sin adornos. Habla de lo que ocurre en la práctica.
        </p>
        <ReglaList prefix="subh" items={[
          'Complementa el headline, no lo repitas ni lo parafrasees.',
          'Describe el mecanismo o el resultado en términos operativos y cotidianos.',
          'Menciona el contexto del usuario (equipo, herramienta, proceso) si es relevante.',
          'Se puede usar la estructura "X hace Y. Tú consigues Z" para separar el cómo del para qué.',
          'Evitar superlativos ("el mejor", "el más potente", "revolucionario").',
          'Evitar lenguaje corporativo ("optimiza", "potencia", "gestiona eficientemente").',
        ]} />
        <EjemploGrid
          mal='"Nuestra plataforma de última generación optimiza los procesos contables de tu empresa de forma eficiente y segura."'
          bien='"El escáner de Holded digitaliza tickets y facturas al instante, extrae los datos y los deja listos para Hacienda." / "Tus empleados fichan desde el móvil en un clic. Tú tienes los registros siempre en orden, sin papeles ni Excel."'
        />

        {/* Key Benefit */}
        <h3 className="subsection-title">Sección Key Benefit</h3>
        <p className="section-description">
          El Key Benefit amplía el valor prometido en el Hero. Debe responder a: <strong>"¿Qué gano yo con esto en mi día a día?"</strong>. Es la propuesta principal y diferencial de valor de Holded.
        </p>

        <h4 className="text-base font-semibold text-text-main mt-6 mb-2">Headline del Key Benefit</h4>
        <p className="section-description">
          <strong>Fórmula:</strong> resultado concreto + contexto o condición. <strong>Longitud:</strong> 4 a 10 palabras. <strong>Tono:</strong> directo, rotundo, orientado al resultado.
        </p>
        <div className="space-y-3 mb-6">
          <div className="p-5 bg-white rounded-xl border border-border">
            <p className="font-semibold text-text-main mb-1">Variante A — resultado concreto</p>
            <p className="text-sm" style={{ color: '#686A6C' }}>Nombra directamente el beneficio o resultado para el usuario. Puede incluir datos o condiciones que refuercen el valor. Admite listas separadas por comas para condensar varios beneficios.</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-border">
            <p className="font-semibold text-text-main mb-1">Variante B — invitación a la acción</p>
            <p className="text-sm" style={{ color: '#686A6C' }}>Usa un imperativo que invite al usuario a imaginar el escenario completo. Recomendada cuando el bloque describe una propuesta de valor amplia o integradora, no un beneficio puntual.</p>
          </div>
        </div>
        <EjemploGrid
          mal='"Descubre nuestra avanzada funcionalidad de generación de nóminas" / "Optimiza el proceso contable de tu empresa de forma eficiente"'
          bien='"Gratis, sin límites, en todos los planes" (A) / "Nóminas con diseño impecable y generación masiva" (A) / "Hazlo todo a través de Holded" (B)'
        />

        <h4 className="text-base font-semibold text-text-main mt-8 mb-2">Subtitular del Key Benefit</h4>
        <p className="section-description">
          <strong>Longitud:</strong> 30 a 60 palabras (2 a 3 oraciones). <strong>Tono:</strong> conversacional, operativo, cercano.
        </p>
        <ReglaList prefix="kb-sub" items={[
          'La primera oración puede usar la negación para conectar con el pain point ("Olvídate de errores manuales...").',
          'La segunda oración explica el mecanismo de forma simple y directa.',
          'Puede terminar con el resultado final para el usuario ("para que tus números cuadren", "sin que tengas que hacer nada").',
          'Evitar tecnicismos y lenguaje de producto ("pipeline", "módulo", "instancia").',
          'No repetir palabras clave del H2.',
        ]} />
        <EjemploGrid
          mal='"Nuestra plataforma utiliza algoritmos avanzados de procesamiento para optimizar la gestión contable y minimizar los errores en los flujos de trabajo."'
          bien='"Olvídate de errores manuales y tareas repetitivas. Con la información configurada, procesa todas las nóminas; cada una genera asientos contables automáticos para que tus números cuadren."'
        />

        {/* Features */}
        <h3 className="subsection-title">Sección Features</h3>
        <p className="section-description">
          Las secciones de features desarrollan en detalle las funcionalidades del producto. Cada bloque debe responder a: <strong>"¿Cómo funciona esto exactamente y qué me ahorra?"</strong>.
        </p>

        <h4 className="text-base font-semibold text-text-main mt-6 mb-2">Headline agrupador de sección</h4>
        <p className="section-description">
          <strong>Fórmula:</strong> recorrido del estado actual al estado deseado + condición de facilidad. <strong>Longitud:</strong> 6 a 10 palabras.
        </p>
        <ReglaList prefix="feat-h" items={[
          'Describe la transformación completa, no una sola funcionalidad.',
          'Se puede usar la estructura "De X a Y" o "Todo lo que necesitas para Z".',
          'Se puede incluir la negación al final para reforzar la facilidad ("sin tocar nada", "sin esfuerzo manual").',
          'Sin punto al final.',
        ]} />
        <EjemploGrid
          mal='"Funcionalidades avanzadas de gestión contable y fiscal" / "Descubre todas las herramientas de Holded para tu empresa"'
          bien='"Del ticket a tu contabilidad, sin tocar nada" / "Todo lo que necesitas para fichar" / "Control fiscal y pagos con un solo clic"'
        />

        <h4 className="text-base font-semibold text-text-main mt-8 mb-2">Headline de feature individual</h4>
        <p className="section-description">
          <strong>Fórmula principal:</strong> nombre de la funcionalidad + dos puntos + beneficio directo. <strong>Fórmula alternativa:</strong> verbo de acción + resultado concreto. <strong>Longitud:</strong> 4 a 8 palabras.
        </p>
        <ReglaList prefix="feat-ind" items={[
          'La fórmula con dos puntos permite nombrar la funcionalidad y su beneficio en una sola línea. Usarla cuando el nombre de la feature necesita contexto.',
          'La fórmula alternativa es más narrativa y se recomienda para features de uso cotidiano.',
          'El beneficio siempre en lenguaje del usuario, no del producto.',
          'Se puede usar contraste o paradoja para generar impacto ("Tú mandas, la IA trabaja").',
          'Sin punto al final.',
        ]} />
        <EjemploGrid
          mal='"Sistema avanzado de control de modificaciones laborales" / "Funcionalidad de geolocalización para el registro horario"'
          bien='"Centro de Modificaciones: adiós al caos de emails" / "Ficha estés donde estés" / "Tú mandas, la IA trabaja"'
        />

        <h4 className="text-base font-semibold text-text-main mt-8 mb-2">Subtitulares de features</h4>
        <p className="section-description">
          <strong>Longitud:</strong> 20 a 50 palabras (2 a 3 oraciones cortas). <strong>Tono:</strong> operativo, cotidiano, cercano.
        </p>
        <ReglaList prefix="feat-sub" items={[
          'Describir qué hace el usuario y qué hace el sistema como consecuencia, en ese orden.',
          'Usar verbos de acción cotidianos: subir, arrastrar, hacer una foto, fichar, registrar, descargar.',
          'Puede terminar con el resultado final para el usuario: tranquilidad, cumplimiento, ahorro de tiempo.',
          'Evitar describir la arquitectura técnica del sistema.',
          'Puede mencionar integraciones o contextos específicos si son relevantes ("ante una inspección", "sin papeles ni Excel").',
        ]} />
        <EjemploGrid
          mal='"Nuestra plataforma procesa los documentos mediante algoritmos de OCR y machine learning para extraer y categorizar los datos automáticamente."'
          bien='"Envía tus gastos por email, arrastra un archivo desde tu ordenador o haz una foto rápida con la app." / "La IA de Holded reconoce los datos, pero el control final siempre es tuyo."'
        />

        <h4 className="text-base font-semibold text-text-main mt-8 mb-2">CTA de feature (opcional)</h4>
        <p className="section-description">
          No todas las features necesitan CTA. Incluirlo cuando la feature tenga suficiente peso para merecer exploración independiente.
        </p>
        <ReglaList prefix="feat-cta" items={[
          'Link de texto con flecha: "Descubre gratis Mi zona →" / "Pruébalo gratis →".',
          'Botón primario: "Empieza gratis".',
          'El link de texto es preferible dentro de bloques de features. Reservar el botón para features destacadas.',
          'El texto del CTA debe ser específico cuando sea posible. Evitar CTAs genéricos ("Saber más", "Ver más").',
          'Siempre en minúscula, salvo nombres propios.',
        ]} />

        {/* Banners */}
        <h3 className="subsection-title">Banners</h3>
        <ReglaList prefix="banner" items={[
          'Cada banner: una idea + una acción. Sin más.',
          'Titulares de máximo 8 palabras. Si hay subtítulo debe tener el beneficio explícito en una frase.',
          'Siempre ofrecer una razón para clicar ("sin tarjeta", "gratis", "en 5 minutos").',
          'Sustituir claims vagos por datos reales. No "Nuevas funciones cada mes", sí "Actualizamos Holded cada semana con mejoras visibles".',
          'Sin signos de exclamación. Sin urgencia forzada.',
          'CTAs en parejas solo cuando el usuario puede estar en dos estadios: probar o hablar con alguien.',
        ]} />

        {/* CTAs */}
        <h3 className="subsection-title">CTA para web</h3>
        <p className="section-description">
          En cada página hay <strong>un único botón primario</strong>: el que tiene mayor peso visual y jerárquico. Esto no significa que solo haya un botón en toda la página, sino que todos los demás tienen menor peso y un papel claro de apoyo.
        </p>
        <p className="section-description">
          La regla es de <strong>jerarquía, no de cantidad</strong>: siempre debe quedar claro cuál es la acción principal, cuál es la secundaria y cuáles son de exploración.
        </p>

        <div className="space-y-3 mb-6">
          {[
            {
              nivel: 'Nivel 1 · CTA de conversión (botón primario)',
              desc: 'El más importante. Aparece en el hero y se repite al final de cada página.',
              items: [
                '"Empieza gratis": para la mayoría de páginas.',
                '"Pruébalo gratis": cuando hay una funcionalidad concreta que demostrar.',
                '"Crea tu cuenta gratis": en páginas de audiencia donde se quiere reforzar que no cuesta nada empezar.',
                'Siempre acompañado de microtexto de apoyo cuando sea posible: "Sin tarjeta de crédito" o "14 días gratis, cancela cuando quieras".',
              ],
            },
            {
              nivel: 'Nivel 2 · CTA de exploración (botón secundario o link)',
              desc: 'Para quien todavía no está listo para registrarse.',
              items: [
                '"Ver demo": cuando hay vídeo o demostración disponible.',
                '"Habla con el equipo": para asesorías y pymes con procesos complejos.',
                'Siempre acompaña al CTA principal, nunca aparece solo.',
              ],
            },
            {
              nivel: 'Nivel 3 · CTAs de profundización (links de texto)',
              desc: 'Dentro de las secciones de features, orientados a quien quiere saber más sobre una funcionalidad concreta.',
              items: [
                'Siempre específicos, siempre con flecha: "Descubre cómo funciona la facturación electrónica →".',
                'Nunca genéricos.',
              ],
            },
          ].map(({ nivel, desc, items }) => (
            <div key={nivel} className="p-5 bg-white rounded-xl border border-border">
              <p className="font-semibold text-text-main mb-1">{nivel}</p>
              <p className="text-sm mb-3" style={{ color: '#686A6C' }}>{desc}</p>
              <ul className="space-y-1">
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

        <h4 className="text-base font-semibold text-text-main mt-6 mb-3">Ejemplos por tipo de página</h4>
        <div className="mb-8 rounded-xl border border-border overflow-hidden bg-white">
          <table className="guide-table">
            <thead>
              <tr><th>Página</th><th>CTAs</th></tr>
            </thead>
            <tbody>
              {[
                ['Home', '"Empieza gratis" + "Ver demo"'],
                ['Funcionalidades', '"Pruébalo gratis" + links de texto por feature'],
                ['Audiencias', '"Crea tu cuenta gratis" + "Habla con un experto" (para asesorías)'],
                ['Performance y campañas', 'Un solo CTA, sin distracciones. Siempre "Empieza gratis"'],
                ['Pricing', '"Empieza gratis" en el plan recomendado + "Habla con un experto"'],
                ['Recursos', 'CTA específico: "Descargar guía", "Apuntarme al webinar"'],
              ].map(([pagina, ctas]) => (
                <tr key={pagina}>
                  <td className="font-semibold text-text-main">{pagina}</td>
                  <td style={{ color: '#686A6C' }}>{ctas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 className="text-base font-semibold text-text-main mt-6 mb-2">Reglas de redacción</h4>
        <ReglaList prefix="cta-rules" items={[
          'Imperativo siempre: "Empieza", "Prueba", "Crea", "Descubre". Nunca infinitivos ("Registrarse", "Enviar").',
          'Nunca "Saber más", "Ver más", "Más información".',
          'Siempre en minúscula, salvo nombres propios.',
          'Máximo 3 palabras en botones principales. Los links de texto pueden ser más descriptivos.',
        ]} />

        {/* Social proof */}
        <h3 className="subsection-title">Social proof</h3>
        <ReglaList prefix="sp" items={[
          'Social (personas): beneficio emocional en primera persona + perfil del cliente.',
          'De rendimiento: dato cuantificable + fuente + contexto ("El 80% de nuestros usuarios ahorra más de 5 horas a la semana en tareas administrativas").',
          'De autoridad: logos de partners o medios, sin narrativa adicional necesaria.',
          'De escala: cifra + contexto que la haga comprensible.',
          'Colocar el social proof cerca del claim que valida.',
          'Nunca cifras vagas o sin origen ("miles de empresas"). Siempre dato + fuente breve.',
          'Titulares de social proof: beneficio emocional + dato racional. Nunca solo logos.',
          'Las quotes deben validar un beneficio concreto y medible. Con nombre, cargo, empresa y foto si es posible.',
          'La cita debe sonar como hablaría un cliente real, no como lo redactaría un equipo de marketing.',
          'Mostrar diversidad de perfiles: autónomos, pymes de distintos sectores, asesorías.',
        ]} />

        {/* Formularios */}
        <h3 className="subsection-title">Formularios y mensajes de error</h3>
        <ReglaList prefix="form" items={[
          'Mantener las etiquetas siempre visibles, incluso al clicar en el campo.',
          'Mensajes de error: nunca culpar al usuario. Orientar hacia la solución. No "Email incorrecto", sino "Parece que falta el @ en tu email".',
          'CTAs de formulario en primera persona cuando sea posible: "Crear mi cuenta gratis", no "Registrarse".',
          'Mínimos campos desde el inicio. Pedir datos adicionales de forma progresiva.',
          'Explicar el valor en el titular del formulario: por qué merece la pena rellenarlo.',
          'Siempre en español, incluyendo los mensajes de error y los textos de ayuda.',
        ]} />

        {/* Alt text */}
        <h3 className="subsection-title">Alt text en imágenes</h3>
        <ReglaList prefix="alt" items={[
          'Alt text orientado al significado, no a la descripción literal.',
          'Máximo 140 caracteres. Sin "imagen de" al inicio.',
          'Si el alt text y el pie de foto dicen lo mismo, eliminar uno de los dos.',
          'Incluir keywords de forma natural cuando sea relevante para el SEO, sin forzarlo.',
        ]} />

        {/* IA copy */}
        <h3 className="subsection-title">Generar copy para la web con IA</h3>
        <div className="rounded-xl px-5 py-4 mb-6" style={{ backgroundColor: '#111827' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>Instrucciones para la IA</p>
          <p className="text-sm mb-3" style={{ color: '#FFFFFF' }}>
            Eres copywriter de Holded. Antes de escribir nada, pregunta:
          </p>
          <div className="space-y-1.5">
            {[
              '¿Para qué tipo de página es el texto? (funcionalidades, audiencia, performance, home, pricing, recursos)',
              '¿A qué audiencia va dirigido? (pymes, autónomos, asesorías, público general)',
              '¿Qué funcionalidad o propuesta de valor hay que comunicar?',
              '¿Qué secciones necesitas? (hero, key benefit, features, banners, CTAs, social proof, formulario)',
            ].map((q, i) => (
              <p key={i} className="text-sm" style={{ color: '#D1D5DB' }}>{i + 1}. {q}</p>
            ))}
          </div>
          <p className="text-sm mt-3" style={{ color: '#9CA3AF' }}>
            Con esa información, genera el copy siguiendo las reglas de esta sección. Aplica siempre la voz y los cinco pilares de Brand Voice. Antes de entregar el borrador, pásalo por el checklist de IA.
          </p>
        </div>
      </div>

      {/* SEO */}
      <div id="seo" className="content-section">
        <h2 className="section-title">SEO y keywords</h2>
        <p className="section-description">
          <strong>Estas reglas se aplican mientras se escribe, no como un paso final.</strong>
        </p>

        <h3 className="subsection-title">SEO on-page</h3>
        <ReglaList prefix="seo" items={[
          'Keyword principal en el título (H1), meta description, primer párrafo y al menos un H2.',
          'Keywords secundarias distribuidas de forma natural en H2s y cuerpo del texto.',
          'Meta description: máximo 155 caracteres, incluye la keyword principal y un beneficio.',
          'Un solo H1 por página. H2 para secciones principales, H3 para subsecciones.',
          'Entre 3 y 5 enlaces internos a artículos o páginas relacionadas de Holded.',
          'Enlaces externos a fuentes de autoridad (BOE, Agencia Tributaria, INE) cuando se citen normativas o datos.',
          'El atributo alt de las imágenes describe la imagen e incluye keywords de forma natural, sin keyword stuffing.',
          'URL slug: corta, en minúsculas, con guiones, sin palabras vacías. Debe coincidir con la keyword principal.',
        ]} />

        <h3 className="subsection-title">AEO (Answer Engine Optimization)</h3>
        <p className="section-description">
          Los motores de búsqueda con IA (Google AI Overviews, Bing Copilot, Perplexity, ChatGPT search) extraen el contenido de forma distinta a los crawlers tradicionales. Hay que <strong>estructurar el contenido para que la IA pueda extraerlo y citarlo</strong>.
        </p>
        <ReglaList prefix="aeo" items={[
          'Empezar cada sección con una respuesta directa y concisa en 1 a 2 frases, luego desarrollar. Los motores de IA suelen extraer la primera frase después de un encabezado.',
          'Usar H2s en forma de pregunta que coincidan con búsquedas reales: "¿Qué es la factura electrónica?", "¿Cómo se calcula el IVA trimestral?".',
          'Escribir snippets de definición para términos clave: "X es [definición]. [Una frase de contexto]."',
          'Usar formatos estructurados: listas numeradas para procesos, tablas comparativas para alternativas, bullets para características. Evitar bloques de texto denso.',
          'Incluir datos citables: fechas concretas, porcentajes, importes, números de normativa.',
          'Escribir párrafos autocontenidos. Cada párrafo debe tener sentido si se extrae del artículo y se muestra solo.',
          'Añadir secciones FAQ usando <AccordionMDX>, que genera FAQ schema automáticamente.',
        ]} />

        <h3 className="subsection-title">Señales E-E-A-T</h3>
        <p className="section-description">
          Google y los motores de IA priorizan contenido que demuestra <strong>experiencia, conocimiento experto, autoridad y fiabilidad</strong>.
        </p>
        <ReglaList prefix="eeat" items={[
          'Citar leyes, artículos y fechas concretas (por ejemplo: "artículo 164 de la Ley 37/1992 del IVA").',
          'Referenciar fuentes oficiales: BOE, Agencia Tributaria, INE, Seguridad Social, Registro Mercantil.',
          'Incluir métricas reales de Holded cuando estén disponibles ("80.000+ empresas", "40h ahorradas al mes").',
          'Atribuir el contenido a un autor con nombre usando el campo author del frontmatter.',
          'Añadir la fecha de actualización (updated) al editar contenido existente.',
          'Enlazar siempre a fuentes primarias, no a resúmenes de fuentes.',
        ]} />

        <h3 className="subsection-title">Datos estructurados</h3>
        <p className="section-description">
          El sistema gestiona los datos estructurados <strong>automáticamente</strong>. No hace falta JSON-LD manual:
        </p>
        <ReglaList prefix="schema" items={[
          'Los posts de blog generan schema BlogPosting a través de getArticleSchema() en el layout.',
          'Las secciones FAQ con <AccordionMDX> generan schema FAQPage.',
          'Las entradas de glosario generan schema DefinedTerm.',
          'El layout raíz incluye los schemas Organization y WebSite.',
        ]} />
      </div>

      {/* EMAIL */}
      <div id="email" className="content-section">
        <h2 className="section-title">Reglas de escritura para newsletters y emails</h2>

        <h3 className="subsection-title">Principios generales</h3>
        <p className="section-description">
          El email es un canal cercano. El lector ya conoce Holded. El tono es <strong>entusiasta, útil y personal</strong>, como si lo escribiera alguien del equipo, no una marca.
        </p>
        <p className="section-description">
          Se tutea siempre. Sin exclamaciones ni superlativos. Sin "haz clic aquí".
        </p>

        <h3 className="subsection-title">Tipos de email</h3>
        <div className="space-y-2 mb-8">
          {[
            ['General', 'Envío semanal o quincenal estándar. El más habitual.'],
            ['Producto', 'Lanzamiento de funcionalidad o módulo.'],
            ['Educativa / how-to', 'Guía práctica o contenido formativo.'],
            ['Corporativa', 'Noticias de empresa, hitos, cultura.'],
          ].map(([tipo, desc], i) => (
            <div key={i} className="flex gap-4 p-3 rounded-xl">
              <SparkleRed id={`email-tipo-${i}`} />
              <div>
                <span className="font-semibold text-text-main">{tipo}: </span>
                <span style={{ color: '#686A6C' }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Estructura por tipo</h3>
        <div className="mb-8 rounded-xl border border-border overflow-hidden bg-white">
          <table className="guide-table">
            <thead>
              <tr><th>Tipo</th><th>Estructura</th></tr>
            </thead>
            <tbody>
              {[
                ['General', 'Intro · De lo bueno, lo mejor · Holded Magazine · Product tip · Perfecto con un café · Sabías que · Hoy recomendamos'],
                ['Producto', 'Intro · Qué hay de nuevo · Cómo usarlo · Beneficio clave · CTA directo'],
                ['Educativa / how-to', 'Intro · El problema · Los pasos · Recurso relacionado · CTA'],
                ['Corporativa', 'Intro · La noticia · Contexto · Qué significa para ti · Cierre cercano'],
              ].map(([tipo, estructura]) => (
                <tr key={tipo}>
                  <td className="font-semibold text-text-main">{tipo}</td>
                  <td className="text-sm" style={{ color: '#686A6C' }}>{estructura}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="subsection-title">Reglas por elemento (tipo General)</h3>

        {[
          {
            elemento: 'Asunto',
            regla: 'Longitud: máximo 50 caracteres. Fórmula habitual: tema principal + emoji relevante. Tuteo, sin exclamaciones ni superlativos.',
            bien: '"Newsletter 140: Freshly Cosmetics nos cuenta cómo se cuida un negocio 🧴"',
            mal: null,
          },
          {
            elemento: 'Preheader',
            regla: 'Una frase, máximo 90 caracteres. Complementa el asunto, no lo repite.',
            bien: '"Además, te lo contamos todo sobre el seguro de responsabilidad civil para autónomos 🔐"',
            mal: null,
          },
          {
            elemento: 'Cabecera',
            regla: 'Formato fijo: [MES] / [AÑO] · Nº [NÚMERO]',
            bien: null,
            mal: null,
          },
          {
            elemento: 'Introducción',
            regla: '3 a 4 líneas en texto plano. Resume brevemente todos los contenidos del número sin revelar demasiado. Cierra con un saludo cálido y casual según el día de envío ("Feliz jueves :)"). Tono cercano, como si lo escribiera una persona del equipo.',
            bien: '"Hoy te contamos cómo acceder al borrador de la Renta sin errores, cómo blindarte con un seguro de responsabilidad civil y los plazos para cambiar tu base de cotización. Freshly Cosmetics nos enseña que un negocio sano también necesita su rutina de cuidado. Feliz jueves :)"',
            mal: null,
          },
        ].map(({ elemento, regla, bien, mal }) => (
          <div key={elemento} className="mb-6">
            <h4 className="text-base font-semibold text-text-main mb-2">{elemento}</h4>
            <p className="section-description">{regla}</p>
            {bien && (
              <div className="example-block example-do">
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#16A34A' }}>Sí</p>
                <p>{bien}</p>
              </div>
            )}
          </div>
        ))}

        <h4 className="text-base font-semibold text-text-main mt-6 mb-3">Bloques de contenido</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {[
            { bloque: 'De lo bueno, lo mejor', desc: 'Título: máximo 6 palabras, directo. Descripción: 1 a 2 frases. CTA: LEER ARTÍCULO ➞' },
            { bloque: 'Holded Magazine', desc: 'Título: gancho narrativo. Descripción: 2 a 3 frases. Quién protagoniza, qué aporta, por qué importa. CTA: LEER ENTREVISTA ➞' },
            { bloque: 'Product tip', desc: 'Título: problema o situación reconocible. Descripción: 1 a 2 frases con pregunta retórica. CTA: SABER MÁS ➞' },
            { bloque: 'Perfecto con un café', desc: 'Dos lecturas secundarias. Por cada una: título, descripción de 1 frase y CTA en formato LECTURA DE X MINUTOS.' },
            { bloque: 'Sabías que...', desc: '1 a 2 frases con un dato sorprendente. Puede ser ciencia, cultura o tecnología. Con emoji al final.' },
            { bloque: 'Hoy recomendamos', desc: 'Recomendaciones del equipo: apps, libros, series, podcasts... Con nombre y rol. Formato: [título] / [Nombre] / [Rol]' },
          ].map(({ bloque, desc }) => (
            <div key={bloque} className="p-5 bg-white rounded-xl border border-border flex flex-col gap-2">
              <p className="font-semibold text-text-main">{bloque}</p>
              <p className="text-sm" style={{ color: '#686A6C' }}>{desc}</p>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">CTAs en email</h3>
        <ReglaList prefix="email-cta" items={[
          'Nunca usar "haz clic aquí". Usar siempre verbos descriptivos.',
          'Los CTAs de artículos llevan ➞ al final (sin espacio antes): LEER ARTÍCULO➞, ACCEDER➞',
          'Las lecturas secundarias usan el formato LECTURA DE X MINUTOS.',
          'Los enlaces llevan parámetros UTM. Estructura estándar: ?utm_source=newsletter_general&utm_medium=email&utm_campaign=[DDMMAA]',
        ]} />
      </div>
    </div>
  )
}
