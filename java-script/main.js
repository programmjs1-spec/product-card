import './script.js'
import './homework-5.js'
import './homework-6.js'
import './homework-7.js'
import './homework-8.js'
import './homework-9.js'
import './homework-11.js'

import Modal from './Modal.js'
import Form from './Form.js'
import Car from './Car.js'
import ElectricCar from './ElectricCar.js'


// MODAL

let modal

document.querySelector('.registration-button').addEventListener('click', () => {
  modal = new Modal('registration-modal', true)
  modal.open(true)
})


// FORM

const form = new Form('.registration-form')

document.querySelector('.registration-form').addEventListener('submit', (e) => {
  e.preventDefault()

  if (!form.isValid()) return

  console.log(form.getValues())

  form.reset()
  modal.close()
})


// SUBSCRIBE FORM

const subscribeForm = new Form('.subscribe-form')

document.querySelector('.subscribe-form').addEventListener('submit', (e) => {
  e.preventDefault()

  if (!subscribeForm.isValid()) return

  console.log(subscribeForm.getValues())

  subscribeForm.reset()
})


// CAR

const bmw = new Car('BMW', 220, 'diesel')
console.log(bmw.move())
console.log(bmw.refuel())


// ELECTRIC CAR

const tesla = new ElectricCar('Tesla', 250, 90)
console.log(tesla.move())
console.log(tesla.charge())