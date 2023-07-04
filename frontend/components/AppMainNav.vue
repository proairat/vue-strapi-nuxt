<template>
  <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <NuxtLink to="#" class="-m-1.5 p-1.5">
        <span class="sr-only">АГИМА</span>
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
      </NuxtLink>
    </div>
    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        @click="toggleMobileMenuOpen(true)"
      >
        <span class="sr-only">Открыть основное меню</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <NuxtLink
        v-for="item in getNavigation()"
        :key="item.id"
        :to="{
          path: item.route,
          name: item.componentName,
        }"
        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <NuxtLink to="#" class="text-sm font-semibold leading-6 text-gray-900">
        Войти <span aria-hidden="true">&rarr;</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { useUserInterfaceStore } from "~/stores";

const userInterfaceStore = useUserInterfaceStore();
const { toggleMobileMenuOpen, getNavigation } = userInterfaceStore;
</script>
