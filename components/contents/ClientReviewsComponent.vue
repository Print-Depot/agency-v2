<template>
    <div class="w-full flex flex-col gap-y-2 mt-3 sm:mt-20 px-4 lg:px-8 xl:px-24 2xl:px-32">
        <div class="w-full flex flex-col gap-y-3 sm:grid grid-cols-10">
            <div class="content-index col-span-1 text-app-gray text-2xl sm:text-4xl lg:text-5xl font-bold italic">
                <p>05</p>
            </div>
            <div id="success" class="col-span-9 flex flex-col items-start">
                <h2 class="uppercase text-2xl sm:text-4xl lg:text-5xl font-bold relative pr-3">client's success</h2>
                <div class="sm:w-[60%] flex-col pt-5 sm:pt-7 lg:pt-10">
                    <p class="text-app-gray text-base">
                        We are proud to have delivered exceptional work for some of top organisations. Here are some of
                        the people we've worked for.
                    </p>
                </div>
            </div>
        </div>
        <ul class="w-full flex flex-col gap-y-2">
            <li class="py-8 border-y border-app-dark grid grid-cols-3 gap-x-4"></li>
        </ul>
    </div>
</template>

<style scoped>
#success h2::after {
    content: '';
    position: absolute;
    bottom: -3%;
    left: 0%;
    right: 0%;
    height: 2px;
    @apply bg-white;
}
</style>
