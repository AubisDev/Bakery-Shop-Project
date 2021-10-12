module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Monserrat': ['Montserrat', 'sans-serif'],
        'subtitle' : ['Caveat', 'cursive']
      },
      backgroundImage:{
        'navbar-bg': "url('/src/img/navbar.jpg')",
        'brand' : "url('/src/img/brand.png')",
        'review-1': "url('/src/img/review-1.jpg')",
        'review-2': "url('/src/img/review-2.jpg')",
        'review-3': "url('/src/img/review-3.jpg')",
        'menu-1': "url('https://cdn.pixabay.com/photo/2019/07/28/04/56/sweets-4367937_960_720.jpg')",
        'menu-2': "url('https://cdn.pixabay.com/photo/2020/07/29/09/46/cupcakes-5447570_960_720.jpg')",
        'menu-3': "url('https://cdn.pixabay.com/photo/2020/06/23/09/06/donut-5331966_960_720.jpg')",
        'menu-4': "url('https://cdn.pixabay.com/photo/2014/11/27/14/35/cookies-547636_960_720.jpg')",
        'menu-default': "url('/src/img/menu-default-bg.jpg')",
      },
      boxShadow:{
        'review-box': '0px 10px 15px -3px rgba(255, 0, 173, 0.3)  '
      },
      minHeight:{
        'card-height': '300px',
        'gallery-height': '400px',
        'comment': '80px'
      },
      maxHeight:{
        'comment-box': '95px',
        'comment-sm': '80px'
      },
      minWidth:{
        'card-width': '212px',
        'gal-width': '315px',
      },
      maxWidth:{

        '80p':'80%'
      },
      height:{
        '75vh': '75vh',
        '70vh': '70vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '67vh': '67vh',
        '90vh': '90vh',
        '80vh': '80vh',
        '90ph': '90%',
        '67ph': '67%',
        '70ph': '70%',
      },
      width:{

        '80pw':'80%',
        '90pw':'90%'
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    },
  },
  plugins: [],
}
