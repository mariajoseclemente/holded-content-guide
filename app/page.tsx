import Link from 'next/link'
import SearchBar from '@/components/SearchBar'

const quickCards = [
  {
    href: '/voz-tono',
    title: 'Voz y tono',
    description: 'Los 5 pilares de la voz de Holded y cómo adaptar el tono según el canal.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
    color: 'text-holded-blue',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    href: '/gramatica',
    title: 'Sobre el lenguaje',
    description: 'Uso de tecnicismos, normas generales, emojis, lenguaje inclusivo...',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
    color: 'text-holded-blue',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    href: '/numeros',
    title: 'Gramática y estilo',
    description: 'Cómo escribir los números, el dinero, anglicismos...',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
      </svg>
    ),
    color: 'text-holded-blue',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    href: '/word-list',
    title: 'Word list',
    description: 'Palabras y expresiones de uso frecuente en los textos de Holded y cómo se escriben.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: 'text-holded-blue',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="-mx-8 -mt-10 mb-12">
        <div
          className="px-8 py-16 text-center rounded-lg"
          style={{ background: 'linear-gradient(160deg, #0f1117 0%, #1a1f2e 60%, #0f1117 100%)' }}
        >
          <p className="text-sm font-medium mb-5 tracking-wide uppercase" style={{ color: '#6B7280' }}>
            Cómo escribimos en Holded
          </p>
          <h1
            className="text-5xl font-bold tracking-tight leading-tight mb-5"
            style={{ color: '#FFFFFF' }}
          >
            Guía de estilo
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
            Todo lo que necesitas para escribir con la voz de Holded: desde las reglas de gramática hasta cómo redactar un CTA que convierte.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-12">
        <div className="mb-3">
          <h2 className="font-semibold text-text-main" style={{ fontSize: '22px' }}>Busca en la guía</h2>
        </div>
        <SearchBar />
      </div>

      {/* Quick access cards */}
      <div>
        <h2 className="font-semibold text-text-main mb-4" style={{ fontSize: '22px' }}>Acceso rápido</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group p-6 rounded-lg border border-border bg-white hover:border-primary hover:shadow-base transition-all flex flex-col"
            >
              <div className="text-primary mb-4">
                {card.icon}
              </div>
              <h3 className="font-semibold text-text-main mb-2" style={{ fontSize: '18px' }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#686A6C' }}>
                {card.description}
              </p>
              <span className="text-sm font-medium text-primary">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Notice */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="rounded-lg px-8 py-7 flex items-center gap-6" style={{ backgroundColor: '#111827' }}>
          <svg className="w-10 h-10 flex-shrink-0" style={{ color: '#6B7280' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
          <div>
            <p className="font-semibold mb-1" style={{ color: '#FFFFFF', fontSize: '16px' }}>Aviso</p>
            <p className="text-sm leading-relaxed" style={{ color: '#FFFFFF' }}>
              Esto es solo una guía, es el criterio humano lo que permite crear textos perfectos y adecuados para Holded. Si generas textos con IA, asegúrate de revisarlos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
