<script setup lang="ts">
import emailjs from '@emailjs/browser'
interface ServiceObject {
    id: number
    name: string
}

const serviceslist = ref<ServiceObject[]>([
    { id: 1, name: 'Brand Design' },
    { id: 2, name: 'Web design and development' },
    { id: 3, name: 'Ecommerce web application' },
    { id: 4, name: 'Database design' },
    { id: 5, name: 'Web hosting and deployment' },
    { id: 6, name: 'IT system and support' },
])

interface PriceObject {
    id: number
    price: string
}
const prices = ref<PriceObject[]>([
    { id: 1, price: '5K - 20K' },
    { id: 2, price: '20K - 50K' },
    { id: 3, price: 'more than 50K' },
])

// pick budget and service

const pickedservice = ref<ServiceObject>(serviceslist.value[1])
const pickedprice = ref<PriceObject>(prices.value[1])

const chooseService = (payload: ServiceObject): void => {
    pickedservice.value = payload
}

const choosePrice = (payload: PriceObject): void => {
    pickedprice.value = payload
}

const formdetails = ref<{ name: string; email: string; message: '' }>({
    name: '',
    email: '',
    message: '',
})
const sending = ref<boolean>()
const success = ref<boolean>(false)
const failed = ref<boolean>(false)
const sendEmail = (): void => {
    if (formdetails.value.email === '' && formdetails.value.name === '') {
        alert('Enter valid Name or Email')
        return
    }
    sending.value = true
    emailjs
        .send(
            'service_t6vxg2c',
            'template_0h0lctk',
            {
                from_name: formdetails.value.name,
                service: 'webiste',
                price: pickedprice.value?.price,
                email: formdetails.value.email,
                message: formdetails.value.message,
            },
            'mwtPZbmFisn2adP43'
        )
        .then(
            (result) => {
                console.log('Success', result.text)
                sending.value = false
                success.value = true
                setTimeout(() => {
                    success.value = false
                }, 1500)
            },
            (error) => {
                console.log('Failed...', error.text)
                sending.value = false
                failed.value = true
                setTimeout(() => {
                    failed.value = false
                }, 1500)
            }
        )
}
</script>
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
                        <button
                            type="button"
                            v-for="service in serviceslist"
                            :key="service.id"
                            @click="chooseService(service)"
                            :class="
                                pickedservice?.id === service.id
                                    ? 'bg-app-green text-bg-dark'
                                    : 'bg-app-dark text-gray-300'
                            "
                        >
                            {{ service.name }}
                        </button>
                    </div>
                </div>
                <div class="w-full lg:w-[80%] flex flex-col gap-y-4 sm:gap-y-6 pt-6 sm:pt-10 sm:pr-8 lg:pr-0">
                    <h5 class="text-xl lg:text-2xl font-medium">Budget in KES</h5>
                    <div class="btn-groups w-full flex flex-row flex-wrap gap-x-2 sm:gap-x-4 gap-y-5">
                        <button
                            type="button"
                            v-for="price in prices"
                            :key="price.id"
                            @click="choosePrice(price)"
                            :class="
                                pickedprice?.id === price.id ? 'bg-app-green text-bg-dark' : 'bg-app-dark text-gray-300'
                            "
                        >
                            {{ price.price }}
                        </button>
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
                                v-model="formdetails.name"
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
                                v-model="formdetails.email"
                            />
                            <label
                                for="floating_mail"
                                class="peer-focus:font-medium absolute text-sm lg:text-base text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-app-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >Email</label
                            >
                        </div>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <textarea
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-200 tracking-wide bg-app-dark rounded-lg border border-gray-500 focus:ring-1 focus:ring-app-green focus:outline-none focus:border-app-green transition duration-200"
                            placeholder="Project details(optional)..."
                            v-model="formdetails.message"
                        ></textarea>
                    </div>
                    <div class="w-full flex items-center flex-row gap-x-6">
                        <button
                            @click="sendEmail"
                            type="button"
                            class="text-bg-dark bg-white hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base sm:text-lg tracking-wide px-8 sm:px-14 py-2 sm:py-2.5 text-center transition duration-200"
                        >
                            Send
                        </button>
                        <div role="status" v-if="sending">
                            <svg
                                aria-hidden="true"
                                class="inline w-5 h-5 text-gray-400 animate-spin fill-app-green"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </form>
                <div class="w-full flex flex-col gap-y-3 mt-8">
                    <small class="text-app-gray text-lg">Or</small>
                    <div class="flex flex-row gap-x-2 items-center">
                        <div class="w-5 h-5 text-white">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                ></path>
                            </svg>
                        </div>
                        <p class="text-white text-base tracking-wide">amosk7793@gmail.com</p>
                    </div>
                    <div class="flex flex-row gap-x-2 items-center mt-1 sm:mt-2">
                        <div class="w-5 h-5 text-white">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                ></path>
                            </svg>
                        </div>
                        <p class="text-white text-base tracking-wide">+254 794818111</p>
                    </div>
                </div>
            </div>
        </div>
        <Transition name="toast">
            <div
                v-if="success"
                id="toast-success"
                class="fixed bottom-4 right-2 -translate-x-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
            >
                <div
                    class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span class="sr-only">Check icon</span>
                </div>
                <div class="ml-3 text-sm font-normal">Mail sent successfully.</div>
                <button
                    type="button"
                    class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target="#toast-success"
                    aria-label="Close"
                >
                    <span class="sr-only">Close</span>
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        </Transition>
        <Transition name="toast">
            <div
                v-if="failed"
                id="toast-danger"
                class="fixed bottom-4 right-2 -translate-x-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
            >
                <div
                    class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span class="sr-only">Error icon</span>
                </div>
                <div class="ml-3 text-sm font-normal">Email sent Failed. Try again.</div>
                <button
                    type="button"
                    class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target="#toast-danger"
                    aria-label="Close"
                >
                    <span class="sr-only">Close</span>
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        </Transition>
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
    @apply py-1.5 sm:py-2.5 px-3 sm:px-5 text-sm lg:text-base capitalize tracking-wide font-medium focus:outline-none rounded-full border border-gray-600 hover:bg-app-green hover:text-bg-dark focus:text-bg-dark focus:bg-app-green focus:ring-2 focus:ring-app-green transition duration-200;
}
.input-group input {
    @apply block py-2.5 px-0 w-full text-sm lg:text-base tracking-wide bg-transparent border-0 border-b border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-app-green;
}

.toast-enter-from,
.toast-leave-to {
    @apply opacity-0;
}
.toast-enter-active,
.toast-leave-active {
    @apply transition duration-200;
}
</style>
