// Open and close modal
const openModalBtn = document.querySelector(".openModal");
const modal = document.querySelector(".modalContainer");
const closeModalBtn = document.querySelector(".closeModal");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

// Interests
function showContent(event, tabName) {
  const tabLinks = document.querySelectorAll(".tabLink");
  const tabContents = document.querySelectorAll(".tabContent");

  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove("active");
  });

  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
  document.getElementById(tabName).classList.add("active");
}
