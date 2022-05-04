import { defineStore } from 'pinia'
import { rows } from '@/stores/data'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		selection: 'fucker',
		rows: rows,
		current: {} as Row,
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
	},
})
