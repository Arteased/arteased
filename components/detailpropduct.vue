<script setup lang="ts">
const props = defineProps({
    product: {
        type:
        Object,
        default: {},
    }
})
</script>

<template>

    <div class="p-10 text-base lg:text-2xl">

        <div class="flex">

            <!-- image start -->

            <div>
                <img :src="props.product.image" class="w-[200px] md:w-[400px]"/>
                <img src="" alt="">
                <img src="" alt="">
            </div>

            <!-- image end -->

            <div class="bg-[#D9D9D9] flex flex-col font-bold gap-10 p-10">
                <span>{{ props.product.price }}</span>

                <button class="bg-[#174cd3] text-white xl:h-[60px] xl:w-[280px]">Add to Cart</button>

                <!-- <button>Make An Offer</button> -->
            </div>
        </div>

        <div class="p-10 space-y-10">
            <div class="space-y-2">
                <h4>{{ props.product.title }}</h4>
                <h6>{{ props.product.series }}</h6>
            </div>

            <div>
                <h6>{{ props.product.artist}}</h6>
                <h6>Rp{{ props.product.year }}</h6>
            </div>

            <div>
                <h6>{{ props.product.medium }}</h6>
                <h6>{{ props.product.dimension }}</h6>
                <h6>{{ props.product.artstyle }}</h6>
            </div>

            <!-- <div class="flex">
                <button>Likes</button>
                <button>Share</button>
            </div> -->

            <h6>100% Money Back Guarantee</h6>
        </div>

        <div>
            <h4 class="font-bold">About The Art</h4>
            <span>Artwork Process</span><span>{{ props.product.artworkprocess }}</span>
            <p>{{ props.product.processdetail }}</p>
        </div>
    </div>

  </template>