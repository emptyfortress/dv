import { date as DateUtils } from 'quasar'

const format = (e: string) => {
	const split = e.split('-')
	const temp = { year: +split[0], month: +split[1], day: +split[2] }
	let date = DateUtils.buildDate(temp)
	return DateUtils.formatDate(date, 'DD MMM YY', {
		monthsShort: [
			'янв',
			'фев',
			'мар',
			'апр',
			'май',
			'июн',
			'июл',
			'авг',
			'сен',
			'окт',
			'ноя',
			'дек',
		],
	})
}

const rows = [
	{
		id: 0,
		name: 'Mercury UI',
		date: format('19-09-06'),
		client: 'concept',
		field: 'dashboard, workflow',
		descr: 'Mercury OS inspired. Недоделан.',
		url: 'https://amba-git-prior-emptyfortress.vercel.app/#/',
		tags: [],
		children: false,
		latest: false,
		pic: 'mercury',
	},
	{ id: 1, date: format('22-11-19'), client: 'админка', field: '', descr: '' },
	{
		id: 2,
		date: format('11-02-21'),
		client: 'windows',
		field: '',
		descr: '',
	},
	{
		id: 3,
		date: format('16-12-20'),
		client: 'windows',
		field: '',
		descr: '',
	},
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
	{ id: 1, name: 'client', label: 'Приложение', field: 'client', align: 'left', sortable: true },
	{ id: 2, name: 'field', label: 'Раздел', field: 'field', align: 'left', sortable: true },
	{ id: 0, name: 'date', label: 'Дата', field: 'date', align: 'left', sortable: true },
	{ id: 4, name: 'descr', label: 'Примеч.', field: 'descr', align: 'left', sortable: false },
	// { id: 5, name: 'actions', label: 'Actions', field: 'actions', align: 'left', sortable: false },
]

export { tags, cols, rows }
