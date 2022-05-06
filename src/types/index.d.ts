interface Chip {
	id: number
	label: string
	selected: boolean
}

type Sort = 'id' | 'name' | 'label' | 'field' | 'date'

interface Pagination {
	sortBy: keyof typeof Sort
	descending: boolean
	page: number
	rowsPerPage: number
}

interface Column {
	id: number
	name: string
	label: string
	field: string | ((row: any) => any)
	date: string
	required?: boolean
	align?: 'left' | 'right' | 'center'
	sortable?: boolean
	sort?: (a: any, b: any, rowA: any, rowB: any) => number
	sortOrder?: 'ad' | 'da'
	format?: (val: any, row: any) => any
	style?: string | ((row: any) => string)
	classes?: string | ((row: any) => string)
	headerStyle?: string
	headerClasses?: string
}

interface Row {
	id: number
	name: string
	date: string
	client: string
	field: string
	descr: string
	latest: boolean
	url: string
	pic: string
	tags: string[]
}
