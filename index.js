const elements = {
  upBtn: document.querySelector(".up-button"),
  downBtn: document.querySelector(".down-button"),
  sidebar: document.querySelector(".sidebar"),
  mainSlide: document.querySelector(".main-slide"),
  slider: document.querySelector(".slider"),
};

let activeSlideIdx = 0;
const slidesCount = elements.mainSlide.querySelectorAll("li").length;

elements.sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
elements.upBtn.addEventListener("click", () => {
  changeSlide("up");
});
elements.downBtn.addEventListener("click", () => {
  changeSlide("down");
});
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    changeSlide("up");
  } else if (e.code === "ArrowDown") {
    changeSlide("down");
  }
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

  const height = elements.slider.clientHeight;
  elements.sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`;
  elements.mainSlide.style.transform = `translateY(-${
    activeSlideIdx * height
  }px)`;
}
