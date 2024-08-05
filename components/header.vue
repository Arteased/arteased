<script lang="ts" setup>

// show tab start

const isShow = ref(false)

// show start end

// redirect auth start



// redirect auth end

</script>

<template>
    <header class="bg-[#252525] pb-5 pt-10 space-y-5 text-white lg:space-y-10 lg:pb-10 lg:pt-20">
        <div class="flex items-center justify-around">
            <NuxtLink to="/">
                <img src="/public/images\icons/arteasedfinallogo.png" class="h-9 md:h-[60px] xl:hidden"></img>
                <img src="/public/images\icons/arteasedlogofull.svg" class="hidden xl:inline-block xl:h-[60px]">
            </NuxtLink>

            <!-- search feature start -->

            <div class="bg-white flex justify-between rounded-lg w-[180px] h-8 px-2 md:w-[400px] md:h-10 xl:w-[600px]">
                <input type="search" placeholder="Search..." class="placeholder:text-xs placeholder:md:text-base text-black rounded-lg w-32 h-8 md:w-[360px] md:h-10 xl:w-[540px]">
                <img src="/images/icons/search.svg" class="w-4 md:w-5">
            </div>

            <!-- search feature end -->
            
            <!-- log in, register tab start -->

            <div class="relative xl:hidden">
                <img src="/images/icons/menubutton.svg" class="w-7 m-1 md:w-8 md:m-2" @click="isShow=!isShow"></img>
                <div class="bg-[#7A7A7A] absolute p-5 right-0" v-if="isShow">
                    <NuxtLink to="/login"><p class="text-base mb-2">Log In</p></NuxtLink>
                    <NuxtLink to="/register"><p class="text-base">Register</p></NuxtLink>
                </div>
                <div class="hidden">
                    <img src="/public/images/icons/cart.svg">
                    <div class="bg-[#7A7A7A] absolute p-5 space-y-2 right-0">
                        <!-- <p class="text-base mb-2" @click="isShow=!isShow">Notifications</p>
                        <ul class="bg-white absolute p-5 right-0" v-if="isShow">
                            <li></li>
                        </ul> -->
                        <p class="text-base" @click="isShow=!isShow">Cart</p>
                        <!-- <NuxtLink to="/message"><p class="text-base mb-2">Message</p></NuxtLink>
                        <NuxtLink to="/personalinfo"><p class="text-base">Personal Informaitons</p></NuxtLink> -->
                        <NuxtLink to="/artworkcollections"><p class="text-base mb-2">Artwork Collection</p></NuxtLink>
                        <!-- <NuxtLink to="/history"><p class="text-base">History & Performance</p></NuxtLink> -->
                        <p class="text-base">Log Out</p>
                    </div>
                </div>
            </div>

            <div class="hidden xl:flex xl:gap-5" >
                <NuxtLink to="/login"><p class="text-2xl">Log In</p></NuxtLink>
                <NuxtLink to="/register"><p class="text-2xl">Register</p></NuxtLink>
            </div>
        </div>

        <!-- log in, register tab end -->

        <!-- nav start -->

        <nav class="space-y-5">
            <!-- <div class="flex gap-5 justify-center">
                <NuxtLink to="/"><p class="text-xs">Contact</p></NuxtLink>
                <NuxtLink to="/"><p class="text-xs">Article</p></NuxtLink>
                <NuxtLink to="/"><p class="text-xs">Learn</p></NuxtLink>
                <NuxtLink to="/"><p class="text-xs">Events</p></NuxtLink>
            </div> -->
            <div class="flex gap-5 justify-center">
                <!-- <NuxtLink to="/"><p class="text-xs">Artist</p></NuxtLink>
                <NuxtLink to="/"><p class="text-xs">Store</p></NuxtLink> -->
                <NuxtLink to="/explore"><p class="text-xs md:text-base">Explore</p></NuxtLink>
                <NuxtLink to="/"><p class="text-xs md:text-base">About Us</p></NuxtLink>
            </div>
        </nav>

        <!-- nav end -->

    </header>
</template>