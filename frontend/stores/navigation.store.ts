import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigation", () => {
  const mobileMenuOpen = ref(false);
  const navigation = ref([
    {
      id: 1,
      title: "Интерфейс пользователя",
      route: "/user-interface",
      componentName: "user-interface",
    },
    {
      id: 2,
      title: "Дашборд",
      route: "/dashboard",
      componentName: "dashboard",
    },
    { id: 3, title: "О компании", route: "/about", componentName: "about" },
  ]);

  function toggleMobileMenuOpen(value: boolean) {
    mobileMenuOpen.value = value;
  }

  function getMobileMenuOpen() {
    return mobileMenuOpen.value;
  }

  function getNavigation() {
    return navigation.value;
  }

  return {
    toggleMobileMenuOpen,
    getMobileMenuOpen,
    getNavigation,
  };
});
