<script setup lang="ts">
import { Collapse } from 'vue-collapsed'

const questions = reactive([
    {
        title: 'Brand Design',
        answer: [
            "We understand the importance of a strong brand identity in today's digital age. Breakthrough ideas don't happend by accident - we engage in friendly consultation, research and make strategy development to make your message shine",
            'We understand that a strong brand is essential for building trust and credibility with your audience, and we will work with you to create a brand that truly represents your business and helps you stand out in the digital world.',
        ],
        isExpanded: false, // Initial value
    },
    {
        title: 'Web design & development',
        answer: [
            'We pride ourselves on delivering high-quality web and app development solutions that meet the unique needs of our clients. Our goal is to provide our clients with a final product that not only functions well but also looks great and is easy to use.',
            "Our web and app development services include: creating a custom website tailored to your business needs, whether it's a simple brochure website or a complex platform, developing a custom app for your business, whether it's a mobile app or a web-based app, working on the User experience of the website or app, and make sure that it is easy to use and navigate... etc.",
            'We are committed to delivering solutions that not only look great but also drive business results',
        ],
        isExpanded: false,
    },
    {
        title: 'Ecommerce website',
        answer: [
            'We specialize in delivering high-quality e-commerce web and app development solutions for businesses of all sizes. Our goal is to provide our clients with a seamless and secure online shopping experience that drives sales and growth for their business.',
            'This services include: creating a custom e-commerce website tailored to your business needs, with features such as product catalogs, shopping carts, and checkout pages, Optimizing your website or app for search engines, so it will be easily discoverable by your target audience, etc.',
        ],
        isExpanded: false,
    },
    {
        title: 'IT Systems & Support',
        answer: [
            'We provide comprehensive IT Systems & Support services to help businesses of all sizes run smoothly and efficiently. We understand that technology is the backbone of any business, and we are dedicated to providing our clients with the support they need to keep their systems running at peak performance.',
        ],
        isExpanded: false,
    },
])

function handleAccordion(selectedIndex: number) {
    questions.forEach((_, index) => {
        questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
    })
}
</script>
<template>
    <div class="w-full flex flex-col gap-y-2 mt-12 sm:mt-20 px-4 lg:px-8 xl:px-24 2xl:px-32">
        <div class="w-full flex flex-col gap-y-3 sm:grid grid-cols-10">
            <div class="content-index col-span-1 text-app-gray text-2xl sm:text-4xl lg:text-5xl font-bold italic">
                <p>03</p>
            </div>
            <div id="capabilities" class="col-span-9 flex flex-col items-start">
                <h2 class="uppercase text-2xl sm:text-4xl lg:text-5xl font-bold relative pr-3">what we do</h2>
            </div>
        </div>
        <div class="w-full flex flex-col sm:grid grid-cols-10 py-6 mt-4">
            <div class="col-span-2 lg:col-span-3 hidden sm:block"></div>
            <ul class="col-span-8 lg:col-span-7 flex flex-col sm:pr-4 lg:pr-0">
                <li v-for="(question, index) in questions" :key="question.title">
                    <div
                        @click="handleAccordion(index)"
                        class="flex items-center justify-between flex-row py-2 sm:py-3 cursor-pointer"
                    >
                        <h4
                            :class="
                                questions[index].isExpanded
                                    ? 'text-app-green before:bg-app-green'
                                    : 'before:bg-white text-white'
                            "
                        >
                            {{ question.title }}
                        </h4>
                        <div class="flex flex-row items-center">
                            <div
                                class="w-5 sm:w-7 h-5 sm:h-7 transition-transform duration-200"
                                :class="questions[index].isExpanded ? 'rotate-[30deg]' : 'rotate-0'"
                            >
                                <svg
                                    viewBox="0 0 512 512"
                                    xml:space="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                    enable-background="new 0 0 512 512"
                                >
                                    <path
                                        d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"
                                        fill="rgba(0,255,184,255)"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Collapse :when="questions[index].isExpanded" class="v-collapse flex flex-col gap-y-2 w-full">
                        <ol class="pl-5 space-y-1 list-disc list-inside">
                            <li
                                v-for="(answer, i) in questions[index].answer"
                                :key="i"
                                class="text-neutral-300 text-sm lg:text-base"
                            >
                                {{ answer }}
                            </li>
                        </ol>
                    </Collapse>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.v-collapse {
    transition: height var(--vc-auto-duration) cubic-bezier(0.33, 1, 0.68, 1);
}
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
    @apply border-t border-gray-500 w-full py-2 sm:py-4 lg:py-6;
}
ol li {
    @apply border-none py-1;
}
ul li h4 {
    @apply text-xl sm:text-2xl lg:text-3xl font-light capitalize px-5 sm:px-8 relative flex items-center;
}

ul li h4::before {
    content: '';
    position: absolute;
    left: 0%;
    width: 10px;
    height: 2px;
}
</style>
