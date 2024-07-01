<script lang="ts" setup></script>

<template>
  <section class="relative overflow-hidden">
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

    <div class="relative mx-auto max-w-2xl px-8 py-24 md:px-12">
      <div>
        <span
          class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-3 py-1 text-sm leading-6 text-black ring-1 ring-inset ring-zinc-200"
        >
          <p>{{ $t("hero.available") }}</p>
          <div
            class="h-2 w-2 rounded-full border-2 border-black bg-black"
          ></div>

          <div class="h-2 w-2 rounded-full border-2 border-black"></div>
        </span>
        <i18n-t
          keypath="hero.title"
          scope="global"
          tag="h2"
          class="mt-12 text-5xl font-normal tracking-tighter text-black"
        >
          <span class="block">{{ $t("hero.titleLine2") }}</span>
        </i18n-t>
      </div>
      <ul
        class="group mt-12 grid h-full max-w-xl grid-cols-1 gap-4 text-base text-zinc-500 lg:grid-cols-2"
      >
        <div>
          <p>
            {{ $t("hero.paragraph1") }}
          </p>
        </div>
        <div>
          <p>
            {{ $t("hero.paragraph2") }}
          </p>
        </div>
        <em class="col-span-full mt-8 text-sm">
          <i18n-t keypath="hero.special1" scope="global" tag="p">
            <span class="block text-black">⏤ {{ $t("hero.special2") }}</span>
          </i18n-t>
        </em>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
