'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Fuse from 'fuse.js'
import { searchIndex, type SearchEntry } from '@/lib/search-index'

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'title', weight: 0.3 },
    { name: 'description', weight: 0.2 },
    { name: 'keywords', weight: 0.4 },
    { name: 'section', weight: 0.1 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
})

const SUGGESTIONS = [
  '¿Cómo escribo un H1?',
  '¿Qué palabras están prohibidas?',
  '¿Cómo formateo los precios en euros?',
  '¿Cuándo usar cursiva en anglicismos?',
]

// Resultados directos para las sugerencias predefinidas (evita problemas con ¿ y ? en Fuse.js)
const SUGGESTION_RESULTS: Record<string, string[]> = {
  '¿Cómo escribo un H1?': ['Cómo escribir el H1'],
  '¿Qué palabras están prohibidas?': ['Vocabulario prohibido'],
  '¿Cómo formateo los precios en euros?': ['Cómo escribir el dinero en español'],
  '¿Cuándo usar cursiva en anglicismos?': ['Anglicismos con cursiva'],
}

const SECTION_COLORS: Record<string, string> = {
  'Fundamentos de marca': 'bg-purple-50 text-purple-700 border-purple-100',
  'Brand voice': 'bg-blue-50 text-blue-700 border-blue-100',
  'Escritura': 'bg-amber-50 text-amber-700 border-amber-100',
  'Canales': 'bg-green-50 text-green-700 border-green-100',
  'IA': 'bg-red-50 text-red-700 border-red-100',
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchEntry[] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (q: string) => {
    const trimmed = q.trim()
    if (!trimmed) {
      setResults(null)
      return
    }
    // Si es una sugerencia predefinida, devolver resultados directos
    if (SUGGESTION_RESULTS[trimmed]) {
      const titles = SUGGESTION_RESULTS[trimmed]
      setResults(searchIndex.filter((e) => titles.includes(e.title)))
      return
    }
    // Normalizar: quitar signos, extraer palabras clave eliminando stop words
    const STOP_WORDS = new Set([
      'cómo','como','qué','que','cuál','cual','cuándo','cuando','dónde','donde',
      'por','para','con','sin','sobre','entre','hasta','desde','en','de','del',
      'el','la','los','las','un','una','unos','unas','al','lo','le','les',
      'se','me','te','nos','es','son','está','están','ser','estar',
      'hay','si','no','ya','más','muy','bien','mal','también','pero','y','o',
      'a','e','i','u','que','se','su','sus','mi','mis','tu','tus',
      'escribo','escribir','escriben','uso','usan','usar','poner','pone',
      'debo','puedo','tengo','quiero','necesito','hay','tiene','tienen',
    ])
    const keywords = trimmed
      .replace(/[¿?¡!,.:;()"']/g, ' ')
      .toLowerCase()
      .split(/\s+/)
      .filter(w => w.length > 2 && !STOP_WORDS.has(w))

    if (keywords.length === 0) {
      // Si todas eran stop words, buscar la frase completa normalizada
      const raw = fuse.search(trimmed.replace(/[¿?¡!]/g, '').trim())
      setResults(raw.map((r) => r.item))
      return
    }

    // Buscar cada keyword por separado y combinar resultados únicos
    const seen = new Set<string>()
    const combined: SearchEntry[] = []
    keywords.forEach(kw => {
      fuse.search(kw).forEach(r => {
        if (!seen.has(r.item.href)) {
          seen.add(r.item.href)
          combined.push(r.item)
        }
      })
    })
    setResults(combined)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(query)
  }

  const handleSuggestion = (suggestion: string) => {
    setQuery(suggestion)
    handleSearch(suggestion)
  }

  const handleClear = () => {
    setQuery('')
    setResults(null)
    inputRef.current?.focus()
  }

  // CMD+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const showSuggestions = !results && !query

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          {/* Search icon */}
          <div className="absolute left-4 pointer-events-none">
            <svg className="w-5 h-5 text-text-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Escribe tu pregunta o palabra clave..."
            className="w-full pl-12 pr-36 py-4 text-base bg-white border-2 border-border rounded-lg focus:outline-none focus:border-gray-400 transition-colors placeholder:text-text-subtle shadow-sm"
          />

          <div className="absolute right-3 flex items-center gap-2">
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 text-text-subtle hover:text-text-muted transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-2xs font-medium text-text-subtle bg-surface-hover border border-border rounded-md">
              <span>⌘</span><span>K</span>
            </kbd>
            <button
              type="submit"
              disabled={!query.trim()}
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>

      {/* Results */}
      {results !== null && (
        <div className="mt-4">
          {results.length === 0 ? (
            <div className="rounded-lg border border-border bg-white px-5 py-4">
              <p className="text-sm text-text-muted">No se han encontrado resultados para <strong>"{query}"</strong>. Prueba usando solo palabras clave.</p>
            </div>
          ) : (
            <div className="rounded-lg border border-border overflow-hidden bg-white">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-surface-hover">
                <svg className="w-4 h-4 text-text-subtle flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <span className="text-xs font-medium text-text-muted">
                  {results.length} {results.length === 1 ? 'resultado' : 'resultados'} para "{query}"
                </span>
              </div>
              <ul className="divide-y divide-border">
                {results.map((entry) => (
                  <li key={entry.href + entry.title}>
                    <Link
                      href={entry.href}
                      className="flex flex-col gap-1.5 px-5 py-4 hover:bg-surface-hover transition-colors"
                    >
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-text-main">{entry.title}</span>
                        <span className={`text-2xs font-medium px-2 py-0.5 rounded-full border ${SECTION_COLORS[entry.section] ?? 'bg-gray-50 text-gray-600 border-gray-100'}`}>
                          {entry.section}
                        </span>
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed">{entry.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Suggestions */}
      {showSuggestions && (
        <div className="mt-3 flex flex-wrap gap-2">
          {SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => handleSuggestion(suggestion)}
              className="px-3 py-1.5 text-xs text-text-muted bg-surface-hover border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
