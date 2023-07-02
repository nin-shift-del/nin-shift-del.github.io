//Tung type2 sa una2

let typed = new Typed(".multiple-text", {
  strings: [
    "Junior Web Developer",
    "Bachelor of Science in Information Technology",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//About me Tab chuchuchu
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//Para sa menu na responsive

let sidemenu = document.getElementById("sidemenu");

function openMenu() {
  sidemenu.style.right = "0";
}

function closeMenu() {
  sidemenu.style.right = "-100%";
}

//modal na x x
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

//Intro warning modal
// Get the modal element
var modal = document.getElementById("myModal");

// Get the close button
var closeBtn = document.getElementById("closeBtn");

// Show the modal when the page loads
window.onload = function () {
  modal.style.display = "block";
};

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Prevent scrolling when the modal is open
window.addEventListener("scroll", function () {
  if (modal.style.display === "block") {
    window.scrollTo(0, 0);
  }
});
