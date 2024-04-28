document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        closeAllAccordions();
        this.classList.add("active");
      }
    });
  });

  // Open the first accordion item on load
  items[0].classList.add("active");
});

function closeAllAccordions() {
  const items = document.querySelectorAll(".accordion-item");
  items.forEach((item) => {
    item.classList.remove("active");
  });
}
