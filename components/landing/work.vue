<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const { locale } = useI18n();
const swiperInstance = ref();
const atBeginning = ref(true);
const atEnd = ref(false);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const slideToPrev = () => {
  swiperInstance.value.slidePrev();
};

const slideToNext = () => {
  swiperInstance.value.slideNext();
};

const onSlideChange = () => {
  atBeginning.value = swiperInstance.value.isBeginning;
  atEnd.value = swiperInstance.value.isEnd;
};

const { data } = await useAsyncData(() => queryContent("works").findOne());
</script>

<template>
  <section class="scroll-mt-24" id="work">
    <div class="mx-auto max-w-2xl px-8 pb-12 md:px-12">
      <h2 class="text-xl font-light tracking-tighter text-black">
        {{ $t("work.title") }}
      </h2>

      <div class="flex w-full flex-col">
        <div
          class="mt-4 flex w-full flex-col rounded-3xl bg-white pt-4"
          aria-labelledby="carousel-label"
          role="region"
          tabindex="0"
        >
          <h2 class="sr-only" hidden="" id="carousel-label">
            {{ $t("work.carousel") }}
          </h2>
          <span class="sr-only" hidden="" id="carousel-content-label">{{
            $t("work.carousel")
          }}</span>
          <div
            class="mx-auto inline-flex items-center justify-center space-x-2"
          >
            <button
              class="inline-flex items-center rounded-lg bg-zinc-200 p-2 text-center text-black ring-1 ring-zinc-300 hover:bg-zinc-200 focus:bg-zinc-50"
              :class="{ 'cursor-not-allowed opacity-50': atBeginning }"
              :aria-disabled="atBeginning"
              :tabindex="atEnd ? -1 : 0"
              @click="slideToPrev()"
            >
              <span aria-hidden="true"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg> </span
              ><span class="sr-only">{{ $t("work.prevSlide") }}</span>
            </button>
            <button
              class="inline-flex items-center rounded-lg bg-zinc-200 p-2 text-center text-black ring-1 ring-zinc-300 hover:bg-zinc-200 focus:bg-zinc-50"
              :class="{ 'cursor-not-allowed opacity-50': atEnd }"
              :aria-disabled="atEnd"
              :tabindex="atEnd ? -1 : 0"
              @click="slideToNext()"
            >
              <span aria-hidden="true"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3 text-zinc-600 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg> </span
              ><span class="sr-only">{{ $t("work.nextSlide") }}</span>
            </button>
          </div>

          <div
            class="flex w-full snap-x snap-mandatory gap-3 overflow-x-scroll scrollbar-hide"
            role="listbox"
            aria-labelledby="carousel-content-label"
            tabindex="0"
          >
            <Swiper
              @swiper="onSwiper"
              :modules="[Autoplay]"
              :slides-per-view="1"
              :space-between="0"
              :scrollbar="{ draggable: true }"
              :autoplay="{ delay: 7000, pauseOnMouseEnter: true }"
              @reach-end="
                () => {
                  atEnd = true;
                }
              "
              @slide-change="
                () => {
                  atEnd = false;
                  atBeginning = false;
                  onSlideChange();
                }
              "
            >
              <SwiperSlide v-for="(work, index) in data.works[locale]">
                <div
                  class="flex w-full shrink-0 snap-start flex-col items-center justify-center"
                  role="option"
                >
                  <img :src="work.src" :alt="work.alt" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
