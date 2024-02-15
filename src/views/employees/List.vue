<script setup lang="ts">

import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useEmployeesStore } from '@/stores/employees.store'
const es = useEmployeesStore()

onMounted(() => es.getEmployees())

</script>

<template>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h1 class="mb-0">Employees List</h1>
    <RouterLink to="/employees/create" class="btn btn-primary">Crear</RouterLink>
  </div>

  <div class="table-responsive">
    <table class="table table-bordered table-hover">
      <thead class="table-light">
        <tr>
          <th>#</th>
          <th>APELLIDOS</th>
          <th>NOMBRES</th>
          <th>EDAD</th>
          <th>OPCIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="es.employees.length > 0" v-for="employee in es.employees">
          <td>{{ employee.id }}</td>
          <td>{{ employee.last_name }}</td>
          <td>{{ employee.first_name }}</td>
          <td>{{ employee.age }}</td>
          <td>
            <RouterLink :to="`/employees/edit?id=${ employee.id }`" class="btn btn-warning me-2">Editar</RouterLink>

            <button class="btn btn-danger" @click="es.destroy" :data-id="employee.id">Eliminar</button>
          </td>
        </tr>
        <tr v-else>
          <td colspan="5" class="text-center">{{ es.message }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>