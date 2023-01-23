<template>
    <footer class="w-full flex flex-col gap-y-1 text-white mt-8">
        <div
            id="top-footer"
            class="bg-app-dark pt-2 sm:pt-1.5 pb-3 sm:pb-2 sm:py-1.5 lg:py-2 px-4 lg:px-8 xl:px-24 2xl:px-32 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-4"
        >
            <div class="logo flex items-center">
                <nuxt-img src="/dark-logo-removebg.png" class="h-10 sm:h-12 lg:h-16" />
            </div>
            <ul class="flex items-center flex-row gap-x-10">
                <li>about</li>
                <li>work</li>
                <li>capabilities</li>
                <li>contact</li>
            </ul>
            <div class="flex flex-row items-center">
                <div class="w-4 sm:w-5 h-4 sm:h-5">
                    <IconsGithub />
                </div>
            </div>
        </div>
        <div class="w-full flex items-center justify-center flex-row gap-x-1 py-2 sm:py-4 lg:py-6 text-app-gray">
            <div class="w-4 h-4">
                <IconsCopyRight />
            </div>
            <small class="capitalize text-xs sm:text-sm">Webtech creative. Web. Mobile. Design</small>
        </div>
    </footer>
</template>

<style scoped>
#top-footer ul li {
    @apply text-xs sm:text-sm lg:text-base capitalize font-medium hover:text-app-gray transition-colors duration-200 cursor-pointer;
}
</style>
