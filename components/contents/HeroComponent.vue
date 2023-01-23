<script setup lang="ts">
const initial = ref({
    x: 100,
    opacity: 0,
})

const enter = ref({
    x: 0,
    opacity: 1,
    transition: {
        delay: 400,
    },
})
</script>
<template>
    <div class="w-full flex flex-col gap-y-1 sm:gap-y-2 mt-6 sm:mt-8 px-2 sm:px-4 lg:px-8 xl:px-24 2xl:px-32">
        <div class="w-full flex flex-col gap-y-3 sm:grid grid-cols-10">
            <div class="content-index col-span-1 text-app-gray text-3xl sm:text-4xl lg:text-5xl font-bold italic">
                <p
                    v-motion
                    :initial="{
                        opacity: 0,
                    }"
                    :enter="{
                        opacity: 1,
                        transition: {
                            delay: 500,
                        },
                    }"
                >
                    01
                </p>
            </div>
            <div id="hero-text" class="col-span-9">
                <h2
                    v-motion
                    :initial="{
                        opacity: 0,
                        x: 50,
                    }"
                    :enter="{
                        opacity: 1,
                        x: 0,
                        transition: {
                            delay: 400,
                        },
                    }"
                    class="text-2xl sm:text-4xl lg:text-5xl uppercase font-bold leading-[2.7rem] md:leading-[3rem] lg:leading-[3.7rem]"
                >
                    We <span class="text-app-green">specialize</span> <br />
                    in creating custom
                    <br />
                    <span class="text-app-green">websites</span> /
                    <span class="text-app-green">applications</span>
                    <br />
                    for businesses of all sizes
                </h2>
            </div>
        </div>
        <div class="w-full flex flex-col justify-end items-end mt-3 sm:mt-4" v-motion :enter="enter" :initial="initial">
            <NuxtImg
                src="/banner-2.webp"
                class="h-auto sm:h-[300px] lg:h-[390px] rounded-md translate-x-0 lg:-translate-x-[10%] opacity-40 sm:opacity-100 hover:opacity-100 transition duration-200"
            />
        </div>
    </div>
</template>
