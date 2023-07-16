<template>
  <div>sse.vue</div>
</template>

<script setup lang="ts">
onBeforeMount(() => {
  const eventSource = new EventSource("http://localhost:8989/sse");
  eventSource.onopen = () => {
    console.log("eventSource.onoopne Произошло открытие потока в dashboard.vue");
  };
  eventSource.onmessage = (event) => {
    //const data: IModule = JSON.parse(event.data);
    console.log("eventSource.onmessage -> event", event);
    eventSource.close();
  };
  eventSource.onerror = (event) => {
    console.error("error occured in EventSource...");
    console.log("eventSource.onerror -> event", event);
    eventSource.close();
  };
});
</script>
