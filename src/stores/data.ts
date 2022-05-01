const rows = [
	{ id: 0, date: '', client: 'web', field: '', descr: '' },
	{ id: 1, date: '', client: 'web', field: '', descr: '' },
	{ id: 2, date: '', client: 'windows', field: '', descr: '' },
	{ id: 3, date: '', client: 'windows', field: '', descr: '' },
]

const tags = [
	{ id: 0, selected: false, label: 'one' },
	{ id: 1, selected: false, label: 'two' },
	{ id: 2, selected: false, label: 'three' },
	{ id: 3, selected: false, label: 'four' },
	{ id: 4, selected: false, label: 'five' },
	{ id: 5, selected: false, label: 'cix' },
]

const cols: Column[] = [
	{ id: 3, name: 'name', label: 'Название', field: 'name', align: 'left', sortable: true },
	{ id: 1, name: 'client', label: 'Клиент', field: 'client', align: 'left', sortable: true },
	{ id: 2, name: 'field', label: 'Раздел', field: 'field', align: 'left', sortable: true },
	{ id: 0, name: 'date', label: 'Дата', field: 'date', align: 'left', sortable: true },
	{ id: 4, name: 'descr', label: 'Примеч.', field: 'descr', align: 'left', sortable: false },
	// { id: 5, name: 'actions', label: 'Actions', field: 'actions', align: 'left', sortable: false },
]

export { tags, cols, rows }
