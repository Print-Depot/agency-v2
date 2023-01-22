/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                'bg-dark': 'rgba(16,16,16,255)',
                'app-green': 'rgba(0,255,184,255)',
                'app-gray': 'rgba(135,135,135,255)',
                'app-dark': 'rgba(21,21,21,255)',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
