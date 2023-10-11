<template>
  <div class="bg-[#161616] pt-[120px]">
    <div class="container mx-auto my-auto">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex items-center  px-8 order-2 md:order-1">
          <div class="rounded-3xl bg-blue-500 shadow-2xl shadow-blue-500/50 hover:scale-105 transition duration-700">
            <img class="rounded-3xl" src="../../public/me/aboutMe.jpg"/>
          </div>
        </div>
        <div class="flex-col items-center md:pl-20 py-4 order-1 md:order-2">
          <div>
            <p class="font-['Young_Serif' 'serif'] font-[600] text-[16px] text-center md:text-left md:text-[22px] text-transparent  bg-clip-text  bg-gradient-to-r from-sky-500 to-indigo-500">
              VISIT MY PORTFOLIO & HIRE ME</p>
            <p class="font-['Young_Serif' 'serif'] font-[600] text-[28px] md:text-[42px] text-center md:text-left text-white pb-4 md:pb-8">
              About <span class="text-transparent  bg-clip-text  bg-gradient-to-r from-sky-500 to-indigo-500">Me</span>
            </p>
            <p class="font-['Young_Serif' 'serif'] font-[600] text-[18px] md:text-[24px] text-center md:text-left text-white pb-6">
              I am web developer, I create and work with different kind of website or project such as Portfolio
              website, LSM etc. </p>
            <div class="text-center md:text-left">
              <NuxtLink to="/about-me">
                <button
                    class="font-['Young_Serif' 'serif'] font-[600] text-[14px] md:text-[18px] capitalize text-[#468dfc] hover:text-white border-2 border-[#468dfc] hover:bg-gradient-to-r from-sky-500 to-indigo-500 transition duration-500 p-2 md:px-4 rounded-full">
                  Read More
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>