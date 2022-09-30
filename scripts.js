const openModalButton = document.querySelector("#openAboutMe");
const closeModalButton = document.querySelector("#closeModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fadeModal");

const toggleModal = () => {
  modal.classList.toggle("hideModal");
  fade.classList.toggle("hideModal");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
