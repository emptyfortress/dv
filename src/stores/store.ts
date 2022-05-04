import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		selection: 'fucker',
		current: {} as Row,
	}),
	getters: {},

	actions: {
		setCurrent(payload: Row) {
			this.current = payload
		},
	},
})
