const backTopBtn = document.getElementById("backTopBtn");

const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height,
  //change the button class from hidden to show
  if (y > 20) {
    backTopBtn.className = "return-to-top show";
  } else {
    backTopBtn.className = "return-to-top hidden";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollBackTop = () => {
  //scroll down pixels from top
  const distance =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (distance > 0) {
    window.requestAnimationFrame(scrollBackTop);
    window.scrollTo(0, distance - distance / 10);
  }
};

backTopBtn.addEventListener("click", e => {
  e.preventDefault();
  scrollBackTop();
});

function smoothJump(ele) {
  document.querySelector(ele).scrollIntoView({
    behavior: "smooth"
  });
}

const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".top-nav");

btn.addEventListener("click", menuOnClickHandler);
menu.addEventListener("click", menuOnClickHandler);

function menuOnClickHandler() {
  const bodyt = document.querySelector("body");
  bodyt.classList.toggle("open");
}
