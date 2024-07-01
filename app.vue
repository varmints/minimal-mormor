<script setup lang="ts">
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class:
      "bg-zinc-100 flex flex-col min-h-screen mx-auto 2xl:max-w-screen-xl relative",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
