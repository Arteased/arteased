<script setup lang="ts">
const supabase = useSupabaseClient()
const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error: unknown) {
    const e = error as Error

    alert(e.message)
  } finally {
    loading.value = false
  }
}

</script>

<template>
    <div class="text-center bg-white text-black space-y-10 py-10 md:py-20">
        <h4 class="text-2xl font-bold md:text-[32px] lg:text-[40px]">Log In / Register</h4>

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

        <form class="space-y-5" @submit.prevent="handleLogin">
            <div class="space-y-2">
                <label for="email" class="text-base block lg:text-2xl">Email</label>
                <input type="email" class="border-[1px] border-black h-8 pl-2 w-[280px] md:w-[400px] md:h-10" v-model="email" required>
            </div>

            <div>
              <input
                type="submit"
                class="button block mx-auto w-max"
                :value="loading ? 'Loading' : 'Send magic link'"
                :disabled="loading"
              />
            </div>
            <!-- <div class="space-y-2 w-[280px] mx-auto">
                <label for="password">Password</label>
                <input type="password" class="h-8 w-[280px] border-[1px] border-black md:w-[400px] md:h-10" v-model="password" required>
                <div class="flex justify-end gap-2">
                    <input type="checkbox" class="w-5 h-5">
                    <label for="">Show Password</label>
                </div>
            </div> -->

            <button type="submit" class="bg-mystic h-[40px] rounded-xl text-white w-[180px]">Register</button>
        </form>
        
        <div>
            <p class="text-base">You don't have an account?</p>
            <NuxtLink to="/register"><p class="text-base font-bold">Register here</p></NuxtLink>
        </div>
    </div>
  </template>