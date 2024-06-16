<template>

    <h1>This is TEst</h1>
    {{ $route.params.codserie }}

    <div v-for="item in items" :key="item.id" class="flex justify-center">
        <button 
        @click="goToRoute('Test', item.codserie)"
        class="flex justify-between bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 border border-blue-700 rounded w-30rem ">
        <div >{{ item.codserie }} - {{ item.codtest }} - {{ item.enunt }} </div>  
        
        </button>
      </div>

</template>
<script>

import axios from 'axios';

export default {
    name:'Test',
    data() {
        return {
            items: []
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/test/M09AL01')
            .then(response => {
                this.items = response.data
                console.log(this.items);
            })
            .catch(error => {
                console.error('Error fetching items', error);
            });
    
        
    }, 
   
}
</script>

    
