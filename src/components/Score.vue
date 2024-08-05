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
</div>


</template>


<script setup>

import { ref } from 'vue';
import {useQuizStore} from '../stores/quiz.js';

const quizStore = useQuizStore();
let totalScore = 0;

const calculatedScore = (answer) => {
  if (answer[0]==="R") {
    totalScore=totalScore+2
    return 2;    
  }  else {
    return 0;}
  
  
};



</script>