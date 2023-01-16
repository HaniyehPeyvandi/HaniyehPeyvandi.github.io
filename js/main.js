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

// Interest section
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

// Show more/less button in skill section
const skillFooter = document.querySelector(".skill__footer");
const skillFooterText = document.querySelector(".skill__footerText");
const skillFooterIcon = document.querySelector(
  ".skill__footer .fa-chevron-down"
);

const skillHidden = document.querySelectorAll(".skill__hidden");
const skillShown = document.querySelectorAll(".skill__shown");

skillFooter.addEventListener("click", (e) => {
  if (skillFooterText.innerHTML === "Show all skills") {
    skillFooterText.innerHTML = "Show less";
    skillFooterIcon.style.transform = "rotate(-180deg)";
  } else {
    skillFooterText.innerHTML = "Show all skills";
    skillFooterIcon.style.transform = "rotate(0deg)";
  }

  skillHidden.forEach((item) => {
    item.classList.toggle("skill__shown");
    item.classList.toggle("skill__hidden");
  });

  skillShown.forEach((item) => {
    item.classList.toggle("skill__shown");
    item.classList.toggle("skill__hidden");
  });
});

// Show more/less button in project section
const projectFooter = document.querySelector(".project__footer");
const projectFooterText = document.querySelector(".project__footerText");
const projectFooterIcon = document.querySelector(
  ".project__footer .fa-chevron-down"
);

const projectHidden = document.querySelectorAll(".project__hidden");
const projectShown = document.querySelectorAll(".project__shown");

projectFooter.addEventListener("click", (e) => {
  if (projectFooterText.innerHTML === "Show all projects") {
    projectFooterText.innerHTML = "Show less";
    projectFooterIcon.style.transform = "rotate(-180deg)";
  } else {
    projectFooterText.innerHTML = "Show all projects";
    projectFooterIcon.style.transform = "rotate(0deg)";
  }

  projectHidden.forEach((item) => {
    item.classList.toggle("project__shown");
    item.classList.toggle("project__hidden");
  });

  projectShown.forEach((item) => {
    item.classList.toggle("project__shown");
    item.classList.toggle("project__hidden");
  });
});
