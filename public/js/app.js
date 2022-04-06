"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toggleMenuBtn = $('.js-toggle-menu');
const menu = $('.js-menu');

toggleMenuBtn.onclick = () => {
  toggleMenuBtn.classList.toggle('opened');
  menu.classList.toggle("opened");
}