<script lang="ts" setup></script>

<template>
  <section class="scroll-mt-12" id="how">
    <div class="mx-auto max-w-2xl px-8 py-12 md:px-12">
      <div>
        <h2 class="text-2xl font-light tracking-tighter text-black lg:text-4xl">
          {{ $t("howItWorks.title") }}
        </h2>
      </div>
      <div>
        <p class="mt-8 text-sm text-zinc-500">
          {{ $t("howItWorks.description.paragraph1") }}
          <br /><br />
          {{ $t("howItWorks.description.paragraph2") }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
