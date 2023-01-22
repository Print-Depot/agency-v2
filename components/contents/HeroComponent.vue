<template>
    <div class="w-full flex flex-col gap-y-2 mt-8 px-24 2xl:px-32">
        <div class="w-full grid grid-cols-10">
            <div class="content-index col-span-1 text-app-gray text-5xl font-bold italic">
                <p>01</p>
            </div>
            <div id="hero-text" class="col-span-9">
                <h2 class="text-5xl uppercase font-bold leading-[3.7rem]">
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
        <div class="w-full flex flex-col justify-end items-end mt-4">
            <NuxtImg src="/banner-2.png" class="h-[390px] rounded-md -translate-x-[10%]" />
        </div>
    </div>
</template>
