<script lang="ts" setup>
const testimonialActive = ref(1);

const { locale } = useI18n();

const { data } = await useAsyncData(() =>
  queryContent("testimonials").findOne(),
);
</script>

<template>
  <section>
    <div class="mx-auto max-w-2xl px-8 py-12 md:px-12">
      <div class="relative overflow-hidden">
        <div
          class="container flex flex-col justify-center overflow-hidden md:flex-row"
        >
          <div>
            <div class="relative flex h-full flex-col text-left">
              <div class="relative z-10 h-full">
                <div class="mx-auto max-w-xl pb-6">
                  <div
                    v-for="(testimonial, index) in data?.testimonials[locale]"
                    v-show="testimonialActive === index"
                  >
                    <p
                      class="mx-auto flex items-center gap-2 text-balance text-center text-base font-medium leading-6 text-zinc-500"
                      v-show="testimonialActive == index"
                    >
                      {{ testimonial.testimonial }}
                    </p>
                  </div>
                </div>
                <div class="mt-6 flex items-center justify-center lg:my-4">
                  <button
                    v-for="(testimonial, index) in data?.testimonials[locale]"
                    @click="testimonialActive = index"
                    class="shadow-xs bg-gradientdown mx-2 inline-block size-12 rounded-full text-center font-bold focus:outline-none focus:ring-2"
                    :class="{
                      'bg-gradientdown size-12 opacity-50 ':
                        testimonialActive != index,
                      'bg-gradientdown opacity-100 ':
                        testimonialActive == index,
                    }"
                  >
                    <img
                      class="inline-block h-12 w-12 rounded-full border grayscale"
                      :src="testimonial.photo"
                      alt="#"
                    />
                  </button>
                </div>
                <div class="flex justify-center px-4 pb-6 pt-4 md:py-6">
                  <div
                    v-for="(testimonial, index) in data?.testimonials[locale]"
                    v-show="testimonialActive == index"
                    class="text-center"
                  >
                    <h2 class="text-sm font-medium text-zinc-500 lg:text-base">
                      {{ testimonial.name }}
                    </h2>
                    <a href="#" class="text-xs text-zinc-500">
                      {{ testimonial.company }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
