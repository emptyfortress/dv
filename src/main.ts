import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import 'quasar/src/css/index.sass'
import '@/assets/styles/main.scss'

import App from './App.vue'

const app = createApp(App)
app.use(Quasar, {
	plugins: {
		Notify,
	}, // import Quasar plugins and add here
	config: {
		notify: {
			// type: 'warning',
			position: 'bottom-right',
			timeout: 3000,
			icon: 'mdi-alert',
			color: 'primary',
			classes: 'notific',
		},
	},
	supportTS: {
		tsCheckerConfig: {
			eslint: {
				enabled: true,
				files: './src/**/*.{ts,tsx,js,jsx,vue}',
			},
		},
	},
	/*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
})

app.mount('#app')
