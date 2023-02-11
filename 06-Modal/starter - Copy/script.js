'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
// console.log(modal);
// console.log(overLay);
// console.log(btnCloseModal);
const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};
const openModal = function () {
  console.log('clicked');
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};
for (let index = 0; index < btnShowModal.length; index++) {
  btnShowModal[index].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);
const pressKey = e => {
  // console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
};
document.addEventListener('keydown', pressKey);
