const mix = require('laravel-mix')

mix.setPublicPath('public')
.js('src/scripts/app.js', 'public/js')
.sass('src/styles/app.scss', 'public/css')
