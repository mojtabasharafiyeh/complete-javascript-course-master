'use strict';
// const booking = [];
// const createBooking = function (flight, numPassengers, price) {
//   const bookings = {
//     flight,
//     numPassengers,
//     price,
//   };
//   booking.push(bookings);
//   console.log(booking);
// };
// createBooking('homa323', 120, 1000);
// createBooking('homa323');
// const flight = 'homa';
// const mojtaba = {
//   name: 'mojtaba',
//   lastName: 'sharafiyeh',
//   passport: 123456789,
// };
// const checkIn = function (flight, passenger) {
//   flight = 'zagros';
//   passenger.name = 'mr' + passenger.name;
//   if (passenger.passport === 123456789) {
//     alert('check');
//   } else {
//     alert('wrong');
//   }
// };
// checkIn(flight, mojtaba);
// console.log(flight);
// console.log(mojtaba);
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };
// console.log(oneWord('Moj taba'));
// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };
// console.log(upperFirstWord('mojtaba is hardworker'));
// const transform = function (str, fn) {
//   return console.log(fn(str), fn.name);
// };
// transform('mojtaba is hardworker', upperFirstWord);
// transform('mojtaba is hardworker', oneWord);
// const greeting = greeting => name => console.log(`${greeting} ${name}`);
// greeting('hello')('moji');
// const homa = {
//   airline: 'homa',
//   iatcode: 'HO',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatcode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iatcode}${flightNum}`, name });
//   },
// };
// const book = homa.book;
// const bookHoma = book.bind(homa);
// const book24 = book.bind(homa, 24);
// bookHoma(12, 'asghar');
// bookHoma(23, ' mojtaba');
// bookHoma(43, ' mojtaba');
// book24('moji24');
// homa.plane = 300;
// homa.buyPlane = function () {
//   console.log(this);
//   this.plane++;
//   console.log(this.plane);
// };
// const fn = homa.buyPlane;
// document.querySelector('.buy').addEventListener('click', fn.bind(homa));
// const addTax = function (rate, value) {
//   return value + value * rate;
// };
// const addTaxIran = addTax.bind(null, 0.09);
// console.log(addTaxIran(100));
// const chAddTax = function (value) {
//   return function (rate) {
//     return value + value * rate;
//   };
// };
// console.log(chAddTax(100)(0.1));
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };
// poll.registerNewAnswer = function () {
//   const answer = +prompt(`What is your favourite programming language?
//   0: JavaScript
//   1: Python
//   2: Rust
//   3: C++`);
//   if (answer === 0 || answer === 1 || answer === 2 || answer === 3) {
//     this.answers[answer]++;
//     console.log(this.answers);
//   }
//   displayResults();
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResults = function (str) {
//   if (typeof str === Array) {
//     console.log(...str);
//   } else if (typeof str === String) {
//     console.log(`poll result is ${str}`);
//   }
// };
// examples closure
// let f;
// const g = function () {
//   const a = 10;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// g();
// f();
// console.dir(f);
// const z = function () {
//   const x = 8;
//   f = function () {
//     console.log(x * 2);
//   };
// };
// z();
// f();
// console.dir(f);

// const boardPassenger = function (number, wait) {
//   const perGroup = number / 3;
//   const setTimeOutFunction = function (a, b) {
//     console.log(
//       `number of passenger is ${number} and it's ${perGroup} pergroup and a is ${a} and b i ${b} `
//     );
//   };
//   setTimeout(setTimeOutFunction, wait * 1000);
// };
// console.dir();
// const perGroup = 100;
// boardPassenger(100, 3);
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  const addEventHandler = function () {
    header.style.color = 'blue';
  };
  header.addEventListener('click', addEventHandler);
})();
