import { defineStore } from 'pinia'
import { rows } from '@/stores/data'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		rows: rows,
		current: {} as Row,
		chips: [] as string[],
	}),
	getters: {},

	actions: {
		setCurrent(payload: Row) {
			this.current = payload
		},
		nextPreview() {
			let index = rows.findIndex((e) => e.id === this.current.id)
			this.current = rows[index + 1]
		},
		prevPreview() {
			let index = rows.findIndex((e) => e.id === this.current.id)
			this.current = rows[index - 1]
		},
		setChips(payload: string[]) {
			this.chips = payload
		},
	},
})
