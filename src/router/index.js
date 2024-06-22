import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Teorie from '../pages/Teorie.vue';
import Despre from '../pages/Despre.vue';
import ClaseMenu from '../pages/ClaseMenu.vue';
import MateriiMenu from '../pages/MateriiMenu.vue';
import Test from '../pages/Test.vue';

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
