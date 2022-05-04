<script setup lang="ts">
import { ref } from 'vue'
import { cols, rows } from '@/stores/data'
import { useStore } from '@/stores/store'

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

const goto = (e: string) => {
	console.log(e)
}
</script>

<template lang="pug">
q-table(title="Прототипы"
	:rows="rows"
	:columns="cols"
	row-key="id"
	binary-state-sort
	no-data-label="Здесь ничего нет"
	no-results-label="Ничего не найдено"
	:filter="props.filter"
	)
	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(auto-width)
			//- q-th(auto-width)
			q-th(v-for="col in props.cols" :key="col.name" :props="props" ) {{ col.label }}
			q-th(auto-width)

	template(v-slot:body="props")
		q-tr(:props="props")
			q-td(auto-width)
				q-btn(size="sm" color="accent" text-color="dark" unelevated round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add' " v-if="props.row.children")
			q-td(key="name" :props="props") {{ props.row.name }}
			q-td(key="client" :props="props") {{ props.row.client }}
			q-td(key="field" :props="props") {{ props.row.field }}
			q-td(key="date" :props="props")
				q-icon(name="mdi-check-decagram" color="dark" size="xs").q-mr-sm
				span {{ props.row.date }}
			q-td(key="descr" :props="props") {{ props.row.descr }}
			q-td(auto-width)
				q-btn(round dense size="md" color="secondary" flat icon="mdi-eye" @click="openPic(props.row)")
				a(:href="props.row.url" target="_blank")
					q-btn(round dense size="md" color="secondary" flat icon="mdi-open-in-new")

		q-tr(v-show="props.expand" :props="props")
			q-td(colspan="100%").expand
				.row.align-start.justify-center.q-gutter-md
					div(class="text-left") Варианты:
					q-markup-table(flat)
						q-tr
							q-td name
							q-td date
							q-td descr
							q-td action
						q-tr
							q-td name
							q-td date
							q-td descr
							q-td action

q-dialog(v-model="pic")
	q-card.pic
		q-btn(round icon="mdi-close" color="dark" v-close-popup).close
		q-img(:src="`screenshots/${mystore.current.pic}.png`")
		q-card-section
			.row.no-wrap.items-center
				.col
					.text-overline {{ mystore.current.date }}
					.text-h6.ellipsis {{ mystore.current.name }}
				q-chip() web-client
				q-chip() web-client
		q-card-section.q-pt-none
			.descr {{ mystore.current.descr }}
		q-card-section
			q-card-actions(align="right")
				q-btn(flat label="Закрыть" v-close-popup)
				q-space
				q-btn(outline round color="dark" icon="mdi-chevron-left")
				q-btn(unelevated round color="dark" icon="mdi-open-in-new")
				q-btn(outline round color="dark" icon="mdi-chevron-right")

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

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
