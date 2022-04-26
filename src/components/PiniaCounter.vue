<script setup lang="ts">
import { useCounterStore } from "@/stores/counter"
const counter = useCounterStore()
</script>

<template>
  <h3>{{ counter.counter }}</h3>

  <button type="button" @click="counter.increment">Increment By One</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
