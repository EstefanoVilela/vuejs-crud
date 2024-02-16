import Swal from 'sweetalert2'

const timer = 3000
const showConfirmButton = false
const timerProgressBar = true

export const sweetSuccess = (text: string) => {
  Swal.fire({
    icon: "success",
    title: "Éxito!",
    text,
    timer,
    showConfirmButton,
    timerProgressBar
  })
}

export const sweetError = (text: string) => {
  Swal.fire({
    icon: "error",
    title: "Error!",
    text,
    timer,
    showConfirmButton,
    timerProgressBar
  })
}