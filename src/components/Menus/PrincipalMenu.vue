<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link :to="{name:'Clase'}">Teste</router-link>
        <router-link to="/teorie">Teorie</router-link>
        <router-link to="/despre">Despre</router-link>
    </nav>


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
