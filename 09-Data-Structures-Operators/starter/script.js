'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (a, b) {
    return [this.starterMenu[a], this.mainMenu[b]];
  },
  orderDeleivey: function ({
    time: saat = '00:00',
    address: ja = 'semnan',
    startInMainMenue: kodomazasli = 0,
    startInMenue: kodomazmenue = 0,
  }) {
    console.log(
      `${saat} oomade az ${this.starterMenu[kodomazasli]} toye ${ja} saat ${saat} raasti in boode ${this.mainMenu[kodomazmenue]}`
    );
  },
};
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);
// for (const [key, { open: baz, close: baste }] of entries) {
//   console.log(key, baz, baste);
// }
// restaurant.orderDeleivey({
//   time: '22:00',
//   address: 'tehran',
//   startInMenue: 1,
//   startInMainMenue: 1,
// });
// restaurant.orderDeleivey({
//   time: '11:30',
//   address: 'usa',
//   startInMainMenue: 3,
//   startInMenue: 3,
// });

// const arr = [[[[[[1, 2, 3]]]]], 2, []];
// let a=1
// let [a, b, c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// let [first, second] = arr;
// console.log(a, b, c);
// console.log(first, second);
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// const [a, b] = restaurant.order(0, 0);
// console.log(a, b);
// const [i, j, [k, l]] = [1, 2, [3, 4]];
// console.log(i, j, k, l);
// console.log(restaurant);
// const { name, openingHours, mainMenu } = restaurant;
// console.log(name, openingHours, mainMenu);
// const {
//   fri: { open: opening, close: closing },
// } = restaurant.openingHours;
// console.log(opening, closing);
// const { a, b } = { a: 1, b: 2 };
// console.log(a, b);
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// menu[0][0] = 2;
// console.log(restaurant.mainMenu[0][0]);
// const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);
// console.log(restaurant.openingHours.fri.open);
// restaurant.openingHours.fri.open = 12;
// console.log(restaurantCopy.openingHours.fri.open);
// const [menu1, , menu3, ...fieldPlayerss] = [
//   ...restaurant.mainMenu,
//   ...restaurant.categories,
// ];
// console.log(menu1, menu3, fieldPlayerss);
// const { sat: shanbe, ...weekDays } = restaurant.openingHours;
// console.log(shanbe, weekDays);
// restaurant.lastName ||= 'what?';
// console.log(restaurant.lastName);
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const scores = {};
for (const player of game.scored) {
  scores[player] ? scores[player]++ : (scores[player] = 1);
}
console.log(scores);
// console.log(Object.entries(game.scored));
// for (const [index, item] of Object.entries(game.scored)) {
//   console.log(`goal ${+index + 1}:${item}`);
// }

// let length = Object.entries(game.odds).length;
// console.log(Object.entries(game.odds));
// console.log(length);
// console.log();
// let x = 0;
// for (const [key, value] of Object.entries(game.odds)) {
//   x = x + value;
// }
// console.log(x / length);
// console.log(Object.entries(game.odds));
// for (const [key, value] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${game[key] ? 'victory' : ''}  ${game[key] ?? 'draw'}: ${value}`
//   );
// }

// printGoals: function (...x) {
//   for (let i = 0; i < x.length; i++) {
//     let temp1 = [...player1];
//     let temp2 = [...player2];
//     console.log(temp1[x[i]]);
// for (let index = 0; index < game.scored.length; index++) {
//   if (temp1[x[i]] === game.scored[index]) {
//     let y = z + 1;
//     console.log(`${temp1[x[i]]} scored ${y} goals`);
//   }
// }
// },
// };
// const [player1, player2] = game.players;
// console.log(player1, player2);
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// game.printGoals(1, 2, 3, 4, 10);
// console.log(game.odds.team1 < game.odds.team2 && 'team 2more likly to win');
// console.log(game.odds.team2 < game.odds.team1 && 'team 1more likly to win');

// for (const [i, j] of player1.entries()) {
//   console.log(i, j);
// }
// console.log(player1.entries());
// let firSet = new Set('jonas', 'mojtaba', 'moji');
// console.log(firSet);
// firSet.add('mamad');
// console.log(firSet);
// console.log(firSet.has('mojtaba'));
// const set = new Set([[1, 1], [1], [1]]);
// console.log(set);
//////////////////////////////////////////////////////////////////maps
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
console.log(gameEvents);
console.log([...gameEvents.entries()]);
for (const [min, event] of gameEvents.entries()) {
  console.log(`${min < 45 ? 'first' : 'second'} half ${min}:${event}`);
}
console.log(new String('mojtaba'));
// for (const [x, y] of gameEvents) {
//   console.log(x, y);
// }
// const values = gameEvents.values();
// console.log(values);
// const valuesSet = new Set(values);
// console.log(valuesSet);
// const values = new Set(gameEvents.values());
// console.log(values);
// const deleted = gameEvents.values(64);
// console.log(deleted);
// const mySet1 = new Set();
// console.log(mySet1);
// mySet1.add(1);
// console.log(mySet1);
// mySet1.add('some');
// console.log(mySet1);
// const o = {
//   a: 1,
//   b: 2,
// };
// mySet1.add(o);
// console.log(mySet1);
// console.log([...mySet1.values()]);
// mySet1.delete(o);
// console.log(mySet1);
// console.log([...new Set('mojtaba')]);
// console.log(gameEvents.get(64));
// gameEvents.delete(64);
// console.log(gameEvents);
