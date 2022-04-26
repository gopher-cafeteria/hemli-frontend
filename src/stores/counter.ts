import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore("counter", () => {
  // state
  const counter = ref(0)

  // getters
  const doubleCount = computed(() => {
    return counter.value * 2
  })

  // actions
  const increment = () => {
    counter.value++
  }

  return {
    counter,
    doubleCount,
    increment
  }


})
