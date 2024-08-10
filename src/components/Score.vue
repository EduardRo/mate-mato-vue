<template>
    <div>
      <div v-for="(item, index) in quizStore.answers" :key="index" class="flex justify-center">
        <div>{{ item }}</div> 
        <br><br>
        {{ calculatedScore(item) }}
        <br><br>
      </div>
      <div>Total: {{ totalScore }}</div>
      <br><br> 
      
      <br><br> 
      <button @click="submitArray">Submit</button>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import axios from 'axios';
  import {useQuizStore} from '../stores/quiz.js';
  
  export default {
    setup() {
      // Reactive state
      const iduser = ref('999');
      const idtest = ref('T654');
      const totalScore = ref(0);
      const raspuns = ref([]);
  
      // Simulated answers from quizStore (replace with actual data fetching logic)
      //const quizStore = useQuizStore();
    
      const quizStore = {
      answers: [
        'RM10AL0307',
        'RM10AL0303',
        'V1M10AL0302',
        'V2M10AL0303',
        'V2M10AL0301'
      ]
    };
    
  
      // Method to calculate score (replace with actual scoring logic)
      const calculatedScore = (item) => {
        console.log(`this is %{item}`,item)
       
      return 10; // Example fixed score for each answer
    };
  
      // Method to submit the array
      const submitArray = () => {
        // Reset values before calculation
        raspuns.value = [];
        totalScore.value = 0;
  
        quizStore.answers.forEach((item) => {
          raspuns.value.push(item);
          totalScore.value += calculatedScore(item);
        });
  
        // Prepare the object to send
        const salvareRezultat = {
          iduser: iduser.value,
          idtest: idtest.value,
          punctaj: totalScore.value,
          raspuns: raspuns.value,
        };
  
        // Log the object to the console to verify
        console.log(salvareRezultat);
  
        // Send the object to the API
        axios.post('http://127.0.0.1:8000/api/save/results', salvareRezultat)
          .then(response => {
            console.log('Data saved successfully:', response.data);
          })
          .catch(error => {
            console.error('Error submitting array:', error);
          });
      };
  
      return {
        quizStore,
        calculatedScore,
        totalScore,
        submitArray
      };
    }
  };
  </script>
  