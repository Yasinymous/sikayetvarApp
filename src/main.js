import { createApp } from 'vue'
import App from './App.vue'

// vue router
import VueRouter from 'vue-router'
import router from './router'
// store
import {store} from './store'
// modal
import modal from '@/components/general/modal.vue'
// vueSweet
import VueSweetalert2 from 'vue-sweetalert2';
// taildwind.css 
import './index.css'
// sweet.css
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.component('modal', modal);


app.use(store)
app.use(VueSweetalert2);
app.use(VueRouter);
app.use(router);

app.mount('#app')