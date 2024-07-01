<script lang="ts" setup>
const open = ref(false);

const { data } = await useAsyncData("menu", () =>
  queryContent("menu").findOne(),
);

const { locale } = useI18n();
</script>

<template>
  <div class="fixed inset-x-0 top-4 z-50">
    <div class="mx-auto max-w-2xl px-8">
      <div class="mx-auto w-full">
        <div
          class="relative mx-auto flex w-full flex-col rounded-xl bg-white p-3 uppercase ring-1 ring-zinc-200 backdrop-blur-xl backdrop-filter md:flex-row md:items-center md:justify-between md:rounded-full"
        >
          <div
            class="flex flex-row items-center justify-between md:justify-start"
          >
            <a
              class="logo ml-2 inline-flex items-center gap-4 text-xl font-bold tracking-tighter text-black hover:text-black/50"
              href="/"
              title="linke to main page"
            >
              Mormor
            </a>
            <button
              @click="open = !open"
              class="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-cyan-300 focus:text-black focus:outline-none md:hidden"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  class="inline-flex"
                  :class="{ hidden: open, 'inline-flex': !open }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  :class="{ hidden: !open, 'inline-flex': open }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            class="flex-grow flex-col justify-center py-12 md:flex md:flex-row md:items-end md:py-0"
            :class="{ flex: open, hidden: !open }"
          >
            <ul
              class="list-none items-center justify-center gap-3 space-y-2 text-center text-xs text-zinc-500 md:ml-auto md:inline-flex md:space-y-0 md:text-left"
            >
              <li v-for="menuItem in data?.menu[locale]">
                <NuxtLink
                  :href="menuItem?.link"
                  class="shrink-0 hover:text-black"
                >
                  {{ menuItem?.title }}
                </NuxtLink>
              </li>
              <li class="shrink-0">
                <a
                  href="https://github.com/varmints"
                  class="inline-flex h-8 w-auto items-center justify-center rounded-full border-2 border-black bg-black/5 px-4 py-2 text-black ring-2 ring-transparent duration-200 hover:bg-transparent hover:text-black focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  font-variation-settings: "wght" 700;
}
</style>
