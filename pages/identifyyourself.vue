<template>
    <div class="text-center py-10 space-y-10 md:py-20">
        <div class="space-y-2 lg:space-y-5">
            <h4 class="text-2xl font-bold md:text-[32px] lg:text-[40px]">Identify Yourself</h4>
            <h6 class="text-xs lg:text-2xl">You can pick more than one</h6>
        </div>

        <div class="p-5 space-y-5 lg:space-y-10">
            <div class="flex gap-2 items-center mx-auto max-w-[147px] lg:gap-5 lg:max-w-[200px]">
                <input type="checkbox" class="w-5 h-5 lg:w-8 lg:h-8">
                <h6 class="text-base lg:text-2xl">Artist</h6>
            </div>
            <div class="flex gap-2 items-center mx-auto max-w-[147px] lg:gap-5 lg:max-w-[200px]">
                <input type="checkbox" class="w-5 h-5 lg:w-8 lg:h-8">
                <h6 class="text-base lg:text-2xl">Art Collector</h6>
            </div>
            <div class="flex gap-2 items-center mx-auto max-w-[147px] lg:gap-5 lg:max-w-[200px]">
                <input type="checkbox" class="w-5 h-5 lg:w-8 lg:h-8">
                <h6 class="text-base lg:text-2xl">Art Enthusiast</h6>
            </div>
            <div class="flex gap-2 items-center mx-auto max-w-[147px] lg:gap-5 lg:max-w-[200px]">
                <input type="checkbox" class="w-5 h-5 lg:w-8 lg:h-8">
                <h6 class="text-base lg:text-2xl">Curator</h6>
            </div>
            <div class="flex gap-2 items-center mx-auto max-w-[147px] lg:gap-5 lg:max-w-[200px]">
                <input type="checkbox" class="w-5 h-5 lg:w-8 lg:h-8">
                <h6 class="text-base lg:text-2xl">Art Gallerist</h6>
            </div>
        </div>

        <div>
            <NuxtLink to="/successaccount"><button class="bg-mystic rounded-lg h-10 w-[120px] font-bold text-xs md:h-[60px] md:w-[200px] md:text-base text-white">Next</button></NuxtLink>
        </div>

        <div>
            <NuxtLink to="/successaccount"><button class="bg-mystic font-bold h-[40px] rounded-lg text-white text-xs w-[160px] md:h-[60px] md:text-xl md:w-60">Finish</button></NuxtLink>
        </div>

    </div>
</template>