const headerToggleBtn = document.querySelector(".header__toggle-btn");
const headerInnerWrapper = document.querySelector(".header__inner-wraper");
headerToggleBtn.addEventListener("click", () => {
  headerInnerWrapper.classList.toggle("show-nav");
});
