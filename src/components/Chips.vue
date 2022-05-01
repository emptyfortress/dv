<template lang="pug">
.row.align-center
	q-space
	q-input(v-model="filter" dense clearable autofocus  @clear="filter = '' ")
		template(v-slot:prepend)
			q-icon(name="search")
.text-center.q-mt-sm
	q-chip(v-for="chip in filteredChips"
	:key="chip.id"
	v-model:selected="chip.selected").q-mb-md  {{ chip.label}}
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { tags } from '@/stores/data'
import { useStore } from '@/stores/store'

const mystore = useStore()

const chips = reactive(tags)
const filter = ref('')

const filteredChips = computed(() => {
	if (filter.value.length > 0) {
		return chips.filter((e) => e.label.includes(filter.value))
	}
	return chips
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
