<script setup lang="ts">
const heroref = ref<HTMLDivElement>()
const projectsref = ref<HTMLElement>()
const aboutref = ref<HTMLElement>()
const experienceref = ref<HTMLElement>()
const reviewsref = ref<HTMLElement>()
const contactsref = ref<HTMLElement>()

const scrollFunction = (payload: string): void => {
    if (payload === 'hero') {
        heroref.value?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    } else if (payload === 'projects') {
        projectsref.value?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    } else if (payload === 'about') {
        aboutref.value?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    } else if (payload === 'experience') {
        experienceref.value?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    } else if (payload === 'reviews') {
        reviewsref.value?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    } else if (payload === 'contacts') {
        contactsref.value?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    } else {
        return
    }
}
</script>
<template>
    <main class="w-full flex flex-col gap-y-2">
        <NavBar @scroll-into="scrollFunction" />
        <section class="w-full flex flex-col gap-y-2 py-1">
            <div class="w-full" ref="heroref">
                <ContentsHeroComponent />
            </div>
            <div class="w-full" ref="projectsref">
                <ContentsProjectsComponent />
            </div>
            <div class="w-full" ref="aboutref">
                <ContentsWhatWeDoComponent />
            </div>
            <div class="w-full" ref="experienceref">
                <ContentsExpertiseComponent />
            </div>
            <div class="w-full" ref="reviewsref">
                <ContentsClientReviewsComponent />
            </div>
            <div class="w-full" ref="contactsref">
                <ContentsContactComponent />
            </div>
        </section>
    </main>
</template>
