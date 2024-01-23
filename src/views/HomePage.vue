<script setup lang="ts">

import { useCounterStore } from '@/stores/counter'
const cs = useCounterStore();

</script>

<template>
  <h3>Counter</h3>
  <p>{{ cs.count }}</p>
  <p>{{ cs.doubleCount }}</p>
  <button @click="cs.increment">Increment</button>
  <button @click="cs.decrement">Decrement</button>
</template>