const square = document.querySelector(".square");

square.addEventListener("click", () => {
  const text = document.getElementById("text");
  const images = document.getElementById("images");
  const body = document.body;

  // Toggle content visibility
  text.classList.toggle("hidden");
  images.classList.toggle("show");

  // Toggle dark/light mode
  body.classList.toggle("dark-mode");
});
