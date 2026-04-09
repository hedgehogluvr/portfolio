const square = document.querySelector(".square");

square.addEventListener("click", () => {
  const text = document.getElementById("text");
  const images = document.querySelector(".image-section, .project-image-section");
  const body = document.body;

  if (text) text.classList.toggle("hidden");
  if (images) {
    images.classList.toggle("show");
    images.classList.toggle("hidden");
  }

  body.classList.toggle("dark-mode");
});
