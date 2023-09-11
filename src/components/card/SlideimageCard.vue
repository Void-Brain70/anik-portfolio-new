<template>
  <div>
    <div class="flex justify-center px-2">
        <img class="h-[200px] md:h-[500px]" :src="item.image" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
</style>