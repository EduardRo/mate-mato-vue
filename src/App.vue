<script>
import PrincipalMenu from './components/Menus/PrincipalMenu.vue';

export default{
  name:'App',
  components:{PrincipalMenu}
}
</script>

<template>
  <header>
   <PrincipalMenu v-if="$route.name === 'Home'" />
   
  
  </header> 
  <router-view />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
nav {
  margin-bottom: 1rem;
}
nav a {
  margin-right: 1rem;
}
</style>
