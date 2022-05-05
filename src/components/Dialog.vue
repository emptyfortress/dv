<template lang="pug">
q-dialog(v-model="props.pic")
	q-card.pic
		q-btn(round icon="mdi-close" color="dark" @click="close").close
		q-img(:src="`screenshots/${mystore.current.pic}.png`" no-transition)
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
</style>
