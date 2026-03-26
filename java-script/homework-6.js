// 1. Создание объекта на основе данных.

let person = {
  name: "AbduLlah",
  surname: "AbduRrahman",
  age: 25,
  country: "Saudia Arabia",
  city: "Mecca",
  job: "IT company",
  position: "front-end developer",
  relationshipStatus: "married"
};

// 2.Объект, который будет хранить данные об автомобиле

let car = {
  mark: "Nissan",
  model: "Nissan X-Trail",
  year: 2022,
  color: "black",
  transmission: "Automatic"
};
car.owner = person;

// 3. Функция проверки максимальной скорости

function addMaxSpeed(car) {
  if ("maxSpeed" in car) {
    return;
  } else {
    car.maxSpeed = 220;
  }
}
addMaxSpeed(car);

// 4. Функция вывода свойства объекта

function showObjectProperty(obj, propertyName) {
  console.log(obj[propertyName]);
}
showObjectProperty(car, "model")

// 5. Массив, который содержит название продуктов.

const products = ["Яблоко", "Груша", "Ананас", "Дыня", "Арбуз"];

// 6.Массив, который содержит объект продуктов.

const religiousBooks = [
  {
    title: "Книга Единобожия",
    author: "Мухаммад ибн Абдуль-Ваххаб",
    year: 2010,
    coverColor: "черный",
    genre: "религиозная литература"
  },
  { 
    title: "Акыда аль-Васытыя",
    author: "шейх аль-Ислям ибн-атТаймиййа",
    year: 2015,
    coverColor: "красный",
    genre: "религиозная литература"
  },
  { 
    title: "ат-Тафсир",
    author: "Абдуррахман ас-Саади",
    year: 2012,
    coverColor: "чёрный",
    genre: "религиозная литература"
  }
];
religiousBooks.push({
  title: "Основы сунны",
  author: "имам Ахмад ибн Ханбаль",
  year: 2016,
  coverColor: "красный",
  genre: "религиозная литература"
});

// 7.Дополнительный массив книг и объединение. 

const historyBooks = [
  {
  title: "Аль-бидая ва аль-Нихая",
  author: "ибн Касир",
  year: 1999,
  coverColor: "красный",
  genre: "история"
  },
  {
  title: "Тарих аль-Ислям",
  author: "Шамсуддин аз-Захаби",
  year: 1990,
  coverColor: "чёрный",
  genre: "история"
  }
];
const allBooks = [...religiousBooks, ...historyBooks];

// 8. Функция с map (добавление isRare)

function getRareBooks(bookArray) {
  return bookArray.map(book => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
}
const updatedBooks = getRareBooks(allBooks);
console.log(updatedBooks);