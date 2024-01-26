<script setup lang="ts">
import { RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />

  <div class="container-fluid my-3">
    <RouterView />
  </div>
</template>