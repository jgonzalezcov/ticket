var main_button = document.querySelector('.main_button')
var button_calc = document.querySelector('.button_calc')
var info = document.querySelector('.info')

main_button.addEventListener('click', () => {
  if (main_button.style.borderStyle != 'solid') {
    main_button.style.border = '2px solid red'
  } else {
    main_button.style.borderStyle = 'none'
  }
})
button_calc.addEventListener('click', () => {
  let sum_ticket =
    Number(document.querySelector('.input_amount_1').value) +
    Number(document.querySelector('.input_amount_2').value) +
    Number(document.querySelector('.input_amount_3').value)
  if (sum_ticket == 0) {
    info.innerHTML = 'No has seleccionado ningun ticket'
  } else if (10 < sum_ticket) {
    info.innerHTML = 'Llevas demasiados stickers'
  } else {
    info.innerHTML = 'LLevas ' + sum_ticket + ' Tickets'
  }
})
