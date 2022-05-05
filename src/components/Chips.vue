<template lang="pug">
.row selection: {{ selection }}
.row.align-start.justify-between.q-mb-md
	div
		q-chip(v-for="chip in chips" :key="chip.id" v-model:selected="chip.selected") {{ chip.label }}
	div
		q-chip(v-for="chop in chops" :key="chop.id" v-model:selected="chop.selected") {{ chop.label }}
</template>

<script setup lang="ts">
import { reactive, computed, watch } from 'vue'
import { tags, tags1 } from '@/stores/data'
import { useStore } from '@/stores/store'

const mystore = useStore()

const chips = reactive(tags)
const chops = reactive(tags1)

const selection = computed(() => {
	return chips.filter((e) => e.selected).map((e) => e.label)
})

watch(selection, (value) => {
	if (value) {
		mystore.setChips(selection.value)
	}
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.q-chip {
	max-width: 200px;
	background: $accent;
}
.q-chip--selected {
	background: $dark;
	color: #fff;
}
.q-input {
	width: 250px;
}
</style>
