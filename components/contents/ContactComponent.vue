<template>
    <div class="w-full flex flex-col gap-y-2 mt-6 sm:mt-12 lg:mt-20 px-4 lg:px-8 xl:px-24 2xl:px-32">
        <div class="w-full flex flex-col gap-y-3 sm:grid grid-cols-10">
            <div class="content-index col-span-1 text-app-gray text-2xl sm:text-4xl lg:text-5xl font-bold italic">
                <p>06</p>
            </div>
            <div id="hire" class="col-span-9 flex flex-col items-start">
                <h2 class="uppercase text-2xl sm:text-4xl lg:text-5xl font-bold relative pr-3">Hire us</h2>
                <div class="w-full lg:w-[80%] flex flex-col gap-y-6 pt-4 sm:pt-8 lg:pt-10 sm:pr-8 lg:pr-0">
                    <h5 class="text-xl lg:text-2xl font-medium">Services</h5>
                    <div
                        class="btn-groups w-full flex flex-row flex-wrap gap-x-1 sm:gap-x-3 lg:gap-x-4 gap-y-3 sm:gap-y-5"
                    >
                        <button type="button">Brand Design</button>
                        <button type="button">Web design and development</button>
                        <button type="button">Ecommerce web application</button>

                        <button type="button">Database design</button>
                        <button type="button">Web hosting and deployment</button>
                        <button type="button">IT system and support</button>
                    </div>
                </div>
                <div class="w-full lg:w-[80%] flex flex-col gap-y-4 sm:gap-y-6 pt-6 sm:pt-10 sm:pr-8 lg:pr-0">
                    <h5 class="text-xl lg:text-2xl font-medium">Budget in KES</h5>
                    <div class="btn-groups w-full flex flex-row flex-wrap gap-x-2 sm:gap-x-4 gap-y-5">
                        <button type="button">5k-20k</button>
                        <button type="button">20k-50k</button>
                        <button type="button">more than 50k</button>
                    </div>
                </div>
                <form
                    class="w-full lg:w-[80%] flex flex-col gap-y-4 sm:gap-y-6 lg:gap-y-8 pt-8 sm:pt-10 pr-1 sm:pr-8 lg:pr-0"
                >
                    <div class="input-group grid md:grid-cols-2 md:gap-12">
                        <div class="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="floating_name"
                                id="floating_name"
                                class="peer"
                                placeholder=" "
                                required
                            />
                            <label
                                for="floating_name"
                                class="peer-focus:font-medium absolute text-sm lg:text-base text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-app-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >Name</label
                            >
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="floating_mail"
                                id="floating_mail"
                                class="peer"
                                placeholder=" "
                                required
                            />
                            <label
                                for="floating_mail"
                                class="peer-focus:font-medium absolute text-sm lg:text-base text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-app-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >Email</label
                            >
                        </div>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            type="email"
                            name="file_attach"
                            id="file_attach"
                            class="block py-2.5 px-0 w-full text-base bg-transparent border-0 border-b border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-app-green peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="file_attach"
                            class="peer-focus:font-medium absolute text-sm lg:text-base text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-app-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >Project details(optional)</label
                        >
                        <div class="w-6 h-6 absolute right-0 top-2.5">
                            <IconsAttachClip />
                        </div>
                    </div>
                    <div class="w-full flex items-center">
                        <button
                            type="button"
                            class="text-bg-dark bg-white hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base sm:text-lg tracking-wide px-8 sm:px-14 py-2 sm:py-2.5 text-center transition duration-200"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
#hire h2::after {
    content: '';
    position: absolute;
    bottom: -3%;
    left: 0%;
    right: 0%;
    height: 2px;
    @apply bg-white;
}
.btn-groups button {
    @apply py-1.5 sm:py-2.5 px-3 sm:px-5 text-sm lg:text-base capitalize tracking-wide font-medium text-gray-300 focus:outline-none bg-app-dark rounded-full border border-gray-600 hover:bg-app-green hover:text-bg-dark focus:text-bg-dark focus:bg-app-green focus:ring-2 focus:ring-app-green transition duration-200;
}
.input-group input {
    @apply block py-2.5 px-0 w-full text-sm lg:text-base tracking-wide bg-transparent border-0 border-b border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-app-green;
}
</style>
