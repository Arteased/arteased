<script lang="ts" setup>
import { products } from '~/composables/constants/product';

const allProducts = ref(products);
</script>

<template>
	<section>
		<div class="`bg-[#252525] flex`">
			<template v-for="(item, index) in allProducts" :key="index">
				<CardsCardArtwork :product="item" class=""/>
			</template>
		</div>
	</section>
</template>