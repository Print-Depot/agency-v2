<template>
    <main class="w-full h-full flex flex-col overflow-x-hidden">
        <section class="w-full flex flex-col pb-8">
            <NavBar />
            <slot />
        </section>
        <Footer />
    </main>
</template>
