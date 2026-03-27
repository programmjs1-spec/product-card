import {socialMediaComments} from "./comments.js"

// 1.Создание массива чисел от 1 до 10, и фильтрация массива начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);
console.log(filteredNumbers);

// 2.Создание массива строк и проверка есть ли в массиве какая-то определенная сущность.

const furniture = [ "Sofa", "Wardrobe", "Armchair", "Table", "Chair"];
const checkFurniture = furniture.includes("Wardrobe");
console.log(checkFurniture);

// 3.Функция, которая изменяет порядок массива на противоположный.

function reverseArray(array) {
  array.reverse();
}
reverseArray(numbers);
reverseArray(furniture);

// 4.Вывод в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const comEmails = socialMediaComments.filter(comment =>
  comment.email.includes(".com")
);
console.log(comEmails);

// 5.Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1.

const sortingIds = socialMediaComments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(sortingIds);

// 6.Перебрать массив, что бы объекты состояли только из айди и имени.

const idAndNames = socialMediaComments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(idAndNames);

// 7. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const validatedComments = socialMediaComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180 
}));
console.log(validatedComments);

// 8. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailListByReduce = socialMediaComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailListByReduce);

const emailListByMap = socialMediaComments.map(comment => comment.email);
console.log(emailListByMap);

// 9. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailToString = emailListByMap.toString();
const emailStringByJoin = emailListByMap.join(", ");
