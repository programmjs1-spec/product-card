import Car from "./Car.js"

class ElectricCar extends Car {
  constructor(name, speed , battery) {
    super(name, speed, 'electric')

    this.battery = battery
  }

  charge() {
    return `${this.name} заряжается до ${this.battery}% ⚡`
  }

  move() {
    return `${this.name} едет со скоростью ${this.speed} км/ч`
  }
}

export default ElectricCar