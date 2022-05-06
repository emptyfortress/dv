<template lang="pug">
.container
	Chips
	Table(:columns="columns" :rows="filtRows1")
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Chips from '@/components/Chips.vue'
import Table from '@/components/Table.vue'
import { columns, rows } from '@/stores/data'
import { useStore } from '@/stores/store'

const mystore = useStore()

const filtRows = computed(() => {
	if (mystore.chips.length > 0) {
		const temp: any = []
		mystore.chips.forEach((chip) => {
			temp.push(...rows.filter((e: Row) => e.tags.includes(chip)))
		})
		const unique = [...new Set(temp)] as Row[]
		return unique
	}
	return rows
})

const filtRows1 = computed(() => {
	if (mystore.chops.length > 0) {
		const temp: any = []
		mystore.chops.forEach((chop) => {
			temp.push(...filtRows.value.filter((e: Row) => e.tugs.includes(chop)))
		})
		const unique = [...new Set(temp)] as Row[]
		return unique
	}
	return filtRows.value
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.container {
	max-width: 1400px;
	margin: 0 auto;
	height: 100px;
	// background: #ccc;
	margin-top: 2rem;
}
</style>
