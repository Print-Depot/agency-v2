<script setup lang="ts">
const imageref = ref<HTMLElement>()
const imageloader = ref<boolean>(false)

const floatref = ref<HTMLElement>()
const floatloader = ref<boolean>(false)

onMounted(() => {
    const imageObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                imageloader.value = true
                imageObs.unobserve(entry[0].target)
            }
        },
        {
            threshold: 0.3,
        }
    )
    imageObs.observe(imageref.value as Element)

    const floatObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                floatloader.value = true
                floatObs.unobserve(entry[0].target)
            }
        },
        {
            threshold: 0.5,
        }
    )
    floatObs.observe(floatref.value as Element)
})
</script>
<template>
    <div class="px-4 lg:px-8 xl:px-24 2xl:px-32 pt-4 sm:pt-8 pb-0 sm:pb-16 flex flex-col bg-app-dark">
        <div class="w-full flex flex-col gap-y-3 sm:grid grid-cols-10">
            <div class="content-index col-span-1 text-app-gray text-2xl sm:text-4xl lg:text-5xl font-bold italic">
                <p>04</p>
            </div>
            <div id="expertise" class="col-span-9 flex flex-col items-start">
                <h2 class="uppercase text-2xl sm:text-4xl lg:text-5xl font-bold relative pr-3">Expertise</h2>
            </div>
        </div>
        <div
            class="w-full flex flex-col sm:grid sm:grid-cols-2 gap-x-8 mt-2 sm:mt-8 pt-8 lg:pt-10 pb-20 px-2 sm:px-10 relative"
        >
            <div
                ref="imageref"
                class="flex flex-col justify-end items-end transition duration-500"
                :class="imageloader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            >
                <NuxtImg src="/dev.webp" class="rounded-sm lg:max-w-[86%] opacity-40 sm:opacity-100" />
            </div>
            <div class="flex pt-8 lg:pt-16 flex-col absolute sm:relative top-[10%] sm:top-0 left-0 right-0">
                <h4
                    class="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide px-4 sm:px-6 relative flex items-center before:bg-white"
                >
                    Creative
                </h4>
                <div class="pt-2 sm:pt-4 lg:pt-6">
                    <p class="text-sm lg:text-base">
                        We create custom solutions that value your preferences and meet your needs. We combine strong
                        strategic and creative thinking with expert software architecture design and a deep
                        understanding of current and emerging technologies.
                    </p>
                </div>
            </div>
            <div
                ref="floatref"
                class="sm:absolute -translate-y-[20%] translate-x-2 sm:translate-x-0 sm:translate-y-0 right-[8%] lg:right-[10%] left-[40%] -bottom-8 py-5 sm:py-0 sm:min-h-[220px] lg:min-h-[300px] bg-app-green rounded-sm text-bg-dark flex flex-col items-start justify-center px-2.5 sm:px-12 transition duration-500"
                :class="floatloader ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
            >
                <h4
                    class="text-xl sm:text-2xl lg:text-3xl font-semibold relative tracking-wide px-4 sm:px-6 flex items-center before:bg-app-dark"
                >
                    Technology
                </h4>
                <div class="pt-2 sm:pt-4">
                    <p class="text-sm lg:text-base">
                        Our technical capabilities are extensive. From IT support through to custom software design and
                        development, we know what it takes to make your business stand out and be noticed. We use the
                        latest technologies to deliver high-quality and user-friendly solutions!
                    </p>
                </div>
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
h4::before {
    content: '';
    position: absolute;
    left: 0%;
    width: 10px;
    height: 2px;
}
</style>
