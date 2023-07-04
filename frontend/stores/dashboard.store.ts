import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", () => {
  const modalOpen = ref(false);

  function toggleModalOpen(value: boolean) {
    modalOpen.value = value;
  }

  function getModalOpen() {
    return modalOpen.value;
  }

  return {
    toggleModalOpen,
    getModalOpen,
  };
});
