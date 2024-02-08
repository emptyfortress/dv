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
	{ id: 5, selected: false, label: 'конструктор' },
	{ id: 6, selected: false, label: 'mobile' },
	{ id: 7, selected: false, label: 'storybook' },
	{ id: 8, selected: false, label: 'dashboard' },
	{ id: 9, selected: false, label: 'тп' },
	{ id: 10, selected: false, label: 'сервис' },
	{ id: 11, selected: false, label: 'документация' },
	{ id: 12, selected: false, label: 'настройки' },
	{ id: 13, selected: false, label: 'кэдо' },
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
		tugs: [],
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
		tags: ['концепт', 'web-client'],
		tugs: ['конструктор'],
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
		tags: ['концепт', 'web-client'],
		tugs: ['карточка', 'dashboard'],
		latest: false,
		pic: 'pwa',
	},
	{
		id: 3,
		name: 'Конструктор согласований (старый)',
		date: '2018-02-22',
		client: 'web-client',
		field: 'конструктор',
		descr: 'Делал давно совместно с дигдезом. Использован vis.',
		url: 'https://ks-beta.vercel.app/',
		tags: ['концепт', 'web-client'],
		tugs: ['конструктор'],
		latest: false,
		pic: 'ks',
	},
	{
		id: 4,
		name: 'Визуализация маршрута согласования',
		date: '2020-01-21',
		client: 'web-client',
		field: 'ход согласования',
		descr: 'Показ различных веток в визе vis, в зависимости от исхода этапа',
		url: 'https://cycle-lilac.vercel.app/',
		tags: ['web-client'],
		tugs: ['контрол'],
		latest: false,
		pic: 'cycle',
	},
	{
		id: 5,
		name: 'Визуализация маршрута согласования',
		date: '2020-11-17',
		client: 'web-client',
		field: 'ход согласования',
		descr: 'Привязка к таймлайну. Использован vis',
		url: 'https://sogl.vercel.app/#/',
		tags: ['web-client'],
		tugs: ['контрол'],
		latest: false,
		pic: 'vis-timeline',
	},
	{
		id: 6,
		name: 'Поведение кнопок',
		date: '2020-05-29',
		client: 'web-client',
		field: 'общий',
		descr: 'Поведение кнопок в разных ситуациях',
		url: 'https://trip-emptyfortress.vercel.app/#/btn',
		tags: ['web-client'],
		tugs: ['контрол'],
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
		tags: ['web-client'],
		tugs: ['грид'],
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
		tags: ['web-client'],
		tugs: ['карточка'],
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
		tags: ['web-client'],
		tugs: ['карточка'],
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
		tags: ['web-client'],
		tugs: ['карточка'],
		latest: true,
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
		tags: ['admin'],
		tugs: [],
		latest: true,
		pic: 'admin',
	},
	{
		id: 12,
		name: 'Хьюстон',
		date: '2020-09-05',
		client: 'admin',
		field: 'дашборд',
		descr: 'Первоначальный вариант админки',
		url: 'https://houston-nqzs9dnr0.vercel.app/#/',
		tags: ['admin'],
		tugs: [],
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
		tags: ['web-client', 'концепт'],
		tugs: ['dashboard'],
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
		tags: ['web-client'],
		tugs: ['карточка'],
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
		tags: ['web-client'],
		tugs: ['карточка', 'elastic'],
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
		tags: ['web-client'],
		tugs: ['elastic'],
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
		tags: ['web-client'],
		tugs: ['elastic', 'грид'],
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
		tags: ['web-client'],
		tugs: ['elastic', 'грид'],
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
		tags: ['web-client'],
		tugs: ['elastic', 'грид'],
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
		tags: ['web-client'],
		tugs: ['elastic', 'грид'],
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
		tags: ['web-client'],
		tugs: ['elastic', 'грид'],
		latest: true,
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
		tags: ['web-client'],
		tugs: ['elastic', 'грид'],
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
		tags: ['web-client'],
		tugs: ['elasctic', 'грид'],
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
		tags: ['web-client'],
		tugs: ['справочник'],
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
		tags: ['другое'],
		tugs: ['storybook'],
		latest: false,
		pic: 'storybook',
	},
	{
		id: 26,
		name: 'Мобильный ВК',
		date: '2021-04-13',
		client: 'web-client',
		field: 'mobile',
		descr: 'Интерфейс мобильного ВК. Недоделано.',
		url: 'https://io-six.vercel.app/home',
		tags: ['web-client'],
		tugs: ['mobile'],
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
		tags: ['web-client'],
		tugs: ['контрол'],
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
		tags: ['web-client'],
		tugs: ['контрол'],
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
		tags: ['web-client'],
		tugs: ['контрол'],
		latest: true,
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
		tags: ['web-client'],
		tugs: ['контрол', 'карточка'],
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
		tugs: [],
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
		tags: ['web-client', 'концепт'],
		tugs: [],
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
		tags: ['web-client'],
		tugs: ['контрол', 'сервис'],
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
		tags: ['web-client'],
		tugs: ['грид'],
		latest: false,
		pic: 'gridsort',
	},
	{
		id: 35,
		name: 'Грид. Ресайз колонок, фильтрация',
		date: '2022-01-31',
		client: 'web-client',
		field: 'грид',
		descr: 'Ресайз колонок, column resize',
		url: 'https://base-git-grid1-emptyfortress.vercel.app/#/grid',
		tags: ['web-client'],
		tugs: ['грид'],
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
		tags: ['web-client'],
		tugs: ['грид'],
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
		tags: ['другое'],
		tugs: [],
		latest: false,
		pic: 'optimistic',
	},
	{
		id: 38,
		name: 'Дашборд',
		date: '2022-04-04',
		client: 'web-client',
		field: 'дашборд',
		descr: 'Графики на дашборде. Apexchart on dashboard',
		url: 'https://base-git-dashboard-emptyfortress.vercel.app/#/dashboard',
		tags: ['web-client'],
		tugs: ['dashboard'],
		latest: true,
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
		tugs: [],
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
		tugs: [],
		latest: false,
		pic: 'youtube',
	},
	{
		id: 41,
		name: 'Акт сдачи-приемки для xslt',
		date: '2022-04-19',
		client: 'web-client',
		field: 'другое',
		descr: 'Диадок форма акта сдачи-приемки для превью через xslt',
		url: 'https://diadok-form.vercel.app/',
		tags: ['web-client', 'другое'],
		tugs: [],
		latest: false,
		pic: 'diadok',
	},
	{
		id: 42,
		name: 'Логин через партнеров',
		date: '2022-04-10',
		client: 'web-client',
		field: 'другое',
		descr: 'Авторизация через сторонние сервисы: google, fb, vk...',
		url: 'https://login-ten-weld.vercel.app/#/success',
		tags: ['web-client', 'другое'],
		tugs: [],
		latest: false,
		pic: 'login',
	},
	{
		id: 43,
		name: 'Дашборд для Гознака',
		date: '2021-02-08',
		client: 'web-client',
		field: 'dashboard',
		descr: 'Страничка для гознака в виде дашборда',
		url: 'https://dash-sigma.vercel.app/',
		tags: ['web-client'],
		tugs: ['dashboard'],
		latest: false,
		pic: 'goznak',
	},
	{
		id: 44,
		name: 'Контекстное меню',
		date: '2021-02-11',
		client: 'web-client',
		field: 'общий',
		descr: 'Контрол - контекстное меню',
		url: 'https://base-eight.vercel.app/#/menu',
		tags: ['web-client'],
		tugs: ['контрол'],
		latest: false,
		pic: 'context',
	},
	{
		id: 45,
		name: 'Кнопки',
		date: '2021-02-14',
		client: 'web-client',
		field: 'общий',
		descr: 'Контрол - кнопки',
		url: 'https://base-eight.vercel.app/#/menu',
		tags: ['web-client'],
		tugs: ['контрол'],
		latest: false,
		pic: 'mybuttons',
	},
	{
		id: 46,
		name: 'Маршрут согласования - настройка',
		date: '2022-06-24',
		client: 'web-client',
		field: 'ход согласования',
		descr: 'Настройка маршрута согласования (визуализация) vis.js',
		url: 'https://ksnew-emptyfortress.vercel.app/#/card',
		tags: ['web-client'],
		tugs: ['контрол'],
		latest: true,
		pic: 'marshrut',
	},
	{
		id: 47,
		name: 'Сайт ТП (техподдержка)',
		date: '2018-07-13',
		client: 'тп',
		field: 'сайт',
		descr: 'Новый вид сайта техподдержки',
		url: 'https://support-emptyfortress.vercel.app/',
		tags: ['концепт'],
		tugs: ['тп'],
		latest: false,
		pic: 'support',
	},
	{
		id: 48,
		name: 'Сервис активации Docsvision',
		date: '2021-09-17',
		client: 'другое',
		field: 'сервис',
		descr: 'Сервис активации',
		url: 'https://editor-git-activation-emptyfortress.vercel.app/#/activation',
		tags: ['другое'],
		tugs: ['сервис'],
		latest: false,
		pic: 'activation',
	},
	{
		id: 49,
		name: 'Справочник кодов полномочий',
		date: '2022-08-03',
		client: 'web-client',
		field: 'справочник',
		descr: 'Справочник кодов полномочий для МЧД (машино-читаемых доверенностей)',
		url: 'https://polnomoch.vercel.app/#/power',
		tags: ['web-client'],
		tugs: ['справочник'],
		latest: false,
		pic: 'polnomoch',
	},
	{
		id: 50,
		name: 'Документация DV',
		date: '2022-08-24',
		client: 'web-client',
		field: 'документация',
		descr: 'Страница что нового в версии. Документация ДВ.',
		url: 'https://dvdoc.vercel.app/#/',
		tags: ['web-client'],
		tugs: ['документация'],
		latest: false,
		pic: 'dvdoc',
	},
	{
		id: 51,
		name: 'Конфигуратор DV',
		date: '2022-09-08',
		client: 'admin',
		field: 'настройки',
		descr: 'Конфигуратор docsvision. Первичные настройки при установке и обновлении.',
		url: 'https://configurator-rouge.vercel.app/#/',
		tags: ['admin'],
		tugs: ['настройки'],
		latest: false,
		pic: 'configurator',
	},
	{
		id: 52,
		name: 'Главная стр ГНС',
		date: '2022-09-15',
		client: 'web-client',
		field: 'дашборд',
		descr: 'Помощь в дизайне главной стр Газпром Нефтехим Салават',
		url: 'https://salavat.vercel.app/#/',
		tags: ['web-client'],
		tugs: ['dashboard'],
		latest: false,
		pic: 'salavat',
	},
	{
		id: 53,
		name: 'Гипотеза В.Степанова',
		date: '2022-10-13',
		client: 'web-client',
		field: 'грид',
		descr: 'Быстрая загрузка грида в папке, если сохранять последний параметрический запрос',
		url: 'https://polnomoch-git-folder-emptyfortress.vercel.app/#/',
		tags: ['web-client'],
		tugs: ['грид'],
		latest: false,
		pic: 'stepanov',
	},
	{
		id: 54,
		name: 'Настройки консоли управления',
		date: '2022-11-03',
		client: 'admin',
		field: 'настройки',
		descr: 'Страница настроек консоли управления админки',
		url: 'https://adminconsole-ruby.vercel.app/#/setup',
		tags: ['admin'],
		tugs: ['настройки'],
		latest: false,
		pic: 'adminsetup',
	},
	{
		id: 55,
		name: 'Личный кабинет',
		date: '2022-11-29',
		client: 'web-client',
		field: 'кэдо',
		descr: 'Страница личного кабинета для КЭДО',
		url: 'https://base-git-cabinet-emptyfortress.vercel.app/#/cabinet',
		tags: ['web-client'],
		tugs: ['кэдо'],
		latest: false,
		pic: 'kedo',
	},
	{
		id: 56,
		name: 'Настройки консоли управления',
		date: '2023-01-31',
		client: 'admin',
		field: 'настройки',
		descr: 'Страница настроек консоли управления админки',
		url: 'https://adminconsole-git-tigran-emptyfortress.vercel.app/#/setup/dvserver1',
		tags: ['admin'],
		tugs: ['настройки'],
		latest: true,
		pic: 'adminsetup',
	},
	{
		id: 57,
		name: 'Сложные структуры хранения данных',
		date: '2023-03-16',
		client: 'концепт',
		field: 'конструктор',
		descr: 'Проверка гипотезы Андреева, сложное дерево',
		url: 'https://likvid.vercel.app/#/',
		tags: ['концепт'],
		tugs: ['конструктор'],
		latest: false,
		pic: 'complextree',
	},
	{
		id: 58,
		name: 'Сервис поисков и представлений',
		date: '2023-08-22',
		client: 'web-client',
		field: 'поиск',
		descr: 'Настройка представлений для поиска',
		url: 'https://poisk.vercel.app/#/',
		tags: ['web-client'],
		tugs: ['контрол', 'сервис'],
		latest: true,
		pic: 'poisk',
	},
	{
		id: 59,
		name: 'Документация по css-переменным',
		date: '2023-10-11',
		client: 'web-client',
		field: 'документация',
		descr: 'Информация по css variables, перевод веб-клиента на переменные',
		url: 'https://nuxt-css.vercel.app/',
		tags: ['web-client'],
		tugs: ['документация', 'css variables'],
		latest: false,
		pic: 'variables',
	},
	{
		id: 60,
		name: 'Карточка настроек уведомлений',
		date: '2024-08-02',
		client: 'web-client',
		field: 'карточка',
		descr: 'Перенос настроек уведомлений в карточку веб-клиента',
		url: 'https://poisk-git-schedule-emptyfortress.vercel.app/#/schedule',
		tags: ['web-client'],
		tugs: ['карточка'],
		latest: false,
		pic: 'schedule',
	},
	{
		id: 61,
		name: 'Сервис поисков и представлений новый',
		date: '2024-08-02',
		client: 'web-client',
		field: 'карточка',
		descr: 'Перенос настроек уведомлений в карточку веб-клиента',
		url: 'https://poisk-git-select-emptyfortress.vercel.app/#/search',
		tags: ['web-client'],
		tugs: ['сервис'],
		latest: false,
		pic: 'pip',
	},
]

export { tags, tags1, columns, rows }
