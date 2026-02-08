// Покраска первой карточки

const firstCardRecolorButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');

const redHashColor = '#ff0033d7';

firstCardRecolorButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = redHashColor
});

// Покраска всех карточек

const pinkHashColor = '#d204b3';

const productCards = document.querySelectorAll('.product-card');
const recolorAllCardsButton = document.getElementById('recolor-all-cards-button');

recolorAllCardsButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = pinkHashColor
  )
});

// Переход на страницу Google

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на страницу Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
};

// Наведение мышки на заголовок

const contentTitle = document.querySelector('.title');

contentTitle.addEventListener('mouseover', function () {
  console.log(contentTitle.textContent);
});

// Кнопка перекрашивающая сама себя

const recolorButton = document.querySelector('#recolor-button');

recolorButton.addEventListener('click', event => {
  recolorButton.classList.toggle("bg_yellow");
});