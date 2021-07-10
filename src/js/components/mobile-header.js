const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu')

    burger.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('burger--active');
      menu.classList.toggle('active');
    });