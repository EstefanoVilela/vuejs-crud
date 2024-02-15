import { ref } from 'vue'
import { defineStore } from 'pinia'
import Axios from 'axios'
import type Employee from '@/interfaces/employee.interface'

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

  const submit = async () => {
    try {
      if (method.value === 'POST') {
        const res = await Axios.post("http://localhost:3000/employees", employee.value)

        if (res.status === 201 && res.statusText === "Created") {
          alert("Guardado!")
          // redirect
        } else alert("Error")
      } else {
        const res = await Axios.put(`http://localhost:3000/employees/${ employee.value.id }`, employee.value)

        if (res.status === 200 && res.statusText === 'OK') {
          alert("Guardado!")
          // redirect
        } else alert("Error")
      }
    } catch (error) {
      alert(error)
    }
  }

  const getEmployee = async (id: number) => {
    const res = await Axios.get(`http://localhost:3000/employees/${id}`)

    if (res.status === 200 && res.statusText === 'OK') {
      employee.value = res.data
    } else alert("Error")
  }

  return { employee, setMethod, clean, submit, getEmployee }
})