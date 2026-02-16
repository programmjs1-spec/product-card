// 1. Фукция с параметрами города и температуры

function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}
showTemperature(`Мекка`, `35`);

// 2. Переменная со скоростью света со встроенной функцией для сравнения 

const LIGHT_SPEED = 299792458;

function compareWithLightSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log(`Сверхсветовая скорость!`);
  } else if (speed === LIGHT_SPEED) {
    console.log(`Скорость света!`);
  } else {
    console.log(`Субсветовая скорость!`);
  }
}
compareWithLightSpeed(259999565);
compareWithLightSpeed(299792458);
compareWithLightSpeed(300000000);

// 3.Переменная с названием товара и ценой со встроенной функцией для сравнения бюджета с ценой товара

let bookName = "Книга Единобожия";
let bookPrice = 600;

function buyBook(budget) {
  if (budget >= bookPrice) {
    console.log(`Товар ${bookName} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${bookPrice}, пополните баланс`);
  }
}
buyBook(700);
buyBook(500);
buyBook(600);

// 4. Функция с именованием

function buyCar() {
}

// 5. Три переменные с именованием

let laptop = "Ноутбук Acer";
let furniture = "Шкаф";
const dishes = "Стакан";







