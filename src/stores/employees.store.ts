import { ref } from 'vue'
import { defineStore } from 'pinia'
import Axios from 'axios'
import type Employee from '@/interfaces/employee.interface'

export const useEmployeesStore = defineStore('employees', () => {
  const employees = ref<Employee[]>([])
  const message = ref<String>('No hay datos.')

  const getEmployees = async () => {
    const res = await Axios.get("http://localhost:3000/employees")

    if (res.status === 200 && res.statusText === 'OK') {
      employees.value = res.data
    } else alert("Error")
  }

  const destroy = async (ev: Event) => {
    try {
      const target = ev.currentTarget as HTMLElement
      const { id } = target.dataset

      const res = await Axios.delete(`http://localhost:3000/employees/${id}`)
      alert("Éxito!")
      // redirect
    } catch (error) {
      alert(error)
    }
  }

  return { employees, message, getEmployees, destroy }
})