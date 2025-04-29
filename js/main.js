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

let type = document.querySelectorAll(".type");
let typeArray = Array.from(type);
typeArray.map((item) => {
  let typeText = item.innerHTML;
  let typeArr = typeText.split("");
  item.innerHTML = "";
  let typing = 0;

  function typeJs() {
    if (typing < typeText.length) {
      item.innerHTML += typeText.charAt(typing);
      typing++;
      typeArr = typeText.split("");
    } else {
      typeArr.pop();
      item.innerHTML = typeArr.join("");
      if (typeArr.length == 0) {
        typing = 0;
      }
    }
  }
  setInterval(() => {
    typeJs();
  }, 200);
});
