import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Absolute fallback for when next dev runs from a parent directory
    '/Users/mariajoseclemente/Documents/MJ Claude/holded-content-guide/app/**/*.{js,ts,jsx,tsx,mdx}',
    '/Users/mariajoseclemente/Documents/MJ Claude/holded-content-guide/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Holded red (brand primary, CTAs)
        primary: '#FF5454',
        'primary-dark': '#E03E3E',
        'primary-light': '#FFF0F0',
        // Blues
        'holded-blue': '#4181F2',
        'holded-blue-500': '#6297FA',
        'holded-blue-600': '#4181F2',
        'holded-blue-700': '#306CD4',
        'holded-blue-200': '#D9E6FC',
        'cta-blue': '#1963EF',
        // Text
        'text-main': '#000000',
        'text-muted': '#686A6C',
        'text-subtle': '#9CA3AF',
        // Backgrounds
        sidebar: '#F9FAFB',
        surface: '#FFFFFF',
        'surface-soft': '#F9FAFB',
        'surface-hover': '#F3F4F6',
        // Greys
        'grey-50': '#F9FAFB',
        'grey-100': '#F3F4F6',
        'grey-200': '#E5E7EB',
        'grey-300': '#D1D5DB',
        'grey-400': '#9CA3AF',
        'grey-500': '#6B7280',
        'grey-600': '#4B5563',
        'grey-700': '#374151',
        'grey-800': '#1F2937',
        'grey-900': '#111827',
        // Border
        border: '#D6D8DD',
        'border-light': '#E5E7EB',
        // Semantic
        'success-500': '#10B981',
        'success-600': '#059669',
        'warning-600': '#D97706',
        'error-500': '#FF7676',
        'error-600': '#DF4949',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter Display', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        s2: '2px 2px 10px rgba(192, 192, 192, 0.45)',
        base: '0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      spacing: {
        sidebar: '240px',
      },
    },
  },
  plugins: [],
}
export default config
