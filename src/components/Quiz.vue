<script setup>
import { ref } from 'vue';
const props = defineProps({
    questions: Object
});

const count = ref(0);
</script>

<template>
    <h1>This is a Quiz component</h1>
    <div v-if="questions">
        <p>{{ questions.enunt }}</p>
        <p>{{ questions.v1 }}</p>
    </div>

    <button @click="count++">You clicked me {{ count }} times.</button>
</template>
