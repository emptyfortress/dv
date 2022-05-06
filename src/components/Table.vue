<script setup lang="ts">
import { ref } from 'vue'
import Dialog from '@/components/Dialog.vue'
import { useStore } from '@/stores/store'

const mystore = useStore()

const props = defineProps<{
	columns: any
	rows: Row[]
}>()

const pic = ref(false)

const openPic = (e: Row) => {
	pic.value = true
	mystore.setCurrent(e)
}
const filter = ref('')

const pagination = ref({
	sortBy: 'date' as keyof Row,
	descending: true,
	page: 1,
	rowsPerPage: 10,
})
</script>

<template lang="pug">
q-table(title="Прототипы"
	:rows="props.rows"
	:columns="props.columns"
	row-key="id"
	binary-state-sort
	wrap-cells
	no-data-label="Здесь ничего нет"
	no-results-label="Ничего не найдено"
	rows-per-page-label="Записей на стр.:"
	:filter="filter"
	v-model:pagination="pagination"
	).sticky

	template(v-slot:top)
		h6 Прототипы
		q-space
		q-input(dense debounce="100" clearable color="primary" v-model="filter").input
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")

	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(v-for="col in props.cols" :key="col.name" :props="props" ) {{ col.label }}
			q-th

	template(v-slot:body="props")
		q-tr(:props="props").rel
			q-td(key="name") {{ props.row.name }}
			q-td(key="client") {{ props.row.client }}
			q-td(key="field") {{ props.row.field }}
			q-td(key="date") {{ props.row.date }}
			q-td(key="descr") {{ props.row.descr }}
			q-td(auto-width).btn
				q-btn(round dense size="md" color="secondary" flat icon="mdi-eye" @click="openPic(props.row)")
				a(:href="props.row.url" target="_blank")
					q-btn(round dense size="md" color="secondary" flat icon="mdi-open-in-new")

Dialog(:rows="props.rows" :sortBy="pagination.sortBy" :descending="pagination.descending" :pic="pic" @close="pic = false")

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
.btn {
	white-space: nowrap;
	// padding-right: 0;
	padding-left: 0;
}
.input {
	width: 200px;
}
</style>
