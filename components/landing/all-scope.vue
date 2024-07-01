<script lang="ts" setup>
const { data } = await useAsyncData("scope", () =>
  queryContent("scope").findOne(),
);

const { locale } = useI18n();
</script>

<template>
  <section class="scroll-mt-24" id="services">
    <div class="mx-auto max-w-2xl px-8 py-12 md:px-12">
      <div
        class="col-span-full inline-flex h-full w-full items-center rounded-4xl text-black lg:col-span-2"
      >
        <h2 class="text-3xl font-light tracking-tighter">
          {{ $t("scope.title") }}
        </h2>
      </div>
      <div class="mt-8 grid grid-cols-1 gap-px md:grid-cols-2">
        <div
          v-for="scope in data?.scope[locale]"
          class="rounded-3xl bg-white p-8"
        >
          <div class="inline-flex w-full items-center border-b border-white/10">
            <p class="text-2xl text-black">{{ scope.title }}</p>
          </div>
          <div class="mt-4 divide-y divide-white/10">
            <div
              v-for="element in scope.elements"
              class="flex flex-col justify-between gap-4 sm:flex-row lg:items-end"
            >
              <p
                class="flex items-center gap-2 text-sm font-medium leading-6 text-zinc-500"
              >
                ⏤ {{ element }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
