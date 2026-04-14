export default function GramaticaPage() {
  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge badge-gray">Escritura</span>
        </div>
        <h1 className="page-title">Gramática</h1>
        <p className="page-description">
          Normas de escritura, vocabulario prohibido y 25 patrones de IA que hay que evitar en todos los textos de Holded.
        </p>
      </div>

      {/* Reglas generales */}
      <div className="content-section">
        <h2 className="section-title">Reglas generales</h2>
        <div className="space-y-3">
          {[
            { rule: 'Holded siempre con mayúscula inicial', ex_bad: 'holded, HOLDED', ex_good: 'Holded' },
            { rule: 'software en minúscula, sin cursiva, sin plural', ex_bad: 'Software, los softwares', ex_good: 'el software' },
            { rule: 'app en minúscula, sin cursiva', ex_bad: 'App, la App', ex_good: 'la app' },
            { rule: 'Sin guiones largos (—). Usar comas, puntos o dos puntos', ex_bad: 'Facturas, pedidos, presupuestos — todo en un lugar', ex_good: 'Facturas, pedidos y presupuestos: todo en un lugar' },
            { rule: 'Se tutea siempre', ex_bad: 'Puede usted gestionar sus facturas', ex_good: 'Gestiona tus facturas' },
          ].map(({ rule, ex_bad, ex_good }) => (
            <div key={rule} className="rule-card">
              <p className="rule-title">{rule}</p>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="example-block example-dont text-xs">❌ {ex_bad}</div>
                <div className="example-block example-do text-xs">✅ {ex_good}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lenguaje inclusivo */}
      <div className="content-section">
        <h2 className="section-title">Lenguaje inclusivo</h2>
        <p className="section-description">
          Usar palabras neutras. Sin @, sin (e), sin *, sin x, sin a/o. La solución es usar colectivos neutros o la segunda persona.
        </p>
        <table className="guide-table">
          <thead>
            <tr>
              <th>No usar</th>
              <th>Alternativa</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['los usuarios', 'la clientela, quienes usan Holded'],
              ['los empleados', 'el equipo, el personal'],
              ['los clientes', 'la clientela, tus clientes'],
              ['los autónomos', 'personas autónomas, quienes trabajan por cuenta propia'],
              ['bienvenido', 'ya estás dentro, empieza aquí'],
              ['todos', 'todas las personas, el equipo completo'],
            ].map(([bad, good]) => (
              <tr key={bad}>
                <td className="text-red-600 font-medium">{bad}</td>
                <td className="text-green-700">{good}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Números */}
      <div className="content-section">
        <h2 className="section-title">Números y formato</h2>
        <div className="space-y-3">
          {[
            { rule: 'Del uno al nueve: en letra. Del 10 en adelante: en cifra', ex_bad: '3 módulos, 10 euros', ex_good: 'tres módulos, 10 euros' },
            { rule: 'Si un número abre frase: siempre en letra', ex_bad: '14 días después, todo cambió', ex_good: 'Catorce días después, todo cambió' },
            { rule: 'Millares con punto', ex_bad: '1000 / 10000', ex_good: '1.000 / 10.000' },
            { rule: 'Porcentajes pegados al número', ex_bad: '21 % / 21%', ex_good: '21%' },
            { rule: 'Dinero: símbolo después del número con espacio, decimales con coma', ex_bad: '€20 / 20,50€ / 20.50 €', ex_good: '20 € / 20,50 €' },
          ].map(({ rule, ex_bad, ex_good }) => (
            <div key={rule} className="rule-card">
              <p className="rule-title">{rule}</p>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="example-block example-dont text-xs">❌ {ex_bad}</div>
                <div className="example-block example-do text-xs">✅ {ex_good}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Siglas */}
      <div className="content-section">
        <h2 className="section-title">Siglas</h2>
        <div className="space-y-3">
          <div className="rule-card">
            <p className="rule-title">En mayúsculas sin puntos</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['IVA', 'IRPF', 'CRM', 'ERP', 'ISP', 'DNI', 'NIF'].map((s) => (
                <span key={s} className="badge badge-primary">{s}</span>
              ))}
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">RR.HH. lleva puntos</p>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="example-block example-dont text-xs">❌ RRHH, recursos humanos</div>
              <div className="example-block example-do text-xs">✅ RR.HH.</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">pyme en minúscula en texto corrido</p>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="example-block example-dont text-xs">❌ PYME, Pyme</div>
              <div className="example-block example-do text-xs">✅ pyme, las pymes</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">Primera mención: término completo + sigla entre paréntesis. Siguientes: solo sigla</p>
            <div className="example-block example-do text-xs">✅ El impuesto sobre el valor añadido (IVA) se aplica... A partir del año, el IVA reducido...</div>
          </div>
          <div className="rule-card">
            <p className="rule-title">Sin plural morfológico</p>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="example-block example-dont text-xs">❌ los IVAs repercutidos</div>
              <div className="example-block example-do text-xs">✅ los IVA repercutidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Anglicismos */}
      <div className="content-section">
        <h2 className="section-title">Anglicismos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-text-main mb-3 text-sm">Sin cursiva</h3>
            <div className="flex flex-wrap gap-2">
              {['dashboard', 'lead', 'cash flow', 'benchmark', 'startup', 'freelance', 'coworking', 'marketplace', 'stock', 'backup'].map((w) => (
                <span key={w} className="badge badge-gray font-mono">{w}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-text-main mb-3 text-sm">Con cursiva</h3>
            <div className="flex flex-wrap gap-2">
              {['onboarding', 'pipeline', 'forecast', 'reporting', 'workflow', 'outsourcing', 'roadmap', 'upgrade', 'downgrade'].map((w) => (
                <span key={w} className="badge badge-gray font-mono italic">{w}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vocabulario prohibido */}
      <div className="content-section">
        <h2 className="section-title">Vocabulario prohibido</h2>
        <p className="section-description">
          Estas palabras y expresiones no deben aparecer nunca en ningún texto de Holded.
        </p>
        <div className="callout callout-warning mb-6">
          Si escribes alguna de estas palabras, para y busca una alternativa concreta. La mayoría se puede sustituir por el hecho real que querías expresar.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-text-main mb-3 text-sm">En inglés</h3>
            <div className="flex flex-wrap gap-1.5">
              {[
                'leverage', 'testament', 'landscape', 'showcase', 'nestled', 'pivotal',
                'groundbreaking', 'seamless', 'empower', 'unlock', 'foster', 'delve',
                'tapestry', 'harness', 'beacon', 'bustling', 'moreover', 'furthermore',
                'spearhead', 'unpack', 'supercharge', 'game-changer', 'cutting-edge',
                'revolutionize',
              ].map((w) => (
                <span key={w} className="px-2 py-0.5 text-xs bg-red-50 text-red-600 border border-red-100 rounded font-mono">{w}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-text-main mb-3 text-sm">En español</h3>
            <div className="flex flex-wrap gap-1.5">
              {[
                'un testimonio de', 'pilar fundamental', 'en el panorama actual',
                'sin lugar a dudas', 'cabe destacar que', 'es importante señalar que',
                'no es de extrañar que', 'en este sentido', 'en la actualidad',
                'potenciar de manera integral', 'herramienta transformadora',
                'solución integral', 'ecosistema innovador', 'apalancarse en', 'sinergia',
              ].map((w) => (
                <span key={w} className="px-2 py-0.5 text-xs bg-red-50 text-red-600 border border-red-100 rounded">{w}</span>
              ))}
            </div>
          </div>
        </div>

        <h3 className="font-semibold text-text-main mt-6 mb-3 text-sm">Sustituciones habituales</h3>
        <table className="guide-table">
          <thead>
            <tr>
              <th>Prohibido</th>
              <th>Alternativa</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['"leverage"', '"usar"'],
              ['"showcase"', '"mostrar"'],
              ['"empower"', '"ayudar"'],
              ['"seamless"', 'Describir qué ocurre realmente'],
              ['"landscape"', '"sector" o el mercado concreto'],
              ['"cabe destacar que"', 'Nada: enunciar el hecho directamente'],
              ['"solución integral"', 'Lo que realmente hace el producto'],
            ].map(([bad, good]) => (
              <tr key={bad}>
                <td className="text-red-600 font-mono">{bad}</td>
                <td className="text-green-700">{good}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
