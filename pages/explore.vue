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

	<!-- <NuxtLink to="/category/create"></NuxtLink>
	<Dropdown @selected-category="selectedCategory = $event" /> -->

	<!-- dropdown end -->

	<section>
		<NuxtLink to="/fulldetailartwork">
			<div class="flex flex-wrap justify-center space-x-5 space-y-5 p-5 md:space-x-10 md:space-y-10 md:p-10">
				<template v-for="(item, index) in allProducts" :key="index">
					<CardsCardArtwork :product="item"/>
				</template>
			</div>
		</NuxtLink>
	</section>

</template>