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
  <div class="text-center bg-white text-black space-y-10 py-10 md:space-y-20 md:py-20">
    <h4 class="text-2xl font-bold md:text-[32px] lg:text-[40px]">Log In / Register</h4>

    <!-- start social media o auh -->

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
        </div> -->

        <!-- end social media o auth -->

        <!-- <h5 class="text-base lg:text-2xl">OR</h5> -->

        <form class="space-y-10" @submit.prevent="handleLogin">
            <div class="space-y-2">
                <label for="email" class="text-base block lg:text-2xl">Email</label>
                <input type="email" class="border-[1px] border-black h-8 pl-2 w-[240px] md:w-[400px] md:h-10" v-model="email" required>
            </div>

            <div>
              <input
                type="submit"
                class="button bg-mystic h-[40px] rounded-xl text-white w-[180px]"
                :value="loading ? 'Loading' : 'Send magic link'"
                :disabled="loading"
              />
            </div>

        </form>

        <div class="mx-auto text-left w-[240px] md:w-[400px]">
            <p class="text-[12px] md:text-base">By registering, you agree to our Terms of Service and Privacy Policy.</p>
        </div>

      <div class="mx-auto text-left w-[240px] md:w-[400px]">
        <p class="text-[12px] md:text-base">This site is protected by <NuxtLink to="/rules"><strong>ArteasedPrivacy Policy</strong></NuxtLink> and <NuxtLink to="/rules"><strong>Terms of Service apply.</strong></NuxtLink></p>
      </div>
        
  </div>
</template>