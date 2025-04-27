let back2top = document.querySelector(".backtotop");

back2top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  let scrolling = window.scrollY;
  if (scrolling > 50) {
    back2top.style.display = "block";
  } else {
    back2top.style.display = "none";
  }
});
