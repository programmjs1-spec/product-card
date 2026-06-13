class Drink {
  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error('Нельзя создать экземпляр класса Drink')
    }
    
    this.name = name;
    this.size = size;
    this.price = price;
    this._temperature = temperature;
  }

getInfo() {
  return `Name: ${this.name}, Size: ${this.size}, Price: ${this.price}`;
}

getTemperature() {
  return `Temperature: ${this._temperature}`;
}

setTemperature(newTemp) {
  this._temperature = newTemp;
}

_prepare() {
  this._temperature = 60;
  console.log(`Готовим ${this.name}...`);
}

serve() {
  console.log(`Ваш ${this.name} в процессе приготовления`);
  this._prepare()
  console.log(`Ваш ${this.name} готов и подан`)
}
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);

    this.beanType = beanType;
    this.milkType = milkType
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature , teaType ,strength, aroma ) {
    super(name, size, price, temperature)

    this.teaType = teaType;
    this.strength = strength;
    this.aroma = aroma;
  }
}

class Cocktail extends Drink {
  constructor(name, size, price, temperature, ingredients) {
    super(name, size, price, temperature)

    this.ingredients = ingredients;
  }
}

class Cafe {
  constructor(name , location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Name: ${this.name}, Location: ${this.location}`;
  }

  orderDrink(drink) {
    console.log('Ваш заказ принят!');
    drink.serve();
  }
}

const cafe = new Cafe ('Central Cafe', 'Mecca')
const latte = new Coffee (
  'Latte',
  'Big Size',
  30,
  50,
  'Arabica',
  'Milk'
);

cafe.orderDrink(latte)