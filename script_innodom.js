let btnOrder = document.querySelector('.btn-order')
let btnAbout = document.querySelector('.btn-about')
let btnForm = document.querySelector('.btn-form')
let checkbox = document.querySelector('.check-agree')
let agree = 0

btnAbout.addEventListener('click', () => {
    alert('Вся информация доступна по номеру телефона')
})
btnOrder.addEventListener('click', () => {
    alert('Чтобы оставить заказ заполните форму')
})
checkbox.addEventListener('click', () => {
    if (agree == 0) {
        agree = 1
    }
    else {
        agree = 0
    }

})
btnForm.addEventListener('click', () => {
    if (agree == 1) {
        alert('Ваши контактные данные приняты, ожидайте звонка')
    }
    else {
        alert('Вы не дали согласие на обработку персональных данных')
    }
})