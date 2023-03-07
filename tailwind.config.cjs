module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          main: "#121212",
          side: "#0d0d0d",
        },
        blue: {
          100: "#00ffff", //active
        },
        white:{
          primary:"#fff",
          secondary:"#ffffff80",
        }
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "64px",
      },
      animation: {
        fade: 'fade .5s ease',
      },
      keyframes: {
        fade: {
          'from': { opacity: .4 },
          'to': { opacity: 1},
        }
      }
    },
  },
  plugins: [],
}