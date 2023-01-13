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