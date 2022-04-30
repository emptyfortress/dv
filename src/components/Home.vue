<template lang="pug">
.container
	h4 Hello!
	q-chip(v-for="chip in chips"
	:key="chip.id"
	v-model:selected="chip.selected")  {{ chip.label}}
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { tags } from '@/stores/tags'

// const selected = ref([])
const chips = reactive(tags)
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.container {
	max-width: 1200px;
	margin: 0 auto;
	height: 100px;
	// background: #ccc;
	margin-top: 2rem;
}
.q-chip {
	max-width: 200px;
	background: #d8d8ca;
}
.q-chip--selected {
	background: $dark;
	color: #fff;
}
</style>
