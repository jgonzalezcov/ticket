/********************************************************************************************************
 * Desafío Parte I: Agregar y quitar borde a imagen haciendo clic en ella. La imagen es en la que se    *
 * encuentran los logos de las bandas (class=main_image).                                               *
 ********************************************************************************************************/
const main_button = document.querySelector('.main_button')
main_button.addEventListener('click', () => {
  if (main_button.style.borderStyle != 'solid') {
    main_button.style.border = '2px solid red'
  } else {
    main_button.style.borderStyle = 'none'
  }
})
/********************************************************************************************************
 *Desafío Parte II: Validación de Ticket, los cuales la suma de las 3 opciones no puede ser mayor a 10. *
 ********************************************************************************************************/
let info = document.querySelector('.info')
button_calc = document
  .querySelector('.button_calc')
  .addEventListener('click', () => {
    let sum_ticket =
      Number(document.querySelector('.input_amount_1').value) +
      Number(document.querySelector('.input_amount_2').value) +
      Number(document.querySelector('.input_amount_3').value)
    if (sum_ticket === 0) {
      info.innerHTML = 'No has seleccionado ningún ticket'
    } else if (sum_ticket > 10) {
      info.innerHTML = 'Llevas demasiados stickers'
    } else {
      info.innerHTML = `Llevas ${sum_ticket} ${' '} Tickets`
    }
  })
/********************************************************************************************************
 *Desafío Parte III: Validación de claves (Claves correctas 911 y 714).                                 *
 ********************************************************************************************************/
let title_password = document.querySelector('.title_password')
document.querySelector('.button_password').addEventListener('click', () => {
  let pass = Number(
    document.querySelector('.hundred').value +
      document.querySelector('.ten').value +
      document.querySelector('.unit').value
  )
  if (pass === 911) {
    title_password.innerHTML = 'Password 1 correcto'
  } else if (pass === 714) {
    title_password.innerHTML = 'Password 2 correcto'
  } else {
    title_password.innerHTML = 'Password incorrecto'
  }
})
