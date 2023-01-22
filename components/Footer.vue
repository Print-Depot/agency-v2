<template>
    <footer class="w-full flex flex-col gap-y-1 text-white mt-8">
        <div id="top-footer" class="bg-app-dark py-2 px-24 2xl:px-32 flex flex-row items-center justify-between">
            <div class="logo flex items-center">
                <nuxt-img src="/dark-logo-removebg.png" class="h-16" />
            </div>
            <ul class="flex items-center flex-row gap-x-10">
                <li>about</li>
                <li>work</li>
                <li>capabilities</li>
                <li>contact</li>
            </ul>
            <div class="flex flex-row items-center">
                <div class="w-5 h-5">
                    <IconsGithub />
                </div>
            </div>
        </div>
        <div class="w-full flex items-center justify-center flex-row gap-x-1 py-6 text-app-gray">
            <div class="w-4 h-4">
                <IconsCopyRight />
            </div>
            <small class="capitalize text-sm">Webtech creative. Web. Mobile. Design</small>
        </div>
    </footer>
</template>

<style scoped>
#top-footer ul li {
    @apply text-base capitalize font-medium hover:text-app-gray transition-colors duration-200 cursor-pointer;
}
</style>
