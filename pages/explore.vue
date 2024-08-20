<script lang="ts" setup>
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

	<!-- dropdown start -->
	<NuxtLink to="/category/create"></NuxtLink>
	<Dropdown @selected-category="selectedCategory = $event" />

	<section>
		<NuxtLink to="/fulldetailartwork">
			<div class="flex flex-wrap gap-10 p-10">
				<template v-for="(item, index) in allProducts" :key="index">
					<CardsCardArtwork :product="item"/>
				</template>
			</div>
		</NuxtLink>
	</section>

</template>