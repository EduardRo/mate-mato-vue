<template>

<h1>This is Score</h1>

<div class="flex justify-center">


   <!-- {{quizStore.answers}} -->

    <div v-for="item in quizStore.answers" :key="item.id" class="flex justify-center">
      <div>{{item}}</div> 
       <br><br>
       {{calculatedScore(item)}}
       <br><br>
       
       
       
       
        
    </div>
    <br><br> 
    <div>Total:{{totalScore}}</div>
       <br><br> 
    <button @click="submitArray">Submit</button>
</div>


</template>


<script setup>

import { ref } from 'vue';
import {useQuizStore} from '../stores/quiz.js';
import axios from 'axios';

const quizStore = useQuizStore();
let totalScore = 0;

const calculatedScore = (answer) => {
  if (answer[0]==="R") {
    totalScore=totalScore+2
    return 2;    
  }  else {
    return 0;}
  
  
};

const submitArray = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/submit-array', quizStore.answers.value);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error submitting array:', error);
  }
};



</script>