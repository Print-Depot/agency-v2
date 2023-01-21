// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
})
