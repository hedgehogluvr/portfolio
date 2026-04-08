function switchContent() {
  const text = document.getElementById("text");
  const images = document.getElementById("images");
  const body = document.body;

  text.classList.toggle("hidden");
  images.classList.toggle("show");
  body.classList.toggle("dark-mode");
}
const square = document.querySelector(".square");
square.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
function switchContent() {
  const text = document.getElementById("text");
  const images = document.getElementById("images");

  text.classList.toggle("hidden");
  images.classList.toggle("show");

  // THIS triggers background + hedgehog swap
  document.body.classList.toggle("dark-mode");
}
