<script lang="ts" setup>
import type { Products } from "~/types/product";

const props = defineProps({
    product: {
        type:
        Object,
        default: {},
    }
});

const oneProduct = ref(props.product);

const addCart = () => {
  oneProduct.value.isCart = !oneProduct.value.isCart;
  let localStorageData = localStorage.getItem("products");
  let productOfCart: Products[] = [];

  if (localStorageData) {
    productOfCart = JSON.parse(localStorageData);
  }

  if (oneProduct.value.isCart) {
    productOfCart.push(oneProduct.value);
    localStorage.setItem("products", JSON.stringify(productOfCart));
  } else {
    productOfCart = productOfCart.filter(
      (item) => item.id !== oneProduct.value.id
    );
    localStorage.setItem("products", JSON.stringify(productOfCart));
  }
};
</script>

<template>
    <section class="bg-white shadow-lg text-[14px] p-5 text-black text-wrap h-fit">
        <img :src="oneProduct.image" class="max-w-60">
        <div>
            <div class="flex">
                <NuxtLink :to="`/products/${oneProduct.id}`"></NuxtLink>
                <h3 class="font-bold md:text-base">{{ oneProduct.name }}{{ oneProduct.series }}</h3>
            </div>

            <div class="flex">
                <span>{{ oneProduct.price }}</span>
                <span>{{ oneProduct.likes }}</span>
            </div>

            <br>
            
            <div>
              <span>{{ oneProduct.category }}</span>
            </div>

            <div class="flex justify-between">
                <span>{{ oneProduct.dimension }}</span>
                <span>{{ oneProduct.years }}</span>
            </div>
                
            <NuxtLink to="/">
                <span class="font-bold">{{ oneProduct.artist }}</span>
            </NuxtLink>
        </div>

        <div ${oneProduct.isCart ?}  @click="addCart">
            <i></i>
        </div>
    </section>
</template>