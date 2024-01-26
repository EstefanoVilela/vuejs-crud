import { ref } from 'vue'
import { defineStore } from 'pinia'
import Axios from 'axios'
import type Employee from '@/interfaces/employee.interface'

export const useEmployeesStore = defineStore('employees', () => {
  const employees = ref<Employee[]>([])

  const getEmployees = async () => {
    const res = await Axios.get('http://localhost/evil-models/ws.php')

    if (res.status === 200 && res.statusText === 'OK') {
      employees.value = res.data.payload
    } else alert("Error")
  }

  return { employees, getEmployees }
})