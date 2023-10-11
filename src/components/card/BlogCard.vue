<template>
  <div>
    <circle-progress :percent="percent" class="text-white"
                     :is-shadow="true"
                     :shadow="{
        inset: true,
        vertical: 10,
        horizontal: -8,
        blur: 4,
        opacity: .4,
        color:'#288feb'
    }"
                     :is-bg-shadow="true"
                     :bg-shadow="{
        inset: true,
        vertical: 2,
        horizontal: 2,
        blur: 4,
        opacity: .4,
        color: 'red'
    }"
    />
  </div>
</template>

<script setup>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
const percent = ref(70);

onMounted(() => {
  setInterval(() => {
    if (percent.value === 25) {
      percent.value = 75;
    } else {
      percent.value = 25;
    }
  }, 1000);
});

</script>

<style scoped>
a {
  color: #2B2B2B;
}
</style>