import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Teorie from '../components/Teorie.vue';
import Despre from '../components/Despre.vue';
import ClaseMenu from '../components/ClaseMenu.vue';
import MateriiMenu from '../components/MateriiMenu.vue';
import Test from '../components/Test.vue';

const routes = [
  {
    path: '/', name: 'Home', component: Home
  },
  {
    path: '/teorie', name: 'Teorie', component: Teorie
  },
  {
    path: '/despre', name: 'Despre', component: Despre
  },
  {
    path:'/clase', name:'Clase', component:ClaseMenu
  },
  {
    path:'/materii/:codclasa', name:'MateriiMenu', component:MateriiMenu
  },
  {
    path:'/test/:codserie', name:'Test', component:Test
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
