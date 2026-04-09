const square = document.querySelector(".square");

square.addEventListener("click", () => {
  const text = document.getElementById("text");
  const images = document.getElementById("images");
  const body = document.body;

  // Toggle content
  text.classList.toggle("hidden");
  images.classList.toggle("show");

  // Toggle hedgehog / background
  body.classList.toggle("dark-mode");
});
