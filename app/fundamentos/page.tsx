export default function FundamentosPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-eyebrow">Fundamentos de marca</span>
        <h1 className="page-title">Identidad de marca y contexto</h1>
        <p className="page-description">
          ¿Quiénes somos y a quién nos dirigimos? La base de Holded: qué es el producto, qué problema resuelve, a quién va dirigido y quién es el cliente ideal.
        </p>
      </div>

      <nav className="page-toc">
        <a href="#que-es">¿Qué es Holded?</a>
        <a href="#problema">El problema que resuelve</a>
        <a href="#funcionalidades">Funcionalidades</a>
        <a href="#audiencias">Audiencias objetivo</a>
        <a href="#pain-points">Pain points por perfil</a>
        <a href="#icp">Ideal Customer Profile</a>
      </nav>

      {/* Qué es Holded */}
      <div id="que-es" className="content-section">
        <h2 className="section-title">¿Qué es Holded?</h2>
        <p className="section-description">
          Holded es el <strong>software de facturación y mucho más</strong> para pymes, autónomos y asesorías que no quieren perder el tiempo en tareas repetitivas y centrarse en <strong>hacer crecer su negocio</strong>.
        </p>
        <p className="section-description">
          Se trata de un <strong>ERP flexible y accesible</strong> que agiliza las tareas y ofrece soluciones para llevar la gestión completa de un negocio a través de funcionalidades automatizadas. <strong>Sin nada que instalar.</strong>
        </p>
        <p className="section-description">
          Fundada en 2015, integra en una <strong>única plataforma en la nube</strong>:
        </p>
        <ul className="space-y-1.5 mb-6" style={{ color: '#686A6C' }}>
          {['Facturación', 'Facturación electrónica', 'Contabilidad', 'Recursos humanos', 'Inventario', 'Proyectos', 'CRM', 'Banca'].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="section-description">
          Sin saltar de herramienta en herramienta. Sin perder información por el camino.
        </p>
        <p className="section-description">
          Esto hace que los procesos sean <strong>más eficientes</strong>, se reduzcan los errores y se ahorre tiempo de trabajo. Su interfaz es intuitiva y fácil de usar, y cuenta con múltiples recursos para aprender a sacarle partido: vídeos, webinars, guías y artículos. Además, <strong>se integra con otras herramientas</strong> que los usuarios usan.
        </p>
        <p className="section-description">
          Holded también facilita el <strong>cumplimiento de las nuevas regulaciones</strong>. Con Holded siempre cumplirás la ley, con la confianza de que tus datos están seguros:
        </p>
        <ul className="space-y-1.5 mb-6" style={{ color: '#686A6C' }}>
          {['Facturación electrónica obligatoria', 'Verifactu', 'Ley antifraude', 'Ley Crea y Crece'].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* El problema que resuelve */}
      <div id="problema" className="content-section">
        <h2 className="section-title">El problema que resuelve</h2>
        <p className="section-description">
          Las pymes y autónomos dedican demasiado tiempo a gestionar en lugar de a crecer y mejorar su negocio. Trabajan con herramientas desconectadas, procesos manuales y datos dispersos que generan errores, retrasos y frustración. Holded elimina ese caos centralizando las operaciones, automatizando tareas repetitivas y dando visibilidad financiera en tiempo real, todo desde cualquier lugar con conexión a internet.
        </p>

        <h3 className="subsection-title">Áreas principales que mejora</h3>
        <div className="space-y-3">
          {[
            ['Desorden administrativo', 'Centraliza facturación, gastos, proyectos y contactos en un solo lugar.'],
            ['Gestión manual de facturas', 'Automatiza la emisión de facturas recurrentes, el envío y la conciliación bancaria.'],
            ['Falta de control financiero', 'Ofrece visión en tiempo real del cash flow, informes financieros y rentabilidad de proyectos.'],
            ['Gestión de inventario ineficiente', 'Controla stock, almacenes y ventas en comercios físicos y online.'],
            ['Desconexión con la asesoría', 'Permite invitar al asesor a la plataforma para una colaboración contable en tiempo real.'],
            ['Gestión de RR.HH. y CRM', 'Integra la gestión de empleados y el seguimiento de ventas en la misma herramienta de contabilidad.'],
          ].map(([titulo, desc]) => (
            <div key={titulo} className="flex gap-4 p-5 rounded-xl">
              <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 16 16" fill="none">
                <defs>
                  <linearGradient id="sparkle-grad" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FF5454" />
                    <stop offset="100%" stopColor="#FF8C42" />
                  </linearGradient>
                </defs>
                <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" fill="url(#sparkle-grad)" />
              </svg>
              <div>
                <p className="font-semibold text-text-main mb-1">{titulo}</p>
                <p style={{ color: '#686A6C' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Funcionalidades */}
      <div id="funcionalidades" className="content-section">
        <h2 className="section-title">Funcionalidades principales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              titulo: 'Facturación y cobros',
              desc: 'Emite facturas, gestiona pagos y cobros, y automatiza el envío a clientes.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              ),
            },
            {
              titulo: 'Contabilidad',
              desc: 'Lleva la contabilidad al día con asientos automáticos y modelos fiscales.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.625.322S3 5.996 3 8.25v12.375c0 .621.504 1.125 1.125 1.125h16.5c.621 0 1.125-.504 1.125-1.125V8.25c0-2.254-1.508-4.178-3.375-4.678A48.35 48.35 0 0 0 12 2.25Z" />
              ),
            },
            {
              titulo: 'Tesorería',
              desc: 'Controla tu cash flow y anticipa tu situación financiera a 90 días.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              ),
            },
            {
              titulo: 'Inventario y fabricación',
              desc: 'Controla el stock en tiempo real, gestiona almacenes y pedidos de compra.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              ),
            },
            {
              titulo: 'RR.HH.',
              desc: 'Gestiona contratos, nóminas, vacaciones y ausencias del equipo.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              ),
            },
            {
              titulo: 'Visibilidad financiera',
              desc: 'Dashboards en tiempo real con informes de rentabilidad y situación del negocio.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              ),
            },
            {
              titulo: 'Proyectos',
              desc: 'Planifica tareas, asigna recursos y controla la rentabilidad de cada proyecto.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              ),
            },
            {
              titulo: 'CRM',
              desc: 'Gestiona el pipeline comercial y el seguimiento de clientes y oportunidades.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              ),
            },
            {
              titulo: 'Conexión con asesorías',
              desc: 'Invita a tu asesor a la plataforma para colaborar en tiempo real sin enviar archivos.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              ),
            },
          ].map(({ titulo, desc, icon }) => (
            <div key={titulo} className="p-5 bg-white rounded-xl border border-border flex flex-col gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#FF5454" strokeWidth={1.75}>
                {icon}
              </svg>
              <div>
                <p className="font-semibold text-text-main mb-1">{titulo}</p>
                <p className="text-sm" style={{ color: '#686A6C' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audiencias */}
      <div id="audiencias" className="content-section">
        <h2 className="section-title">Audiencias objetivo</h2>
        <p className="section-description">
          Holded opera exclusivamente en España. Los textos deben reflejar el contexto normativo, fiscal y empresarial español. Cada pieza de contenido debe ser dirigida a uno o más de estos segmentos. Antes de escribir, preguntarse: ¿cuál es la audiencia objetivo?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>Perfiles principales</p>
            {[
              { perfil: 'Pymes', desc: 'Pequeñas y medianas empresas. Quieren ahorrar tiempo, tener todo en una herramienta y crecer sin más carga operativa.' },
              { perfil: 'Autónomos', desc: 'Profesionales independientes. Les importa la facturación sencilla, el cumplimiento fiscal y no perder tiempo en papeleo.' },
              { perfil: 'Asesorías y gestorías', desc: 'Despachos contables y asesores fiscales. Necesitan gestión multicliente, colaboración en tiempo real y precisión.' },
            ].map(({ perfil, desc }) => (
              <div key={perfil} className="flex gap-4 p-3 rounded-xl">
                <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 16 16" fill="none">
                  <defs>
                    <linearGradient id="sparkle-grad-aud" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FF5454" />
                      <stop offset="100%" stopColor="#FF8C42" />
                    </linearGradient>
                  </defs>
                  <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" fill="url(#sparkle-grad-aud)" />
                </svg>
                <div>
                  <p className="font-semibold text-text-main mb-1">{perfil}</p>
                  <p className="text-sm" style={{ color: '#686A6C' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>Perfiles secundarios</p>
            {[
              { perfil: 'Solution Partners', desc: 'Partners de integración y revendedores. Les interesan las capacidades técnicas, la API y las oportunidades de coventa.' },
              { perfil: 'Público general', desc: 'Personas que exploran software de gestión. Necesitan explicaciones claras, comparativas y contenido educativo.' },
            ].map(({ perfil, desc }) => (
              <div key={perfil} className="flex gap-4 p-3 rounded-xl">
                <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 16 16" fill="none">
                  <defs>
                    <linearGradient id="sparkle-grad-aud2" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#D1D5DB" />
                      <stop offset="100%" stopColor="#9CA3AF" />
                    </linearGradient>
                  </defs>
                  <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" fill="url(#sparkle-grad-aud2)" />
                </svg>
                <div>
                  <p className="font-semibold text-text-main mb-1">{perfil}</p>
                  <p className="text-sm" style={{ color: '#686A6C' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="subsection-title">Descripción general</h3>
        <p className="section-description">
          La audiencia principal de Holded son <strong>autónomos y pymes en España</strong> que necesitan profesionalizar su gestión diaria sin depender de herramientas fragmentadas: Excel, facturación manual, gestorías con procesos poco conectados o software legacy. Se trata principalmente de <strong>negocios con 1 a 50 empleados</strong>, aunque también incluye empresas en crecimiento con estructuras más complejas que buscan control financiero y escalabilidad operativa.
        </p>
        <p className="section-description">
          Dentro de este universo, Holded impacta especialmente a <strong>perfiles "hands-on" que toman decisiones y ejecutan</strong>: fundadores, gerentes, responsables de administración y finanzas, y en algunos casos equipos de operaciones. Estas personas valoran tres cosas: <strong>ahorrar tiempo, reducir errores y tener visibilidad real del negocio</strong>.
        </p>
        <p className="section-description">
          Un <strong>segmento estratégico</strong> son las asesorías y gestorías que gestionan múltiples clientes y necesitan estandarizar procesos contables y fiscales, automatizar la entrada de datos y mejorar la <strong>colaboración con sus clientes</strong>.
        </p>

      </div>

      {/* Pain points */}
      <div id="pain-points" className="content-section">
        <h2 className="section-title">Pain points por perfil</h2>
        <p className="section-description">
          El 80% de los usuarios que se registran en Holded no usaban otro software antes (Excel, papel o nada). Los textos deben hablarle a alguien que viene del caos, no desde un competidor.
        </p>

        {[
          {
            perfil: 'Autónomos',
            nota: 'La recomendación boca-oreja es determinante en su decisión de probar Holded.',
            items: [
              'Pierden tiempo gestionando facturas y pagos a mano.',
              'No tienen visibilidad clara de lo que cobran y lo que pagan.',
              'El cumplimiento fiscal les genera ansiedad: no saben si están haciendo las cosas bien.',
              'No entienden por qué necesitan ciertas funcionalidades (como la conciliación bancaria) si tienen gestor.',
              'La configuración inicial de cualquier herramienta les frena: quieren empezar a usarla, no a configurarla.',
            ],
          },
          {
            perfil: 'Pymes',
            nota: null,
            items: [
              'Su información está repartida en varias herramientas o documentos sin conexión entre sí.',
              'No tienen visibilidad financiera en tiempo real: dependen de su asesoría para saber cómo va el negocio.',
              'Gestionar facturas, stock, equipo y proyectos desde sitios distintos genera errores y retrasos.',
              'Quieren crecer sin tener que contratar más personas para tareas administrativas.',
              'Los cambios normativos (facturación electrónica, Verifactu...) les generan incertidumbre.',
              'Quieren autonomía sin depender completamente de su asesor.',
            ],
          },
          {
            perfil: 'Asesorías',
            nota: null,
            items: [
              'Gestionan muchos clientes con procesos poco estandarizados, lo que les consume tiempo y genera errores.',
              'La comunicación con sus clientes es lenta y fragmentada: emails, PDFs, llamadas.',
              'Introducen datos manualmente que sus clientes ya tienen en otro formato.',
              'Necesitan herramientas que les permitan colaborar en tiempo real sin perder el control.',
            ],
          },
        ].map(({ perfil, nota, items }) => (
          <div key={perfil} className="mb-8">
            <h3 className="subsection-title">{perfil}</h3>
            {nota && <p className="text-sm mb-3 italic" style={{ color: '#686A6C' }}>{nota}</p>}
            <div className="space-y-1">
              {items.map(item => (
                <div key={item} className="flex gap-4 p-3 rounded-xl">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                    <defs>
                      <linearGradient id="sparkle-grad-pp" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FF5454" />
                        <stop offset="100%" stopColor="#FF8C42" />
                      </linearGradient>
                    </defs>
                    <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" fill="url(#sparkle-grad-pp)" />
                  </svg>
                  <span style={{ color: '#686A6C' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ICP */}
      <div id="icp" className="content-section">
        <h2 className="section-title">Ideal Customer Profile (ICP)</h2>
        <p className="section-description">
          El cliente ideal de Holded es una pyme o autónomo en España que necesita digitalizar su gestión empresarial, con especial foco en cumplir con las obligaciones de facturación electrónica. Busca una solución intuitiva, escalable y siempre actualizada que le permita gestionar su negocio sin complicaciones técnicas.
        </p>

        {/* 1. Perfil demográfico */}
        <h3 className="subsection-title">1. Perfil demográfico</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Perfil principal', value: 'Hombre, ~40 años (72%)', sub: 'David, Javier, José' },
            { label: 'Perfil secundario', value: 'Mujer, ~37 años (28%)', sub: 'María, Marta, Cristina' },
            { label: 'Tamaño de empresa', value: '83% microempresas', sub: '34% autónomos · 49% 2-10 empleados' },
          ].map(({ label, value, sub }) => (
            <div key={label} className="p-4 bg-white rounded-xl border border-border">
              <p className="text-xs text-text-subtle mb-1">{label}</p>
              <p className="font-semibold text-text-main text-sm mb-0.5">{value}</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>{sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Facturación autónomos', value: '~166.000 €/año' },
            { label: 'Facturación pymes', value: '~962.000 €/año' },
            { label: 'Facturación asesorías', value: '~269.000 €/año' },
          ].map(({ label, value }) => (
            <div key={label} className="p-4 bg-white rounded-xl border border-border">
              <p className="text-xs text-text-subtle mb-1">{label}</p>
              <p className="font-semibold text-text-main text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* 2. Perfil sectorial */}
        <h3 className="subsection-title">2. Perfil sectorial</h3>
        <p className="section-description">Holded es una solución transversal, sin un sector dominante.</p>
        <div className="mb-8 rounded-xl border border-border overflow-hidden bg-white">
          <table className="guide-table">
            <thead>
              <tr><th>Sector</th><th>% clientes</th></tr>
            </thead>
            <tbody>
              {[
                ['Servicios profesionales B2B', '11,8%'],
                ['Distribución mayorista', '10,8%'],
                ['Comunicaciones', '9,7%'],
                ['Retail', '9,7%'],
                ['Construcción', '9,5%'],
                ['Tecnología', '7,1%'],
              ].map(([sector, pct]) => (
                <tr key={sector}>
                  <td>{sector}</td>
                  <td className="font-semibold text-text-main">{pct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3. Localización */}
        <h3 className="subsection-title">3. Localización geográfica</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { ciudad: 'Madrid', pct: '18,5%' },
            { ciudad: 'Barcelona', pct: '16,3%' },
            { ciudad: 'Valencia', pct: 'Relevante' },
            { ciudad: 'Málaga', pct: 'Relevante' },
          ].map(({ ciudad, pct }) => (
            <div key={ciudad} className="p-4 bg-white rounded-xl border border-border text-center">
              <p className="font-semibold text-text-main text-sm">{ciudad}</p>
              <p className="text-xs mt-0.5" style={{ color: '#686A6C' }}>{pct}</p>
            </div>
          ))}
        </div>

        {/* 4. Digitalización */}
        <h3 className="subsection-title">4. Nivel de digitalización</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {[
            { stat: '44,3%', desc: 'usan Excel para gestionar su negocio' },
            { stat: '20%', desc: 'no usan ninguna herramienta digital' },
            { stat: '80%', desc: 'no usaban software antes de Holded' },
          ].map(({ stat, desc }) => (
            <div key={stat} className="p-5 bg-white rounded-xl border border-border text-center">
              <p className="text-3xl font-bold text-text-main mb-1">{stat}</p>
              <p className="text-sm" style={{ color: '#686A6C' }}>{desc}</p>
            </div>
          ))}
        </div>
        <p className="section-description">
          <strong>Pain point clave:</strong> la desorganización y falta de integración entre herramientas genera pérdida de tiempo y errores.
        </p>

        {/* 5. Motivaciones */}
        <h3 className="subsection-title">5. Motivaciones de compra</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 bg-white rounded-xl border border-border text-center">
            <p className="text-3xl font-bold text-text-main mb-1">50%</p>
            <p className="font-semibold text-text-main text-sm mb-1">Buscan solución de facturación</p>
            <p className="text-sm" style={{ color: '#686A6C' }}>Punto de entrada principal.</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-border text-center">
            <p className="text-3xl font-bold text-text-main mb-1">25%</p>
            <p className="font-semibold text-text-main text-sm mb-1">Quieren digitalizar su negocio</p>
            <p className="text-sm" style={{ color: '#686A6C' }}>Buscan una herramienta all-in-one.</p>
          </div>
        </div>
        <p className="section-description">
          <strong>Urgencia regulatoria (driver principal en 2025):</strong> Verifactu y Crea y Crece obligan a usar software certificado de facturación electrónica. Muchas pymes no son conscientes de que la obligación les aplica directamente y se apoyan en sus asesores para entender los requisitos.
        </p>

        {/* 6. Canales */}
        <h3 className="subsection-title">6. Cómo nos encuentran</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="p-5 bg-white rounded-xl border border-border text-center">
            <p className="text-3xl font-bold text-text-main mb-1">34%</p>
            <p className="font-semibold text-text-main text-sm mb-1">Recomendación</p>
            <p className="text-sm" style={{ color: '#686A6C' }}>Canal principal. Boca a boca y asesores.</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-border text-center">
            <p className="text-3xl font-bold text-text-main mb-1">18,3%</p>
            <p className="font-semibold text-text-main text-sm mb-1">Búsquedas en Google</p>
            <p className="text-sm" style={{ color: '#686A6C' }}>SEO y SEM.</p>
          </div>
        </div>
        <p className="section-description">
          <strong>Insight:</strong> el contenido sobre "Modelo 347" tiene un 40,39% de tasa de suscripción. El contenido educativo y legal convierte muy bien.
        </p>

        {/* 7. Comportamiento trial */}
        <h3 className="subsection-title">7. Comportamiento durante el trial</h3>
        <p className="section-description">
          El "aha moment": emitir la primera factura. Solo el 27% de usuarios en trial emite una factura, pero el 80% de usuarios de pago ya ha facturado. El 59% de quienes facturan lo hace en las primeras 24h.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { func: 'Facturación / Ventas', pct: '63%' },
            { func: 'Configuración de cuenta', pct: '32%' },
            { func: 'Cuentas bancarias', pct: '31%' },
          ].map(({ func, pct }) => (
            <div key={func} className="p-4 bg-white rounded-xl border border-border text-center">
              <p className="text-2xl font-bold text-text-main mb-1">{pct}</p>
              <p className="text-xs" style={{ color: '#686A6C' }}>{func}</p>
            </div>
          ))}
        </div>

        {/* 8. Pain points */}
        <h3 className="subsection-title">8. Pain points principales</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              titulo: 'Miedo a las sanciones',
              desc: 'Incertidumbre sobre cumplimiento legal y riesgo de multas.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />,
            },
            {
              titulo: 'Confusión regulatoria',
              desc: 'No entienden bien Verifactu, FacturaE o Crea y Crece.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />,
            },
            {
              titulo: 'Herramientas fragmentadas',
              desc: 'Usan Excel + software de facturación + CRM... sin integración.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />,
            },
            {
              titulo: 'Falta de escalabilidad',
              desc: 'Su herramienta actual no crece con el negocio.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />,
            },
            {
              titulo: 'Pérdida de tiempo',
              desc: 'Tareas manuales repetitivas que les quitan tiempo de su core business.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
            },
            {
              titulo: 'Dependencia del asesor',
              desc: 'No tienen autonomía para gestionar su propia facturación.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />,
            },
          ].map(({ titulo, desc, icon }) => (
            <div key={titulo} className="p-5 bg-white rounded-xl border border-border flex flex-col gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#FF5454" strokeWidth={1.75}>
                {icon}
              </svg>
              <div>
                <p className="font-semibold text-text-main mb-1">{titulo}</p>
                <p className="text-sm" style={{ color: '#686A6C' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 9. Resumen */}
        <h3 className="subsection-title">9. Resumen: ¿quién es el ICP de Holded?</h3>
        <p className="section-description">
          El cliente ideal de Holded es un <strong>fundador o dueño de una micropyme o autónomo en España</strong> (probablemente hombre, ~40 años, con <strong>0-10 empleados</strong>), del sector servicios o distribución, ubicado en <strong>Madrid o Barcelona</strong>, que usa <strong>Excel o herramientas básicas de facturación</strong>, y que busca digitalizar su negocio con una solución escalable, fácil de usar y siempre actualizada ante los <strong>requisitos legales de facturación electrónica</strong>.
        </p>
        <div className="rounded-xl px-5 py-4 mb-6" style={{ backgroundColor: '#111827' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>Frase que lo resume</p>
          <p className="text-base font-semibold italic" style={{ color: '#FFFFFF' }}>
            "No soy experto en tecnología, solo quiero facturar bien y cumplir con la ley sin complicarme la vida".
          </p>
        </div>
      </div>
    </div>
  )
}
