<script setup lang="ts">
import { products } from '~/composables/constants/product';

const selectedCategory = ref(""); 
const allProducts = computed(() => {
	if (selectedCategory.value) {
		return products.filter((item) => item.category === selectedCategory.value);
	}
	return products;
});
</script>

<template>
    <section>
        <div>
            <template v-for="(item, index) in allProducts" :key="index">
                <detailproduct :product="item"/>
            </template>
        </div>
    </section>
</template>