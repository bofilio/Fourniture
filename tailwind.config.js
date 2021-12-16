module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          light: "#11293B",
          dark: "#0D1F2B",
        },
        secondary: {
          light: "#E7E9EB",
          dark: "#203C51",
        },
        cgreen: "#2DCCA9",//cgreen = custom green
        cyellow: "#F9FFB7",
        cred: "#FD4E61",
      },
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      }
    }
  },




  plugins: [],
}
