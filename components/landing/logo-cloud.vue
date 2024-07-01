<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const logos = ref([
  {
    title: "Angular",
    link: "https://angular.io/",
    icon: "simple-icons:angular",
  },
  {
    title: "Vue.js",
    link: "https://vuejs.org/",
    icon: "simple-icons:vuedotjs",
  },
  {
    title: "React",
    link: "https://react.dev/",
    icon: "simple-icons:react",
  },
  {
    title: "Svelte",
    link: "https://svelte.dev/",
    icon: "simple-icons:svelte",
  },
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "simple-icons:tailwindcss",
  },
  {
    title: "Stripe",
    link: "https://stripe.com/",
    icon: "simple-icons:stripe",
  },
  {
    title: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
    icon: "simple-icons:visualstudiocode",
  },
  {
    title: "Astro",
    link: "https://astro.build/",
    icon: "simple-icons:astro",
  },
  {
    title: "Nuxt",
    link: "https://nuxt.com/",
    icon: "simple-icons:nuxtdotjs",
  },
]);
</script>

<template>
  <section class="scroll-mt-12" id="tools">
    <div class="mx-auto max-w-2xl px-8 py-12 md:px-12">
      <h2 class="text-xl font-light tracking-tighter text-black">
        {{ $t("tools.title") }}
      </h2>
      <div
        class="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:mx-0 sm:grid-cols-3"
      >
        <div
          v-for="logo in logos"
          class="flex items-center justify-center bg-white p-8 sm:p-10"
        >
          <NuxtLink
            :to="logo.link"
            :title="logo.title"
            external
            target="_blank"
          >
            <Icon :icon="logo.icon" style="font-size: 48px" :alt="logo.title" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
