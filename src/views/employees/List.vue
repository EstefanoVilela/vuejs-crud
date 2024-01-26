<script setup lang="ts">

import { onMounted } from 'vue'
import { useEmployeesStore } from '@/stores/employees.store'
const es = useEmployeesStore()

onMounted(() => es.getEmployees())

</script>

<template>
  <h1>Employees List</h1>
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
        <tr v-for="employee in es.employees">
          <td>{{ employee.id }}</td>
          <td>{{ employee.last_name }}</td>
          <td>{{ employee.first_name }}</td>
          <td>{{ employee.age }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>