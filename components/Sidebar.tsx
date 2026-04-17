'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navGroups = [
  {
    label: 'Fundamentos de marca',
    href: '/fundamentos',
    items: [
      { href: '/fundamentos#que-es', label: '¿Qué es Holded?' },
      { href: '/fundamentos#audiencias', label: 'Audiencias' },
      { href: '/fundamentos#icp', label: 'Ideal Customer Profile' },
    ],
  },
  {
    label: 'Brand voice',
    href: '/brand-voice',
    items: [
      { href: '/brand-voice#voz-holded', label: 'La voz de Holded' },
      { href: '/brand-voice#tono-canal', label: 'Tono por canal' },
      { href: '/brand-voice#reglas-generales', label: 'Reglas generales y uso del español' },
    ],
  },
  {
    label: 'Escritura',
    href: '/escritura',
    items: [
      { href: '/escritura#numeros', label: 'Números' },
      { href: '/escritura#dinero', label: 'Dinero' },
      { href: '/escritura#siglas', label: 'Siglas y acrónimos' },
      { href: '/escritura#puntuacion', label: 'Puntuación' },
      { href: '/escritura#anglicismos', label: 'Anglicismos' },
      { href: '/escritura#word-list', label: 'Lista de palabras' },
    ],
  },
  {
    label: 'Canales',
    href: '/canales',
    items: [
      { href: '/canales#web', label: 'Web' },
      { href: '/canales#seo', label: 'SEO' },
      { href: '/canales#email', label: 'Email y newsletters' },
    ],
  },
  {
    label: 'IA',
    href: '/ia',
    items: [
      { href: '/ia#patrones', label: 'Patrones a evitar' },
      { href: '/ia#vocabulario', label: 'Vocabulario prohibido' },
    ],
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState<string>('')

  const isGroupActive = (group: typeof navGroups[0]) =>
    pathname === group.href || group.items.some((item) => item.href.split('#')[0] === pathname)

  const getInitialOpen = () => {
    const open: Record<string, boolean> = {}
    navGroups.forEach((group) => {
      open[group.label] = isGroupActive(group)
    })
    return open
  }

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(getInitialOpen)

  useEffect(() => {
    setOpenGroups((prev) => {
      const next = { ...prev }
      navGroups.forEach((group) => {
        if (isGroupActive(group)) next[group.label] = true
      })
      return next
    })
  }, [pathname])

  // Track active anchor via IntersectionObserver
  useEffect(() => {
    const anchorIds = navGroups
      .flatMap(g => g.items)
      .filter(item => item.href.includes('#'))
      .map(item => item.href.split('#')[1])

    if (anchorIds.length === 0) return

    const observers: IntersectionObserver[] = []
    anchorIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHash(id)
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [pathname])

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <aside className="fixed left-0 top-0 w-[240px] h-screen flex flex-col overflow-y-auto z-10" style={{ backgroundColor: '#111827', borderRight: '1px solid #1F2937' }}>
      {/* Logo */}
      <div className="px-5 py-5" style={{ borderBottom: '1px solid #1F2937' }}>
        <Link href="/" className="block group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/holded-logo.svg"
            alt="Holded"
            className="h-7 w-auto max-w-full"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Link>
      </div>

      {/* Home link */}
      <div className="px-3 pt-3 pb-1">
        <Link
          href="/"
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
            pathname === '/'
              ? 'text-primary font-medium'
              : 'hover:text-white'
          }`}
          style={{ color: pathname === '/' ? '#FFFFFF' : '#9CA3AF', backgroundColor: pathname === '/' ? '#1F2937' : undefined }}
          onMouseEnter={e => { if (pathname !== '/') (e.currentTarget as HTMLElement).style.backgroundColor = '#1F2937' }}
          onMouseLeave={e => { if (pathname !== '/') (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Inicio
        </Link>
      </div>

      {/* Navigation groups */}
      <nav className="flex-1 px-3 pb-6 pt-2">
        {navGroups.map((group) => {
          const isOpen = !!openGroups[group.label]
          const isActive = pathname === group.href
          return (
            <div key={group.label} className="mb-1">
              <div
                className="flex items-center rounded-md transition-colors"
                style={{ backgroundColor: isActive ? '#1F2937' : undefined }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = '#1F2937' }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
              >
                <Link
                  href={group.href}
                  className="flex-1 px-3 py-2 text-sm font-medium transition-colors"
                  style={{ color: isActive ? '#FFFFFF' : '#E5E7EB' }}
                >
                  {group.label}
                </Link>
                <button
                  onClick={() => toggleGroup(group.label)}
                  className="px-2 py-2 transition-colors"
                  style={{ color: '#6B7280' }}
                  aria-label={isOpen ? 'Cerrar sección' : 'Abrir sección'}
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>
              {isOpen && (
                <ul className="mt-0.5 mb-1 space-y-0.5">
                  {group.items.map((item) => {
                    const hash = item.href.includes('#') ? item.href.split('#')[1] : null
                    const isAnchorItem = hash !== null
                    const isItemActive = isAnchorItem
                      ? activeHash === hash
                      : pathname === item.href
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 pl-6 pr-3 py-1.5 rounded-md text-sm transition-colors"
                          style={{
                            color: isItemActive ? '#FFFFFF' : '#9CA3AF',
                            fontWeight: isItemActive ? 500 : 400,
                            backgroundColor: isItemActive && !isAnchorItem ? '#1F2937' : undefined,
                          }}
                          onMouseEnter={e => { if (!isItemActive) (e.currentTarget as HTMLElement).style.backgroundColor = '#1F2937'; (e.currentTarget as HTMLElement).style.color = '#E5E7EB' }}
                          onMouseLeave={e => { if (!isItemActive) { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#9CA3AF' } }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4" style={{ borderTop: '1px solid #1F2937' }}>
        <p className="text-2xs" style={{ color: '#4B5563' }}>
          Versión 1.0 · 2025
        </p>
      </div>
    </aside>
  )
}
