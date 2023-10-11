<template>
  <div class="bg-[#161616] h-full">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 justify-center">
        <div data-aos="fade-right"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center">
          <div class="mt-10 md:mt-36 px-4 md:px-0">
            <div class="text-center md:text-left">
                    <span class="text-white text-[20px] md:text-[36px] font-[400] tracking-[8px] font-['mono']">Hello,
                        It's Me</span><br>
              <span
                  class="py-8 md:py-0 text-white text-[32px] md:text-[56px] font-[600] tracking-[15px]">Anik Das</span><br>
              <p
                  class="text-[#567CFF] text-[16px] md:text-[40px] tracking-[5px] md:tracking-[10px] font-[500] design">
                And I'm a Web Developer...</p>
              <p class="text-white text-[16px] text-justify  pt-2 md:pt-0 md:text-[24px] font-['Young_Serif' 'serif'] font-[500]">
                As I am a mid-level in the field of web development. And coming with well-honed skills in computer
                science in addition to excellent communication skills.
              </p>
            </div>
            <div class="flex justify-center md:justify-start  pt-8">
              <div v-for="(item, i) in link" :key="i + 1">
                <a :href="item.link" target="_blank">
                  <img class="h-[40px] md:h-full hover:scale-110  transform transition duration-500"
                       :src="`/icon/image-${i + 1}.svg`" alt="social link"/>
                </a>
              </div>
            </div>
            <div class="pt-8 text-center md:text-left">
              <NuxtLink to="/contact">
                <button
                    class="font-['Young_Serif' 'serif'] font-[600] text-[14px] md:text-[18px] capitalize text-[#468dfc] hover:text-white border-2 border-[#468dfc] hover:bg-gradient-to-r from-sky-500 to-indigo-500 p-2 md:px-6 py-2 rounded-full">
                  Contact
                  me
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
          <div class="justify-center md:justify-end flex items-center mt-14 md:mt-20">
            <div class="rounded-full bg-blue-500 shadow-2xl shadow-blue-500/50">
              <img class="rounded-full h-[300px] md:h-[600px] border-2 border-[#567CFF]" src="../../public/me/Me.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const link = [
  {
    level: 'Github',
    image: "0",
    link: "https://github.com/Void-Brain70",
  },
  {
    level: 'Facebook',
    image: "1",
    link: "https://www.facebook.com/anikchandradas.abir.9/",
  },
  {
    level: 'Linkedin',
    image: "2",
    link: "https://www.linkedin.com/in/anik-chandra-a5a62022a/",
  },
  {
    level: 'Whatsapp',
    image: "3",
    link: "/",
  },
  {
    level: 'Instagram',
    image: "4",
    link: "https://www.instagram.com/dasssanik/",
  },
]
</script>

<style scoped>   .design {
  border-right: .15em solid #567CFF;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 5.5s steps(40, end) infinite,
  blink-caret .75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: #567CFF;
  }
}
</style>