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

const SparkleGrey = ({ id }: { id: string }) => (
  <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 16 16" fill="none">
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#D1D5DB" />
        <stop offset="100%" stopColor="#9CA3AF" />
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

export default function BrandVoicePage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-eyebrow">Brand Voice</span>
        <h1 className="page-title">Voz y tono de Holded</h1>
        <p className="page-description">
          La voz de Holded no cambia. El tono sí, según el canal y el contexto. La voz es quiénes somos; el tono es cómo sonamos en cada situación.
        </p>
      </div>

      <nav className="page-toc">
        <a href="#voz-holded">La voz de Holded</a>
        <a href="#pilares">Los cinco pilares</a>
        <a href="#tono-canal">Tono por canal</a>
        <a href="#reglas-generales">Lenguaje y español</a>
      </nav>

      {/* La voz de Holded */}
      <div id="voz-holded" className="content-section">
        <h2 className="section-title">La voz de Holded</h2>
        <p className="section-description">
          Seis atributos definen la voz de Holded. Cada uno tiene su contraparte para marcar el límite:
        </p>
        <div className="space-y-2">
          {[
            ['Honesta, pero sensible', 'Evita ambigüedades y tiene en cuenta las sensibilidades del lector.'],
            ['Útil, pero no agobiante', 'Siempre dispuesta a ayudar, nunca a saturar.'],
            ['Segura, pero humilde', 'Es experta en lo que habla, pero nunca se siente superior por ello.'],
            ['Moderna, pero accesible', 'Es un software, pero está hecho y representado por personas.'],
            ['Cercana, pero no tonta', 'Es joven y tiene sentido del humor, pero no cruza los límites.'],
            ['Ambiciosa, pero no insistente', 'Quiere empoderar, sin ser dominante.'],
          ].map(([titulo, desc], i) => (
            <div key={titulo} className="flex gap-4 p-4 rounded-lg">
              <SparkleRed id={`sparkle-voz-${i}`} />
              <div>
                <p className="font-semibold text-text-main mb-0.5">{titulo}</p>
                <p style={{ color: '#686A6C' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Los cinco pilares */}
      <div id="pilares" className="content-section">
        <h2 className="section-title">Los cinco pilares de la voz de Holded</h2>

        {/* Pilar 1 */}
        <div className="mb-10">
          <h3 className="subsection-title">1. Clara y accesible</h3>
          <p className="section-description">
            El lenguaje es <strong>simple y directo</strong>. Sin rodeos ni jerga innecesaria. Cuando se usa un término técnico, se explica o contextualiza, no porque el lector no pueda entenderlo, sino porque si lo desconoce, <strong>no debería tener que buscarlo en otro sitio</strong>.
          </p>
          <p className="section-description">
            El objetivo es que <strong>cualquier persona</strong> (un autónomo que acaba de empezar, un director financiero con 20 años de experiencia) entienda el mensaje <strong>al primer vistazo</strong>.
          </p>
          <p className="section-description">
            <strong>Lo que se evita:</strong> frases largas que aportan poco, palabras grandilocuentes que no añaden significado, paja.
          </p>
          <EjemploGrid
            mal="La facturación electrónica es un mecanismo de emisión documental digitalizado con validez jurídica equiparable al soporte físico."
            bien="Una factura electrónica es igual que una factura en papel, pero en formato digital y con validez legal."
          />
        </div>

        {/* Pilar 2 */}
        <div className="mb-10">
          <h3 className="subsection-title">2. Educativa y didáctica</h3>
          <p className="section-description">
            No nos quedamos en la definición. Explicamos el <strong>qué</strong>, pero también el <strong>porqué</strong> y el <strong>cómo</strong>. El lector debe irse <strong>sabiendo más que cuando llegó</strong>.
          </p>
          <p className="section-description">
            Esto no significa ser exhaustivos, significa <strong>ser útiles en lo que importa</strong>.
          </p>
          <p className="section-description">
            <strong>Lo que se evita:</strong> contenido que informa sin orientar, explicaciones que asumen demasiado contexto previo, artículos que describen un problema sin apuntar a ninguna solución.
          </p>
          <EjemploGrid
            mal="El modelo 303 es la declaración trimestral del IVA."
            bien="El modelo 303 es la declaración que presentas cada trimestre para liquidar el IVA con Hacienda. Si has cobrado más IVA del que has pagado, tendrás que ingresar la diferencia. Si ha sido al revés, podrás compensarlo en el siguiente trimestre."
          />
        </div>

        {/* Pilar 3 */}
        <div className="mb-10">
          <h3 className="subsection-title">3. Útil y orientada a la acción</h3>
          <p className="section-description">
            Cada contenido <strong>resuelve algo concreto</strong>: una duda, una obligación, una decisión pendiente. No es relleno. Es una ayuda para avanzar.
          </p>
          <p className="section-description">
            Eso se traduce en estructura: <strong>pasos numerados, checklists, tablas comparativas, ejemplos prácticos</strong>. Formatos que facilitan la lectura y permiten actuar sin tener que releerlo todo desde el principio.
          </p>
          <p className="section-description">
            <strong>Lo que se evita:</strong> contenido que suena bien pero no lleva a ningún lado, llamadas a la acción vagas, conclusiones que no concluyen.
          </p>
          <EjemploGrid
            mal="Es importante que las empresas mantengan una buena gestión de su tesorería."
            bien="Para controlar tu tesorería desde hoy: 1) Revisa semanalmente tus cobros pendientes. 2) Separa los gastos fijos de los variables. 3) Usa una previsión de caja a 90 días para anticiparte a problemas de liquidez."
          />
        </div>

        {/* Pilar 4 */}
        <div className="mb-10">
          <h3 className="subsection-title">4. Profesional, pero cercano</h3>
          <p className="section-description">
            Hablamos con seriedad, pero <strong>sin distancia</strong>. Como una asesoría de confianza que conoce bien el negocio y habla sin pretensiones: <strong>clara, directa, sin condescendencia</strong>.
          </p>
          <p className="section-description">
            <strong>Se tutea siempre.</strong> Se usan frases conversacionales cuando tiene sentido. Se reconoce que gestionar un negocio tiene su complejidad y no se finge que todo es fácil cuando no lo es.
          </p>
          <p className="section-description">
            <strong>Lo que se evita:</strong> tono condescendiente, formalidad que aleja, informalidad que resta credibilidad, humor forzado.
          </p>
          <EjemploGrid
            mal="Se recomienda al usuario que proceda a revisar sus obligaciones fiscales de forma periódica."
            bien="Revisa tus obligaciones fiscales cada trimestre. No hace falta que seas un experto en contabilidad, pero sí conviene que sepas qué fechas no puedes perder de vista."
          />
        </div>

        {/* Pilar 5 */}
        <div className="mb-10">
          <h3 className="subsection-title">5. Confianza basada en hechos</h3>
          <p className="section-description">
            <strong>No se asegura lo que no se puede demostrar.</strong> Sin superlativos vacíos ni afirmaciones grandilocuentes. Cuando se dice algo, se demuestra con <strong>datos, normativas o situaciones reales</strong>.
          </p>
          <p className="section-description">
            <strong>Lo que se evita:</strong> promesas vagas, adjetivos sin sustancia, afirmaciones sin respaldo.
          </p>
          <EjemploGrid
            mal="Holded es la solución definitiva que transforma radicalmente la gestión de tu empresa."
            bien="Con Holded, puedes cerrar el mes sin esperar a que tu asesoría te envíe el informe: tienes los datos en tiempo real, siempre actualizados."
          />
        </div>
      </div>

      {/* Tono por canal */}
      <div id="tono-canal" className="content-section">
        <h2 className="section-title">Tono por canal</h2>
        <p className="section-description">
          La voz no cambia, pero el tono se adapta. De menos a más intensidad:
        </p>
        <div className="mb-8 rounded-lg border border-border overflow-hidden bg-white">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Canal</th>
                <th>Tono</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Contenido educativo y blog', 'Amable y didáctico. Casual, cercano, con espacio para explicar.'],
                ['Web', 'Claro y directo. Orientado a la acción, sin adornos innecesarios.'],
                ['Email y newsletter', 'Entusiasta, útil y personal. El lector ya nos conoce.'],
                ['Redes sociales', 'El canal más informal. Más personalidad, más brevedad, más conversación.'],
                ['Publicidad y campañas', 'El tono más intenso. Sorpresa, impacto, emoción.'],
              ].map(([canal, tono]) => (
                <tr key={canal}>
                  <td className="font-semibold text-text-main">{canal}</td>
                  <td style={{ color: '#686A6C' }}>{tono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reglas generales y uso del español */}
      <div id="reglas-generales" className="content-section">
        <h2 className="section-title">Sobre el lenguaje y el uso del español</h2>

        {/* Tecnicismos */}
        <h3 className="subsection-title">Tecnicismos</h3>
        <p className="section-description">
          Evitar tecnicismos en todos los casos, pero <strong>sin caer en explicaciones condescendientes</strong>. La audiencia de Holded es <strong>capaz y pragmática</strong>: sabe lo que necesita, aunque no domine el vocabulario contable o fiscal.
        </p>
        <p className="section-description">
          <strong>Regla práctica:</strong> si un término tiene una versión más cotidiana, usar la cotidiana. Si no la tiene, usarlo sin explicarlo como si fuera algo raro.
        </p>
        <div className="space-y-2 mb-8">
          {[
            ['«Conciliación bancaria»', '«Cuadrar las cuentas con tu banco»'],
            ['«Asiento contable»', '«Registrar un gasto o ingreso»'],
            ['«Cash flow»', 'Acompañarlo de «lo que entra y sale de tu cuenta»'],
          ].map(([evita, usa], i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg">
              <SparkleGrey id={`sparkle-tec-${i}`} />
              <div>
                <span style={{ color: '#686A6C' }}>En lugar de {evita}, usar {usa}.</span>
              </div>
            </div>
          ))}
        </div>

        {/* Holded en mayúscula */}
        <h3 className="subsection-title">Holded siempre se escribe en mayúscula</h3>
        <p className="section-description">
          Aunque en el logo aparezca en minúscula, <strong>Holded siempre se escribe con mayúscula</strong> en cualquier comunicación escrita.
        </p>
        <EjemploGrid
          mal="Ahorra tiempo con holded."
          bien="Ahorra tiempo con Holded."
        />

        {/* Software o programa */}
        <h3 className="subsection-title">Software o programa</h3>
        <p className="section-description">
          Se usan <strong>«software» y «programa» como sinónimos</strong> para describir Holded, según el contexto, por razones de SEO o para evitar repeticiones. «Software» va en <strong>minúscula, no en cursiva y no tiene plural</strong>.
        </p>
        <EjemploGrid
          mal="Holded, el Software de gestión para pymes."
          bien="Holded, el software de gestión para pymes."
        />

        {/* Holded no es un personaje */}
        <h3 className="subsection-title">Holded no es un personaje</h3>
        <p className="section-description">
          <strong>Holded es una marca, no un personaje.</strong> No habla en primera persona, no tiene intenciones propias y no se representa con bocadillos de diálogo o pensamiento.
        </p>
        <EjemploGrid
          mal="Holded no puede esperar para empezar a trabajar contigo."
          bien="Ya es hora de que empieces a trabajar con Holded."
        />

        {/* Emojis */}
        <h3 className="subsection-title">Emojis</h3>
        <p className="section-description">
          Se permiten en canales con tono más casual: <strong>emails y redes sociales</strong>. <strong>Menos es más.</strong> Nunca se usa un emoji para reemplazar una palabra.
        </p>
        <EjemploGrid
          mal="No te pierdas el 🚀 del recordatorio de facturas."
          bien="No te pierdas el lanzamiento del recordatorio de facturas 🚀"
        />

        {/* Lenguaje inclusivo */}
        <h3 className="subsection-title">Lenguaje inclusivo</h3>
        <p className="section-description">
          Se usa <strong>lenguaje inclusivo siempre que sea posible</strong>. Se evitan la arroba (@), la (e), el asterisco (*), la equis (x) y la barra (a/o) para eludir el masculino genérico, ya que <strong>dificultan la lectura</strong>. En su lugar, se usan <strong>palabras neutras</strong>.
        </p>
        <EjemploGrid
          mal="Bienvenido / Todos / Amigxs."
          bien="Te damos la bienvenida / Todas las personas / Colegas."
        />

        <div className="space-y-3 mt-6">
          {[
            {
              titulo: '1. Colectivos neutros (preferido)',
              bien: 'el equipo, la clientela, el personal, personas autónomas.',
              mal: 'los usuarios, los empleados, los clientes.',
            },
            {
              titulo: '2. Reformular en 2ª persona',
              bien: 'Configura tu cuenta antes de empezar.',
              mal: 'El usuario debe configurar su cuenta antes de empezar.',
            },
            {
              titulo: '3. Doblete con moderación',
              bien: 'La directora o el director puede acceder al panel. (Solo cuando el género es el foco del texto. Sin abusar).',
              mal: null,
            },
          ].map(({ titulo, bien, mal }, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg">
              <SparkleRed id={`sparkle-inc-${i}`} />
              <div>
                <p className="font-semibold text-text-main mb-1">{titulo}</p>
                {mal && <p className="text-sm mb-0.5" style={{ color: '#686A6C' }}><span style={{ color: '#EF4444' }}>No:</span> {mal}</p>}
                <p className="text-sm" style={{ color: '#686A6C' }}><span style={{ color: '#16A34A' }}>Sí:</span> {bien}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg px-5 py-4 mt-6" style={{ backgroundColor: '#111827' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>Lo que NO usamos</p>
          <div className="space-y-1">
            {[
              '@ — l@s usuari@s',
              'Morfema -e — les usuaries',
              'Masculino genérico sistemático',
            ].map((item) => (
              <p key={item} className="text-sm font-medium" style={{ color: '#FFFFFF' }}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
