<template>
    <div class="w-full flex flex-col gap-y-2 mt-20 px-24 2xl:px-32">
        <div class="w-full grid grid-cols-10">
            <div class="content-index col-span-1 text-app-gray text-5xl font-bold italic">
                <p>02</p>
            </div>
            <div id="projects" class="col-span-9 flex flex-col items-start">
                <h2 class="uppercase text-5xl relative font-bold pr-4">our projects</h2>
                <div class="w-full mt-12 grid grid-cols-2">
                    <p class="text-app-gray text-lg">
                        We have had the pleasure of working with a few range of clients, delivering custom web and app
                        development solutions that exceed their expectations and are really proud of what we've achieved
                        together.
                    </p>
                </div>
                <div class="w-full text-base font-medium mt-6 flex flex-row justify-between items-center">
                    <div class="show-projects relative pr-3 capitalize flex flex-row items-center gap-x-1">
                        Explore our projects
                        <span class="w-5 h-5">
                            <IconsArrowLeft />
                        </span>
                    </div>
                    <div class="flex flex-row gap-x-2 pr-14 items-center">
                        <div
                            class="w-7 h-7 text-app-gray hover:text-white cursor-pointer transition-colors duration-200"
                        >
                            <IconsChevronLeft />
                        </div>
                        <div
                            class="w-7 h-7 text-app-gray hover:text-white cursor-pointer transition-colors duration-200"
                        >
                            <IconsChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full grid grid-cols-2 gap-x-16 mt-10 px-6 py-12 relative">
            <div id="absolute-style" class="absolute top-0 bottom-0 right-0 left-[20%] -z-20 bg-app-dark rounded"></div>
            <div class="project">
                <div class="project-context w-full flex flex-col gap-y-3">
                    <h3>
                        hotel reservation <br />
                        website
                    </h3>
                    <p>
                        web development & <br />
                        software design
                    </p>
                </div>
                <div class="project-display">
                    <NuxtImg src="/home-project.webp" class="w-full h-full" />
                </div>
            </div>
            <div class="project">
                <div class="project-context w-full flex flex-col gap-y-3">
                    <h3>
                        Law Firm <br />
                        website
                    </h3>
                    <p>
                        web development & <br />
                        software design
                    </p>
                </div>
                <div class="project-display">
                    <NuxtImg src="/law-firm-1.webp" class="w-full h-full" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#projects h2::after {
    content: '';
    position: absolute;
    bottom: -3%;
    left: 0%;
    right: 0%;
    height: 2px;
    @apply bg-white;
}
.show-projects ::after {
    content: '';
    position: absolute;
    bottom: -3%;
    left: 0%;
    right: 0%;
    height: 1px;
    @apply bg-white;
}
.project-context h3 {
    @apply capitalize text-2xl font-semibold tracking-wide;
}
.project-context p {
    @apply text-sm text-app-green font-medium capitalize leading-5;
}
.project {
    @apply relative flex items-center justify-center min-h-[16rem];
}
.project-context {
    @apply px-6;
}
.project-display {
    @apply absolute bg-app-gray left-[12%] right-0 top-0 bottom-0 -z-10 opacity-50;
}
</style>