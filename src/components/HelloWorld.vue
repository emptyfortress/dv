<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	msg: {
		type: String,
		default: 'test!',
	},
})

const count = ref(0)
</script>

<template lang="pug">
h4 {{ props.msg }}

button(type="button" @click="count++") count is: {{ count }}
br
br
q-btn(icon="mdi-close" color="pink") Test
</template>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
