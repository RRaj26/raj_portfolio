/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#007aff",
          50: "#e6f3ff",
          100: "#cce7ff",
          200: "#99cfff",
          300: "#66b7ff",
          400: "#339fff",
          500: "#007aff",
          600: "#0062cc",
          700: "#004999",
          800: "#003166",
          900: "#001833",
        },
        secondary: {
          DEFAULT: "#5856d6",
          50: "#f0f0ff",
          100: "#e1e1ff",
          200: "#c3c3ff",
          300: "#a5a5ff",
          400: "#7c7bea",
          500: "#5856d6",
          600: "#4645ab",
          700: "#353480",
          800: "#232255",
          900: "#12112a",
        },
        accent: {
          DEFAULT: "#34c759",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#34c759",
          600: "#2aa047",
          700: "#1f7935",
          800: "#155223",
          900: "#0a2b11",
        },
        background: "#ffffff",
        surface: {
          DEFAULT: "#f2f2f7",
          100: "#f9fafb",
          200: "#f3f4f6",
        },
        text: {
          primary: "#1d1d1f",
          secondary: "#6e6e73",
          tertiary: "#8e8e93",
        },
        success: "#34c759",
        warning: "#ff9500",
        error: "#ff3b30",
        border: {
          DEFAULT: "#e5e5e7",
          focus: "#007aff",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'card': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'cta': '0 4px 12px rgba(0, 122, 255, 0.15)',
        'cta-hover': '0 6px 16px rgba(0, 122, 255, 0.25)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
    },
  },
  plugins: [],
}