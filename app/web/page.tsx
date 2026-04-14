export default function WebPage() {
  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge badge-gray">Escritura</span>
        </div>
        <h1 className="page-title">Web</h1>
        <p className="page-description">
          Copy de producto para la web de Holded: hero, features, CTAs, banners y social proof.
        </p>
      </div>

      {/* Hero */}
      <div className="content-section">
        <h2 className="section-title">Hero</h2>
        <p className="section-description">
          El H1 y el subtítulo son lo primero que lee el usuario. Tienen que dejar claro el valor en menos de 10 segundos.
        </p>
        <div className="space-y-4 mb-6">
          <div className="rule-card">
            <p className="rule-title">H1: verbo de acción + beneficio</p>
            <p className="text-sm text-text-muted mb-3">4-8 palabras. Empieza con imperativo o sustantivo de acción. Sin gerundios, sin superlativos.</p>
            <div className="space-y-2">
              <div className="example-block example-do text-xs">✅ Genera nóminas en 5 segundos</div>
              <div className="example-block example-do text-xs">✅ Olvídate de registrar tus gastos a mano</div>
              <div className="example-block example-do text-xs">✅ Toda la gestión de tu empresa, en un lugar</div>
              <div className="example-block example-dont text-xs">❌ La solución definitiva para la gestión integral de tu empresa</div>
              <div className="example-block example-dont text-xs">❌ Transformando la manera en que las pymes gestionan su negocio</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">Subtítulo</p>
            <p className="text-sm text-text-muted mb-3">20-35 palabras. Complementa el H1, no lo repite. Describe el mecanismo en términos cotidianos. Sin jerga.</p>
            <div className="space-y-2">
              <div className="example-block example-do text-xs">✅ Holded conecta tu facturación, contabilidad y RR.HH. en una sola herramienta. Sin hojas de cálculo, sin correos a tu asesor, sin datos desactualizados.</div>
              <div className="example-block example-dont text-xs">❌ Una plataforma ERP cloud-native que empodera a pymes y autónomos para optimizar sus flujos de trabajo y escalar sus operaciones.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="content-section">
        <h2 className="section-title">Key benefits</h2>
        <div className="space-y-3">
          <div className="rule-card">
            <p className="rule-title">Headline de beneficio</p>
            <p className="text-sm text-text-muted mb-2">Resultado concreto + contexto. 4-10 palabras.</p>
            <div className="space-y-2">
              <div className="example-block example-do text-xs">✅ Cierra el mes sin esperar a tu asesor</div>
              <div className="example-block example-do text-xs">✅ El stock actualizado en tiempo real</div>
              <div className="example-block example-dont text-xs">❌ Visibilidad financiera sin precedentes para tu negocio</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">Subtítulo de beneficio</p>
            <p className="text-sm text-text-muted mb-2">30-60 palabras. La primera oración puede conectar con el pain point usando negación.</p>
            <div className="example-block example-do text-xs">✅ No tienes que esperar a fin de mes para saber cómo va el negocio. En Holded ves los ingresos, gastos y márgenes actualizados al instante, sin exportar nada ni pedirle datos a nadie.</div>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="content-section">
        <h2 className="section-title">CTAs: tres niveles</h2>
        <p className="section-description">
          Cada CTA tiene un propósito diferente. Mezclarlos o usar el nivel incorrecto debilita la conversión.
        </p>

        <div className="space-y-4">
          {/* Nivel 1 */}
          <div className="border-2 border-primary rounded-xl overflow-hidden">
            <div className="bg-primary-light px-5 py-3">
              <h3 className="font-semibold text-primary text-sm">Nivel 1: Conversión (botón primario)</h3>
            </div>
            <div className="p-5">
              <p className="text-sm text-text-muted mb-4">Un solo botón primario por bloque. Siempre con microtexto de apoyo cuando sea posible.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Empieza gratis', 'Pruébalo gratis', 'Crea tu cuenta gratis'].map((cta) => (
                  <div key={cta} className="text-center">
                    <div className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg">{cta}</div>
                    <p className="text-2xs text-text-subtle mt-1">Sin tarjeta de crédito</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="example-block example-dont text-xs">❌ Registrarse / Saber más / Ver más información / Accede</div>
              </div>
            </div>
          </div>

          {/* Nivel 2 */}
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="bg-surface-hover px-5 py-3">
              <h3 className="font-semibold text-text-main text-sm">Nivel 2: Exploración (botón secundario)</h3>
            </div>
            <div className="p-5">
              <p className="text-sm text-text-muted mb-4">Siempre acompaña al CTA principal. Nunca aparece solo.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Ver demo', 'Habla con el equipo'].map((cta) => (
                  <div key={cta} className="px-4 py-2 border border-border text-text-main text-sm font-medium rounded-lg bg-white">{cta}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Nivel 3 */}
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="bg-surface-hover px-5 py-3">
              <h3 className="font-semibold text-text-main text-sm">Nivel 3: Profundización (links de texto)</h3>
            </div>
            <div className="p-5">
              <p className="text-sm text-text-muted mb-4">Dentro de secciones de features. Siempre específicos y con flecha. Nunca genéricos.</p>
              <div className="space-y-2">
                <div className="example-block example-do text-xs">✅ Descubre cómo funciona la facturación electrónica ➞</div>
                <div className="example-block example-do text-xs">✅ Cómo gestionar nóminas con Holded ➞</div>
                <div className="example-block example-dont text-xs">❌ Saber más / Ver más / Más información</div>
              </div>
            </div>
          </div>
        </div>

        <div className="callout callout-info mt-4">
          <strong>Reglas de redacción de CTAs:</strong> imperativo siempre (Empieza, Prueba, Crea, Descubre). Nunca infinitivos. Siempre en minúscula salvo nombres propios. Máximo 3 palabras en botones principales.
        </div>
      </div>

      {/* Banners */}
      <div className="content-section">
        <h2 className="section-title">Banners</h2>
        <div className="space-y-3">
          <div className="rule-card">
            <p className="rule-title">Una idea + una acción. Sin más.</p>
            <p className="text-sm text-text-muted mt-1">Titular: máximo 8 palabras. Sin signos de exclamación. Sin urgencia forzada.</p>
          </div>
          <div className="rule-card">
            <p className="rule-title">Datos reales en lugar de claims vagos</p>
            <div className="mt-2 space-y-2">
              <div className="example-block example-dont text-xs">❌ Nuevas funciones cada mes</div>
              <div className="example-block example-do text-xs">✅ Actualizamos Holded cada semana con mejoras visibles</div>
              <div className="example-block example-dont text-xs">❌ Miles de empresas confían en Holded</div>
              <div className="example-block example-do text-xs">✅ Más de 80.000 empresas facturan con Holded [fuente]</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">Siempre una razón para clicar</p>
            <p className="text-sm text-text-muted mt-1">Incluir "sin tarjeta", "gratis" o "en X minutos" cuando aplique.</p>
          </div>
        </div>
      </div>

      {/* Social proof */}
      <div className="content-section">
        <h2 className="section-title">Social proof</h2>
        <p className="section-description">
          Diferenciar el tipo: social (personas), de rendimiento (dato cuantificable), de autoridad (logos), de escala (cifra + contexto).
        </p>
        <div className="space-y-3">
          <div className="rule-card">
            <p className="rule-title">Quotes de clientes</p>
            <p className="text-sm text-text-muted mb-3">Deben validar un beneficio concreto y sonar como hablaría un cliente real, no como lo redactaría marketing.</p>
            <div className="space-y-2">
              <div className="example-block example-dont text-xs">❌ "Holded ha transformado radicalmente nuestra forma de gestionar el negocio". - Cliente</div>
              <div className="example-block example-do text-xs">✅ "Antes tardaba dos horas en cuadrar el cierre del mes. Ahora lo veo en tiempo real desde el dashboard". - Ana García, directora financiera, Empresa X</div>
            </div>
            <div className="mt-3 callout callout-info text-xs">
              Siempre con nombre, cargo, empresa y foto si es posible. Insertar junto al contenido funcional relacionado.
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">Cifras: nunca vagas, siempre con fuente</p>
            <div className="space-y-2">
              <div className="example-block example-dont text-xs">❌ Miles de empresas usan Holded</div>
              <div className="example-block example-do text-xs">✅ +80.000 empresas y autónomos en España</div>
            </div>
          </div>
        </div>
      </div>

      {/* Formularios */}
      <div className="content-section">
        <h2 className="section-title">Formularios y mensajes de error</h2>
        <div className="space-y-3">
          {[
            {
              rule: 'Etiquetas siempre visibles, incluso al clicar en el campo',
              bad: 'Placeholder que desaparece al escribir',
              good: 'Label visible + placeholder de ayuda',
            },
            {
              rule: 'Mensajes de error: nunca culpar, orientar a la solución',
              bad: 'Email incorrecto',
              good: 'Parece que falta el @ en tu email',
            },
            {
              rule: 'CTAs de formulario en primera persona',
              bad: 'Registrarse / Enviar',
              good: 'Crear mi cuenta gratis / Enviar mi consulta',
            },
          ].map(({ rule, bad, good }) => (
            <div key={rule} className="rule-card">
              <p className="rule-title">{rule}</p>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="example-block example-dont text-xs">❌ {bad}</div>
                <div className="example-block example-do text-xs">✅ {good}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
