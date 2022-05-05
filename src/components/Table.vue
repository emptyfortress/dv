<script setup lang="ts">
import { ref } from 'vue'
import { cols, rows } from '@/stores/data'
import { useStore } from '@/stores/store'
import Dialog from '@/components/Dialog.vue'

const mystore = useStore()

const props = defineProps({
	filter: {
		type: String,
		default: '',
	},
})

const pic = ref(false)

const openPic = (e: Row) => {
	pic.value = true
	mystore.setCurrent(e)
}
const initialPagination = {
	sortBy: 'id',
	descending: true,
}
</script>

<template lang="pug">
q-table(title="Прототипы"
	:rows="rows"
	:columns="cols"
	row-key="id"
	binary-state-sort
	wrap-cells
	no-data-label="Здесь ничего нет"
	no-results-label="Ничего не найдено"
	:rows-per-page-options="[0]"
	:filter="props.filter"
	:pagination="initialPagination"
	).sticky
	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(auto-width)
			q-th(v-for="col in props.cols" :key="col.name" :props="props" ) {{ col.label }}
			q-th(auto-width)

	template(v-slot:body="props")
		q-tr(:props="props")
			q-td(auto-width)
				q-btn(size="sm" color="accent" text-color="dark" unelevated round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add' " v-if="props.row.children")
			q-td {{props.row.id}}
			q-td(key="name" :props="props") {{ props.row.name }}
			q-td(key="client" :props="props") {{ props.row.client }}
			q-td(key="field" :props="props") {{ props.row.field }}
			q-td(key="date" :props="props").text-no-wrap
				q-icon(name="mdi-check-decagram" color="dark" size="xs" v-if="props.row.latest").q-mr-sm
				span {{ props.row.date }}
			q-td(key="descr" :props="props") {{ props.row.descr }}
			q-td(auto-width).text-no-wrap
				q-btn(round dense size="md" color="secondary" flat icon="mdi-eye" @click="openPic(props.row)")
				a(:href="props.row.url" target="_blank")
					q-btn(round dense size="md" color="secondary" flat icon="mdi-open-in-new")

		q-tr(v-show="props.expand" :props="props")
			q-td(colspan="100%").expand
				.row.align-start.justify-center.q-gutter-md
					div(class="text-left") Варианты:
					q-markup-table(flat)
						q-tr(v-for="item in props.row.child" :key="item.name")
							q-td {{ item.name }}
							q-td {{ item.date }}
							q-td {{ item.descr }}
							q-td action

Dialog(:pic="pic" @close="pic = false")

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.sticky {
	height: 80vh;
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
