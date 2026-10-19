
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    themeButton.textContent = isLight
      ? "🌙 Dark mode"
      : "☀️ Light mode";
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");

      card.hidden =
        selected !== "all" && !categories.includes(selected);
    });
  });
});
