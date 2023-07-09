<template>
  <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
    <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="tableColumnName in props.tableHeader"
            :key="tableColumnName.id"
            scope="col"
            class="px-6 py-4 font-medium text-gray-900"
          >
            {{ tableColumnName.name }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 border-t border-gray-100">
        <tr v-for="(item, index) in props.tableData" :key="item.id" class="hover:bg-gray-50">
          <th class="px-6 py-4">{{ index + 1 }}</th>
          <td class="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div class="relative h-10 w-10">
              <img
                class="h-full w-full rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
            </div>
            <div class="text-sm">
              <div class="font-medium text-gray-700">{{ item.attributes.Title }}</div>
              <div class="text-gray-400">модель</div>
            </div>
          </td>
          <td class="px-6 py-4">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
              в наличии
            </span>
          </td>
          <td class="px-6 py-4">{{ item.attributes.Description }}</td>
          <td class="px-6 py-4">
            <div class="flex gap-2">
              <span
                class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
              >
                Легковой
              </span>
              <span
                class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
              >
                Грузовой
              </span>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex justify-end gap-4">
              <button type="button" @click="editHandler(item.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 edit-button edit-button_hover_green"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  x-tooltip="tooltip"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </button>
              <button type="button" @click="deleteHandler(item.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 delete-button delete-button_hover_red"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  x-tooltip="tooltip"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <RenderSlot />
</template>

<script setup lang="ts">
import { ITableHeaderCar, ITableDataCar } from "~/types/interfaces";
import { useDashboardStore } from "~/stores";
import AppModal from "./AppModal.vue";
import { EStrapiFields } from "~/types/enums";
import { useFetchComposable } from "~/composables/use-fetch";
import { BASE_URL_GET_CARS } from "~/api";
import type { Cars } from "~/types";

interface Props {
  tableHeader: Array<ITableHeaderCar>;
  tableData: Array<ITableDataCar>;
}

const dashboardStore = useDashboardStore();
const { toggleModalOpen, getRenderModal, setRenderModal } = dashboardStore;
const props = defineProps<Props>();

const RenderSlot = () =>
  h(AppModal, null, {
    caption: () =>
      h(() => {
        const arrFind = props.tableData.find(({ id }) => id === Number(getRenderModal().captionSlot.id));
        if (arrFind) {
          const nonEditableEntities = [EStrapiFields.createdAt, EStrapiFields.updatedAt, EStrapiFields.publishedAt];
          const nonEditableFunc = (checkIncludes: string, ifParam: string, elseParam: string) =>
            !nonEditableEntities.includes(checkIncludes as EStrapiFields) ? ifParam : elseParam;
          return h(() => {
            const tags = [
              h(
                "div",
                {
                  class: "font-bold text-lg",
                },
                getRenderModal().captionSlot.text
              ),
            ];
            for (let [label, input] of Object.entries(arrFind.attributes)) {
              tags.push(
                h(
                  "label",
                  {
                    key: arrFind.id + "label",
                    for: "first_name",
                    class: "block mt-3 mb-1 text-sm font-medium text-gray-900 dark:text-gray-300",
                  },
                  label
                ),
                h("input", {
                  key: arrFind.id + "input",
                  type: "text",
                  id: "first_name",
                  class: [
                    "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                    nonEditableFunc(label, "", "cursor-not-allowed"),
                    nonEditableFunc(label, "bg-gray-50", "bg-gray-200"),
                  ],
                  value: input,
                  placeholder: "John",
                  required: "required",
                  [nonEditableFunc(label, "", "disabled")]: nonEditableFunc(label, "", "disabled"),
                })
              );
            }
            return h("div", { class: "w-full" }, tags);
          });
        }
      }),
    action: () =>
      h(
        "button",
        {
          type: "button",
          class: [
            "inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto",
            getRenderModal().actionSlot.classes,
          ],
          onClick: () => {
            // toggleModalOpen(false);
            anotherFunction();
            anotherFunction2();
          },
        },
        getRenderModal().actionSlot.text
      ),
    cancel: () =>
      h(
        "button",
        {
          type: "button",
          class: [
            "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
          ],
          onClick: () => {
            toggleModalOpen(false);
          },
        },
        getRenderModal().cancelSlot.text
      ),
  });

function editHandler(id: number) {
  console.log(`${id} editHandler`);
  setRenderModal("captionSlot.id", String(id));
  setRenderModal("captionSlot.text", `Изменение записи № ${String(id)}`);
  setRenderModal("actionSlot.classes", "bg-emerald-600 hover:bg-emerald-500");
  setRenderModal("actionSlot.text", "Изменить");
  setRenderModal("cancelSlot.text", "Отменить изменение");
  toggleModalOpen(true);
}

function deleteHandler(id: number) {
  console.log(`${id} deleteHandler`);
  setRenderModal("captionSlot.id", String(id));
  setRenderModal("captionSlot.text", `Удаление записи № ${String(id)}`);
  setRenderModal("actionSlot.classes", "bg-rose-600 hover:bg-rose-500");
  setRenderModal("actionSlot.text", "Удалить");
  setRenderModal("cancelSlot.text", "Отменить удаление");
  toggleModalOpen(true);
}

function anotherFunction() {
  console.log("click anotherFunction");
  let {
    data: cars,
    pending,
    error,
  } = useFetchComposable({
    url: BASE_URL_GET_CARS,
    immediate: false,
  });

  console.log("Машинки cars", cars.value);
}

async function anotherFunction2() {
  const { find, create } = useStrapi();
  // const response = await find('products');
  // console.log('response', response);
  await create("products", { name: "My restaurant" });
}
</script>

<style scoped lang="scss">
$wastebasket-color: rgb(253, 164, 175); // bg-rose-300      tilewind palette
$pen-color: rgb(110 231 183); // bg-emerald-300   tilewind palette
.delete-button {
  fill: $wastebasket-color;
  &_hover_red:hover {
    fill: scale-color($color: $wastebasket-color, $lightness: -20%);
  }
}

.edit-button {
  fill: $pen-color;
  &_hover_green:hover {
    fill: scale-color($color: $pen-color, $lightness: -20%);
  }
}
</style>
