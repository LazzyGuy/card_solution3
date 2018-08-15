let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
function a() {
  // first.classList.add("anime");
  first.classList.add("anime", "back");
  first.classList.remove("front");
  second.classList.remove("back", "anime");
  second.classList.add("front");
}
function b() {
  // second.classList.add("anime");
  second.classList.add("back", "anime");
  second.classList.remove("front");
  third.classList.remove("back", "anime");
  third.classList.add("front");
}
function c() {
  third.classList.add("back", "anime");
  third.classList.remove("front");
  first.classList.remove("back", "anime");
  first.classList.add("front");
}
