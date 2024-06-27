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

document.getElementById("hideButton").addEventListener("click", function () {
  document.getElementById("sidebar").style.display = "none";
});

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("read-more-text");
  var btnText = document.getElementById("read-more-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать далее";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше";
    moreText.style.display = "inline";
  }
}

document
  .getElementById("callbackButton")
  .addEventListener("click", function () {
    document.getElementById("callbackForm").classList.add("callback--open");
  });

document
  .getElementById("callbackButton1")
  .addEventListener("click", function () {
    document.getElementById("callbackForm").classList.add("callback--open");
  });

document.getElementById("closeCallback").addEventListener("click", function () {
  document.getElementById("callbackForm").classList.remove("callback--open");
});
