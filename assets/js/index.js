/********************************************************************************************************
 * Desafío Parte I: Agregar y quitar borde a imagen haciendo clic en ella.                              *
 ********************************************************************************************************/
var main_button = document.querySelector('.main_button')
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
var button_calc = document.querySelector('.button_calc')
var info = document.querySelector('.info')
button_calc.addEventListener('click', () => {
  let sum_ticket =
    Number(document.querySelector('.input_amount_1').value) +
    Number(document.querySelector('.input_amount_2').value) +
    Number(document.querySelector('.input_amount_3').value)
  if (sum_ticket == 0) {
    info.innerHTML = 'No has seleccionado ningún ticket'
  } else if (10 < sum_ticket) {
    info.innerHTML = 'Llevas demasiados stickers'
  } else {
    info.innerHTML = 'Llevas ' + sum_ticket + ' Tickets'
  }
})
/********************************************************************************************************
 *Desafío Parte III: Validación de claves (Claves correctas 911 y 714).                                 *
 ********************************************************************************************************/
var button_password = document.querySelector('.button_password')
var title_password = document.querySelector('.title_password')
button_password.addEventListener('click', () => {
  let pass = Number(
    document.querySelector('.hundred').value +
      document.querySelector('.ten').value +
      document.querySelector('.unit').value
  )
  if (pass == 911) {
    title_password.innerHTML = 'Password 1 correcto'
  } else if (pass == 714) {
    title_password.innerHTML = 'Password 2 correcto'
  } else {
    title_password.innerHTML = 'Password incorrecto'
  }
})
