import { ref } from 'vue'
import { defineStore } from 'pinia'
import Axios from 'axios'

import type Employee from '@/interfaces/employee.interface'
import { Authorization, EMPLOYEES_API } from '@/constants/employees.constant'
import { sweetSuccess, sweetError } from '@/utils/alert.utils'

export const useEmployeeStore = defineStore('employee', () => {
  const employee = ref<Employee>({
    id: null,
    last_name: '',
    first_name: '',
    age: null
  })

  const method = ref<String>('')
  const setMethod = (currentMethod: String) => method.value = currentMethod

  const clean = () => {
    employee.value = {
      id: null,
      last_name: '',
      first_name: '',
      age: null
    }
  }

  const submit = async (): Promise<Boolean> => {
    try {
      if (method.value === 'POST') {
        const res = await Axios.post(EMPLOYEES_API, employee.value, {
          headers: { Authorization }
        })

        if (res.status === 201 && res.statusText === "Created") {
          sweetSuccess("Registro creado.")
          return true
        }
      } else {
        const id = employee.value.id
        const res = await Axios.put(EMPLOYEES_API+id, employee.value, {
          headers: { Authorization }
        })

        if (res.status === 200 && res.statusText === 'OK') {
          sweetSuccess("Registro actualizado.")
          return true
        }
      }
    } catch (error: any) {
      if (Axios.isAxiosError(error))
        sweetError(error.response?.data.message)
      else
        sweetError(error.message)
    }

    return false
  }

  const getEmployee = async (id: number) => {
    try {
      const res = await Axios.get(EMPLOYEES_API+id, {
        headers: { Authorization }
      })
  
      employee.value = res.data
    } catch (error: any) {
      if (Axios.isAxiosError(error))
        sweetError(error.response?.data.message)
      else
        sweetError(error.message)
    }
  }

  return { employee, setMethod, clean, submit, getEmployee }
})