const tags = [
	{ id: 0, selected: false, label: 'web-client' },
	{ id: 2, selected: false, label: 'admin' },
	{ id: 1, selected: false, label: 'концепт' },
	{ id: 3, selected: false, label: 'другое' },
]
const tags1 = [
	{ id: 0, selected: false, label: 'грид' },
	{ id: 1, selected: false, label: 'elastic' },
	{ id: 2, selected: false, label: 'карточка' },
	{ id: 3, selected: false, label: 'контрол' },
	{ id: 4, selected: false, label: 'справочник' },
	{ id: 5, selected: false, label: 'storybook' },
	{ id: 5, selected: false, label: 'dashboard' },
]

const columns = [
	{ name: 'name', label: 'Название', field: 'name', align: 'left', sortable: true },
	{ name: 'client', label: 'Приложение', field: 'client', align: 'left', sortable: true },
	{ name: 'field', label: 'Раздел', field: 'field', align: 'left', sortable: true },
	{ name: 'date', label: 'Дата', field: 'date', align: 'right', sortable: true },
	{ name: 'descr', label: 'Примеч.', field: 'descr', align: 'left', sortable: false },
]

const rows = [
	{
		id: 0,
		name: 'Mercury UI',
		date: '2019-09-06',
		client: 'web-client',
		field: 'концепт',
		descr: 'Mercury OS inspired. Недоделан.',
		url: 'https://amba-git-prior-emptyfortress.vercel.app/#/',
		tags: ['концепт', 'web-client'],
		latest: false,
		pic: 'mercury',
	},
	{
		id: 1,
		name: 'Конструктор разметок (mercury)',
		date: '2019-08-02',
		client: 'web-client',
		field: 'конструктор',
		descr: 'Mercury OS inspired. Недоделан.',
		url: 'https://mercury-phi.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'constructor-razmetok',
	},
	{
		id: 2,
		name: 'PWA',
		date: '2019-07-12',
		client: 'web-client',
		field: 'концепт',
		descr: 'Концепт веб-клиента',
		url: 'https://pwa-lemon.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'pwa',
	},
	{
		id: 3,
		name: 'Конструктор согласований (старый)',
		date: '2018-02-22',
		client: 'web-client',
		field: 'конструктор',
		descr: 'Делал давно совместно с дигдезом.',
		url: 'https://ks-beta.vercel.app/',
		tags: [],
		latest: false,
		pic: 'ks',
	},
	{
		id: 4,
		name: 'Визуализация маршрута согласования',
		date: '2020-01-21',
		client: 'web-client',
		field: 'ход согласования',
		descr: 'Показ различных веток в визе, в зависимости от исхода этапа',
		url: 'https://cycle-lilac.vercel.app/',
		tags: [],
		latest: false,
		pic: 'cycle',
	},
	{
		id: 5,
		name: 'Визуализация маршрута согласования',
		date: '2020-11-17',
		client: 'web-client',
		field: 'ход согласования',
		descr: 'Привязка к таймлайну',
		url: 'https://sogl.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'vis-timeline',
	},
	{
		id: 6,
		name: 'Поведение кнопок',
		date: '2020-05-29',
		client: 'web-client',
		field: 'все',
		descr: 'Поведение кнопок в разных ситуациях',
		url: 'https://trip-emptyfortress.vercel.app/#/btn',
		tags: [],
		latest: false,
		pic: 'buttons',
	},
	{
		id: 7,
		name: 'Грид с липким заголовком',
		date: '2020-11-10',
		client: 'web-client',
		field: 'грид',
		descr: 'залипание заголовка грида',
		url: 'https://trip-emptyfortress.vercel.app/#/sticky',
		tags: [],
		latest: false,
		pic: 'sticky',
	},
	{
		id: 8,
		name: 'Новое УД (создание)',
		date: '2020-09-04',
		client: 'web-client',
		field: 'УД',
		descr: 'Создание документа',
		url: 'https://trip-by4y2hici.vercel.app/#/create',
		tags: [],
		latest: false,
		pic: 'create',
	},
	{
		id: 9,
		name: 'Новое УД (просмотр)',
		date: '2020-04-10',
		client: 'web-client',
		field: 'УД',
		descr: 'Просмотр документа',
		url: 'https://trip-by4y2hici.vercel.app/#/delo',
		tags: [],
		latest: false,
		pic: 'prosmotr',
	},
	{
		id: 10,
		name: 'Новое УД (переделки)',
		date: '2020-09-05',
		client: 'web-client',
		field: 'УД',
		descr: 'Переделки после тестирования',
		url: 'https://trip-emptyfortress.vercel.app/#/delo',
		tags: [],
		latest: false,
		pic: 'peredelki',
	},
	{
		id: 11,
		name: 'Веб-админка',
		date: '2020-10-07',
		client: 'admin',
		field: 'все',
		descr: 'Упрощенный вариант админки',
		url: 'https://houston-omega.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'admin',
		child: [
			{
				id: 11.1,
				name: 'Хьюстон',
				date: '2020-08-11',
				descr: 'Первоначальный вариант админки',
				url: 'https://houston-nqzs9dnr0.vercel.app/#/',
			},
		],
	},
	{
		id: 12,
		name: 'Хьюстон',
		date: '2020-09-05',
		client: 'admin',
		field: 'дашборд',
		descr: 'Первоначальный вариант админки',
		url: 'https://houston-nqzs9dnr0.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'houston',
	},
	{
		id: 13,
		name: 'Персональный дашборд',
		date: '2020-12-10',
		client: 'web-client',
		field: 'дашборд',
		descr: 'Персональный дашборд для СУЭК',
		url: 'https://personal-opal-psi.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'personal',
	},
	{
		id: 14,
		name: 'Служебная записка ЛГНХ',
		date: '2020-11-26',
		client: 'web-client',
		field: 'карточка',
		descr: 'Варианты разметок для вебинара по ЛГНХ',
		url: 'https://card-emptyfortress.vercel.app/#/doc1',
		tags: [],
		latest: false,
		pic: 'slujebka',
	},
	{
		id: 15,
		name: 'Поиск в папке ЛГНХ',
		date: '2021-04-15',
		client: 'web-client',
		field: 'карточка',
		descr: 'Результаты поиска в текущей папке ЛГНХ',
		url: 'https://elastic-git-lgnh-emptyfortress.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'searchLgnh',
	},
	{
		id: 16,
		name: 'Elastic',
		date: '2020-12-18',
		client: 'web-client',
		field: 'поиск',
		descr: 'Первая версия поиска, самая полная',
		url: 'https://elastic-emptyfortress.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'elastic',
	},
	{
		id: 17,
		name: 'Elastic simple',
		date: '2021-03-21',
		client: 'web-client',
		field: 'поиск',
		descr: 'Упрощенная версия поиска',
		url: 'https://elastic-git-simple-emptyfortress.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'elasticsimple',
	},
	{
		id: 18,
		name: 'Elastic middle',
		date: '2021-03-29',
		client: 'web-client',
		field: 'поиск',
		descr: 'Усредненная версия поиска',
		url: 'https://elastic-git-middle-emptyfortress.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'elasticmiddle',
	},
	{
		id: 19,
		name: 'Elastic scroll',
		date: '2021-03-30',
		client: 'web-client',
		field: 'поиск',
		descr: 'Версия поиска со скроллами в агрегатах',
		url: 'https://elastic-git-middle1-emptyfortress.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'elasticscroll',
	},
	{
		id: 20,
		name: 'Elastic tabs',
		date: '2021-04-14',
		client: 'web-client',
		field: 'поиск',
		descr: 'Поиск с табами в области агрегатов',
		url: 'https://elastic-git-tab-emptyfortress.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'elastictabs',
	},
	{
		id: 21,
		name: 'Elastic light design',
		date: '2021-04-22',
		client: 'web-client',
		field: 'поиск',
		descr: 'Облегченный дизайн тулбара в результатах поиска',
		url: 'https://elastic-git-design-emptyfortress.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'elasticlight',
	},
	{
		id: 22,
		name: 'Elastic group',
		date: '2021-05-07',
		client: 'web-client',
		field: 'поиск',
		descr: 'Группировка результатов поиска',
		url: 'https://elastic-git-group-emptyfortress.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'elasticgroup',
	},
	{
		id: 23,
		name: 'Elastic lenta',
		date: '2021-07-27',
		client: 'web-client',
		field: 'поиск',
		descr: 'Переключатель грид-лента в результатах поиска',
		url: 'https://elastic-gjuc2iike-emptyfortress.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'elasticlenta',
	},
	{
		id: 24,
		name: 'Справочник сотрудников',
		date: '2021-02-21',
		client: 'web-client',
		field: 'справочник',
		descr: 'Справочник сотрудников',
		url: 'https://elastic-git-catalog-emptyfortress.vercel.app/#/catalog',
		tags: [],
		latest: false,
		pic: 'usercatalog',
	},
	{
		id: 25,
		name: 'Storybook',
		date: '2021-02-01',
		client: 'web-client',
		field: 'storybook',
		descr: 'Попытка исользовать storybook для компонентов',
		url: 'https://storybook-inky.vercel.app/?path=/story/docsvision-kit--%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5',
		tags: [],
		latest: false,
		pic: 'storybook',
	},
	{
		id: 26,
		name: 'Мобильный ВК',
		date: '2021-04-13',
		client: 'web-client',
		field: 'storybook',
		descr: 'Интерфейс мобильного ВК. Недоделано.',
		url: 'https://io-six.vercel.app/home',
		tags: [],
		latest: false,
		pic: 'mobile',
	},
	{
		id: 27,
		name: 'Таблица исполнения',
		date: '2021-04-20',
		client: 'web-client',
		field: 'контрол',
		descr: 'Контрол таблицы исполнения',
		url: 'https://v3-git-table-emptyfortress.vercel.app/',
		tags: [],
		latest: false,
		pic: 'tablisp',
	},
	{
		id: 28,
		name: 'Таблица исполнения lines',
		date: '2021-04-24',
		client: 'web-client',
		field: 'контрол',
		descr: 'Контрол таблицы исполнения с вертикальными линиями в дереве',
		url: 'https://v3-git-lines-emptyfortress.vercel.app/',
		tags: [],
		latest: false,
		pic: 'tablisplines',
	},
	{
		id: 29,
		name: 'Таблица исполнения склейка',
		date: '2021-04-26',
		client: 'web-client',
		field: 'контрол',
		descr: 'Контрол таблицы исполнения с объединенными полями для экономии места',
		url: 'https://v3-git-glue-emptyfortress.vercel.app/',
		tags: [],
		latest: false,
		pic: 'tablispglue',
	},
	{
		id: 30,
		name: 'Совместное редактирование документа',
		date: '2021-07-08',
		client: 'web-client',
		field: 'карточка',
		descr: 'Редактирование документа в браузере и управление доступом',
		url: 'https://editor-git-add-emptyfortress.vercel.app/#/docs/1',
		tags: [],
		latest: false,
		pic: 'editdoc',
	},
	{
		id: 31,
		name: 'DV backlog email',
		date: '2021-10-21',
		client: 'email',
		field: 'письмо',
		descr: 'макет письма dv-backlog',
		url: 'https://email-kappa.vercel.app/',
		tags: ['другое'],
		latest: false,
		pic: 'dvbacklog',
	},
	{
		id: 32,
		name: 'ВК с настройкой цвета',
		date: '2021-10-05',
		client: 'web-client',
		field: 'концепт',
		descr: 'Отказ от цвета, настройка цветов',
		url: 'https://base-eight.vercel.app/#/',
		tags: [],
		latest: false,
		pic: 'base',
	},
	{
		id: 33,
		name: 'Сервис поисков и представлений',
		date: '2021-12-02',
		client: 'web-client',
		field: 'поиск',
		descr: 'Настройка представлений для поиска',
		url: 'https://base-git-poisk-emptyfortress.vercel.app/#/search',
		tags: [],
		latest: false,
		pic: 'basesearch',
	},
	{
		id: 34,
		name: 'Грид. Сортировка и фильтрация',
		date: '2022-01-31',
		client: 'web-client',
		field: 'грид',
		descr: 'Сортировка и фильтры по колонкам в гриде',
		url: 'https://base-git-grid-emptyfortress.vercel.app/#/grid',
		tags: [],
		latest: false,
		pic: 'gridsort',
	},
	{
		id: 35,
		name: 'Грид. Ресайз колонок, фильтрация',
		date: '2022-01-31',
		client: 'web-client',
		field: 'грид',
		descr: 'Ресайз колонок',
		url: 'https://base-git-grid1-emptyfortress.vercel.app/#/grid',
		tags: [],
		latest: false,
		pic: 'gridresize',
	},
	{
		id: 36,
		name: 'Грид. Быстрая помощь',
		date: '2022-03-15',
		client: 'web-client',
		field: 'грид',
		descr: 'Кнопка help в тулбаре и страница помощи',
		url: 'https://elastic-git-help-emptyfortress.vercel.app/#/help/0',
		tags: [],
		latest: false,
		pic: 'gridhelp',
	},
	{
		id: 37,
		name: 'Optimistic UI',
		date: '2022-02-14',
		client: 'web-client',
		field: 'концепт',
		descr: 'асинхронное выполнение действий',
		url: 'https://base-git-optimistic-emptyfortress.vercel.app/#/optimistic',
		tags: [],
		latest: false,
		pic: 'optimistic',
	},
	{
		id: 38,
		name: 'Дашборд',
		date: '2022-04-04',
		client: 'web-client',
		field: 'дашборд',
		descr: 'Apexchart на дашборде',
		url: 'https://base-git-dashboard-emptyfortress.vercel.app/#/dashboard',
		tags: [],
		latest: false,
		pic: 'dashboard',
	},
	{
		id: 39,
		name: 'Тяпа',
		date: '2021-11-15',
		client: '--',
		field: 'mascot',
		descr: '3d model тяпы',
		url: 'https://base-git-tyapa-emptyfortress.vercel.app/#/tyapa',
		tags: ['другое'],
		latest: false,
		pic: 'mascot',
	},
	{
		id: 40,
		name: 'Видеоролик про совместное редактирование',
		date: '2021-06-21',
		client: '--',
		field: '',
		descr: 'Youtube',
		url: 'https://www.youtube.com/watch?v=kcLlh6u_bdQ',
		tags: ['другое'],
		latest: false,
		pic: 'youtube',
	},
]

export { tags, tags1, columns, rows }
