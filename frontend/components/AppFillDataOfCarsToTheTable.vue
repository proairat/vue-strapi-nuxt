<template>
  <!--
  <template v-if="pending">Получение данных...</template>
  <template v-else-if="error">
    <AlertsAppAlertError>{{ error }}</AlertsAppAlertError>
  </template>
  <template v-else>
    <AppTable :table-header="tableColumnNames" :table-data="cars.data" />
    <pre>{{ cars.data }}</pre>
    1
  </template>-->
  <div>Получение данных?</div>
</template>

<script setup lang="ts">
import { useFetchComposable } from "~/composables/use-fetch";
import { BASE_URL_GET_CARS } from "~/api";
import { StrapiMethods } from "~/classes/CStrapi";
import { CHTTPMethods } from "~/classes";

const dp = new CHTTPMethods();
let { data: cars, pending, error } = await dp.get(BASE_URL_GET_CARS);

//let { data: cars, pending, error } = StrapiMethods.collectionGetList(BASE_URL_GET_CARS);
//console.log('pending', pending.value, 'data', cars.value);

/*
let { data: cars, pending, error } = useFetchComposable({
  url: BASE_URL_GET_CARS,
});
*/

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
