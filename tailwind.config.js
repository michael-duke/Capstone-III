const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['Gill Sans', 'sans-serif'],
        lato:['Lato', 'sans-serif']
      },
      letterSpacing: {
        widest: '.19em',
      },
      colors: {
        heroblue: '#137dc5',
        herored: '#bf1922',
        speed: '#fbbf24',
      },
      screens: {
        sm: { max: '768px' },
        sl: { max: '500px' },
        ms: { max: '1212px' },
        fold: { max: '327px' },
        pro: { max: '900px' },
        lgg: { max: '960px' },
        sml: { max: '700px' }
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
});
