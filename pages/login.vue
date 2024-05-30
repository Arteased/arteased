<template>
    <div class="text-center bg-white text-black space-y-10 py-10">
        <h3 class="text-2xl font-bold">Log In</h3>
        <div class="space-y-2">
            <div class="flex justify-center gap-2">
                <button class="w-[120px] h-10 bg-[#237ED2] rounded-xl text-white flex p-2 gap-3">
                    <img src="/public/images/icons/fb.svg" class="w-6 h-6">
                    <p>Facebook</p>
                </button>
                <button class="w-[120px] h-10 border-black border-[1px] rounded-xl flex p-2 gap-3">
                    <img src="/public/images/icons/ig.svg" class="w-6 h-6">
                    <p>Instagram</p>
                </button>
            </div>
            <div class="flex justify-center gap-2">
                <button class="w-[120px] h-10 bg-[#F0AE4A] rounded-xl text-white flex p-2 gap-3">
                    <img src="/public/images/icons/google.svg" class="w-6 h-6">
                    <p>Google</p>
                </button>
                <button class="w-[120px] h-10 bg-[#2590DE] rounded-xl text-white flex p-2 gap-3">
                    <img src="/public/images/icons/x.svg" class="w-6 h-6">
                    <p>X</p>
                </button>
            </div>
        </div>
        <h5>OR</h5>
        <div class="">
            <label for="" class="text-base">Email</label>
            <input type="email" class="h-8 w-[280px] border-[1px] border-black">
            <!-- <label for="">Password</label>
            <input type="password">
            <div class="flex">
                <input type="checkbox">
                <label for="">Show Password</label>
            </div> -->
        </div>
        <p class="text-base">Are you already have an account?</p>
        <NuxtLink to="/register"><p class="text-base font-bold">Register here</p></NuxtLink>
        <button class="bg-mystic rounded-lg h-10 w-[160px] font-bold text-xs md:h-[60px] md:w-60 md:text-xl text-white">Finish</button>
    </div>
</template>

    