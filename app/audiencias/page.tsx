export default function AudienciasPage() {
  return (
    <div>
      <div className="page-header">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge badge-gray">Fundamentos</span>
        </div>
        <h1 className="page-title">Audiencias</h1>
        <p className="page-description">
          A quién le escribimos, qué les importa y qué datos de comportamiento hay que tener en mente antes de empezar.
        </p>
      </div>

      {/* ICP */}
      <div className="content-section">
        <h2 className="section-title">El cliente ideal (ICP)</h2>
        <p className="section-description">
          Un fundador o dueño de una micropyme o autónomo en España, con 0-10 empleados, del sector servicios o distribución, ubicado principalmente en Madrid o Barcelona.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { label: 'Perfil más frecuente', value: 'Hombre, ~40 años (72%)' },
            { label: 'Perfil secundario', value: 'Mujer, ~37 años (28%)' },
            { label: 'Herramienta previa', value: 'Excel (44,3%) o nada (20%)' },
            { label: 'Canal de entrada', value: 'Facturación (50%)' },
          ].map(({ label, value }) => (
            <div key={label} className="p-4 bg-surface-hover rounded-lg border border-border">
              <p className="text-xs text-text-subtle mb-1">{label}</p>
              <p className="font-semibold text-text-main text-sm">{value}</p>
            </div>
          ))}
        </div>

        <div className="callout callout-primary">
          <strong>Frase que lo resume:</strong> "No soy experto en tecnología, solo quiero facturar bien y cumplir con la ley sin complicarme la vida."
        </div>
      </div>

      {/* Datos de comportamiento */}
      <div className="content-section">
        <h2 className="section-title">Datos de comportamiento relevantes</h2>
        <p className="section-description">
          Estos datos deben guiar el tono, el contenido y la urgencia de cada pieza.
        </p>
        <div className="space-y-3">
          {[
            {
              stat: '34%',
              text: 'llega por recomendación (boca a boca, asesores). El tono cercano y de confianza importa.',
            },
            {
              stat: '"Aha moment"',
              text: 'emitir la primera factura. Activar rápido es clave. El contenido de onboarding debe eliminar fricción.',
            },
            {
              stat: '50%',
              text: 'busca una solución de facturación como punto de entrada. Empezar por ahí en el contenido de captación.',
            },
            {
              stat: '40,39%',
              text: 'tasa de suscripción del artículo sobre el Modelo 347. El contenido educativo y legal convierte muy bien.',
            },
            {
              stat: '80%',
              text: 'no usaba otro software antes. Escribir para alguien que viene del caos, no desde un competidor.',
            },
          ].map(({ stat, text }) => (
            <div key={stat} className="flex gap-4 p-4 border border-border rounded-lg">
              <span className="flex-shrink-0 font-bold text-primary text-lg leading-tight">{stat}</span>
              <p className="text-sm text-text-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Segmentos */}
      <div className="content-section">
        <h2 className="section-title">Segmentos y qué les importa</h2>
        <p className="section-description">
          Antes de escribir, define a qué segmento te diriges. El mismo mensaje no funciona para todos.
        </p>
        <table className="guide-table">
          <thead>
            <tr>
              <th>Perfil</th>
              <th>Qué les importa</th>
              <th>Cómo conectar</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Pymes',
                'Ahorrar tiempo, una sola herramienta, crecer sin más carga operativa',
                'Resultado + eficiencia. "En lugar de tres herramientas, una."',
              ],
              [
                'Autónomos',
                'Facturación sencilla, cumplimiento fiscal, no perder tiempo en papeleo',
                'Simplicidad + tranquilidad. "Cumple con Hacienda sin complicarte."',
              ],
              [
                'Asesorías',
                'Gestión multicliente, colaboración en tiempo real, precisión',
                'Control + confianza. "Ve los datos de todos tus clientes en un solo lugar."',
              ],
              [
                'Solution Partners',
                'API, capacidades técnicas, oportunidades de coventa',
                'Técnico + oportunidad. "Construye sobre Holded para tus clientes."',
              ],
              [
                'Público general',
                'Explicaciones claras, comparativas, contenido educativo',
                'Claridad + utilidad. Sin asumir conocimientos previos.',
              ],
            ].map(([perfil, importa, conectar]) => (
              <tr key={perfil}>
                <td className="font-medium text-text-main whitespace-nowrap">{perfil}</td>
                <td>{importa}</td>
                <td className="text-text-muted">{conectar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Checklist de audiencia */}
      <div className="content-section">
        <h2 className="section-title">Antes de escribir, responde estas preguntas</h2>
        <p className="section-description">
          Si no tienes respuesta para alguna, consíguela antes de empezar. Escribir sin audiencia definida produce textos genéricos.
        </p>
        <div className="space-y-2">
          {[
            '¿A quién le estoy escribiendo exactamente? ¿Pyme, autónomo, asesoría?',
            '¿Qué problema concreto tiene en este momento?',
            '¿Qué sabe ya de Holded? ¿Es nuevo cliente, lleva meses usando la herramienta?',
            '¿Qué quiero que haga después de leer esto?',
            '¿Qué canal es este? ¿Web, email, blog, redes?',
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-surface-hover">
              <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-border mt-0.5" />
              <p className="text-sm text-text-muted">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
