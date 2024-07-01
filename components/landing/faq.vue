<script lang="ts" setup>
import { Collapse } from "vue-collapsed";

const { locale } = useI18n();

const { data } = await useAsyncData(() => queryContent("faq").findOne());

const questions = reactive(
  data.value?.faq[locale.value].map(
    ({ title, answer }: { title: string; answer: string }, index: number) => ({
      title,
      answer,
      isExpanded: index === 0, // Initial values, display expanded on mount
    }),
  ),
);

function handleAccordion(selectedIndex: number) {
  questions.forEach((_: any, index: number) => {
    questions[index].isExpanded =
      index === selectedIndex ? !questions[index].isExpanded : false;
  });
}

const email = "mailto:kamil.morkisz@edu.uekat.pl";
</script>

<template>
  <section class="scroll-mt-12" id="faq">
    <div class="mx-auto max-w-2xl px-8 py-12 md:px-12">
      <div class="">
        <i18n-t
          keypath="faq.titleLine1"
          tag="h2"
          scope="global"
          class="text-3xl font-light tracking-tighter text-black lg:text-4xl"
        >
          <span class="block">{{ $t("faq.titleLine2") }}</span>
        </i18n-t>
        <i18n-t
          keypath="faq.subtitle"
          scope="global"
          tag="p"
          class="mt-5 text-black"
        >
          <a place="email" :href="email">email</a>
        </i18n-t>
      </div>
      <div>
        <ul
          class="mt-8 list-none divide-y rounded-3xl bg-white text-black"
          role="list"
        >
          <li v-for="(question, index) in questions" :key="question.title">
            <button
              class="w-full p-4 text-left"
              @click="handleAccordion(index)"
              type="button"
            >
              <div class="flex items-center justify-between text-black">
                <p class="text-lg tracking-tight text-black">
                  {{ question.title }}
                </p>
                <svg
                  class="ml-4 inline h-5 w-5 transform transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  :class="{
                    'rotate-180': question.isExpanded,
                    'rotate-0': !question.isExpanded,
                  }"
                >
                  <path
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <Collapse :when="question.isExpanded">
              <div
                class="p-8 pt-0 text-sm text-zinc-500"
                v-html="question.answer"
              ></div>
            </Collapse>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
