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
    if(method.value === 'POST') {
      const res = await Axios.post('http://localhost/evil-models/ws.php', employee.value);

      if (res.status === 200 && res.statusText === 'OK') {
        const { status, message } = res.data
        alert(message)

        if (status == 1) clean()
      } else alert("Error")
    } else {
      const res = await Axios.put(`http://localhost/evil-models/ws.php?id=${ employee.value.id }`, employee.value);

      if (res.status === 200 && res.statusText === 'OK') {
        const { status, message } = res.data
        alert(message)

        // if (status == 1)
      } else alert("Error")
    }
  }

  const getEmployee = async (id: number) => {
    const res = await Axios.get('http://localhost/evil-models/ws.php?id='+id);

    if (res.status === 200 && res.statusText === 'OK') {
      employee.value = res.data.payload
    } else alert("Error")
  }

  return { employee, setMethod, clean, submit, getEmployee }
})