/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neon Blue is the dominant brand colour. Black is used sparingly (text only).
        brand: {
          DEFAULT: '#1f51fe', // primary neon blue (matches Evntiqa logo)
          strong: '#1640d6',
          bright: '#5076ff',
          50: '#eef3ff',
          100: '#dde7ff',
        },
        // Deep blue used for dark hero / dark sections (not pure black)
        navy: {
          DEFAULT: '#0a1736',
          alt: '#0d1e44',
          deep: '#06102b',
        },
        // Cool-toned near-blacks for text
        ink: {
          DEFAULT: '#0b1426',
          2: '#3a4763',
          3: '#6a7794',
        },
        paper: '#f6f8fd',
        line: '#e6ebf5',
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        brand: '16px',
        'brand-sm': '12px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,20,38,.04), 0 4px 14px rgba(11,20,38,.05)',
        float: '0 12px 40px rgba(13,30,68,.10)',
        blue: '0 14px 34px rgba(26,86,255,.28)',
        'blue-lg': '0 18px 40px rgba(26,86,255,.36)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.22,.61,.36,1)',
      },
    },
  },
  plugins: [],
};
