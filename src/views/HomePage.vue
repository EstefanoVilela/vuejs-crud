<script setup lang="ts">

import { useCounterStore } from '@/stores/counter'
const cs = useCounterStore();

</script>

<template>
  <h3>Counter</h3>
  <p>{{ cs.count }}</p>
  <p>{{ cs.doubleCount }}</p>
  <button @click="cs.increment" class="btn btn-primary me-2">Increment</button>
  <button @click="cs.decrement" class="btn btn-danger">Decrement</button>
</template>