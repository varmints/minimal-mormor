<script lang="ts" setup>
const { data } = await useAsyncData("menu", () =>
  queryContent("menu").findOne(),
);

const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
</script>

<template>
  <footer class="overflow-hidden">
    <div class="mx-auto max-w-2xl px-8 py-12 md:px-12">
      <div class="flex flex-col gap-4">
        <div>
          <h3 class="text-base text-black lg:text-xl">
            {{ $t("footer.navigation") }}
          </h3>
          <ul
            role="list"
            class="mt-4 flex flex-col gap-2 text-xs uppercase text-zinc-500 lg:flex-row"
          >
            <li v-for="menuItem in data?.menu[locale]">
              <NuxtLink :href="menuItem?.link" class="hover:text-black">
                {{ menuItem?.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-base text-black lg:text-xl">
            {{ $t("footer.switchLanguage") }}
          </h3>
          <ul
            role="list"
            class="mt-4 flex flex-col gap-2 text-xs uppercase text-zinc-500 lg:flex-row"
          >
            <li>
              <NuxtLink :to="switchLocalePath('en')" class="hover:text-black"
                >English</NuxtLink
              >
            </li>
            <li>
              <NuxtLink :to="switchLocalePath('pl')" class="hover:text-black"
                >Polski</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-base text-black lg:text-xl">
            {{ $t("footer.resources") }}
          </h3>
          <ul
            role="list"
            class="mt-4 flex flex-col gap-2 text-xs uppercase text-zinc-500 lg:flex-row"
          >
            <li>
              <a
                href="https://stripe.com"
                class="hover:text-black"
                target="_blank"
                >Stripe</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-base text-black lg:text-xl">
            {{ $t("footer.socials") }}
          </h3>
          <ul
            role="list"
            class="mt-4 flex flex-col gap-2 text-xs uppercase text-zinc-500 lg:flex-row"
          >
            <li>
              <NuxtLink
                href="https://www.linkedin.com/in/kamil-morkisz/"
                class="hover:text-black"
                external
              >
                @LinkedIn
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="https://www.instagram.com/foto.tfurca/"
                class="hover:text-black"
                external
              >
                @Instagram
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-2xl px-8 py-12 md:px-12">
      <nav class="flex flex-col gap-8 lg:flex-row">
        <p class="text-sm text-black">
          {{ $t("footer.copyright") }}
        </p>
      </nav>
      <section class="mt-6 gap-x-8 gap-y-6">
        <div>
          <i18n-t
            keypath="footer.end"
            tag="p"
            scope="global"
            class="text-sm text-zinc-500 lg:col-span-2"
          >
            <a
              href="https://mormor.dev/"
              class="text-sm text-black hover:text-blue-300"
            >
              Kamil Morkisz</a
            >
          </i18n-t>
        </div>
      </section>
    </div>
    <svg
      class="relative -mx-2 lg:-mx-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1339 220.82"
    >
      <path
        d="M48.6,42.59L5.69,220.82H-.93L53.33-3.79l114.83,194.32L275.41-3.79l57.73,224.61h-28.08l-46.69-180.44-101.89,184.23L48.6,42.59Z"
        style="fill: #000; stroke-width: 0px"
      />
      <path
        d="M321.14,190.85c-44.48-44.16-44.48-116.09,0-160.57,44.16-44.16,116.09-44.16,160.57,0,44.16,44.48,44.16,116.41,0,160.57-44.48,44.48-116.4,44.48-160.57,0ZM340.39,171.93c34.07,34.39,95.58,56.47,137.23,14.83,41.64-41.64,19.24-103.16-15.14-137.23-34.39-34.38-95.58-56.78-136.91-14.83-41.96,41.33-19.56,103.16,14.83,137.22Z"
        style="fill: #000; stroke-width: 0px"
      />
      <path
        d="M500.32,0h78.23c53.63,0,101.26,9.46,101.26,67.82,0,41.64-32.49,64.35-84.54,66.88l88.64,86.12h-9.15l-88.01-85.8h-59.31v85.8h-27.13V0ZM582.65,128.71c54.57,0,70.03-28.08,70.03-61.2,0-42.59-27.13-61.2-74.13-61.2h-51.1v122.4h55.21Z"
        style="fill: #000; stroke-width: 0px"
      />
      <path
        d="M703.79,42.59l-42.9,178.24h-6.62L708.52-3.79l114.83,194.32L930.6-3.79l57.73,224.61h-28.08l-46.69-180.44-101.89,184.23-107.89-182.02Z"
        style="fill: #000; stroke-width: 0px"
      />
      <path
        d="M976.33,190.85c-44.48-44.16-44.48-116.09,0-160.57,44.16-44.16,116.09-44.16,160.57,0,44.16,44.48,44.16,116.41,0,160.57s-116.41,44.48-160.57,0ZM995.58,171.93c34.07,34.39,95.58,56.47,137.23,14.83,41.64-41.64,19.24-103.16-15.14-137.23-34.38-34.38-95.58-56.78-136.91-14.83-41.96,41.33-19.56,103.16,14.83,137.22Z"
        style="fill: #000; stroke-width: 0px"
      />
      <path
        d="M1155.51,0h78.23c53.63,0,101.26,9.46,101.26,67.82,0,41.64-32.49,64.35-84.54,66.88l88.64,86.12h-9.15l-88.01-85.8h-59.31v85.8h-27.13V0ZM1237.84,128.71c54.57,0,70.03-28.08,70.03-61.2,0-42.59-27.13-61.2-74.13-61.2h-51.1v122.4h55.21Z"
        style="fill: #000; stroke-width: 0px"
      />
    </svg>
  </footer>
</template>

<style scoped></style>
