<script lang="ts" setup>
const props = defineProps({
    product: {
        type:
        Object,
        default: {},
    }
});
</script>

<template>
    <section class="bg-white text-black max-w-[140px]">
        <img :src="props.product.image" class="w-[140px]">
        <div>
            <NuxtLink :to="`/products/${props.product.id}`">
            <h3>{{ props.product.name }}</h3>
            </NuxtLink>
            <div class="">
                <span class="font-bold">{{ props.product.series }}</span>
                <div>
                    <span>{{ props.product.likes }}</span>
                </div>
                <span>{{ props.product.price }}</span>
                <span>{{ props.product.dimension }}</span>
                <span>{{ props.product.years }}</span>
                <NuxtLink to="">
                    <span class="font-bold">{{ props.product.artist }}</span>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>