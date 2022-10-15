module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            spacing: {
                '500': '500px',
                "352": '352px'
              },
              height: {
                '500': '500px',
              },
              with:{
                "352": '352px'
              },
            colors: {
                'lightblue2': '#005B88',
                'lightblue1': '#B2E5FF',
              },
            backgroundImage: () => ({
                'login-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1280.jpg')",
                'slide1-background':
                    'linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url(https://bucket.nhanh.vn/store4/127854/bn/Me_O.jpg)',
                'slide2-background':
                    'linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url(https://bucket.nhanh.vn/store4/127854/bn/Royal_Canin_Hero_Banner_2490x590.jpg)',
                'slide3-background':
                    'linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url(https://bucket.nhanh.vn/store4/127854/bn/Smart.jpg)',
                'profile-background':
                    "linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
                   
                        'status-pending': "url('https://static.vecteezy.com/system/resources/previews/001/946/569/original/abstract-geometric-hexagons-yellow-background-with-diagonal-striped-lines-free-vector.jpg')",
                        'footer-texture': "url('/img/footer-texture.png')",
                    
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
