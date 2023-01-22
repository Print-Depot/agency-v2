<template>
    <div class="w-full flex flex-col gap-y-2 mt-20 px-24 2xl:px-32">
        <div class="w-full grid grid-cols-10">
            <div class="content-index col-span-1 text-app-gray text-5xl font-bold italic">
                <p>03</p>
            </div>
            <div id="capabilities" class="col-span-9 flex flex-col items-start">
                <h2 class="uppercase text-5xl font-bold relative pr-3">what we do</h2>
            </div>
        </div>
        <div class="w-full grid grid-cols-10 py-6 mt-4">
            <div class="col-span-3"></div>
            <ul class="col-span-7 flex flex-col">
                <li>
                    <div class="flex items-center justify-between flex-row py-3">
                        <h4>Web design & development</h4>
                        <div class="flex flex-row items-center">
                            <div class="w-7 h-7">
                                <IconsChevronDown />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-2.5 py-4">
                        <p class="text-app-gray text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi aliquam mollitia
                            adipisci inventore et autem dolorem dolore optio beatae aliquid cum magnam quia ratione,
                            minus debitis voluptas recusandae nostrum?
                        </p>
                        <p class="text-app-gray text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi aliquam mollitia
                            adipisci inventore et autem dolorem dolore optio beatae aliquid cum magnam quia ratione,
                            minus debitis voluptas recusandae nostrum?
                        </p>
                    </div>
                </li>
                <li>
                    <div class="flex items-center justify-between flex-row py-3">
                        <h4>Brand Design</h4>
                        <div class="flex flex-row items-center">
                            <div class="w-7 h-7">
                                <IconsChevronDown />
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center justify-between flex-row py-3">
                        <h4>Ecommerce website</h4>
                        <div class="flex flex-row items-center">
                            <div class="w-7 h-7">
                                <IconsChevronDown />
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center justify-between flex-row py-3">
                        <h4>IT Systems & Support</h4>
                        <div class="flex flex-row items-center">
                            <div class="w-7 h-7">
                                <IconsChevronDown />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
#capabilities h2::after {
    content: '';
    position: absolute;
    bottom: -3%;
    left: 0%;
    right: 0%;
    height: 2px;
    @apply bg-white;
}
ul li {
    @apply border-t border-white w-full py-6;
}
ul li h4 {
    @apply text-3xl font-light capitalize px-8 relative flex items-center;
}
ul li:nth-child(1) h4 {
    @apply text-app-green;
}
ul li h4::before {
    content: '';
    position: absolute;
    left: 0%;
    width: 10px;
    height: 2px;
    @apply bg-white;
}
ul li:nth-child(1) h4::before {
    @apply bg-app-green;
}
</style>
