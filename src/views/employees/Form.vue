<script setup lang="ts">

import { onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useEmployeeStore } from '@/stores/employee.store'

const route = useRoute()
const es = useEmployeeStore()

onMounted(() => {
  const { id } = route.query

  if (id) {
    es.getEmployee(parseInt(id as string));
    es.setMethod("PUT");
  } else {
    es.clean()
    es.setMethod("POST");
  }
})
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <form class="card" @submit.prevent="es.submit">

        <div class="card-header">
          <h3>Employees Form</h3>
        </div>
        <div class="card-body">

          <div class="row mb-3">
            <label for="last_name" class="col-4 col-form-label">Apellidos:</label>
            <div class="col-8">
              <input type="text" class="form-control" id="last_name" v-model="es.employee.last_name">
            </div>
          </div>
          <div class="row mb-3">
            <label for="first_name" class="col-4 col-form-label">Nombres:</label>
            <div class="col-8">
              <input type="text" class="form-control" id="first_name" v-model="es.employee.first_name">
            </div>
          </div>
          <div class="row">
            <label for="age" class="col-4 col-form-label">Edad:</label>
            <div class="col-8">
              <input type="text" class="form-control" id="age" v-model="es.employee.age">
            </div>
          </div>

        </div>
        <div class="card-footer text-center">
          <button type="submit" class="btn btn-primary me-2">Guardar</button>
          <RouterLink to="/employees" class="btn btn-danger">Volver</RouterLink>
        </div>

      </form>
    </div>
  </div>
</template>

<style scoped>

button, a {
  width: 100px;
}

</style>