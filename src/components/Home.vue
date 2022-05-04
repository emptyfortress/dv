<template lang="pug">
.container
	Chips
	Table
</template>

<script setup lang="ts">
import Chips from '@/components/Chips.vue'
import Table from '@/components/Table.vue'
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
