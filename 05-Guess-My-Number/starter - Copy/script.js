'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').innerHTML);
// document.querySelector('.message').textContent = 'correct Number';
// console.log(document.querySelector('.score'));
// console.log(document.querySelector('html'));
// console.log(document.querySelector('p'));
// document.querySelector('.number').innerHTML = 13;
// document.querySelector('.score').innerHTML = 15;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highScore = 0;
document.querySelector('.score').innerHTML = score;
document.querySelector('.number').textContent = '?';
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', () => {
  // console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('no number');
    // document.querySelector('.message').textContent = 'no number';
    if (score > 1) {
      score--;
      // console.log(score);
      document.querySelector('.score').innerHTML = score;
    } else {
      displayMessage('lost');
      // document.querySelector('.message').textContent = 'lost';
      document.querySelector('.score').innerHTML = 0;
    }
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
    displayMessage('correct');
    // document.querySelector('.message').innerHTML = 'correct';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'high' : 'low');
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? 'high' : 'low';
    if (score > 1) {
      score--;
      console.log(score);
      document.querySelector('.score').innerHTML = score;
    } else {
      displayMessage('lost');
      // document.querySelector('.message').textContent = 'lost';
      document.querySelector('.score').innerHTML = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   document.querySelector('.message').textContent = 'high';
  //   if (score > 1) {
  //     score--;
  //     console.log(score);
  //     document.querySelector('.score').innerHTML = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'lost';
  //     document.querySelector('.score').innerHTML = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'low';
  //   if (score > 1) {
  //     score--;
  //     console.log(score);
  //     document.querySelector('.score').innerHTML = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'lost';
  //     document.querySelector('.score').innerHTML = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('guesing');
  // document.querySelector('.message').innerHTML = 'guesing';
  document.querySelector('.score').innerHTML = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
