import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		current: {} as Row,
		chips: [] as string[],
		chops: [] as string[],
	}),
	getters: {},

	actions: {
		setCurrent(payload: Row) {
			this.current = payload
		},
		setChips(payload: string[]) {
			this.chips = payload
		},
		setChops(payload: string[]) {
			this.chops = payload
		},
	},
})
