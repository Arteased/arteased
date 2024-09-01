<script lang="ts" setup>
const props = defineProps({
  product: { 
    type: 
    Object, 
    default: {} },
});
</script>

<template>
    <section>
    
        <img :src="props.product.image" />

        <h5>{{ props.product.name }}</h5>
        <p>Rp {{ props.product.price }}</p>
            
        <img src="" @click="$emit('removeCart', props.product.id)">delete icon

    </section>
</template>