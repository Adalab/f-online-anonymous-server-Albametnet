'use strict';
var menuIcon = document.querySelector('.nav-trigger');
var cross = document.querySelector('.nav-close');
var items = document.querySelector('.nav');

function showMenu (){
  items.classList.add('nav__open');
  menuIcon.classList.add('trigger__out');
  items.classList.add('nav__animation');
}
function hideMenu() {
  items.classList.remove('nav__open');
  menuIcon.classList.remove('trigger__out');
}
menuIcon.addEventListener('click', showMenu);
cross.addEventListener('click', hideMenu);