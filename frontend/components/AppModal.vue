<template>
  <TransitionRoot as="template" :show="getModalOpen()">
    <ClientOnly>
      <Dialog as="div" class="relative z-10" @close="toggleModalOpen(false)">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          <slot name="caption">Изменение данных</slot>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <slot name="action">
                    <button
                      type="button"
                      class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                      @click="toggleModalOpen(false)"
                    >
                      Изменить
                    </button>
                  </slot>
                  <slot name="cancel">
                    <button
                      ref="cancelButtonRef"
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      @click="toggleModalOpen(false)"
                    >
                      Cancel
                    </button>
                  </slot>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </ClientOnly>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { useDashboardStore } from "~/stores";

const dashboardStore = useDashboardStore();
const { toggleModalOpen, getModalOpen, getRenderModal, setRenderModal } = dashboardStore;
</script>
