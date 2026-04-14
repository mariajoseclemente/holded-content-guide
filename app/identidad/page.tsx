export default function IdentidadPage() {
  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge badge-gray">Fundamentos</span>
        </div>
        <h1 className="page-title">Identidad</h1>
        <p className="page-description">
          Quiénes somos, qué problema resolvemos y cómo hablamos de Holded con coherencia en todos los canales.
        </p>
      </div>

      {/* Qué es Holded */}
      <div className="content-section">
        <h2 className="section-title">Qué es Holded</h2>
        <p className="section-description">
          Software de facturación y gestión (ERP) para pymes, autónomos y asesorías en España. Integra en una sola plataforma en la nube: facturación, contabilidad, RR.HH., inventario, proyectos, CRM y banca. Sin instalar nada.
        </p>
        <div className="callout callout-primary">
          <strong>En una frase:</strong> Holded centraliza las operaciones, automatiza tareas repetitivas y da visibilidad financiera en tiempo real.
        </div>
      </div>

      {/* El problema que resuelve */}
      <div className="content-section">
        <h2 className="section-title">El problema que resuelve</h2>
        <p className="section-description">
          Las pymes y autónomos dedican demasiado tiempo a gestionar en lugar de a crecer. Trabajan con herramientas desconectadas, procesos manuales y datos dispersos.
        </p>
        <div className="callout callout-info">
          <strong>Dato clave:</strong> el 80% de quienes se registran no usaban otro software antes (Excel, papel o nada). Los textos deben hablarle a alguien que viene del caos, no desde un competidor.
        </div>
      </div>

      {/* Cómo hablar de Holded */}
      <div className="content-section">
        <h2 className="section-title">Cómo hablar de Holded</h2>
        <p className="section-description">
          Holded es una herramienta, no un personaje. No tiene intenciones propias ni habla en primera persona.
        </p>
        <div className="space-y-3">
          <div>
            <span className="example-label example-label-dont">No</span>
            <div className="example-block example-dont">
              Holded quiere ayudarte a crecer. Holded cree que la gestión debe ser simple. Holded te ofrece...
            </div>
          </div>
          <div>
            <span className="example-label example-label-do">Sí</span>
            <div className="example-block example-do">
              Con Holded puedes cerrar el mes sin esperar a que tu asesoría te envíe el informe: tienes los datos en tiempo real, siempre actualizados.
            </div>
          </div>
        </div>
      </div>

      {/* Atributos de marca */}
      <div className="content-section">
        <h2 className="section-title">Atributos de marca</h2>
        <p className="section-description">
          Cada atributo tiene un límite. No caer en el extremo contrario es tan importante como el atributo en sí.
        </p>
        <table className="guide-table">
          <thead>
            <tr>
              <th>Somos...</th>
              <th>Pero no...</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Honestos', 'Hirientes o insensibles'],
              ['Útiles', 'Agobiantes o paternalistas'],
              ['Seguros', 'Arrogantes o condescendientes'],
              ['Modernos', 'Herméticos o técnicos en exceso'],
              ['Cercanos', 'Informales o poco profesionales'],
              ['Ambiciosos', 'Insistentes o agresivos'],
            ].map(([attr, limit]) => (
              <tr key={attr}>
                <td className="font-medium text-text-main">{attr}</td>
                <td>{limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cómo nombrar el producto */}
      <div className="content-section">
        <h2 className="section-title">Cómo nombrar el producto</h2>
        <div className="space-y-3">
          <div className="rule-card">
            <p className="rule-title">Holded siempre con mayúscula inicial</p>
            <p className="text-sm text-text-muted">Aunque esté en medio de una frase o en minúsculas el contexto.</p>
            <div className="mt-3 space-y-2">
              <div className="example-block example-dont">❌ holded, HOLDED</div>
              <div className="example-block example-do">✅ Holded</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">software en minúscula, sin cursiva y sin plural</p>
            <div className="mt-3 space-y-2">
              <div className="example-block example-dont">❌ Software, los softwares, <em>software</em></div>
              <div className="example-block example-do">✅ el software, este software</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">app en minúscula, sin cursiva (aceptada por la RAE)</p>
            <div className="mt-3 space-y-2">
              <div className="example-block example-dont">❌ App, la <em>app</em></div>
              <div className="example-block example-do">✅ la app, desde la app</div>
            </div>
          </div>
        </div>
      </div>

      {/* Módulos del producto */}
      <div className="content-section">
        <h2 className="section-title">Módulos del producto</h2>
        <p className="section-description">
          Los módulos de Holded se escriben en minúscula cuando aparecen en texto corrido, a menos que formen parte de un nombre propio dentro de la interfaz.
        </p>
        <table className="guide-table">
          <thead>
            <tr>
              <th>Módulo</th>
              <th>En texto corrido</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Facturación', '"Gestiona tus facturas desde Holded"'],
              ['Contabilidad', '"Cierra la contabilidad en minutos"'],
              ['RR.HH.', '"Genera nóminas desde el módulo de RR.HH."'],
              ['Inventario', '"Controla el stock en tiempo real"'],
              ['Proyectos', '"Haz seguimiento de tus proyectos"'],
              ['CRM', '"Gestiona tus contactos y oportunidades"'],
            ].map(([module, example]) => (
              <tr key={module}>
                <td className="font-medium text-text-main">{module}</td>
                <td className="text-text-muted">{example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
