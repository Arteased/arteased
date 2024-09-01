<script lang="ts" setup>
import type { Products } from "~/types/product";

const products = ref<Products[]>([]);
const totalPrice = computed(() => {
  return products.value
    .filter((product) => product.price !== undefined)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.price!,
      0
    );
});

onMounted(() => {
  let localStorageData = localStorage.getItem("products");
  if (localStorageData) {
    products.value = JSON.parse(localStorageData);
  }
});

const removeCart = (id: number) => {
  products.value = products.value.filter((item) => item.id !== id); localStorage.setItem("products", JSON.stringify(products.value));
}
</script>

<template>
  <section>

    <div>
      <h1>Shopping Cart</h1>
      <p>{{ products.length }} Items</p>
    </div>

    <div v-if="products.length > 0">
      <template v-for="(item, index) in products" :key="index">
        <CardsCardCart :product="item" @removeCart="removeCart"/>
      </template>
    </div>

    <div v-else>
      <h5>Cart is empty</h5>
    </div>

    <h3>Order Summary</h3>
    <span>{{ item.name }}</span>
    <span>Rp {{ item.price }}</span>

    <p>There are no to orders yet</p>

    <span>Total</span>
    <span>Rp {{ totalPrice }}</span>

    <button>Checkout</button>
  </section>

</template>