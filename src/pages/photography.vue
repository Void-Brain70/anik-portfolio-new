<template>
    <div class="bg-[#161616] pt-[60px]">
        <div class="container mx-auto my-auto">
          <CommonPageHeading textOne="My" textTwo="Photography" />
          <div class="pb-12 md:pb-12">
<!--            <PhotographyCard />-->
            <swiper-slide :images="photography"/>
          </div>
        </div>
    </div>
</template>

<script setup>
import PhotographyCard from '~/components/card/PhotographyCard.vue';
import SwiperSlide from "~/components/slideshow/SwiperSlide.vue";
const photography = [
  { image: "/photography/photo1.jpg" },
  { image: "/photography/photo2.jpg" },
  { image: "/photography/photo3.jpg" },
  { image: "/photography/photo4.jpg" },
  { image: "/photography/photo5.jpg" },
  { image: "/photography/photo6.jpg" },
  { image: "/photography/photo7.jpg" },
  { image: "/photography/photo8.jpg" },
  { image: "/photography/photo9.jpg" },
  { image: "/photography/photo10.jpg" },
  { image: "/photography/photo11.jpg" },
  { image: "/photography/photo12.jpg" },
  { image: "/photography/photo13.jpg" },
  { image: "/photography/photo14.jpg" }
]

</script>

<style lang="scss" scoped>

</style>