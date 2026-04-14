export default function VozTonoPage() {
  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge badge-gray">Fundamentos</span>
        </div>
        <h1 className="page-title">Voz y tono</h1>
        <p className="page-description">
          La voz de Holded es siempre la misma. El tono cambia según el canal y el momento del usuario.
        </p>
      </div>

      {/* Los 5 pilares */}
      <div className="content-section">
        <h2 className="section-title">Los 5 pilares de la voz</h2>
        <p className="section-description">
          Estos pilares se aplican a todos los canales. Son la base de cualquier texto de Holded.
        </p>
        <div className="space-y-4">
          {[
            {
              num: '1',
              title: 'Clara y accesible',
              desc: 'Lenguaje simple y directo. Sin jerga. Si se usa un término técnico, se contextualiza.',
              bad: 'La facturación electrónica es un mecanismo de emisión documental digitalizado con validez jurídica equiparable al soporte físico.',
              good: 'Una factura electrónica es igual que una factura en papel, pero en formato digital y con validez legal.',
            },
            {
              num: '2',
              title: 'Educativa y didáctica',
              desc: 'No solo el qué: también el porqué y el cómo. Cada texto debe dejar al lector con más contexto del que tenía.',
              bad: 'El modelo 303 es la declaración trimestral del IVA.',
              good: 'El modelo 303 es la declaración que presentas cada trimestre para liquidar el IVA con Hacienda. Si has cobrado más IVA del que has pagado, tendrás que ingresar la diferencia.',
            },
            {
              num: '3',
              title: 'Útil y orientada a la acción',
              desc: 'Cada contenido resuelve algo concreto. Pasos numerados, checklists, ejemplos prácticos.',
              bad: 'Es importante que las empresas mantengan una buena gestión de su tesorería.',
              good: 'Para controlar tu tesorería desde hoy: 1) Revisa semanalmente tus cobros pendientes. 2) Separa los gastos fijos de los variables. 3) Usa una previsión de caja a 90 días.',
            },
            {
              num: '4',
              title: 'Profesional, pero cercano',
              desc: 'Como una asesoría de confianza. Se tutea siempre. Sin condescendencia ni formalidad que aleje.',
              bad: 'Se recomienda al usuario que proceda a revisar sus obligaciones fiscales de forma periódica.',
              good: 'Revisa tus obligaciones fiscales cada trimestre. No hace falta que seas un experto en contabilidad, pero sí conviene que sepas qué fechas no puedes perder de vista.',
            },
            {
              num: '5',
              title: 'Confianza basada en hechos',
              desc: 'Sin superlativos vacíos. Cada afirmación se demuestra con datos, normativas o situaciones reales.',
              bad: 'Holded es la solución definitiva que transforma radicalmente la gestión de tu empresa.',
              good: 'Con Holded, puedes cerrar el mes sin esperar a que tu asesoría te envíe el informe: tienes los datos en tiempo real, siempre actualizados.',
            },
          ].map(({ num, title, desc, bad, good }) => (
            <div key={num} className="border border-border rounded-xl overflow-hidden">
              <div className="flex items-start gap-4 p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light text-primary font-bold text-sm flex items-center justify-center">
                  {num}
                </span>
                <div>
                  <h3 className="font-semibold text-text-main mb-1">{title}</h3>
                  <p className="text-sm text-text-muted">{desc}</p>
                </div>
              </div>
              <div className="border-t border-border grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
                <div className="p-4">
                  <span className="example-label example-label-dont">No</span>
                  <p className="text-sm text-red-800 leading-relaxed">{bad}</p>
                </div>
                <div className="p-4">
                  <span className="example-label example-label-do">Sí</span>
                  <p className="text-sm text-green-800 leading-relaxed">{good}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tono por canal */}
      <div className="content-section">
        <h2 className="section-title">Tono por canal</h2>
        <p className="section-description">
          La voz no cambia. El tono sí. De más formal a más informal:
        </p>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          {[
            { label: 'Blog', note: 'Más formal' },
            { label: 'Web', note: '' },
            { label: 'Email', note: '' },
            { label: 'Redes', note: '' },
            { label: 'Publicidad', note: 'Más informal' },
          ].map(({ label, note }, i, arr) => (
            <div key={label} className="flex items-center gap-2">
              <div className="flex-shrink-0 text-center">
                <div
                  className="px-3 py-2 rounded-lg text-sm font-medium border"
                  style={{
                    borderColor: `hsl(${i * 30}, 80%, 75%)`,
                    backgroundColor: `hsl(${i * 30}, 80%, 97%)`,
                    color: `hsl(${i * 30}, 60%, 35%)`,
                  }}
                >
                  {label}
                </div>
                {note && <p className="text-2xs text-text-subtle mt-1">{note}</p>}
              </div>
              {i < arr.length - 1 && (
                <svg className="w-4 h-4 text-text-subtle flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <table className="guide-table">
          <thead>
            <tr>
              <th>Canal</th>
              <th>Objetivo</th>
              <th>Tono</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Blog / contenido educativo', 'Educar, posicionar', 'Amable, didáctico, estructurado'],
              ['Web', 'Informar y convertir', 'Claro, directo, orientado a la acción'],
              ['Email y newsletter', 'Nutrir, educar, retener', 'Entusiasta, útil y personal'],
              ['Redes sociales', 'Conectar, viralizar', 'Informal, con personalidad, breve'],
              ['Publicidad', 'Captar, convertir', 'Directo, llamativo, sin relleno'],
            ].map(([canal, obj, tono]) => (
              <tr key={canal}>
                <td className="font-medium text-text-main">{canal}</td>
                <td>{obj}</td>
                <td>{tono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Citas y comillas */}
      <div className="content-section">
        <h2 className="section-title">Citas y comillas</h2>
        <p className="section-description">
          En español, el punto va siempre después de las comillas. Al contrario que en inglés.
        </p>
        <div className="space-y-3">
          <div>
            <span className="example-label example-label-do">Correcto (español)</span>
            <div className="example-block example-do">"Toda la empresa habla el mismo idioma gracias a Holded".</div>
          </div>
          <div>
            <span className="example-label example-label-dont">Incorrecto (inglés)</span>
            <div className="example-block example-dont">"Toda la empresa habla el mismo idioma gracias a Holded."</div>
          </div>
        </div>
      </div>

      {/* Test de texto */}
      <div className="content-section">
        <h2 className="section-title">Test de texto de Holded</h2>
        <p className="section-description">
          Antes de publicar cualquier texto, responde estas preguntas. Si alguna respuesta es no, reescribe.
        </p>
        <div className="space-y-2">
          {[
            '¿Podría este párrafo aparecer en el contenido de un competidor sin cambios? Si sí, reescribir.',
            '¿Hay alguna palabra del vocabulario prohibido?',
            '¿El tono es apropiado para el canal?',
            '¿Hay algún superlativo vacío sin respaldo de datos?',
            '¿Se tutea al lector en todo el texto?',
            '¿La conclusión es específica, no genérica?',
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border">
              <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-border mt-0.5" />
              <p className="text-sm text-text-muted">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
