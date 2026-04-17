// 1.Импорт и шаблон карточки.

import { products } from "./products.js";
console.log(products)

const productTemplate = document.querySelector('.product-card__template')
const productWrapper = document.querySelector('.product-card__wrapper')

// 2.Создание и реализация шаблона продуктовых карточек.

function createProductCard(product) {
  const productClone = productTemplate.content.cloneNode(true)
  const productCard = productClone.querySelector('.product-card')

  productCard.querySelector('.product-card__image').src = product.image
  productCard.querySelector('.product-card__skin-type').textContent = product.category
  productCard.querySelector('.product-card__name').textContent = product.title
  productCard.querySelector('.product-card__description').textContent = product.description
  productCard.querySelector('.product-card__price').textContent = `${product.price} ${product.currency}`

  const productIngredients = productCard.querySelector('.product-card__items-wrapper');

product.ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.className = 'product-card__item';
  li.textContent = ingredient;
  productIngredients.append(li);
});

return productClone
}

// 3. Получение массива объектов через метод reduce.

const productMap = products.reduce((acc, product) => {
  acc[product.title] = product.description;
  return acc;
}, {});
console.log(productMap)

// 4. Функции запроса количества и рендеринга карточек.
function getCardsCount() {
  const answer = prompt('Сколько карточек отобразить? (Введи число от 1 до 5)');
  const count = Number(answer);

  if (count >= 1 && count <= 5) {
    return count;
  } else {
    alert('Ошибка! Введите число от 1 до 5.');
    return 5;
  }
}

function renderProducts(products, count) {
  productWrapper.innerHTML = "";

  products.slice(0, count).forEach(product => {
    productWrapper.append(createProductCard(product));
  });
}

const count = getCardsCount();
renderProducts(products, count);




