import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowTrendUp, faBookmark, faClapperboard, faFilm, faList, faPlay, faSearch, faTicket } from '@fortawesome/free-solid-svg-icons'

library.add(faClapperboard, faFilm, faArrowTrendUp, faTicket, faSearch, faBookmark, faPlay, faList)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
