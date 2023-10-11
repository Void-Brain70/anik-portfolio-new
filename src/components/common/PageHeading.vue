<template>
  <div class="pb-12 md:pb-20">
    <div class="top-bar"></div>
    <div class="py-1">
      <h1 class="text-[white] font-['Young_Serif' 'serif'] font-[600]  text-center text-[24px] mx-20 md:mx-0 md:text-[34px] ">{{ textOne }} <span
          class="text-transparent  bg-clip-text  bg-gradient-to-r from-sky-500 to-indigo-500">{{ textTwo }}</span>
      </h1>
    </div>
    <div class="bottom-bar"></div>
  </div>
</template>

<script setup>

const props = defineProps({
  textOne: String,
  textTwo: String,
})
</script>

<style scoped>
.text-border {
  border-bottom: 4px solid #567CFF;
}
.top-bar {
  height: 4px;
  width: 100px;
  background: #567CFF;
  position: absolute;
  left: 50%;
  transform: translateX(-100%);
}
.bottom-bar {
  height: 4px;
  width: 100px;
  background: #567CFF;
  position: absolute;
  right: 50%;
  transform: translateX(100%);
}
</style>