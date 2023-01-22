<template>
    <div class="px-24 2xl:px-32 py-8 flex flex-col bg-app-dark">
        <div class="w-full grid grid-cols-10">
            <div class="content-index col-span-1 text-app-gray text-5xl font-bold italic">
                <p>04</p>
            </div>
            <div id="expertise" class="col-span-9 flex flex-col items-start">
                <h2 class="uppercase text-5xl font-bold relative pr-3">Expertise</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
#expertise h2::after {
    content: '';
    position: absolute;
    bottom: -3%;
    left: 0%;
    right: 0%;
    height: 2px;
    @apply bg-white;
}
</style>
