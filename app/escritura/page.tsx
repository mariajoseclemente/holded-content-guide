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

export default function EscrituraPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-eyebrow">Gramática y estilo</span>
        <h1 className="page-title">Normas de escritura</h1>
        <p className="page-description">
          Reglas de uso para escribir con coherencia en todos los textos de Holded: desde cómo escribir los números hasta qué anglicismos llevan cursiva.
        </p>
      </div>

      <nav className="page-toc">
        <a href="#numeros">Números</a>
        <a href="#dinero">Dinero</a>
        <a href="#siglas">Siglas y acrónimos</a>
        <a href="#puntuacion">Puntuación</a>
        <a href="#anglicismos">Anglicismos</a>
        <a href="#word-list">Word list</a>
      </nav>

      {/* Números */}
      <div id="numeros" className="content-section">
        <h2 className="section-title">Números</h2>
        <p className="section-description">
          Los números del <strong>uno al nueve se escriben en letra</strong>. Del <strong>10 en adelante, en cifra</strong>.
        </p>

        <div className="example-grid mb-8">
          <div className="example-block example-dont">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#EF4444' }}>No</p>
            <p>Tenemos 3 planes disponibles.</p>
          </div>
          <div className="example-block example-do">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#16A34A' }}>Sí</p>
            <p>Tenemos tres planes disponibles.</p>
            <p className="mt-2">Gestiona 10 empresas desde una sola cuenta.</p>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <p className="font-semibold text-text-main mb-1">Número al inicio de frase: siempre en letra</p>
            <p className="section-description">Cuando un número inicia una frase, siempre se escribe en letra.</p>
            <EjemploGrid
              mal="5 razones para automatizar tu facturación."
              bien="Cinco razones para automatizar tu facturación."
            />
          </div>
          <div>
            <p className="font-semibold text-text-main mb-3">Millares: punto en español, coma en inglés</p>
            <EjemploGrid
              mal="1,000 / 10,000 / 100,000 (en textos en español)"
              bien="1.000 / 10.000 / 100.000"
            />
          </div>
          <div>
            <p className="font-semibold text-text-main mb-3">Porcentajes: pegados al número, sin espacio</p>
            <EjemploGrid
              mal="21 %"
              bien="21%"
            />
          </div>
        </div>

        <h3 className="subsection-title">Decimales</h3>
        <p className="section-description">
          Los decimales en español se escriben con <strong>coma: 21,21</strong>. No con punto ni con apóstrofo. En inglés se escriben con punto: 21.21
        </p>

        <h3 className="subsection-title">Fórmulas y operadores matemáticos</h3>
        <p className="section-description">
          Para las multiplicaciones se usa la <strong>× (por)</strong>, no el asterisco (*) ni la letra x minúscula, salvo en contextos técnicos o de código donde el asterisco es convención estándar.
        </p>
        <div className="space-y-2 mb-4">
          {[
            ['Texto', '3 × 4 = 12'],
            ['Código o fórmula técnica', 'precio * cantidad'],
          ].map(([ctx, ej], i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg">
              <SparkleRed id={`sparkle-op-${i}`} />
              <div>
                <p className="font-semibold text-text-main mb-0.5">{ctx}</p>
                <p className="font-mono text-sm" style={{ color: '#686A6C' }}>{ej}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="section-description">
          Para el resto de operadores: <strong>+ (más), - (menos), / (dividido entre), = (igual a)</strong>. Siempre con espacio a cada lado del operador.
        </p>
      </div>

      {/* Dinero */}
      <div id="dinero" className="content-section">
        <h2 className="section-title">Dinero</h2>

        <h3 className="subsection-title">En español</h3>
        <p className="section-description">
          El símbolo del euro se escribe <strong>después del número, separado por un espacio: 20 €</strong>. Se escribe en letra («euros») cuando el número también va en letra o cuando forma parte de un texto corrido y el símbolo quedaría forzado.
        </p>
        <div className="space-y-3 mb-6">
          {[
            {
              desc: 'En titulares, tablas o cifras destacadas',
              bien: '20 €, 1.500 €',
              mal: null,
            },
            {
              desc: 'En texto corrido',
              bien: 'el plan cuesta veinte euros al mes',
              mal: null,
            },
            {
              desc: 'No mezclar símbolo y letra en el mismo texto',
              mal: '20 € al mes, o cien euros al año',
              bien: 'Elige un único formato y mantenerlo consistente',
            },
            {
              desc: 'Con decimales',
              bien: '20,50 €',
              mal: null,
            },
          ].filter(({ mal, bien }) => mal || bien).map(({ desc, mal, bien }, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg">
              <SparkleRed id={`sparkle-din-${i}`} />
              <div className="flex-1">
                <p className="font-semibold text-text-main mb-2">{desc}</p>
                {mal ? (
                  <EjemploGrid mal={mal} bien={bien!} />
                ) : (
                  <div className="example-block example-do">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#16A34A' }}>Sí</p>
                    <p>{bien}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">En inglés</h3>
        <p className="section-description">
          El símbolo se escribe <strong>antes del número, sin espacio: €20</strong>.
        </p>
      </div>

      {/* Siglas */}
      <div id="siglas" className="content-section">
        <h2 className="section-title">Siglas y acrónimos</h2>

        <div className="space-y-2 mb-8">
          {[
            ['Mayúsculas sin puntos', 'IVA, IRPF, SL, SA, CRM, ERP.'],
            ['Las abreviaturas convencionales sí llevan punto', 'etc., pág., núm., art.'],
            ['Sin plural morfológico en español', 'los IVA repercutidos, no «los IVAs».'],
          ].map(([regla, ej], i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg">
              <SparkleRed id={`sparkle-sig-${i}`} />
              <div>
                <p className="font-semibold text-text-main mb-0.5">{regla}</p>
                <p className="text-sm font-mono" style={{ color: '#686A6C' }}>{ej}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Primera mención</h3>
        <p className="section-description">
          La primera vez que se usa una sigla en un texto, se escribe el <strong>término completo seguido de la sigla entre paréntesis</strong>. A partir de ahí, solo la sigla. En web y email, por temas de espacio, sí está permitido escribir con siglas directamente.
        </p>
        <EjemploGrid
          mal="IVA (sin presentar el término la primera vez)"
          bien="Impuesto sobre el Valor Añadido (IVA) — primera mención. Siguientes: IVA."
        />

        <h3 className="subsection-title mt-8">Siglas frecuentes en Holded</h3>
        <div className="mb-8 rounded-lg border border-border overflow-hidden bg-white">
          <table className="guide-table">
            <thead>
              <tr><th>Sigla</th><th>Término completo</th></tr>
            </thead>
            <tbody>
              {[
                ['IVA', 'Impuesto sobre el Valor Añadido'],
                ['IRPF', 'Impuesto sobre la Renta de las Personas Físicas'],
                ['CRM', 'Customer Relationship Management'],
                ['ERP', 'Enterprise Resource Planning'],
                ['RR.HH.', 'Recursos Humanos'],
                ['pyme', 'Pequeña y Mediana Empresa'],
                ['NIF', 'Número de Identificación Fiscal'],
              ].map(([sigla, termino]) => (
                <tr key={sigla}>
                  <td className="font-mono font-semibold text-text-main">{sigla}</td>
                  <td style={{ color: '#686A6C' }}>{termino}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Puntuación */}
      <div id="puntuacion" className="content-section">
        <h2 className="section-title">Puntuación en títulos y listas</h2>

        <h3 className="subsection-title">Títulos</h3>
        <p className="section-description">
          Los títulos <strong>no llevan punto final</strong>. Tampoco los encabezados de sección (H1, H2, H3). Se pueden usar dos puntos al final de un título cuando lo que sigue es un desarrollo directo, especialmente en blog o contenido educativo.
        </p>
        <div className="example-grid mb-8">
          <div className="example-block example-dont">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#EF4444' }}>No</p>
            <p>Cómo presentar el modelo 303.</p>
          </div>
          <div className="example-block example-do">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#16A34A' }}>Sí</p>
            <p>Cómo presentar el modelo 303: guía paso a paso</p>
            <p className="mt-2">Todo lo que necesitas saber sobre la factura electrónica</p>
          </div>
        </div>

        <h3 className="subsection-title">Listas</h3>
        <p className="section-description">
          Si los elementos son <strong>fragmentos cortos (sin verbo principal), no llevan punto final</strong>. Si son oraciones completas, sí llevan punto. Todos los elementos de una misma lista deben seguir el mismo criterio.
        </p>
        <p className="section-description">
          El elemento que introduce la lista puede terminar en dos puntos si la lista es su desarrollo directo.
        </p>
        <div className="space-y-3 mb-8">
          <EjemploGrid
            mal="Un elemento con punto y el siguiente sin él. (mezcla inconsistente)"
            bien="Facturación / Contabilidad / RR.HH. — todos sin punto (fragmentos)"
          />
          <div className="example-block example-do">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#16A34A' }}>Sí (oraciones completas, con punto)</p>
            <p>Revisa tus cobros pendientes. / Separa gastos fijos y variables.</p>
          </div>
        </div>

        <h3 className="subsection-title">Citas y quotes</h3>
        <p className="section-description">
          En español los puntos van siempre <strong>después de las comillas</strong>. En inglés van antes de la comilla final.
        </p>
        <EjemploGrid
          mal={'"Toda la empresa habla el mismo idioma gracias a Holded."'}
          bien={'"Toda la empresa habla el mismo idioma gracias a Holded".'}
        />
      </div>

      {/* Anglicismos */}
      <div id="anglicismos" className="content-section">
        <h2 className="section-title">Anglicismos y palabras de uso especial</h2>
        <p className="section-description">
          Los extranjerismos no adaptados al español se escriben en cursiva. «App» fue aceptada por la RAE en 2021 y ya no necesita cursiva: <strong>la app de Holded</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9CA3AF' }}>No necesitan cursiva</p>
            <div className="space-y-1.5">
              {['Dashboard', 'Lead', 'Cash flow', 'Benchmark', 'Marketplace', 'Coworking', 'Startup', 'Freelance'].map((w) => (
                <div key={w} className="flex items-center gap-2 py-1.5 px-3 bg-white rounded-lg border border-border text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-mono">{w}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9CA3AF' }}>Sí necesitan cursiva</p>
            <div className="space-y-1.5">
              {['onboarding', 'pipeline', 'forecast', 'reporting', 'workflow', 'outsourcing', 'Freemium', 'upgrade / downgrade', 'matching', 'roadmap'].map((w) => (
                <div key={w} className="flex items-center gap-2 py-1.5 px-3 bg-white rounded-lg border border-border text-sm">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#9CA3AF' }} />
                  <span className="font-mono italic">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Word list */}
      <div id="word-list" className="content-section">
        <h2 className="section-title">Word list</h2>
        <p className="section-description">
          Palabras y expresiones de uso frecuente en los textos de Holded y cómo se escriben:
        </p>
        <div className="mb-8 rounded-lg border border-border overflow-hidden bg-white">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Término</th>
                <th>Uso correcto</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Holded', 'Siempre con mayúscula.'],
                ['software', 'Minúscula, sin cursiva, sin plural.'],
                ['app', 'Minúscula, sin cursiva (aceptada por la RAE).'],
                ['email', 'Sin cursiva ni guion.'],
                ['online', 'Sin cursiva.'],
                ['startup', 'Sin guion, sin cursiva.'],
                ['ecommerce', 'Sin guion, sin cursiva.'],
                ['IVA', 'Sigla, sin puntos.'],
                ['IRPF', 'Sigla, sin puntos.'],
                ['RR.HH.', 'Con puntos finales.'],
                ['pyme', 'Minúscula en texto corrido; mayúscula solo si abre frase.'],
              ].map(([termino, uso]) => (
                <tr key={termino}>
                  <td className="font-mono font-semibold text-text-main">{termino}</td>
                  <td style={{ color: '#686A6C' }}>{uso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
