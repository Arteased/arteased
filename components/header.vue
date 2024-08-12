<script lang="ts" setup>

// show tab start


const isShow = ref(false)

const checkScreenSize = () => {
  isShow.value = window.innerWidth >= 1024
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const isShow2 = ref(false)

const checkScreenSize2 = () => {
  isShow2.value = window.innerWidth < 1024 
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

// show tab end

// logout feature start

// const logOut = ()

// logout feature end

</script>

<template>

    <!-- navbar start -->

    <header class="bg-[#252525] pb-5 pt-10 space-y-5 text-white lg:space-y-10 lg:pb-10 lg:pt-20">

        <!-- navtop start -->

        <div class="flex items-center justify-around">

            <!-- logo start -->

            <NuxtLink to="/">
                <img src="/public/images\icons/arteasedfinallogo.png" class="h-9 md:h-[60px] xl:hidden">
                <img src="/public/images\icons/arteasedlogofull.svg" class="hidden xl:inline xl:h-[60px]">
            </NuxtLink>

            <!-- logo end -->

            <!-- search feature start -->

            <div class="bg-white flex justify-between rounded-lg w-[180px] h-8 px-2 md:w-[400px] md:h-10 xl:w-[600px]">
                <input type="search" placeholder="Search..." class="placeholder:text-xs placeholder:md:text-base text-black rounded-lg w-32 h-8 md:w-[360px] md:h-10 xl:w-[540px]">
                <img src="/images/icons/search.svg" class="w-4 md:w-5">
            </div>

            <!-- search feature end -->
            
            <!-- login / register tab start -->

            <div class="flex gap-5 items-center">

                <!-- <NuxtLink to="/cart"><img src="/public/images/icons/cart.svg"></NuxtLink>

                <div class="">
                    <img src="/images/icons/menubutton.svg" class="p-2 w-[48px]" @click="isShow=!isShow">
                    <div class="absolute bg-[#7A7A7A] flex flex-col gap-4 p-5" v-if="isShow">
                        <NuxtLink><p class="text-base mb-2">Notifications</p></NuxtLink>
                        <NuxtLink to="/message"><p class="">Message</p></NuxtLink>
                        <NuxtLink to="/personalinfo"><p class="">Personal Informations</p></NuxtLink>
                        <NuxtLink to="/artworkcollections"><p class="">Artwork Collection</p></NuxtLink>
                        <NuxtLink to="/history"><p class="">History & Performance</p></NuxtLink>
                        <p class="" @click="logOut">Log Out</p>
                    </div>
                </div> -->

                <NuxtLink to="/login_register"><img src="/images/icons/loginRegisterIcon.svg" class="w-10" v-if="!isShow2"></NuxtLink>

                <NuxtLink to="/login_register"><p class="text-2xl" v-if="isShow">Login / Register</p></NuxtLink>

            </div>

            <!-- log in / register tab end -->

        </div>

        <!-- navtop end -->

        <!-- navbot start -->

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

        <!-- navbot end -->

    </header>

    <!-- navbar end -->

</template>