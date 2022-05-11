<template lang="pug">
q-card.pic
	q-btn(round icon="mdi-close" color="dark" @click="close").close
	.ic
		q-img(:src="`screenshots/${mystore.current.pic}.png`" no-transition position="0 0" fit="cover").img
		.flex
			.left(@click="prev")
				q-icon(name="mdi-chevron-left" size="10rem" color="black")
			.center
				a(:href="mystore.current.url" target="_blank")
					q-icon(name="mdi-open-in-new" size="8rem" color="black")
			.right(@click="next")
				q-icon(name="mdi-chevron-right" size="10rem" color="black" )
	q-card-section
		.row.no-wrap.items-center
			.col
				.text-overline {{ mystore.current.date }}
				.text-h6.ellipsis {{ mystore.current.name }}
			q-icon(name="mdi-check-decagram" color="dark" v-if="mystore.current.latest" size="md").q-mr-sm
			q-chip(v-for="chip in mystore.current.tags" :key="chip" color="dark" text-color="white") {{ chip }}
			q-chip(v-for="chip in mystore.current.tugs" :key="chip" color="dark" text-color="white") {{ chip }}
	q-card-section.q-pt-none
		.descr {{ mystore.current.descr }}
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
	if (index === 0) {
		return
	}
	mystore.setCurrent(items.value[index - 1])
}
const next = () => {
	const index = items.value.findIndex((e) => e.id === mystore.current.id)
	if (index === items.value.length - 1) {
		return
	}
	mystore.setCurrent(items.value[index + 1])
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.pic {
	// width: 800px;
	min-width: 860px;
	height: 80vh;
	position: relative;
	overflow: visible;
	background: $mainBg;
	.close {
		position: absolute;
		top: -1.2rem;
		right: -1.2rem;
		z-index: 2;
	}
	.img {
		box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.4);
		height: calc(80vh - 140px);
		object-position: left top;
	}
}
.ic {
	position: relative;
	.flex {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		gap: 1px;
		justify-content: space-between;
		> div {
			background: #0000002a;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			display: flex;
			opacity: 0;
			&:hover {
				opacity: 1;
				backdrop-filter: blur(4px);
				-webkit-backdrop-filter: blur(4px);
			}
		}
		.left,
		.right {
			width: 24%;
		}
		.center {
			width: 50%;
			a {
				height: 100%;
				width: 100%;
				display: flex;
				text-decoration: none;
				justify-content: center;
				align-items: center;
			}
		}
	}
}
</style>
