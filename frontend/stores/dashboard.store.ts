import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", () => {
  const modalOpen = ref(false);
  const renderModal = ref({
    captionSlot: {
      id: 0,
      text: "",
      classes: "",
    },
    actionSlot: {
      id: 0,
      text: "",
      classes: "",
    },
    cancelSlot: {
      id: 0,
      text: "",
      classes: "",
    },
  });

  function toggleModalOpen(value: boolean) {
    modalOpen.value = value;
  }

  function getModalOpen() {
    return modalOpen.value;
  }

  function getRenderModal() {
    return renderModal.value;
  }

  function setRenderModal(propertyPath: string, newValue: any): void {
    updateObjectProperty(getRenderModal(), propertyPath, newValue);
  }

  return {
    toggleModalOpen,
    getModalOpen,
    getRenderModal,
    setRenderModal,
  };
});
