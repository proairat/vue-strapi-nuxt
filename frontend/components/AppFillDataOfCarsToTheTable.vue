<template>
  <template v-if="!error && !pending">
    <AppTable :table-header="tableColumnNames" :table-data="cars.data" />
    <pre>{{ cars.data }}</pre>
  </template>
  <template v-if="error">
    <AlertsAppAlertError>{{ error }}</AlertsAppAlertError>
  </template>
</template>

<script setup lang="ts">
import { useFetchComposable } from "~/composables/use-fetch";
import { BASE_URL_GET_CARS } from "~/api";

let {
  data: cars,
  pending,
  error,
} = useFetchComposable({
  url: BASE_URL_GET_CARS,
});

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
