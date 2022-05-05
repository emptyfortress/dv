<script setup lang="ts">
import { ref, computed } from 'vue'
import { cols, rows } from '@/stores/data'
import { useStore } from '@/stores/store'
import Dialog from '@/components/Dialog.vue'

const mystore = useStore()

// const props defineProps({
// 	filter: {
// 		type: String,
// 		default: '',
// 	},
// })

const pic = ref(false)

const openPic = (e: Row) => {
	pic.value = true
	mystore.setCurrent(e)
}
const initialPagination = {
	sortBy: 'date',
	descending: true,
}
const filter = ref('')

const myrows = ref(rows)
const filtRow = computed(() => {
	if (mystore.chips.length > 0) {
		return myrows.value.filter((e: Row) => e.tags.includes(mystore.chips[0]))
	}
	return rows
})
</script>

<template lang="pug">
q-table(title="Прототипы"
	:rows="filtRow"
	:columns="cols"
	row-key="id"
	binary-state-sort
	wrap-cells
	no-data-label="Здесь ничего нет"
	no-results-label="Ничего не найдено"
	:filter="filter"
	:pagination="initialPagination"
	).sticky

	template(v-slot:top)
		h6 Прототипы
		q-space
		q-input(borderless dense debounce="100" clearable color="primary" v-model="filter")
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")

	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(v-for="col in props.cols" :key="col.name" :props="props" ) {{ col.label }}
			//- q-th(auto-width)

	template(v-slot:body="props")
		q-tr(:props="props").rel
			q-td(key="name") {{ props.row.name }}
			q-td(key="client") {{ props.row.client }}
			q-td(key="field") {{ props.row.field }}
			q-td(key="date") {{ props.row.date }}


	//- template(v-slot:body="props")
	//- 	q-tr(:props="props")
	//- 		q-td(key="name" :props="props") {{ props.row.name }}
	//- 		q-td(key="client" :props="props") {{ props.row.client }}
	//- 		q-td(key="field" :props="props") {{ props.row.field }}
	//- 		q-td(key="date" :props="props").text-no-wrap
	//- 			q-icon(name="mdi-check-decagram" color="dark" size="xs" v-if="props.row.latest").q-mr-sm
	//- 			span {{ props.row.date }}
	//- 		q-td(key="descr" :props="props") {{ props.row.descr }}
	//- 		q-td(auto-width).text-no-wrap
	//- 			q-btn(round dense size="md" color="secondary" flat icon="mdi-eye" @click="openPic(props.row)")
	//- 			a(:href="props.row.url" target="_blank")
	//- 				q-btn(round dense size="md" color="secondary" flat icon="mdi-open-in-new")

Dialog(:pic="pic" @close="pic = false")

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.sticky {
	max-height: 80vh;
}
thead tr th {
	position: sticky;
	z-index: 1;
	background: #fff;
}
thead tr:first-child th {
	top: 0;
}
.pic {
	width: 800px;
	max-width: 80vw;
	position: relative;
	overflow: visible;
	.close {
		position: absolute;
		top: -1.2rem;
		right: -1.2rem;
		z-index: 2;
	}
}
.q-td.expand {
	background: $mainBg;
	box-shadow: inset 0 0px 4px rgba(0, 0, 0, 0.3);
	padding: 1rem 0;
}
a:link,
a:visited {
	text-decoration: none;
}
.descr {
	font-size: 0.9rem;
}
</style>
