export type SearchEntry = {
  title: string
  description: string
  href: string
  section: string
  keywords: string
}

export const searchIndex: SearchEntry[] = [
  // FUNDAMENTOS DE MARCA
  {
    title: '¿Qué es Holded?',
    description: 'Software de facturación y ERP para pymes, autónomos y asesorías. Integra facturación, contabilidad, RR.HH., inventario, proyectos, CRM y banca.',
    href: '/fundamentos#que-es',
    section: 'Fundamentos de marca',
    keywords: 'holded erp software facturación pymes autónomos asesorías descripción identidad',
  },
  {
    title: 'Audiencias objetivo',
    description: 'Públicos principales: pymes, autónomos y asesorías. Secundarios: solution partners y público general.',
    href: '/fundamentos#audiencias',
    section: 'Fundamentos de marca',
    keywords: 'audiencias públicos pymes autónomos asesorías clientes objetivo',
  },
  {
    title: 'Ideal Customer Profile (ICP)',
    description: 'Fundador o dueño de micropyme en España, 0-10 empleados, sector servicios, usa Excel o nada. "No soy experto en tecnología, solo quiero facturar bien."',
    href: '/fundamentos#icp',
    section: 'Fundamentos de marca',
    keywords: 'ICP cliente ideal perfil micropyme autónomo españa excel demografía',
  },

  // BRAND VOICE
  {
    title: 'La voz de Holded',
    description: 'Seis atributos: Honesta pero sensible, Útil pero no agobiante, Segura pero humilde, Moderna pero accesible, Cercana pero no tonta, Ambiciosa pero no insistente.',
    href: '/brand-voice#voz-holded',
    section: 'Brand voice',
    keywords: 'voz atributos personalidad marca tono carácter honesta útil cercana moderna',
  },
  {
    title: 'Los cinco pilares de comunicación',
    description: 'Clara y accesible, Educativa y didáctica, Útil y orientada a la acción, Profesional pero cercano, Confianza basada en hechos.',
    href: '/brand-voice#voz-holded',
    section: 'Brand voice',
    keywords: 'pilares comunicación clara educativa útil acción profesional cercana confianza hechos',
  },
  {
    title: 'Tono por canal',
    description: 'Blog/contenido educativo → Web → Email y newsletter → Redes sociales → Publicidad y campañas (de más formal a más informal).',
    href: '/brand-voice#tono-canal',
    section: 'Brand voice',
    keywords: 'tono canal blog web email newsletter redes sociales publicidad campañas formal informal',
  },
  {
    title: 'Reglas generales y uso del español',
    description: 'Holded siempre en mayúscula. Se tutea siempre. Sin exclamaciones. Sin guiones largos. Lenguaje inclusivo con palabras neutras.',
    href: '/brand-voice#reglas-generales',
    section: 'Brand voice',
    keywords: 'reglas español holded mayúscula tutear exclamaciones guiones lenguaje inclusivo software app',
  },
  {
    title: 'Lenguaje inclusivo',
    description: 'Sin @, (e), *, x, a/o. Usar colectivos neutros: el equipo, la clientela, el personal, personas autónomas.',
    href: '/brand-voice#reglas-generales',
    section: 'Brand voice',
    keywords: 'inclusivo género neutro arroba colectivos equipo clientela personal',
  },
  {
    title: 'Emojis',
    description: 'Solo en email y redes sociales, con moderación. Nunca en web ni blog.',
    href: '/brand-voice#reglas-generales',
    section: 'Brand voice',
    keywords: 'emojis iconos web blog email redes sociales moderación',
  },

  // ESCRITURA — NÚMEROS
  {
    title: 'Cómo escribir los números',
    description: 'Del uno al nueve en letra. Del 10 en adelante en cifra. Si abre frase, siempre en letra.',
    href: '/escritura#numeros',
    section: 'Escritura',
    keywords: 'números cifras letras uno nueve diez reglas escritura',
  },
  {
    title: 'Millares y decimales',
    description: 'Millares con punto: 1.000 / 10.000. Decimales con coma en español: 21,50. En inglés con punto.',
    href: '/escritura#numeros',
    section: 'Escritura',
    keywords: 'millares punto coma decimales miles separador español inglés',
  },
  {
    title: 'Porcentajes',
    description: 'Pegados al número, sin espacio: 21%, no 21 %.',
    href: '/escritura#numeros',
    section: 'Escritura',
    keywords: 'porcentajes tanto por ciento espacio símbolo',
  },

  // ESCRITURA — DINERO
  {
    title: 'Cómo escribir el dinero en español',
    description: 'Símbolo después del número con espacio: 20 €. Decimales con coma: 20,50 €. En texto corrido: "el plan cuesta veinte euros al mes".',
    href: '/escritura#dinero',
    section: 'Escritura',
    keywords: 'dinero euros símbolo moneda precios formato escribir formateo formatear cómo formateo los precios en euros',
  },
  {
    title: 'Cómo escribir el dinero en inglés',
    description: 'Símbolo antes del número sin espacio: $20. Decimales con punto: $20.50.',
    href: '/escritura#dinero',
    section: 'Escritura',
    keywords: 'dinero dólares inglés símbolo moneda precios formato',
  },

  // ESCRITURA — SIGLAS
  {
    title: 'Siglas y acrónimos',
    description: 'En mayúsculas sin puntos: IVA, IRPF, CRM, ERP. RR.HH. con puntos. pyme en minúscula. Primera mención: término completo + sigla entre paréntesis.',
    href: '/escritura#siglas',
    section: 'Escritura',
    keywords: 'siglas acrónimos mayúsculas IVA IRPF CRM ERP RR.HH. pyme primera mención',
  },

  // ESCRITURA — PUNTUACIÓN
  {
    title: 'Puntuación en títulos',
    description: 'Títulos sin punto final. Encabezados en sentence case, nunca en Title Case.',
    href: '/escritura#puntuacion',
    section: 'Escritura',
    keywords: 'puntuación títulos punto sentence case title case encabezados mayúsculas',
  },
  {
    title: 'Puntuación en listas',
    description: 'Fragmentos cortos sin punto final. Oraciones completas con punto. Coherencia en toda la lista.',
    href: '/escritura#puntuacion',
    section: 'Escritura',
    keywords: 'puntuación listas punto bullet fragmentos oraciones coherencia',
  },
  {
    title: 'Comillas y citas',
    description: 'Punto después de las comillas en español: "Toda la empresa habla el mismo idioma gracias a Holded".',
    href: '/escritura#puntuacion',
    section: 'Escritura',
    keywords: 'comillas citas punto quotes español',
  },

  // ESCRITURA — ANGLICISMOS
  {
    title: 'Anglicismos sin cursiva',
    description: 'dashboard, lead, cash flow, benchmark, marketplace, coworking, startup, freelance — se escriben en redonda.',
    href: '/escritura#anglicismos',
    section: 'Escritura',
    keywords: 'anglicismos redonda cursiva dashboard lead cash flow benchmark startup freelance',
  },
  {
    title: 'Anglicismos con cursiva',
    description: 'onboarding, pipeline, forecast, reporting, workflow, outsourcing, roadmap, upgrade, downgrade, matching, freemium — se escriben en cursiva.',
    href: '/escritura#anglicismos',
    section: 'Escritura',
    keywords: 'anglicismos cursiva onboarding pipeline forecast reporting workflow outsourcing roadmap cuándo usar cursiva en anglicismos',
  },

  // ESCRITURA — WORD LIST
  {
    title: 'Word list',
    description: 'Palabras y expresiones de uso frecuente en los textos de Holded y cómo se escriben correctamente.',
    href: '/escritura#word-list',
    section: 'Escritura',
    keywords: 'word list palabras expresiones ecommerce email app software pyme holded escritura correcta',
  },

  // CANALES — WEB
  {
    title: 'Cómo escribir el H1',
    description: 'Verbo de acción + beneficio. 4-8 palabras. Imperativo o sustantivo de acción. Dato cuantificable si es posible. Ej: "Genera nóminas en 5 segundos".',
    href: '/canales#web',
    section: 'Canales',
    keywords: 'H1 título hero web verbo acción beneficio imperativo cuantificable página principal',
  },
  {
    title: 'Subtítulo hero (subheadline)',
    description: '20-35 palabras. Complementa el H1, no lo repite. Explica el mecanismo en términos cotidianos.',
    href: '/canales#web',
    section: 'Canales',
    keywords: 'subtítulo hero subheadline descripción mecanismo web',
  },
  {
    title: 'CTAs: niveles y reglas',
    description: 'Nivel 1: "Empieza gratis" (conversión). Nivel 2: "Ver demo" (exploración). Nivel 3: links de texto específicos. Siempre imperativo, nunca infinitivos, nunca "Saber más".',
    href: '/canales#web',
    section: 'Canales',
    keywords: 'CTA call to action botón empieza gratis ver demo imperativo infinitivo saber más conversión',
  },
  {
    title: 'Banners',
    description: 'Una idea + una acción. Titular máximo 8 palabras. Sin exclamaciones. Datos reales, no claims vagos.',
    href: '/canales#web',
    section: 'Canales',
    keywords: 'banners titular datos claims exclamaciones web',
  },
  {
    title: 'Social proof',
    description: 'Nunca cifras vagas. Dato + fuente. Quotes con beneficio concreto, nombre + cargo + empresa.',
    href: '/canales#web',
    section: 'Canales',
    keywords: 'social proof testimonios cifras datos quotes testimoniales',
  },
  {
    title: 'Formularios web',
    description: 'Etiquetas visibles, errores orientados a solución, CTAs en primera persona: "Crear mi cuenta gratis".',
    href: '/canales#web',
    section: 'Canales',
    keywords: 'formularios etiquetas errores CTA primera persona web',
  },
  {
    title: 'Alt text en imágenes',
    description: 'Descriptivo + keyword natural. Máximo 140 caracteres. Sin "imagen de". Ej: "Panel de control de Holded con vista de facturación".',
    href: '/canales#web',
    section: 'Canales',
    keywords: 'alt text imágenes accesibilidad SEO descripción keyword',
  },

  // CANALES — SEO
  {
    title: 'Reglas SEO on-page',
    description: 'Keyword principal en H1, meta description, primer párrafo y al menos un H2. Un solo H1. Meta description máximo 155 caracteres.',
    href: '/canales#seo',
    section: 'Canales',
    keywords: 'SEO keyword H1 H2 meta description on-page optimización',
  },
  {
    title: 'AEO (Answer Engine Optimization)',
    description: 'Empezar cada sección con respuesta directa en 1-2 frases. Formatos estructurados. Párrafos autocontenidos.',
    href: '/canales#seo',
    section: 'Canales',
    keywords: 'AEO answer engine optimization respuesta directa featured snippet estructurado',
  },
  {
    title: 'E-E-A-T y datos estructurados',
    description: 'Citar leyes, artículos y fechas concretas. Referenciar fuentes oficiales (BOE, AEAT, INE). Incluir métricas reales.',
    href: '/canales#seo',
    section: 'Canales',
    keywords: 'E-E-A-T autoridad experiencia fuentes oficiales BOE AEAT INE datos estructurados schema',
  },
  {
    title: 'URL slugs',
    description: 'Cortas, minúsculas, con guiones, sin palabras vacías.',
    href: '/canales#seo',
    section: 'Canales',
    keywords: 'URL slug permalink guiones minúsculas palabras vacías SEO',
  },

  // CANALES — EMAIL
  {
    title: 'Principios del email y newsletter',
    description: 'Tono entusiasta, útil y personal. El lector ya conoce Holded. Se tutea. Sin exclamaciones.',
    href: '/canales#email',
    section: 'Canales',
    keywords: 'email newsletter tono tutear principios comunicación',
  },
  {
    title: 'Asunto y preheader',
    description: 'Asunto: máximo 50 caracteres, tuteo, sin exclamaciones. Preheader: máximo 90 caracteres, complementa el asunto.',
    href: '/canales#email',
    section: 'Canales',
    keywords: 'asunto subject preheader email caracteres tuteo exclamaciones',
  },
  {
    title: 'CTAs en email',
    description: 'Nunca "haz clic aquí". Artículos: LEER ARTÍCULO➞. Lecturas secundarias: LECTURA DE X MINUTOS.',
    href: '/canales#email',
    section: 'Canales',
    keywords: 'CTA email clic aquí leer artículo lectura minutos',
  },
  {
    title: 'Parámetros UTM',
    description: '?utm_source=newsletter_general&utm_medium=email&utm_campaign=[DDMMAA]',
    href: '/canales#email',
    section: 'Canales',
    keywords: 'UTM tracking analytics email newsletter parámetros campaña',
  },

  // IA
  {
    title: 'Patrones de IA que evitar',
    description: '25 patrones comunes en textos generados por IA: inflación de importancia, vocabulario de IA, guiones largos, artefactos de chatbot, conclusiones genéricas...',
    href: '/ia#patrones',
    section: 'IA',
    keywords: 'IA patrones evitar inflación importancia guiones artefactos chatbot genérico pivotal seamless',
  },
  {
    title: 'Vocabulario prohibido',
    description: 'En inglés: leverage, testament, seamless, empower, groundbreaking, cutting-edge... En español: sinergia, solución integral, ecosistema innovador, cabe destacar...',
    href: '/ia#vocabulario',
    section: 'IA',
    keywords: 'vocabulario prohibido palabras banidas leverage seamless sinergia cabe destacar solución integral qué palabras están prohibidas',
  },
  {
    title: 'Proceso de revisión de textos con IA',
    description: 'Paso 1: borrador con voz de marca. Paso 2: revisión "¿Es una IA?". Paso 3: revisión de especificidad.',
    href: '/ia#proceso',
    section: 'IA',
    keywords: 'proceso revisión IA borrador especificidad revisión marca',
  },
  {
    title: 'Checklist de publicación',
    description: 'Lista de verificación antes de publicar: audiencia, tuteo, sin vocabulario prohibido, sentence case, sin emojis en web, datos concretos...',
    href: '/ia#checklist',
    section: 'IA',
    keywords: 'checklist publicación verificación lista comprobación SEO',
  },
  {
    title: 'Ejemplo antes y después',
    description: 'Texto generado por IA vs. texto revisado siguiendo la guía de Holded.',
    href: '/ia#ejemplo',
    section: 'IA',
    keywords: 'ejemplo antes después texto IA revisado comparación',
  },
]
