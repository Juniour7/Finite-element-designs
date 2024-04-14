/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        menu: {
          50: '#e7eeff',
          100: '#beccf6',
          200: '#94a9eb',
          300: '#6a87e2',
          400: '#4165d9',
          500: '#284bbf',
          600: '#1e3a95',
          700: '#142a6b',
          800: '#091942',
          900: '#01081b',
        },
        about: {
          50: '#e1f9fb',
          100: '#c5e5ea',
          200: '#a4d2d9',
          300: '#83bfc8',
          400: '#63adb8',
          500: '#49949e',
          600: '#37737c',
          700: '#24525a',
          800: '#0f3237',
          900: '#001217',
        },
        about1: {
          50: '#e8ebff',
          100: '#bdc2f5',
          200: '#919aec',
          300: '#6672e4',
          400: '#3d4add',
          500: '#2531c3',
          600: '#1c2698',
          700: '#141b6d',
          800: '#0a1042',
          900: '#02051a',
        },
        home: {
          50: '#f8f3ed',
          100: '#e6dbcd',
          200: '#d6c2ac',
          300: '#c7a988',
          400: '#b89165',
          500: '#a0774c',
          600: '#7c5d3b',
          700: '#58432b',
          800: '#35281a',
          900: '#120d07',
        }
      },
      fontFamily: {
        body: ['Noto Sans'],
        official: ['Ubuntu'],
        about:['Nunito Sans']
      }
    },
  },
  plugins: [],
}

