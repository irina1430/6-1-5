var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

const btnShowMore = document.querySelector(".btn__show-more");
const showBrands = document.querySelector(".swiper-wrapper");
const windowWidth = window.innerWidth;
console.log(showBrands.scrollHeight);
btnShowMore.addEventListener("click", () => {
  if (showBrands.classList.contains("expanded")) {
    showBrands.style.height = "160px";
    btnShowMore.textContent = "Показать все";
    btnShowMore.classList.remove("rotate");
    showBrands.classList.remove("expanded");
  } else {
    showBrands.style.height = `${showBrands.scrollHeight}px`;
    btnShowMore.textContent = "Скрыть";
    btnShowMore.classList.add("rotate");
    showBrands.classList.add("expanded");
  }
});

const btnShowMore2 = document.querySelector(".btn__show-more2");
const showBrands2 = document.querySelector(".tech-repair__list");
const windowWidth2 = window.innerWidth;
console.log(showBrands2.scrollHeight);
btnShowMore2.addEventListener("click", () => {
  if (showBrands2.classList.contains("expanded")) {
    showBrands2.style.height = "160px";
    btnShowMore2.textContent = "Показать все";
    btnShowMore2.classList.remove("rotate");
    showBrands2.classList.remove("expanded");
  } else {
    showBrands2.style.height = `${showBrands2.scrollHeight}px`;
    btnShowMore2.textContent = "Скрыть";
    btnShowMore2.classList.add("rotate");
    showBrands2.classList.add("expanded");
  }
});

function toggleMenu() {
  const menu = document.querySelector(".main__sidebar");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
