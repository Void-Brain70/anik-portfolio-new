<template>
    <div class="">
        <!-- <CommonSkillSection/> -->
        <div class="bg-[#161616]">
            <div>
                <div class="container mx-auto my-auto">
                    <div class="flex justify-center">
                        <h3 class="text-center pt-8 text-[20px] md:text-[24px] border-b-4 border-[#5b6cf1] max-w-fit text-transparent  bg-clip-text  bg-gradient-to-r from-sky-500 to-indigo-500">My Programming
                            Language Skill List</h3>
                    </div>
                    <div class="flex flex-wrap justify-evenly items-center py-12 px-2">
                        <div v-for="(item, i) in language" :key="i">
                          <img class="h-[60px] md:h-[100px]" :src="item.image" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="container mx-auto my-auto">
                    <div class="flex justify-center">
                        <h3 class="text-center pt-8 text-[20px] md:text-[24px] border-b-4 border-[#5b6cf1] max-w-fit text-transparent  bg-clip-text  bg-gradient-to-r from-sky-500 to-indigo-500">My Frontend Framework
                            Skill List</h3>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-20 py-12">
                      <div v-for="(item, i) in fronted" :key="i">
                        <img class="h-[60px] md:h-[100px]" :src="item.image" />
                      </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="container mx-auto my-auto">
                    <div class="flex justify-center">
                        <h3 class="text-center pt-8 text-[20px] md:text-[24px] border-b-4 border-[#5b6cf1] max-w-fit text-transparent  bg-clip-text  bg-gradient-to-r from-sky-500 to-indigo-500">My Backend Framework
                            Skill List</h3>
                    </div>
                    <div class="flex flex-wrap items-center justify-evenly py-12 px-2">
                      <div v-for="(item, i) in backend" :key="i">
                        <img class="h-[60px] md:h-[100px]" :src="item.image" />
                      </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="container mx-auto my-auto">
                    <div class="flex justify-center">
                        <h3 class="text-center pt-8 text-[20px] md:text-[24px] border-b-4 border-[#5b6cf1] max-w-fit text-transparent  bg-clip-text  bg-gradient-to-r from-sky-500 to-indigo-500">My Design
                            Skill List</h3>
                    </div>
                    <div class="flex flex-wrap items-center justify-evenly py-16 px-2">
                      <div v-for="(item, i) in design" :key="i">
                        <img class="h-[60px] md:h-[100px]" :src="item.image" />
                      </div>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>

<script setup>
const language = [
    { name: "JavaScript", image: "/skill/js.png" },
    { name: "Python", image: "/skill/python.png"},
    { name: "C", image: "/skill/c.png"},
    { name: "C++", image: "/skill/c.png"},
    { name: "PHP", image: "/skill/php.png" }
]
const fronted = [
  { name: "Vue", image: "/skill/vue.png" },
  { name: "Nuxt", image: "/skill/nuxt.png" },
]
const backend = [
  { name: "Laravel", image: "/skill/laravel.png" },
]
const design = [
  { name: "HTML", image: "/skill/html.png" },
  { name: "CSS", image: "/skill/css.png" },
  { name: "Tailwind", image: "/skill/tailwind.png" },
  { name: "Vuetify", image: "/skill/vuetify.png" },
  { name: "Bootstrap", image: "/skill/bootstrap.png" },
  { name: "Sass", image: "/skill/sass.png" },
]
</script>