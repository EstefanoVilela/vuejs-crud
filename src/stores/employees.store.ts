import { ref } from 'vue'
import { defineStore } from 'pinia'
import Axios from 'axios'
import type Employee from '@/interfaces/employee.interface'

export const useEmployeesStore = defineStore('employees', () => {
  const employees = ref<Employee[]>([])
  const message = ref<String>('')

  const getEmployees = async () => {
    const res = await Axios.get('http://localhost/evil-models/ws.php')

    if (res.status === 200 && res.statusText === 'OK') {
      message.value = res.data.message
      employees.value = res.data.payload
    } else alert("Error")
  }

  const destroy = async (ev: Event) => {
    const target = ev.currentTarget as HTMLElement
    const { id } = target.dataset;

    const res = await Axios.delete(`http://localhost/evil-models/ws.php?id=${ id }`)
    const { status, message } = res.data;

    alert(message)
    // if (status ==1)
    //   redirect
  }

  return { employees, message, getEmployees, destroy }
})