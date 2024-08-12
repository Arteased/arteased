<script lang="ts" setup>
import { products } from '~/composables/constants/product';

const allProducts = ref(products);
</script>

<template>
	<section>
		<NuxtLink to="/fulldetailartwork">
			<div class="`bg-[#252525] flex flex-wrap gap-10 mx-auto min-w-[300px] xl:max-w-[1240px]`">
				<template v-for="(item, index) in allProducts" :key="index">
					<CardsCardArtwork :product="item" class=""/>
				</template>
			</div>
		</NuxtLink>
	</section>
</template>