const burger = document.querySelector(".header__burger");
const item = document.querySelector(".header__list");
const list = document.querySelector(".header__item");
const list1 = document.querySelector(".header__item1");
const list2 = document.querySelector(".header__item2");
const nav = document.querySelector(".header__navigation");  

burger.addEventListener("click", function() {
  burger.classList.toggle("header__burger--close");
  item.classList.toggle("header__list--opened");
  list.classList.toggle("header__item--active");
  list1.classList.toggle("header__item--active1");
  list2.classList.toggle("header__item--active2");
  nav.classList.toggle("header__navigation--block");
})