var main_button = document.querySelector('.main_button')
var button_calc = document.querySelector('.button_calc')
var button_password = document.querySelector('.button_password')
var info = document.querySelector('.info')
var title_password = document.querySelector('.title_password')
var clave = false
var validation = false

//Agregar borde a imagen principal
main_button.addEventListener('click', () => {
  if (main_button.style.borderStyle != 'solid') {
    main_button.style.border = '2px solid red'
  } else {
    main_button.style.borderStyle = 'none'
  }
})
//Validacion de numero de Ticket
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
    clave = true
  }
})
//Validacion de clave
button_password.addEventListener('click', () => {
  let pass = Number(
    document.querySelector('.hundred').value +
      document.querySelector('.ten').value +
      document.querySelector('.unit').value
  )

  if (pass == 911) {
    title_password.innerHTML = 'Password 1 correcto'
    validation = true
  } else if (pass == 714) {
    title_password.innerHTML = 'Password 2 correcto'
    validation = true
  } else {
    title_password.innerHTML = 'Password incorrecto'
  }
})

if (validation == true && clave == true) {
}
