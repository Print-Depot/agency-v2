// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@vueuse/motion/nuxt'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
})
