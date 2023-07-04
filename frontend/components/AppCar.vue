<template>
  <pre>{{ cars.data }}</pre>
  <AppTable :table-header="tableColumnNames" :table-data="cars.data" />
  <AppModal>
    <template #caption>
      <!--попробовать передать реактивный контент-->
    </template>
  </AppModal>
</template>

<script setup lang="ts">
import { useFetchComposable } from "~/composables/use-fetch";
import { BASE_URL_GET_CARS } from "~/api";
import { useDashboardStore } from "~/stores";

const dashboardStore = useDashboardStore();
const { toggleModalOpen } = dashboardStore;

let {
  data: cars,
  pending,
  refresh,
  execute,
  error,
} = useFetchComposable({
  url: BASE_URL_GET_CARS,
});

console.log("cars.value", cars.value);
console.log("pending.value", pending.value);
console.log("refresh", refresh);
console.log("execute", execute);
console.error("error.value", error.value);

const tableColumnNames = ref([
  {
    id: 1,
    name: "№",
  },
  {
    id: 2,
    name: "Наименование",
  },
  { id: 3, name: "Состояние" },
  { id: 4, name: "Описание" },
  { id: 5, name: "Тип автомобиля" },
  { id: 6, name: "Действия" },
]);
</script>

<style scoped lang="scss">
/*1*/
</style>
