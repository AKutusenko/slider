const elements = {
  upBtn: document.querySelector(".up-button"),
  downBtn: document.querySelector(".down-button"),
  sidebar: document.querySelector(".sidebar"),
  mainSlide: document.querySelector(".main-slide"),
  container: document.querySelector(".container"),
};

let activeSlideIdx = 0;
const slidesCount = elements.mainSlide.querySelectorAll("div").length;

elements.sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
elements.upBtn.addEventListener("click", () => {
  changeSlide("up");
});
elements.downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIdx === slidesCount - 1
      ? (activeSlideIdx = 0)
      : activeSlideIdx++;
  } else if (direction === "down") {
    activeSlideIdx === 0
      ? (activeSlideIdx = slidesCount - 1)
      : activeSlideIdx--;
  }

  const height = elements.container.clientHeight;
  elements.sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`;
  elements.mainSlide.style.transform = `translateY(-${
    activeSlideIdx * height
  }px)`;
}
