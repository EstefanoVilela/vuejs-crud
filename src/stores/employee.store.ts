import { ref } from 'vue'
import { defineStore } from 'pinia'
import Axios from 'axios'
import type Employee from '@/interfaces/employee.interface'

export const useEmployeeStore = defineStore('employee', () => {
  const employee = ref<Employee>({
    id: 0,
    last_name: '',
    first_name: '',
    age: 0
  })

  const submit = async () => {
    const res = await Axios.post('http://localhost/evil-models/ws.php', employee.value);

    if (res.status === 200 && res.statusText === 'OK') {
      const { status, message } = res.data
      alert(message)

      if (status == 1) {
        employee.value = {
          id: 0,
          last_name: '',
          first_name: '',
          age: 0
        }
      }
    } else alert("Error")
  }

  return { employee, submit }
})