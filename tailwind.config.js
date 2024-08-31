/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      ssm:"375px",
      sm:"640px",
      md:"768px",
      lg:"1024px",
    },
    animation:{
      "spin-slow":"spin 4s linear infinite",
      "slide-in": "slide-in 1s ease-out",
      "bounce-in": "bounce-in 1s ease-out",
      "fade-in": "fade-in 1.5s ease-in-out",
      "zoom-in": "zoom-in 1s ease-in-out",
    },
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
