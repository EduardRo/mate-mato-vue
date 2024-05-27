

<template>
    <div class="greetings">
      <h1 class="green">This is Clase Menu</h1>
      <h3>
        You’ve successfully created a project with
        
      </h3>
      <div v-for="item in items" :key="item.id">
        <p>{{ item.denumireclasa }}</p>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'ClaseMenu',
    data(){
        return {
            items:[],
            
        };

    },
    mounted(){
        axios.get('http://127.0.0.1:8000/api/clase').then(response =>{this.items=response.data;})
        .catch(error=>{console.error('Error fetching items', error);});
        
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  
  
  </style>
  