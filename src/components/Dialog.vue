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
				q-chip(color="dark" text-color="white") web-client
		q-card-section.q-pt-none
			.descr {{ mystore.current.descr }}
		q-card-section
			q-card-actions(align="right")
				q-btn(flat label="Закрыть" @click="close")
				q-space
				q-btn(outline round color="dark" icon="mdi-chevron-left" @click="mystore.prevPreview")
				q-btn(unelevated round color="dark" icon="mdi-open-in-new")
				q-btn(outline round color="dark" icon="mdi-chevron-right" @click="mystore.nextPreview")
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'

const props = defineProps({
	pic: {
		type: Boolean,
		default: false,
	},
})

const mystore = useStore()

const emit = defineEmits(['close'])
const close = () => {
	emit('close')
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
