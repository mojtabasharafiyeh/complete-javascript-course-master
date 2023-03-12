'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
containerMovements.innerHTML = '';
const displayAmount = function (acount) {
  const result = acount.reduce((ac, cur) => {
    return ac + cur;
  }, 0);
  currentAcount.balance = result;
  labelBalance.textContent = `${result}EUR`;
};

// const displayMovements = function (movments, sort = false) {
//   containerMovements.innerHTML === ' ';
//   const movs = sort ? movments.slice().sort((a, b) => a - b) : movments;

//   movs.forEach(function (item, index) {
//     let type = item > 0 ? 'deposit' : 'withdrawal';
//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${
//       index + 1
//     } ${type}</div>
//       <div class="movements__value">${item}₤</div>
//      </div>
//   `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const displaySummary = function (acc) {
  const income = acc.movements
    .filter(item => item > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${income}₤`;
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}₤`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
const createUserName = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(item => item[0])
      .join('');
  });
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`key : ${key}
// value: ${value}`);
// });

// movements.forEach(function (mov, i, arr) {
//   console.log(mov);
//   console.log(i);
//   console.log(arr);
// });

// const obj = {
//   d: {
//     z: 'j',
//     x: 'k',
//   },
// };

/////////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.at(0));
// console.log(arr.at(-1));
// console.log(arr.slice(-1).concat(arr.splice(0, -1)));
// console.log(arr);
// console.log(arr.splice(-3, -1));
// console.log(arr);
// console.log(arr.splice(0, -2));
// console.log(arr.slice(0, -1));
// console.log(arr.entries());
// for (const [i, j] of arr.entries()) {
//   console.log(i, j);
// }
// for (const [index, item] of movements.entries()) {
//   console.log(`index is ${index} and item is ${item}`);
// }
// for (const [key, { z, x }] of Object.entries(obj)) {
//   console.log(key, z, x);
// }
// chalenge 1
// const checkDogs = function (test1, test2) {
//   const shallow1 = test1.splice(1, test1.length - 3);
//   const arr = [...shallow1, ...test2];
//   console.log(shallow1);
//   arr.forEach(function (item, index) {
//     console.log(
//       `dog number ${index + 1} is ${
//         item > 3 ? 'an adult' : 'still puppy'
//       } and has ${item} years old`
//     );
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.map(num => num * 2));
// console.log(arr.filter(num => num < 10 && num > 5));
// console.log(arr.reduce(num => num ));
// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// const [first, ...other] = words;
// console.log(first);
// console.log(words);
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars);
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// console.log(strCopy.join());
// console.log(strCopy);
// console.log(createUserName('mojtaba sharafiyeh frontend developer'));
// console.log(createUserName('mojtaba sharafiyeh'));

// const deposit = movements.filter(x => x > 0);
// console.log(deposit);
// const withdrawal = movements.filter(x => x < 0);
// console.log(withdrawal);
// const trulyFilter = movements.filter(x => true);
// const falsyFilter = movements.filter(x => false);
// console.log(trulyFilter);
// console.log(falsyFilter);

// console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, array) {
//   console.log(`iterration ${i}: ${acc}`);
//   const sum = acc + cur;
//   console.log(`after sum iteration ${i}`);
//   return sum;
// }, 0);
// console.log(balance);
// maximum

