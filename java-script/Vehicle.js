class Vehicle {
  constructor(name, speed) {
    this.name = name
    this.speed = speed
  }

  move() {
    return `${this.name} едет со скоростью ${this.speed} км/ч`
  }
}

export default Vehicle