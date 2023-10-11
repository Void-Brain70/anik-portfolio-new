<template>
   <section class="body">
     <div class="pt-[50px]">
       <div class="container mx-auto my-auto">
         <CommonPageHeading textOne="My" textTwo="Blogs" />
       </div>
       <div class="container mx-auto my-auto py-12">
         <div class="py-8">
           <blog-card />
         </div>
          <skill-card/>
         <CircularBar/>
       </div>
     </div>
   </section>
</template>
<script setup>
import BlogCard from "~/components/card/BlogCard.vue";
import SwiperSlide from "~/components/slideshow/SwiperSlide.vue";
import CircularBar from "~/components/bar/CircularBar.vue";
import SampleCard from "~/components/card/SampleCard.vue";
import SkillCard from "~/components/card/SkillCard.vue";
</script>

<style scoped>
.body{
  margin: 0;
  padding: 0;
  background-color: #2d3436;
}
</style>