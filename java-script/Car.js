import Vehicle from './Vehicle.js'

class Car extends Vehicle {
  constructor(name, speed, fuel) {
    super(name, speed)

    this.fuel = fuel
  }

  refuel() {
    return `${this.name} заправляется: ${this.fuel}`
  }
}

export default Car