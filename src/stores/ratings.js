import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRatingsStore = defineStore('ratings', () => {
  const selectedRating = ref(0)
  const ratings = [1, 2, 3, 4, 5]

  function setRating(index) {
    selectedRating.value = ratings[index]
  }

  return { selectedRating, ratings, setRating }
})
