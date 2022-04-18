const btnCart = document.querySelector('#btn-cart');
const cartContainer = document.querySelector('.cart-container');

const btnHamburg = document.querySelector('#menu-hamburger');
const btnClose =  document.querySelector('#btn-close');
const menuContainer = document.querySelector('.menu');

function showCart() {
  cartContainer.classList.toggle('show');
}

function showMenu(){
  menuContainer.classList.add('show-menu');
}

function closeMenu(){
  menuContainer.classList.remove('show-menu');
}

btnCart.addEventListener('click', showCart);
btnHamburg.addEventListener('click', showMenu);
btnClose.addEventListener('click', closeMenu);