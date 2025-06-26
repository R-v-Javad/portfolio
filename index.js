const burgerBtn = document.querySelector(".header__burger");

burgerBtn.addEventListener("click", () =>
  document.body.classList.toggle("menu-open")
);
