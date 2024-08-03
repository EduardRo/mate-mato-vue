import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    answers: {}
  }),
  actions: {
    addAnswer(questionId, answer) {
      this.answers[questionId] = answer
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