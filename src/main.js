import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faInstagram, faFacebookF)

import './assets/techglow.css'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
