<template>
    <main class="w-full h-full flex flex-col">
        <section class="w-full flex flex-col px-24">
            <NavBar />
            <slot />
        </section>
        <Footer />
    </main>
</template>
