const toggleBtn = document.body.querySelector(".theme");

toggleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.toggle("dark-mode");
});