// const movements = [200, -200, -400, 3000, -650, -130, 70, 1300];
// const max = movements.reduce((acc, cur, i) => {
//   if (acc > cur) {
//     console.log(acc, cur, i);
//     return acc;
//   } else {
//     console.log(acc, cur, i);
//     return cur;
//   }
// }, movements[0]);
// console.log(max);
// const calcAverageHumanAge = function (ages) {
//   const result = ages
//     .map((item, index) => {
//       if (item <= 2) {
//         return item * 2;
//       } else if (item > 2) {
//         return 16 + item * 4;
//       }
//     })
//     .filter(x => x >= 18)
//     .reduce((acc, cur, i, arr) => {
//       // console.log(arr);
//       return acc + cur / arr.length;
//     }, 0);
//   return result;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
////////////////////////////////////////////////////////////////////// find
// const findByOwner = function (accounts) {
//   return accounts.find(item => item.owner === 'Jessica Davis');
// };
// console.log(findByOwner(accounts));
// for (const item of accounts) {
//   if (item.owner === 'Jessica Davis') {
//     // item.owner = 'mojtaba sharafiyeh';
//     console.log(item);
//   }
// }
// console.log(accounts.find(item => item.owner === 'Jessica Davis'));
createUserName(accounts);
let currentAcount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAcount = accounts.find(
    item => item.username === inputLoginUsername.value
  );
  if (currentAcount?.pin === +inputLoginPin.value) {
    // console.log(currentAcount);
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    labelWelcome.textContent = `welcome back ${
      currentAcount.owner.split(' ')[0]
    }`;
    displayMovements(currentAcount.movements);
    containerApp.style.opacity = 100;
    displaySummary(currentAcount);
    displayAmount(currentAcount.movements);
  }
});
// implement transfer myself
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transferUserName = accounts.find(
    item => item.username === inputTransferTo.value
  );
  console.log(currentAcount.balance);

  if (
    inputTransferAmount.value &&
    transferUserName.movements.push(inputTransferAmount?.value) &&
    currentAcount.balance > inputTransferTo.value
  ) {
    currentAcount.movements.push(-inputTransferAmount?.value);
    displayMovements(currentAcount.movements);
    displaySummary(currentAcount);
    displayAmount(currentAcount.movements);
  }
  console.log(transferUserName);
  inputTransferTo.value = inputTransferAmount.value = '';
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAcount.username &&
    +inputClosePin.value === currentAcount.pin
  ) {
    const index = accounts.findIndex(
      x => x.username === inputCloseUsername.value
    );
    accounts.splice(index, 1);
    console.log(accounts);
    containerApp.style.opacity = 0;
  }
});
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAcount.movements, !sorted);
  sorted = !sorted;
  // console.log(currentAcount);
});

// const x = new Array(7);
// x.fill([1], 2, 4);
// console.log(x);
// const y = Array.from({ length: 10 }, (_, i) => i + 1);
// console.log(y);
// const z = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6 + 1));
// z.sort((a, b) => a - b);
// let yek, dow, se, cha, pa, shi;
// yek = dow = se = cha = pa = shi = 0;
// console.log(yek, dow);
// z.forEach((item, index) => {
//   if (item === 1) {
//     yek++;
//   }
// });
// console.log(z);
// console.log(yek);
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach((item, index) => {
  item.recommendedFood = item.weight ** 0.75 * 28;
});
console.log(dogs);
const sarahdog = dogs.find(item => {
  return item.owners.some(item => item === 'Sarah');
});
console.log(sarahdog);
//1 of 3
const fat = [];
const thin = [];
dogs.forEach((item, index) => {
  if (item.curFood > item.recommendedFood * 1.1) {
    fat.push(item);
  } else if (item.curFood < 0.9 * item.recommendedFood) {
    thin.push(item);
  }
});
console.log(fat);
console.log(thin);
//2 of 3
const fatFilter = dogs.filter(
  item => item.curFood > 1.1 * item.recommendedFood
);
const thinFilter = dogs.filter(
  item => item.curFood < 0.9 * item.recommendedFood
);
// console.log(fatFilter);
// console.log(thinFilter);
// const stringDog = fatFilter
// console.log(stringDog);
const owner = [];
for (const item of fatFilter) {
  console.log(item);
  owner.push(item.owners);
}
const owners = owner.flat();
console.log(owner);
console.log(owners);
const joinowners = owners.join(' and ');
console.log(joinowners);
console.log(`${joinowners} dogs eat too mush  `);
console.log(dogs.some(item => item.curFood === item.recommendedFood));
console.log(
  dogs.some(
    item =>
      item.curFood > 0.9 * item.recommendedFood &&
      item.curFood < 1.1 * item.recommendedFood
  )
);
console.log(
  dogs.filter(
    item =>
      item.curFood > 0.9 * item.recommendedFood &&
      item.curFood < 1.1 * item.recommendedFood
  )
);
console.log(
  dogs
    .slice()
    .map(item => item.recommendedFood)
    .sort((a, b) => a - b)
);
