<template>

    <h1>This is TEst page</h1>
    {{ $route.params.codserie }}

    <div v-for="item in items" :key="item.id" class="flex justify-center">
        <button 
        @click="goToRoute('Test', item.codserie)"
        class="flex justify-between bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 border border-blue-700 rounded w-30rem ">
        <div >{{ item.codserie }} - {{ item.codtest }} - {{ item.enunt }} </div>  
        
        </button>
    </div>
    <div><div>
            <Quiz  />
        </div></div>

</template>
<script>

import axios from 'axios';
import Quiz from '../components/Quiz.vue';


export default {
    name:'Test',
    data() {
        return {
            items: []
        }
    },
    components: {
    Quiz,
    },
    mounted() {
        axios.get(`http://127.0.0.1:8000/api/test/${this.$route.params.codserie}`)
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

    
