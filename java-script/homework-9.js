// МОДАЛЬНОЕ ОКНО

// Кнопка открытия

const registrationButton = document.querySelector(`.registration-button`);

// Модалка

const modal = document.querySelector(`.modal`);

// Кнопка закрытия

const closeButton = document.querySelector(`.modal-close-button`);

// ОТКРЫТЬ МОДАЛКУ

registrationButton.addEventListener(`click`, () => {
  modal.classList.add(`modal-showed`);
});

// ЗАКРЫТЬ МОДАЛКУ

closeButton.addEventListener(`click`, () => {
  modal.classList.remove(`modal-showed`);
});

// для регистрации (валидация + объект + лог)

const registrationForm = document.querySelector(`.registration-form`);

// Добавляем submit обработчик

registrationForm.addEventListener(`submit`, (event) => {
  event.preventDefault();

// Берём значения из формы

const formData = new FormData(registrationForm);
const firstName = formData.get(`firstName`);
const lastName = formData.get(`lastName`);
const birthDate = formData.get(`birthDate`);
const login = formData.get(`login`);
const password = formData.get(`password`);
const repeatPassword = formData.get(`repeatPassword`);

// Проверка паролей

if (password !== repeatPassword) {
  console.log(`Пароли не совпадают ❌`);
  return;
}

// Проверка HTML-валидации

if (!registrationForm.checkValidity()) {
  console.log(`Форма невалидна ❌ `);
  return
}

// Создаём объект пользователя

const user = {
  имя: firstName,
  фамилия: lastName,
  датаРождения: birthDate,
  логин: login,
  пароль: password,
  датаСоздания: new Date()
};

window.user = user;
console.log(`Регистрация успешна:`, user)
registrationForm.reset();
modal.classList.remove(`modal-showed`);
});