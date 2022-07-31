import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './views/login.vue'
import './views/main.vue'
import './assets/techglow.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPen, faX } from '@fortawesome/free-solid-svg-icons'
import { ref, onMounted } from 'vue'
library.add(faInstagram, faFacebookF, faPen, faX)


import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgKcCr7zunwOaYuQk9STENq5aMPF_W1uY",
  authDomain: "techglow-login.firebaseapp.com",
  projectId: "techglow-login",
  storageBucket: "techglow-login.appspot.com",
  messagingSenderId: "168050855214",
  appId: "1:168050855214:web:daff50ae84d9b2a4473ebf"
};

initializeApp(firebaseConfig);
const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
