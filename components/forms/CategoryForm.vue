<script lang="ts" setup>
import { category } from "~/composables/constants/category";
const categories = ref(category)
const form = ref({
	name: "",
})
const isShowAlert = ref(false);
const submitCategory = () => {
	categories.value.push({id: categories.value.length + 1, name: form.value.name});
	isShowAlert.value = true;
	form.value.name = "";
	setTimeout(() => {
		isShowAlert.value = false;
	}, 3000);
}
</script>

<template>
	<section>
		<div>
            
			<h1>Create Category</h1>

			<div v-if="isShowAlert">Create Category Successfully</div>

			<form @submit.prevent="submitCategory">



				<div>
					<label for="name">Name</label>
					<input type="text" id="name" v-model="form.name" placeholder="Masukan Nama Category" required="true">
				</div>



				<button type="submit">Submit</button>



			</form>
		</div>
	</section>
</template>