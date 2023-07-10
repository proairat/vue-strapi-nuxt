<template>
  <template v-if="pending">Получение данных...</template>
  <template v-else-if="error">
    <AlertsAppAlertError>{{ error }}</AlertsAppAlertError>
  </template>
  <template v-else>
    <button type="button" @click="updateData">Обновить данные</button>
    <AppTable :table-header="tableColumnNames" :table-data="cars.data" />
    <pre>{{ cars.data }}</pre>
  </template>
</template>

<script setup lang="ts">
import { EHttpMethods } from "~/types/enums";
import { BASE_URL_PRODUCTS } from "~/api";
import { StrapiMethods } from "~/classes/CStrapi";

let {
  data: cars,
  pending,
  error,
} = await StrapiMethods.collectionGetList({
  url: BASE_URL_PRODUCTS,
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

async function updateData() {
  console.log("updateData");
  await StrapiMethods.collectionUpdateEntry({
    url: BASE_URL_PRODUCTS,
    urlVar: "/1",
    method: EHttpMethods.PUT,
    body: {
      data: {
        Title: "Hello!!",
      },
    },
  });
}
</script>

<style scoped lang="scss">
/*1*/
</style>
