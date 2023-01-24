<script setup lang="ts">
const navbarstate = ref<boolean>(false)
const handleScroll = (): void => {
    if (process.client) {
        let currentposition = window.scrollY
        if (currentposition >= 95) {
            navbarstate.value = true
        } else {
            navbarstate.value = false
        }
    }
}

if (process.client) {
    window.addEventListener('scroll', handleScroll)
}

const showdropdown = ref<boolean>(false)
</script>
<template>
    <nav class="w-full flex flex-col">
        <div
            class="w-full flex-col py-2.5 px-4 lg:px-8 xl:px-24 2xl:px-32 border-b border-gray-700 md:border-none bg-opacity-5 saturate-[50%] z-20"
        >
            <div class="w-full flex flex-row justify-between items-center bg-transparent">
                <div class="logo flex items-center">
                    <nuxt-img src="/dark-logo-removebg.png" class="h-12 md:h-16 lg:h-20" />
                </div>
                <div class="right-nav hidden md:flex flex-row items-center text-app-gray">
                    <ul class="flex items-center flex-row gap-x-6 lg:gap-x-12">
                        <li>about</li>
                        <li>work</li>
                        <li>Technology</li>
                        <li>contact</li>
                        <li>
                            <div class="w-5 h-5">
                                <icons-mobile />
                            </div>
                            +254 794818111
                        </li>
                    </ul>
                </div>
                <div id="mobile-menu" class="flex md:hidden items-center flex-row pr-2">
                    <button
                        @click="showdropdown = !showdropdown"
                        class="w-8 h-8 hover:ring-1 focus:ring-1 ring-gray-600 rounded p-0.5 transition duration-200"
                    >
                        <icons-bars />
                    </button>
                </div>
            </div>
        </div>
        <transition name="show-nav" mode="out-in">
            <div
                v-if="navbarstate"
                class="w-full flex-col py-2.5 px-4 lg:px-8 xl:px-24 2xl:px-32 bg-opacity-5 saturate-[50%] z-20 bg-app-dark fixed top-0"
            >
                <div class="w-full flex flex-row justify-between items-center bg-transparent">
                    <div class="logo flex items-center">
                        <nuxt-img src="/dark-logo-removebg.png" class="h-12 md:h-16 lg:h-20" />
                    </div>
                    <div class="right-nav hidden md:flex flex-row items-center text-app-gray">
                        <ul class="flex items-center flex-row gap-x-6 lg:gap-x-12">
                            <li>about</li>
                            <li>work</li>
                            <li>Technology</li>
                            <li>contact</li>
                            <li>
                                <div class="w-5 h-5">
                                    <icons-mobile />
                                </div>
                                +254 794818111
                            </li>
                        </ul>
                    </div>
                    <div id="mobile-menu" class="flex md:hidden items-center flex-row pr-2">
                        <button
                            @click="showdropdown = !showdropdown"
                            class="w-8 h-8 hover:ring-1 focus:ring-1 ring-gray-600 rounded p-0.5 transition duration-200"
                        >
                            <icons-bars />
                        </button>
                    </div>
                </div>
            </div>
        </transition>
        <div
            v-if="showdropdown"
            id="mobile-dropdown"
            class="fixed md:hidden z-40 top-0 left-0 right-0 min-h-[10rem] bg-bg-dark shadow-xl border-b border-gray-600 flex flex-col gap-y-2"
        >
            <div class="w-full px-4 py-2.5 flex flex-row justify-between items-center bg-app-dark">
                <div class="logo flex items-center">
                    <nuxt-img src="/dark-logo-removebg.png" class="h-12" />
                </div>
                <div id="mobile-menu" class="flex md:hidden items-center flex-row pr-2">
                    <button
                        @click="showdropdown = !showdropdown"
                        class="w-8 h-8 hover:ring-1 focus:ring-1 ring-gray-600 rounded p-0.5 transition duration-200"
                    >
                        <icons-close />
                    </button>
                </div>
            </div>
            <ul class="w-full flex flex-col gap-y-0.5 py-1">
                <li>about</li>
                <li>work</li>
                <li>Technology</li>
                <li>contact</li>
            </ul>
        </div>
    </nav>
</template>
<style scoped>
.right-nav ul li {
    @apply text-base flex flex-row gap-x-1 items-center pl-0.5 pr-2 pb-1 cursor-pointer hover:text-white capitalize font-medium last:text-app-green hover:last:text-app-green last:text-sm last:font-semibold;
    @apply transition duration-200;
}

.right-nav ul li {
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.2s;
}
.right-nav ul li:last-child,
.right-nav ul li:last-child:hover,
.right-nav ul li:last-child:focus {
    background-size: 0%;
}
.right-nav ul li:hover,
.right-nav ul li:focus {
    background-size: 100% 2px;
}

#mobile-dropdown ul li {
    @apply text-base capitalize tracking-wide py-3 px-4 flex flex-row items-center gap-x-2 cursor-pointer hover:px-6 hover:bg-app-dark transition duration-200 relative;
}

#mobile-dropdown ul li {
    background-image: linear-gradient(rgba(0, 255, 184, 255), rgba(0, 255, 184, 255));
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0px 100%;
    transition: background-size 0.2s, padding 0.2s;
}
#mobile-dropdown ul li:hover {
    background-size: 4px 100%;
}

.show-nav-enter-from,
.show-nav-leave-to {
    @apply -translate-y-full opacity-0;
}
.show-nav-enter-active,
.show-nav-leave-active {
    @apply duration-300 transition;
}
</style>
