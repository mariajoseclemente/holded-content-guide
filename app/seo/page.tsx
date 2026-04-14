export default function SeoPage() {
  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge badge-gray">Canales digitales</span>
        </div>
        <h1 className="page-title">SEO</h1>
        <p className="page-description">
          Reglas de optimización para web y blog. Cómo escribir para personas y posicionar al mismo tiempo.
        </p>
      </div>

      {/* Principio */}
      <div className="content-section">
        <div className="callout callout-primary">
          <strong>Principio base:</strong> escribe primero para el lector, luego optimiza para el buscador. Un texto bien escrito ya está parcialmente optimizado. Un texto optimizado que nadie lee no posiciona.
        </div>
      </div>

      {/* Keyword */}
      <div className="content-section">
        <h2 className="section-title">Keyword principal</h2>
        <p className="section-description">
          Cada pieza tiene una sola keyword principal. Debe aparecer en los sitios clave sin forzarla.
        </p>
        <table className="guide-table">
          <thead>
            <tr>
              <th>Dónde debe aparecer</th>
              <th>Cómo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['H1', 'De forma natural, no forzada'],
              ['Meta description', 'En las primeras palabras si es posible'],
              ['Primer párrafo', 'En los primeros 100 caracteres'],
              ['Al menos un H2', 'Idealmente en forma de pregunta si coincide con búsqueda real'],
              ['Alt text de imagen principal', 'Descriptivo + keyword natural'],
              ['URL slug', 'Sin palabras vacías (el, la, de, un)'],
            ].map(([where, how]) => (
              <tr key={where}>
                <td className="font-medium text-text-main">{where}</td>
                <td>{how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Meta description */}
      <div className="content-section">
        <h2 className="section-title">Meta description</h2>
        <div className="space-y-3">
          <div className="rule-card">
            <p className="rule-title">Máximo 155 caracteres. Keyword + beneficio claro.</p>
            <p className="text-sm text-text-muted mt-1 mb-3">No es un resumen del artículo. Es un argumento para que el usuario haga clic.</p>
            <div className="space-y-2">
              <div className="example-block example-dont text-xs">❌ En este artículo explicamos todo lo que necesitas saber sobre el modelo 303 de la declaración trimestral del IVA en España.</div>
              <div className="example-block example-do text-xs">✅ El modelo 303 es la declaración trimestral del IVA. Aquí tienes el paso a paso para presentarlo correctamente y evitar sanciones. (138 car.)</div>
            </div>
          </div>
          <div className="callout callout-info">
            La meta description no afecta directamente al ranking, pero sí al CTR. Una buena descripción puede doblar los clics desde la misma posición.
          </div>
        </div>
      </div>

      {/* Estructura H1-H2 */}
      <div className="content-section">
        <h2 className="section-title">Estructura de encabezados</h2>
        <div className="space-y-3">
          <div className="rule-card">
            <p className="rule-title">Un solo H1 por página</p>
            <p className="text-sm text-text-muted mt-1">El H1 es el título de la página. Nunca repetirlo ni poner dos.</p>
          </div>
          <div className="rule-card">
            <p className="rule-title">H2s: en forma de pregunta cuando coincidan con búsquedas reales</p>
            <div className="space-y-2 mt-2">
              <div className="example-block example-do text-xs">✅ ¿Cuándo hay que presentar el modelo 303?</div>
              <div className="example-block example-do text-xs">✅ ¿Qué pasa si no presento el IVA a tiempo?</div>
              <div className="example-block example-dont text-xs">❌ Plazos de presentación del modelo 303</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">Encabezados en sentence case, nunca en Title Case</p>
            <div className="space-y-2 mt-2">
              <div className="example-block example-dont text-xs">❌ Cómo Presentar El Modelo 303 Paso A Paso</div>
              <div className="example-block example-do text-xs">✅ Cómo presentar el modelo 303 paso a paso</div>
            </div>
          </div>
        </div>
      </div>

      {/* URL */}
      <div className="content-section">
        <h2 className="section-title">URLs</h2>
        <div className="space-y-3">
          {[
            {
              rule: 'Corta y descriptiva',
              bad: '/blog/2025/04/10/todo-lo-que-necesitas-saber-sobre-el-modelo-303',
              good: '/blog/modelo-303',
            },
            {
              rule: 'Minúsculas con guiones. Sin caracteres especiales',
              bad: '/blog/Modelo_303_IVA',
              good: '/blog/modelo-303-iva',
            },
            {
              rule: 'Sin palabras vacías (artículos, preposiciones)',
              bad: '/blog/como-se-presenta-el-modelo-303-de-iva',
              good: '/blog/como-presentar-modelo-303',
            },
          ].map(({ rule, bad, good }) => (
            <div key={rule} className="rule-card">
              <p className="rule-title">{rule}</p>
              <div className="mt-2 space-y-2">
                <div className="example-block example-dont text-xs font-mono">{bad}</div>
                <div className="example-block example-do text-xs font-mono">{good}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alt text */}
      <div className="content-section">
        <h2 className="section-title">Alt text en imágenes</h2>
        <div className="space-y-3">
          <div className="rule-card">
            <p className="rule-title">Orientado al significado, no a la descripción literal</p>
            <p className="text-sm text-text-muted mb-3 mt-1">Máximo 140 caracteres. Sin "imagen de" al inicio. Keyword de forma natural.</p>
            <div className="space-y-2">
              <div className="example-block example-dont text-xs">❌ Imagen de una pantalla de ordenador mostrando el software de Holded</div>
              <div className="example-block example-do text-xs">✅ Dashboard de facturación de Holded con resumen de ingresos y facturas pendientes</div>
            </div>
          </div>
          <div className="callout callout-info">
            Las imágenes decorativas (fondos, separadores) no necesitan alt text. Añade <code>alt=""</code> para que los lectores de pantalla las ignoren.
          </div>
        </div>
      </div>

      {/* Enlaces internos */}
      <div className="content-section">
        <h2 className="section-title">Estrategia de enlaces internos</h2>
        <div className="space-y-3">
          <div className="rule-card">
            <p className="rule-title">Entre 3 y 5 enlaces internos por pieza de blog</p>
            <p className="text-sm text-text-muted mt-1">Enlazar a páginas de producto relacionadas + artículos relevantes del blog.</p>
          </div>
          <div className="rule-card">
            <p className="rule-title">Anchor text descriptivo y específico</p>
            <div className="space-y-2 mt-2">
              <div className="example-block example-dont text-xs">❌ Para saber más, haz clic aquí</div>
              <div className="example-block example-do text-xs">✅ Consulta nuestra guía sobre el modelo 347</div>
            </div>
          </div>
          <div className="rule-card">
            <p className="rule-title">No enlazar a páginas que compitan por la misma keyword</p>
            <p className="text-sm text-text-muted mt-1">Evitar la canibalización. Cada keyword principal pertenece a una sola URL.</p>
          </div>
        </div>
      </div>

      {/* Checklist SEO */}
      <div className="content-section">
        <h2 className="section-title">Checklist SEO antes de publicar</h2>
        <div className="space-y-2">
          {[
            'La keyword principal está en el H1',
            'La keyword aparece en la meta description',
            'La keyword aparece en el primer párrafo',
            'La URL es corta, en minúsculas y sin palabras vacías',
            'Hay entre 3 y 5 enlaces internos',
            'Las imágenes tienen alt text descriptivo',
            'Los H2s están en formato de pregunta cuando corresponde',
            'La meta description tiene menos de 155 caracteres',
            'No hay dos páginas del sitio compitiendo por la misma keyword',
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
