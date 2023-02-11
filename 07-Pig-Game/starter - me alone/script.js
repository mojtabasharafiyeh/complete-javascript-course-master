'use strict';
let totalScorePlayer0 = 0;
let totalScorePlayer1 = 0;
let currentPlayer0 = 0;
let currentPlayer1 = 0;
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
document.getElementById('score--0').innerHTML = totalScorePlayer0;
document.getElementById('score--1').innerHTML = totalScorePlayer1;

const randomRoll = () => {
  return Math.trunc(Math.random() * 6) + 1;
};
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const newBtnEventHandle = () => {
  totalScorePlayer0 = 0;
  totalScorePlayer1 = 0;
  currentPlayer0 = 0;
  currentPlayer1 = 0;
  document.getElementById('score--0').innerHTML = totalScorePlayer0;
  document.getElementById('score--1').innerHTML = totalScorePlayer1;
  document.getElementById('current--1').innerHTML = currentPlayer1;
  document.getElementById('current--0').innerHTML = currentPlayer0;
};
const rollDiceEventHandler = () => {
  const number = randomRoll();
  console.log(number);
  if (
    !player0.classList.contains('player--winner') &&
    !player1.classList.contains('player--winner')
  ) {
    if (player0.classList.contains('player--active')) {
      if (number !== 1) {
        currentPlayer0 = number + currentPlayer0;

        document.getElementById('current--0').innerHTML = currentPlayer0;
      } else {
        currentPlayer0 = 0;
        document.getElementById('current--0').innerHTML = currentPlayer0;
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
      }
    } else if (player1.classList.contains('player--active')) {
      if (number !== 1) {
        currentPlayer1 = number + currentPlayer1;

        document.getElementById('current--1').innerHTML = currentPlayer1;
      } else {
        currentPlayer1 = 0;
        document.getElementById('current--1').innerHTML = currentPlayer1;
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
      }
    }
  }
};
const holdEventHandler = () => {
  if (
    !player0.classList.contains('player--winner') &&
    !player1.classList.contains('player--winner')
  ) {
    if (player0.classList.contains('player--active')) {
      totalScorePlayer0 = currentPlayer0 + totalScorePlayer0;
      if (totalScorePlayer0 < 100) {
        document.getElementById('score--0').innerHTML = totalScorePlayer0;
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
        currentPlayer0 = 0;
        currentPlayer1 = 0;
        document.getElementById('current--0').innerHTML = currentPlayer0;
        document.getElementById('current--1').innerHTML = currentPlayer1;
      } else {
        document.getElementById('score--0').innerHTML = totalScorePlayer0;

        player0.classList.add('player--winner');
      }
    } else if (player1.classList.contains('player--active')) {
      totalScorePlayer1 = currentPlayer1 + totalScorePlayer1;
      if (totalScorePlayer1 < 100) {
        document.getElementById('score--1').innerHTML = totalScorePlayer1;
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
        currentPlayer0 = 0;
        currentPlayer1 = 0;
        document.getElementById('current--0').innerHTML = currentPlayer0;
        document.getElementById('current--1').innerHTML = currentPlayer1;
      } else {
        document.getElementById('score--1').innerHTML = totalScorePlayer1;
        player1.classList.add('player--winner');
      }
    }
  }
};
roll.addEventListener('click', rollDiceEventHandler);
hold.addEventListener('click', holdEventHandler);
newBtn.addEventListener('click', newBtnEventHandle);
