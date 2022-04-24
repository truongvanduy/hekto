"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toggleMenuBtn = $('.js-toggle-menu');
const menu = $('.js-menu');

toggleMenuBtn.onclick = () => {
  toggleMenuBtn.classList.toggle('opened');
  menu.classList.toggle("opened");
}

// Hide header when scrolling down
const header = $('.header');

let currentPosition = 0;

window.onscroll = e => {
  console.log(e.deltaY);
  let newPosition = document.documentElement.scrollTop;
  if (newPosition > currentPosition && newPosition > header.offsetHeight && !menu.classList.contains('opened')) {
    header.classList.add('hide');
  } else if (newPosition < currentPosition) {
    header.classList.remove('hide');
  }
  currentPosition = newPosition;
}
