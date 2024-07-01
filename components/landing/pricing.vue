<script lang="ts" setup></script>

<template>
  <section class="scroll-mt-12" id="pricing">
    <div class="mx-auto max-w-7xl px-8 py-12 md:px-12">
      <div
        class="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <section
          class="col-span-full flex h-full flex-col justify-between rounded-3xl bg-white p-8 text-black lg:col-span-1"
        >
          <div>
            <div>
              <i18n-t
                keypath="pricing.titleLine1"
                tag="p"
                scope="global"
                class="text-2xl font-medium tracking-tighter text-black"
              >
                <span class="md:block">{{ $t("pricing.titleLine2") }}</span>
              </i18n-t>
            </div>
            <p class="mt-4 text-xs text-zinc-500 lg:mt-8">
              {{ $t("pricing.description") }}
            </p>
          </div>
          <div>
            <div class="flex items-center gap-2 text-black">
              <p class="text-xs">{{ $t("pricing.available") }}</p>
              <div class="h-2 w-2 rounded-full bg-black"></div>

              <div class="h-2 w-2 rounded-full border border-black"></div>
            </div>
            <div class="mt-4 flex flex-col border-t pt-4">
              <i18n-t
                keypath="pricing.additionalInfo"
                tag="span"
                scope="global"
                class="text-xs font-normal text-zinc-500"
              >
                <span class="font-medium italic text-black">Breeew</span>
                <span class="font-medium italic text-black">Stripe</span>
                <span class="font-medium italic text-black">
                  {{ $t("pricing.additionalInfoCanceling") }}
                </span>
              </i18n-t>
              <div class="mt-4 inline-flex items-center gap-2 text-black">
                <BreeewStripeLogo />
              </div>
            </div>
          </div>
        </section>
        <section
          class="flex h-full flex-col justify-between rounded-3xl bg-white p-8 text-black"
        >
          <div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <p class="text-lg text-black">
                    {{ $t("pricing.tier1.title") }}
                  </p>
                  <div class="flex gap-1"></div>
                </div>
                <i18n-t
                  keypath="pricing.tier1.price"
                  scope="global"
                  tag="p"
                  class="mt-2 text-xl font-medium text-black"
                >
                  <span class="ml-2 text-sm text-zinc-500">{{
                    $t("pricing.tier1.period")
                  }}</span>
                  <span class="block text-xs text-black">{{
                    $t("pricing.tier1.currency")
                  }}</span>
                </i18n-t>
              </div>
              <p class="mt-4 text-sm text-zinc-500">
                {{ $t("pricing.tier1.shortDescription") }}
              </p>
            </div>
            <div class="mt-6">
              <p class="text-sm uppercase text-black">
                {{ $t("pricing.tier1.listTitle") }}
              </p>
              <ul
                class="mt-4 flex flex-col gap-y-2 text-sm text-black"
                role="list"
              >
                <li class="flex items-start gap-2">
                  ⏤ <span>{{ $t("pricing.tier1.listElement1") }}</span>
                </li>
                <li class="flex items-start gap-2">
                  ⏤ <span>{{ $t("pricing.tier1.listElement2") }}</span>
                </li>
                <li class="flex flex-row items-center gap-2">
                  ⏤ <span>{{ $t("pricing.tier1.listElement3") }}</span>
                </li>
                <li class="flex items-start gap-2">
                  ⏤ <span>{{ $t("pricing.tier1.listElement4") }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-8">
            <a
              class="flex h-10 items-center justify-between rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-500 shadow-zinc-500/5 ring-offset-zinc-200 transition-all duration-300 hover:bg-black hover:text-white focus:ring-2 focus:ring-blue-950 focus:ring-offset-2"
              href="#_"
              >{{ $t("pricing.getStarted") }} <span>&rarr;</span></a
            >
          </div>
        </section>
        <section
          class="flex h-full flex-col justify-between rounded-3xl bg-white p-8 text-black"
        >
          <div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <p class="text-lg text-black">
                    {{ $t("pricing.tier2.title") }}
                  </p>
                  <div class="flex gap-1"></div>
                </div>
                <i18n-t
                  keypath="pricing.tier2.price"
                  scope="global"
                  tag="p"
                  class="mt-2 text-xl font-medium text-black"
                >
                  <span class="ml-2 text-sm text-zinc-500">
                    {{ $t("pricing.tier2.period") }}
                  </span>
                  <span class="block text-xs text-black">
                    {{ $t("pricing.tier2.currency") }}
                  </span>
                </i18n-t>
              </div>
              <p class="mt-4 text-sm text-zinc-500">
                {{ $t("pricing.tier2.shortDescription") }}
              </p>
            </div>
            <div class="mt-6">
              <p class="text-sm uppercase text-black">
                {{ $t("pricing.tier2.listTitle") }}
              </p>
              <ul
                class="mt-4 flex flex-col gap-y-2 text-sm text-black"
                role="list"
              >
                <li class="flex items-start gap-2">
                  ⏤ <span>{{ $t("pricing.tier2.listElement1") }}</span>
                </li>
                <li class="flex items-start gap-2">
                  ⏤ <span>{{ $t("pricing.tier2.listElement2") }}</span>
                </li>
                <li class="flex flex-row items-center gap-2">
                  ⏤ <span>{{ $t("pricing.tier2.listElement3") }}</span>
                </li>
                <li class="flex flex-row items-center gap-2">
                  ⏤ <span>{{ $t("pricing.tier2.listElement4") }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-8">
            <a
              class="flex h-10 items-center justify-between rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-500 shadow-zinc-500/5 ring-offset-zinc-200 transition-all duration-300 hover:bg-black hover:text-white focus:ring-2 focus:ring-blue-950 focus:ring-offset-2"
              href="#_"
              >{{ $t("pricing.getStarted") }} <span>&rarr;</span></a
            >
          </div>
        </section>
        <section
          class="flex h-full flex-col justify-between rounded-3xl bg-white p-8 text-black"
        >
          <div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <p class="text-lg text-black">
                    {{ $t("pricing.tier3.title") }}
                  </p>
                  <div>
                    <div class="flex gap-3"></div>
                  </div>
                </div>
                <i18n-t
                  keypath="pricing.tier3.price"
                  scope="global"
                  tag="p"
                  class="mt-2 text-xl font-medium text-black"
                >
                  <span class="ml-2 text-sm text-zinc-500">{{
                    $t("pricing.tier3.period")
                  }}</span>
                  <span class="block text-xs text-black">{{
                    $t("pricing.tier3.currency")
                  }}</span>
                </i18n-t>
              </div>
              <p class="mt-4 text-sm text-zinc-500">
                {{ $t("pricing.tier3.shortDescription") }}
              </p>
            </div>
            <div class="mt-6">
              <p class="text-sm uppercase text-black">
                {{ $t("pricing.tier3.listTitle") }}
              </p>
              <ul
                class="mt-4 flex flex-col gap-y-2 text-sm text-black"
                role="list"
              >
                <li class="flex items-start gap-2">
                  ⏤ <span>{{ $t("pricing.tier3.listElement1") }}</span>
                </li>
                <li class="flex items-start gap-2">
                  ⏤ <span>{{ $t("pricing.tier3.listElement2") }}</span>
                </li>
                <li class="flex items-start gap-2">
                  ⏤ <span>{{ $t("pricing.tier3.listElement3") }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-8">
            <a
              class="flex h-10 items-center justify-between rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-500 shadow-zinc-500/5 ring-offset-zinc-200 transition-all duration-300 hover:bg-black hover:text-white focus:ring-2 focus:ring-blue-950 focus:ring-offset-2"
              href="#_"
              >{{ $t("pricing.getStarted") }} <span>&rarr;</span></a
            >
          </div>
        </section>
        <section
          class="order-last col-span-full flex h-full flex-col justify-between rounded-3xl bg-white p-8 md:order-none md:col-span-1 xl:col-span-2"
        >
          <p class="text-lg text-black lg:text-xl">
            {{ $t("pricing.goodToKnow") }}
          </p>
          <div class="mt-4">
            <i18n-t
              keypath="pricing.goodToKnowInfo"
              scope="global"
              tag="p"
              class="text-xs font-normal text-zinc-500"
            >
              <span class="font-medium italic text-black">
                {{ $t("pricing.goodToKnowCopywriting") }}
              </span>
              <span class="font-medium italic text-black">
                {{ $t("pricing.goodToKnow3D") }}
              </span>
              <span class="font-medium italic text-black">
                {{ $t("pricing.goodToKnowMarketing") }}
              </span>
              <span class="font-medium italic text-black">
                {{ $t("pricing.goodToKnowApps") }}
              </span>
              <span class="font-medium italic text-black">
                {{ $t("pricing.goodToKnowBackend") }}
              </span>
            </i18n-t>
            <div class="mt-4 flex flex-col border-t pt-4">
              <p class="text-xs text-zinc-400">
                {{ $t("pricing.langSpeaks") }}
              </p>
            </div>
          </div>
        </section>
        <section
          class="col-span-full h-full justify-between rounded-3xl bg-white p-8 lg:col-span-1 xl:col-span-2"
        >
          <div class="flex h-full flex-col justify-between">
            <div>
              <div
                class="flex flex-col lg:flex-row lg:items-center lg:justify-between"
              >
                <p class="text-lg text-black lg:text-xl">
                  {{ $t("pricing.bookIntroCall") }}
                </p>
              </div>
              <p class="mt-4 text-xs text-zinc-500">
                {{ $t("pricing.bookIntroCallDescription") }}
              </p>
            </div>
            <div class="mt-4 flex flex-col">
              <a
                href="#_"
                class="flex h-10 items-center justify-between rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-500 shadow-zinc-500/5 ring-offset-zinc-200 transition-all duration-300 hover:bg-black hover:text-white focus:ring-2 focus:ring-blue-950 focus:ring-offset-2"
              >
                {{ $t("pricing.bookCall") }}
                <span>&rarr;</span>
              </a>
            </div>
            <div class="mt-4 flex flex-col border-t pt-4">
              <p class="text-xs text-zinc-400">( Europe/Warsaw ) Time</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
