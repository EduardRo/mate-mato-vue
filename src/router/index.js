import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import HelloWorld from '../components/HelloWorld.vue';
import About from '../components/About.vue';
import ClaseMenu from '../components/ClaseMenu.vue';

const routes = [
  {
    path: '/', name: 'Home', component: Home
  },
  {
    path: '/hello', name: 'HelloWorld', component: HelloWorld
  },
  {
    path: '/about', name: 'About', component: About
  },
  {
    path:'/clase', name:'Clase', component:ClaseMenu
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
