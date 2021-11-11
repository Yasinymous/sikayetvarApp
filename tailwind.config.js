module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        colors: {
          green: {
            light: '#2DCE89',
            primary: '#00CDAC',
          },
          pink: {
            light: '#5E72E4',
            dribble: '#EA4C89',
          },
          red: {
            light: '#FB6340',
          },
          black: {
            light: '#32325D',
            github: '#222222',
          },
          grey: {
            light: '#E9ECEF'
          },
          blue:{
            light: '#11CDEF',
            medium: '#4A90E2',
            twitter: '#1DA1F2',
            facebook: '#3B5999',
          }
        }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }