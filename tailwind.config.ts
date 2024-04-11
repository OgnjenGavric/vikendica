/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          30: "#50613e",
          50: '#30AF5B',
          70: '#24391a',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        gold: {
          30: '#ffdfb0',
          50: '#c5a56e',
        }
      },
      backgroundImage: {
        'bg-img-1': "url('/vikendica-ml-1.jpg')",
        'bg-img-2': "url('/vikendica-ml-2.jpg')",
        'bg-img-3': "url('/vikendica-ml-3.jpg')",
        'bg-img-4': "url('/vikendica-ml-4.jpg')",
        'bg-img-5': "url('/vikendica-ml-5.jpg')",
        'bg-img-6': "url('/vikendica-ml-6.jpg')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")]
};