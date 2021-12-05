(function () {
  const toggleBtn = document.body.querySelector(".theme");
  const countryLink = document.querySelectorAll(".card");

  toggleBtn.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("dark-mode");
  });

  countryLink.forEach((link) => {
    link.addEventListener("click", () => {
      window.location.href = "./page.html";
    });
  });
})();
