<script lang="ts" setup>
import { products } from "~/composables/constants/product"; 
import { Products } from "/types/product";

const route = useRoute();
const id = typeof route.params.id === 'string' ? parseInt(route.params.id) : null;
const product = ref(products.find((item: Products) => item.id === id));
</script>

<template>
	<detailproduct :product="product"/>
</template>
