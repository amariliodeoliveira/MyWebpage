/* Modal Config */
const openModalButton1 = document.querySelector("#aboutMeModal");
const openModalButton2 = document.querySelector("#portfolioModal");
const closeModalButton = document.querySelector("#closeModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fadeModal");

const toggleModal = () => {
  modal.classList.toggle("hideModal");
  fade.classList.toggle("hideModal");
};

[openModalButton1, openModalButton2, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});


/* Contact Me */