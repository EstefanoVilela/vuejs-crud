import { ref } from 'vue'
import { defineStore } from 'pinia'
import Axios from 'axios'

import type Employee from '@/interfaces/employee.interface'
import { Authorization, EMPLOYEES_API } from '@/constants/employees.constant'
import { sweetSuccess, sweetError } from '@/utils/alert.utils'

export const useEmployeesStore = defineStore('employees', () => {
  const employees = ref<Employee[]>([])
  const message = ref<String>('No hay datos.')

  const getEmployees = async () => {
    try {
      const res = await Axios.get(EMPLOYEES_API, {
        headers: { Authorization }
      })

      employees.value = res.data
    } catch (error: any) {
      if (Axios.isAxiosError(error))
        sweetError(error.response?.data.message)
      else
        sweetError(error.message)
    }
  }

  const destroy = async (id: number): Promise<Boolean> => {
    try {
      const res = await Axios.delete(EMPLOYEES_API + id, {
        headers: { Authorization }
      })

      if (res.status === 204 && res.statusText === "No Content") {
        sweetSuccess("Registro eliminado.")
        return true
      }
    } catch (error: any) {
      if (Axios.isAxiosError(error))
        sweetError(error.response?.data.message)
      else
        sweetError(error.message)
    }

    return false
  }

  return { employees, message, getEmployees, destroy }
})