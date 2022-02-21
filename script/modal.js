/*
  Below Code for Modal Opening & Closing
*/
///// Modal Work 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.modal-close');


const closedModal = () => {
    modal.classList.add('blck_');
    overlay.classList.add('blck_');
}

const openedModal = () => {
    modal.classList.remove('blck_');
    overlay.classList.remove('blck_');
}

const closedModalByEscapeKey = (e) => {
    if (e.key === "Escape" && !modal.classList.contains('blck_')) {
        closedModal();
    }
}
var hello = "hello";

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openedModal);
}

closeModal.addEventListener('click', closedModal);

overlay.addEventListener('click', closedModal);

document.addEventListener('keydown', closedModalByEscapeKey);