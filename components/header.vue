<script lang="ts" setup>

const isShow = ref(false)

</script>

<template>
    <header class="pt-10 pb-5 md:py-10 bg-[#252525] text-white">
        <div class="flex justify-around items-center">
            <NuxtLink to="/"><img src="/public/images\icons/arteasedfinallogo.png" class="h-9 md:h-[60px]"></img></NuxtLink>
            <div class="bg-white flex justify-between rounded-lg w-[180px] h-8 px-2 md:w-[400px] md:h-10">
                <input type="search" placeholder="Insert keyword" class="text-black rounded-lg w-32 h-8 md:w-[360px] md:h-10">
                <img src="/images/icons/search.svg" class="w-4 md:w-5">
            </div>
            <div class="relative">
                <img src="/images/icons/phonemenubutton.svg" class="w-7 m-1 md:w-8 md:m-2" @click="isShow=!isShow"></img>
                <div class="bg-[#7A7A7A] absolute p-5 right-0" v-if="isShow">
                    <NuxtLink to="/login"><p class="text-base mb-2">Log In</p></NuxtLink>
                    <NuxtLink to="/register"><p class="text-base">Register</p></NuxtLink>
                </div>
            </div>
        </div>
        <!-- <nav class="text-center flex justify-center gap-5 md:mt-10">
            <NuxtLink to="/explore">Explore</NuxtLink>
            <NuxtLink to="/">About Us</NuxtLink>
            <NuxtLink to="/">Contact</NuxtLink>
        </nav> -->
    </header>
</template>