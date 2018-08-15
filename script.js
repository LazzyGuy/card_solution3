let third = document.getElementById("third");
let sec = document.getElementById("second");
let first = document.getElementById("first");
function second() {
  third.style.transition = ".5s";
  third.style.transform = "translateX(-100%)";
  third.style.opacity = "0";
  setTimeout(() => {
    third.style.zIndex = 1;
    sec.style.zIndex = 3;
    first.style.zIndex = 2;
    third.style.transform = "translate(0)";
  }, 500);
}

function f() {
  sec.style.transition = ".5s";
  sec.style.transform = "translateX(-100%)";
  sec.style.opacity = "0";
  setTimeout(() => {
    sec.style.zIndex = 1;
    first.style.zIndex = 3;
    third.style.zIndex = 2;
    sec.style.transform = "translate(0);";
  }, 500);
}

function spin() {
  first.style.transition = ".5s";
  first.style.transform = "translateX(-100%)";
  first.style.opacity = "0";
  setTimeout(() => {
    first.style.zIndex = 1;
    sec.style.zIndex = 2;
    third.style.zIndex = 3;
    first.style.transform = "translate(20px, 20px)";
    first.style.opacity = "0";
  }, 500);
}
