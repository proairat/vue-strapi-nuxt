import { defineStore } from 'pinia';

export const useUserInterfaceStore = defineStore('userInterface', () => {
  const mobileMenuOpen = ref(false);
  const navigation = ref([
    { id: 1, title: 'Дашборд', route: '/dashboard', componentName: 'dashboard' },
    { id: 2, title: 'О компании', route: '/about', componentName: 'about' },
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
