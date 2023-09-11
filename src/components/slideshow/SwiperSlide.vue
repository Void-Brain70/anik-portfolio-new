<template>
  <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :breakpoints="breakpoints"
      :scrollbar="{ hide: true }"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item , i) in images" :key="i">
      <div class="mx-auto">
        <slideimage-card :item="item"/>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideimageCard from "~/components/card/SlideimageCard.vue";

// Import Swiper styles
export default {
  props:{
    images:{ type: Array, default: []  },
    breakpoints: {
      type: Object,
      default: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    },
  },
  components: {
    SlideimageCard,
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const images = ref(props.images);
    const breakpoints = ref(props.breakpoints);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, Autoplay],
    };
  },
};
</script>