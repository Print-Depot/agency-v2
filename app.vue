<script setup lang="ts">
useHead({
    title: 'Web Tech Developers',
    meta: [
        {
            name: 'description',
            content: 'We specialize in creating custom websites and web applications for businesses of all sizes.',
        },
    ],
    // link: [
    //     { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
    //     { href: 'https://fonts.gstatic.com', rel: 'preconnect' },
    //     { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' },
    // ],
})
</script>
<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
html,
body,
#app {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
html {
    @apply bg-bg-dark text-white;
}
</style>
