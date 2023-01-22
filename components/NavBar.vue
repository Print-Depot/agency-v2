<template>
    <nav class="w-full flex-col py-3.5">
        <div class="w-full flex flex-row justify-between items-center">
            <div class="logo flex items-center">
                <nuxt-img src="/dark-logo.png" class="h-20" />
            </div>
            <div class="right-nav flex flex-row items-center text-app-gray">
                <ul class="flex items-center flex-row gap-x-8">
                    <li>about</li>
                    <li>work</li>
                    <li>capabilities</li>
                    <li>contact</li>
                    <li>
                        <div class="w-5 h-5">
                            <icons-mobile />
                        </div>
                        +254 794818111
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.right-nav ul li {
    @apply text-base flex flex-row gap-x-1 items-center px-1 capitalize last:text-app-green last:font-semibold;
}
</style>
