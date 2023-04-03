const animationElement = document.querySelectorAll(".show-on-scroll");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slideWrapper = document.querySelector(".slide-wrapper");
const slideMain = document.querySelector(".slide_main");
const slideItem = document.querySelectorAll(".slide__item");
let positionX = 0;
let index = 0;
function tonggleAnimationElementWindow(element) {
  let rect = element.getClientRects()[0];
  let heightScreen = window.innerHeight;
  if (!(rect?.bottom < 0 || rect?.top > heightScreen)) {
    element.classList.add("start");
  } else {
    element.classList.remove("start");
  }
}

function checkAnimation() {
  [...animationElement].forEach((el) => {
    tonggleAnimationElementWindow(el);
  });
}

function handleShow() {
  slideMain.style.transform = `translateX(${positionX}px)`;
}

checkAnimation();

window.onscroll = checkAnimation;

nextBtn.onclick = function () {
  index++;
  const slideWidth = slideWrapper.offsetWidth;
  if (index > slideItem.length - 1) {
    index = 0;
    positionX = slideWidth;
  }
  positionX = positionX - slideWidth;
  handleShow();
};

prevBtn.onclick = function () {
  index--;
  const slideWidth = slideWrapper.offsetWidth;
  if (index < 0) {
    index = slideItem.length - 1;
    positionX = -(index + 1) * slideWidth;
  }
  positionX = positionX + slideWidth;
  handleShow();
};
