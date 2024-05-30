<template>
    <div class="text-center bg-white text-black space-y-10 py-10">
        <h3 class="text-base font-bold">Register</h3>
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
        <div class="space-y-5 w-[280px] m-auto">
            <div class="flex flex-col justify-start">
                <label>First Name</label>
                <input type="text" class="border-black border-[1px]" required>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text"class="border-black border-[1px]">
            </div>
            <div>
                <label>Email</label>
                <input type="email" class="border-black border-[1px]" required>
            </div>

            <!-- <label for="">Password</label>
            <input type="password">

            <input type="checkbox">
            <label for=""></label>

            <label for="">Password Confirmation</label>
            <input type="password">

            <input type="checkbox">
            <label for="">Show Password</label> -->
        </div>
        <div>
            <button class="bg-mystic rounded-lg h-[40px] w-[160px] font-bold text-xs md:h-[60px] md:w-60 md:text-xl text-white">Next</button>
        </div>
    </div>
</template>