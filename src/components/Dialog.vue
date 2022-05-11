<template lang="pug">
q-dialog(v-model="props.pic")
	q-card.pic
		q-btn(round icon="mdi-close" color="dark" @click="close").close
		q-img(:src="`screenshots/${mystore.current.pic}.png`" no-transition).img
		q-card-section
			.row.no-wrap.items-center
				.col
					.text-overline {{ mystore.current.date }}
					.text-h6.ellipsis {{ mystore.current.name }}
				q-chip(v-for="chip in mystore.current.tags" :key="chip" color="dark" text-color="white") {{ chip }}
				q-chip(v-for="chip in mystore.current.tugs" :key="chip" color="dark" text-color="white") {{ chip }}
		q-card-section.q-pt-none
			.descr {{ mystore.current.descr }}
		q-card-section
			q-card-actions(align="right")
				q-btn(flat label="Закрыть" @click="close")
				q-space
				q-btn(outline round color="dark" icon="mdi-chevron-left" @click="prev")
					q-tooltip(:delay="500" anchor="top middle" self="bottom middle") Предыдущий
				a(:href="mystore.current.url" target="_blank").q-mx-xs
					q-btn(unelevated round color="dark" icon="mdi-open-in-new")
						q-tooltip(:delay="500" anchor="top middle" self="bottom middle") Открыть
				q-btn(outline round color="dark" icon="mdi-chevron-right" @click="next")
					q-tooltip(:delay="500" anchor="top middle" self="bottom middle") Следующий
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'

const props = defineProps<{
	rows: Row[]
	pic: boolean
	sortBy: keyof Row
	descending: boolean
}>()

const mystore = useStore()

const emit = defineEmits(['close'])
const close = () => {
	emit('close')
}

const items = computed(() => {
	let temp = customSort(props.rows, props.sortBy, props.descending)
	return temp
})

const customSort = (rows: Row[], sortBy: keyof Row, descending: boolean) => {
	const data = [...rows]

	if (sortBy) {
		data.sort((a: Row, b: Row): number => {
			const x = descending ? b : a
			const y = descending ? a : b
			return x[sortBy] > y[sortBy] ? 1 : x[sortBy] < y[sortBy] ? -1 : 0
		})
	}
	return data
}

const prev = () => {
	const index = items.value.findIndex((e) => e.id === mystore.current.id)
	mystore.setCurrent(items.value[index - 1])
}
const next = () => {
	const index = items.value.findIndex((e) => e.id === mystore.current.id)
	mystore.setCurrent(items.value[index + 1])
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.pic {
	width: 800px;
	max-width: 80vw;
	position: relative;
	overflow: visible;
	background: $mainBg;
	.close {
		position: absolute;
		top: -1.2rem;
		right: -1.2rem;
		z-index: 2;
	}
}
.img {
	box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.4);
}
</style>
