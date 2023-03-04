const toggleButton = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('header__menu--open');
});
