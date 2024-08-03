import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    answers: {},
    question: 0
  }),
  actions: {
    addAnswer(questionId, answer) {
      this.answers[questionId] = answer
    },
    newQuestion(question) {
        // this move to next question
        question++;
        return question
    },
    calculateScore() {
      let score = 0
      for (const questionId in this.answers) {
        if (this.answers[questionId] === 'correct') {
          score++
        }
      }
      return score
    }
  }
})