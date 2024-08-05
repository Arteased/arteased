<script lang="ts" setup>
import { ref } from 'vue'
import { supabase } from '~/plugins/supabase'

const email = ref('')
const password = ref('')

const register = async () => {
    const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value
    })

    if (error) {
        alert(error.message)
    } else {
    // this.$router.push('/dashboard')

        alert('success');
    }
}
</script>

<template>
    <div class="text-center bg-white text-black space-y-10 py-10 md:py-20">
        <h3 class="text-2xl font-bold md:text-[32px] lg:text-[40px]">Register</h3>

        <!-- <div class="space-y-2">
            <div class="flex justify-center gap-2">
                <button class="w-[120px] h-10 bg-[#237ED2] rounded-xl text-white flex p-2 gap-3 items-center">
                    <img src="/public/images/icons/fb.svg" class="w-6 h-6">
                    <p class="text-xs">Facebook</p>
                </button>
                <button class="w-[120px] h-10 border-black border-[1px] rounded-xl flex p-2 gap-3 items-center">
                    <img src="/public/images/icons/ig.svg" class="w-6 h-6">
                    <p class="text-xs">Instagram</p>
                </button>
            </div>
            <div class="flex justify-center gap-2">
                <button class="w-[120px] h-10 bg-[#F0AE4A] rounded-xl text-white flex p-2 gap-3 items-center">
                    <img src="/public/images/icons/google.svg" class="w-6 h-6">
                    <p class="text-xs">Google</p>
                </button>
                <button class="w-[120px] h-10 bg-[#2590DE] rounded-xl text-white flex p-2 gap-3 items-center">
                    <img src="/public/images/icons/x.svg" class="w-6 h-6">
                    <p class="text-xs">X</p>
                </button>
            </div>
        </div>

        <h5 class="text-base lg:text-2xl">OR</h5> -->

        <form class="space-y-5">
            <!-- <div class="space-y-2">
                <label class="text-base block lg:text-2xl">First Name</label>
                <input type="text" class="h-8 w-[280px] border-[1px] border-black md:w-[400px] md:h-10" v-model="firstName" required>
            </div> -->

            <!-- <div>
                <label class="text-base block lg:text-2xl">Last Name</label>
                <input type="text"class="h-8 w-[280px] border-[1px] border-black md:w-[400px] md:h-10" v-model="lastName">
            </div>
             -->
            <div>
                <label for="email" class="text-base block lg:text-2xl">Email</label>
                <input type="email" class="h-8 w-[280px] border-[1px] border-black md:w-[400px] md:h-10" v-model="email" required>
            </div>

            <label for="">Password</label>
            <input type="password" v-model="password">

            <input type="checkbox">
            <label for=""></label>

            <label for="">Password Confirmation</label>
            <input type="password">

            <input type="checkbox">
            <label for="">Show Password</label>
        </form>

        <p class="text-base">Are you already have an account?</p>
        <NuxtLink to="/login"><p class="text-base font-bold mb-10">Log In here</p></NuxtLink>


        <p class="text-base w-[280px] md:w-[400px] mx-auto">By registering, you agree to our Terms of Service and Privacy Policy.<br>This site is protected by <NuxtLink to="/rules"><strong>ArteasedPrivacy Policy</strong></NuxtLink> and <NuxtLink to="/rules"><strong>Terms of Service apply.</strong></NuxtLink></p>

        <button @click="register">Register</button>
    </div>
</template>