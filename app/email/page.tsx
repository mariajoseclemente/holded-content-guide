export default function EmailPage() {
  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge badge-gray">Escritura</span>
        </div>
        <h1 className="page-title">Email</h1>
        <p className="page-description">
          Cómo escribir emails y newsletters para Holded: asuntos, preheaders, estructura, CTAs y seguimiento.
        </p>
      </div>

      {/* Contexto */}
      <div className="content-section">
        <h2 className="section-title">Tono y contexto</h2>
        <p className="section-description">
          El lector ya conoce Holded. El email es el canal más personal. Escríbelo como si lo redactara alguien del equipo, no como si lo generara una herramienta de marketing.
        </p>
        <div className="callout callout-primary">
          Objetivo del email: nutrir, educar y retener. Tono: entusiasta, útil y personal. No vender directamente.
        </div>
      </div>

      {/* Asunto y preheader */}
      <div className="content-section">
        <h2 className="section-title">Asunto y preheader</h2>
        <div className="space-y-4">
          <div className="rule-card">
            <p className="rule-title">Asunto</p>
            <p className="text-sm text-text-muted mb-3">Máximo 50 caracteres. Tuteo. Sin exclamaciones. Sin emojis en los primeros 2 caracteres (los filtros de spam los penalizan).</p>
            <div className="space-y-2">
              <div className="example-block example-do text-xs">✅ Cómo cuadrar el IVA antes del 20 de julio (23 car.)</div>
              <div className="example-block example-do text-xs">✅ 3 cosas que puedes automatizar esta semana (42 car.)</div>
              <div className="example-block example-dont text-xs">❌ ¡Nuestro nuevo módulo de RR.HH. ya está disponible para todos los usuarios!</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">Preheader</p>
            <p className="text-sm text-text-muted mb-3">Máximo 90 caracteres. Complementa el asunto, no lo repite. Si el asunto dice el qué, el preheader dice el por qué o el cómo.</p>
            <div className="space-y-2">
              <div className="example-block example-do text-xs">
                Asunto: "Cómo cuadrar el IVA antes del 20 de julio"<br />
                Preheader: "Te dejamos el paso a paso para hacerlo desde Holded en menos de 10 minutos"
              </div>
              <div className="example-block example-dont text-xs">
                Asunto: "Cómo cuadrar el IVA antes del 20 de julio"<br />
                Preheader: "Te explicamos cómo cuadrar el IVA antes del 20 de julio con Holded"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura */}
      <div className="content-section">
        <h2 className="section-title">Estructura del email</h2>
        <p className="section-description">
          Un email de Holded tiene partes claras. Respeta la jerarquía: no todo puede ser importante.
        </p>
        <div className="border border-border rounded-xl overflow-hidden">
          {[
            {
              part: 'Encabezado',
              desc: 'Logo + navegación mínima. No más de 3 enlaces.',
            },
            {
              part: 'Hero',
              desc: 'Titular (máx. 8 palabras) + subtítulo (máx. 30 palabras) + CTA principal.',
            },
            {
              part: 'Cuerpo',
              desc: 'Bloques de contenido. Máximo 3 ideas por email. Cada bloque con titular + 2-3 líneas + CTA específico.',
            },
            {
              part: 'Contenido secundario',
              desc: 'Artículos relacionados, recursos descargables. Siempre con indicación de tiempo de lectura.',
            },
            {
              part: 'Footer',
              desc: 'Datos legales, enlace de baja, preferencias de comunicación. En español.',
            },
          ].map(({ part, desc }, i, arr) => (
            <div key={part} className={`flex gap-4 p-4 ${i < arr.length - 1 ? 'border-b border-border' : ''}`}>
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <div>
                <p className="font-medium text-text-main text-sm">{part}</p>
                <p className="text-sm text-text-muted mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs en email */}
      <div className="content-section">
        <h2 className="section-title">CTAs en email</h2>
        <div className="space-y-3">
          <div className="rule-card">
            <p className="rule-title">Nunca "haz clic aquí" ni "más información"</p>
            <div className="space-y-2 mt-2">
              <div className="example-block example-dont text-xs">❌ Haz clic aquí · Ver más · Más información · Saber más</div>
              <div className="example-block example-do text-xs">✅ LEER ARTÍCULO➞ · VER TUTORIAL➞ · DESCARGAR GUÍA➞</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">Artículos: LEER ARTÍCULO➞</p>
            <p className="text-sm text-text-muted mt-1">En mayúsculas, con flecha al final. Específico del tipo de contenido.</p>
          </div>
          <div className="rule-card">
            <p className="rule-title">Lecturas secundarias: LECTURA DE X MINUTOS</p>
            <p className="text-sm text-text-muted mt-1">Ayuda al lector a decidir si tiene tiempo antes de clicar.</p>
          </div>
          <div className="rule-card">
            <p className="rule-title">Incluir parámetros UTM en todos los enlaces</p>
            <div className="example-block example-do text-xs mt-2">
              ?utm_source=newsletter_general&utm_medium=email&utm_campaign=20250410
            </div>
          </div>
        </div>
      </div>

      {/* Ejemplo completo */}
      <div className="content-section">
        <h2 className="section-title">Ejemplo de email bien redactado</h2>
        <div className="border border-border rounded-xl overflow-hidden bg-surface-hover">
          <div className="bg-white p-6 space-y-4">
            <div className="pb-4 border-b border-border">
              <p className="text-2xs text-text-subtle uppercase tracking-wider font-semibold mb-1">Asunto</p>
              <p className="text-sm font-medium text-text-main">El truco para no llegar al 20 de julio con prisas</p>
            </div>
            <div className="pb-4 border-b border-border">
              <p className="text-2xs text-text-subtle uppercase tracking-wider font-semibold mb-1">Preheader</p>
              <p className="text-sm text-text-muted">Cómo preparar la declaración del IVA del segundo trimestre en menos de 15 minutos</p>
            </div>
            <div>
              <p className="text-2xs text-text-subtle uppercase tracking-wider font-semibold mb-2">Cuerpo</p>
              <div className="text-sm text-text-muted space-y-3 leading-relaxed">
                <p>El 20 de julio vence la declaración del IVA del segundo trimestre. Si todavía no has cuadrado las facturas de abril, mayo y junio, este es el momento.</p>
                <p>Desde Holded puedes exportar el modelo 303 listo para presentar en la sede electrónica de la AEAT. Sin calcular nada a mano.</p>
                <p>Aquí tienes el paso a paso:</p>
                <div className="pl-4 border-l-2 border-primary-light space-y-1">
                  <p>1. Ve a Contabilidad → Impuestos → IVA</p>
                  <p>2. Selecciona el periodo (abril-junio 2025)</p>
                  <p>3. Revisa que todas las facturas estén bien asignadas</p>
                  <p>4. Exporta el XML para importar en la AEAT</p>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg">
                    VER TUTORIAL COMPLETO➞
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist de email */}
      <div className="content-section">
        <h2 className="section-title">Checklist antes de enviar</h2>
        <div className="space-y-2">
          {[
            'El asunto tiene menos de 50 caracteres',
            'El preheader complementa el asunto (no lo repite)',
            'El email tiene un solo objetivo claro',
            'Los CTAs son específicos (no "haz clic aquí")',
            'Todos los enlaces incluyen parámetros UTM',
            'Los mensajes de error y los textos legales están en español',
            'No hay más de 3 ideas principales',
            'Se tutea en todo el texto',
            'Ninguna afirmación es un superlativo vacío',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border">
              <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-border mt-0.5" />
              <p className="text-sm text-text-muted">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
