'use strict'
// let hasDriversLicense = false
// const passTest = true
// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log('i can drive')
// const interface = 'audio'
// const private = 123
// let apples = 20
// let a = function logger() {
//   console.log('my name is moji')
// }
// console.log(a())
// console.log(typeof a)
// let b = typeof a === Object
// console.log(b)
// function fruit(apples, oranges) {
//   const juice = `aplles ${apples} and oranges ${oranges}`
//   return juice
// }
// fruit([], [])
// fruit(1, 2)
// const appleJuice = fruit(2, 4)
// console.log(appleJuice)
// const age1 = calcAge1(1993)
// function calcAge1(birthYear) {
//   return 2023 - birthYear
// }
// console.log(age1)
// const calcage2 = function () {}
// const age2 = calcage2(1993)
// console.log(
//   `${(() => {
//     return 1
//   })()}`,
// )
// const calcAge = (birthYear) => 2023 - birthYear
// const myAge = calcAge(1993)
// console.log(myAge)
// const yearsUntilRetirement = (firsName, year) => {
//   const now = 2023 - year
//   const until = 30 - now
//   return `${firsName} have ${until} years until retirement`
// }

// console.log(yearsUntilRetirement('mojtaba', 1999))
// const calcAge = (score1, score2, score3) => (score1 + score2 + score3) / 3

// console.log(dolphinScore, koalaScore)
// const checkWinner = (score1, score2, score3, score4, score5, score6) => {
//   const dolphinScore = calcAge(score4, score5, score6)
//   const koalaScore = calcAge(score1, score2, score3)
//   if (koalaScore > dolphinScore * 2) {
//     console.log(`koala wins (${koalaScore} vs ${dolphinScore})`)
//   } else if (dolphinScore > koalaScore * 2) {
//     console.log(`dolphin wins (${dolphinScore} vs ${koalaScore})`)
//   } else {
//     console.log(`no one`)
//   }
// }
// const data1 = checkWinner(65, 54, 49, 44, 23, 71)
// const data2 = checkWinner(23, 34, 27, 85, 54, 41)
// const friend1 = 'micheal'
// const friend2 = 'steven'
// const friend3 = 'peter'
// const friends = ['micheal', 'steven', 'peter']
// console.log(friends)
// const years = new Array(1991, [], {}, '2')
// console.log(years)
// console.log(years[0])
// console.log(years.length)
// console.log(years[years.length - 1])
// console.log(years[false ? 0 : 1])
// console.log(years[2 * 9])
// function calcAge1(birthYear) {
//   return 2023 - birthYear
// }
// const age = [calcAge1(1993), calcAge1(1990), calcAge1(1980)]
// console.log(age)
// const age2 = [calcAge1(age[0])]
// console.log(age2)
// const friends = ['micheal', 'steven', 'peter']
// friends.push('jay', 'moj')
// console.log(friends)
// friends.push('mob')
// friends.push('fat')
// console.log(friends)
// const ar1 = []
// ar1.push(1, 2, 3)
// console.log(ar1)
// ar1.push('a')
// console.log(ar1)
// ar1.pop()
// ar1.pop()
// ar1.pop()
// console.log(ar1)
// const a = friends.unshift(1, 2)
// console.log(friends)
// friends.unshift('a')
// friends.unshift('b')
// console.log(friends)
// friends.unshift(1)
// friends.unshift(2)
// console.log(friends)
// console.log(a)
// const a = friends.pop()
// console.log(friends)
// console.log(a)
// console.log(friends.indexOf('micheal'))
// console.log(friends.includes('micheal'))
// const calcTip = (bill) => {
//   if (bill >= 50 && bill < 300) {
//     const tip = 0.15 * bill
//     return tip
//   } else {
//     return 0.2 * bill
//   }
// }
// console.log(calcTip(100))
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills)
// console.log(tips)
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(total)
// const mojtaba = {
//   firstName: 'mojtaba',
//   lastName: 'sharafiyeh',
//   birthday: 1993,
//   job: 'soldier',
//   friends: ['mamad', 'ehsan', 'mamad2'],
//   hadDriverLicense: false,
//   calcAge: function () {
//     this.age = new Date().getFullYear() - this.birthday
//     return this.age
//   },
//   getSummery: function () {
//     return `${this.firstName} is ${this.calcAge()} years old ${
//       this.job
//     } and he ${this.hadDriverLicense ? 'has' : "has'nt"} driverlicense.`
//   },
// }
// console.log(mojtaba.firstName)
// console.log(mojtaba['firstName'])
// const nameKey = 'Name'
// const a = `first${nameKey}`
// console.log(a)
// console.log(mojtaba['first' + nameKey])
// console.log(mojtaba[a])
// console.log(mojtaba[`first${nameKey}`])
// console.log(mojtaba[mojtaba.hasOwnProperty('kh') ? 'firstName' : 'lastName'])
// console.log(
//   `${mojtaba.firstName} has ${mojtaba.friends.length} friends and best of them is ${mojtaba.friends[0]}`,
// )
// console.log(mojtaba.calcAge())
// console.log(mojtaba.getSummery())
// const mark = {
//   name: 'mark',
//   weight: 78,
//   height: 2.69,
//   Bmi: function () {
//     const bmi = this.weight / this.height ** 2
//     this.bmi = bmi
//     return bmi
//   },
// }
// const john = {
//   name: 'john',
//   weight: 92,
//   height: 1.95,
//   Bmi: function () {
//     const bmi = this.weight / this.height ** 2
//     this.bmi = bmi
//     return bmi
//   },
// }
// console.log(mark.Bmi())
// console.log(john.Bmi())
// console.log(
//   `${mark.Bmi() > john.Bmi() ? 'mark' : 'john'} bmi (${
//     mark.Bmi() > john.Bmi() ? mark.Bmi() : john.Bmi()
//   }) is higher than ${mark.Bmi() > john.Bmi() ? 'john' : 'mark'}`,
// )
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`repetition number${rep}`)
// }
// const element = []
// const mojtaba = ['mojtaba', 2023 - 1993, 'soldier', ['ali', 'naghi'], true]
// for (let i = 0; i < mojtaba.length; i++) {
//   if (typeof mojtaba[i] !== 'string') continue
//   element.push(mojtaba[i])
// }
// console.log(element.length)
// console.log(element[1] === undefined)
// console.log(element)
// const years = [1991, 2007, 1969, 2020]
// const calcYear = []
// for (let i = 0; i < years.length; i++) {
//   calcYear.push(2023 - years[i])
// }
// console.log(calcYear)
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const total = []
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]))
//   total.push(bills[i] + tips[i])
// }
// console.log(bills)
// console.log(tips)
// console.log(total)
// let sum = {
//   sum: 0,
// }
// const calcAverge = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum.sum = sum.sum + arr[i]
//     if (i === arr.length - 1) {
//       let average = sum.sum / arr.length
//       sum.sum = 0
//       return average
//     }
//   }
// }
// console.log(calcAverge([10, 20]))
// console.log(calcAverge([100, 200, 300]))
// console.log(calcAverge(total))

// console.log(sum)
// let sum = 0
// for (let i = 0; i < 10; i++) {
//   sum += i
//   console.log(i, sum)
// }
// console.log(sum)
// let string = {
//   string: '',
// }
// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     string.string = string.string + `...${arr[i]}c in ${i + 1} days`
//     if (i === arr.length - 1) {
//       string.string += '...'
//     }
//   }
//   console.log(string.string)
//   string.string = ''
// }
// printForecast([17, 21, 23])
// printForecast([12, 5, -5, 0, 4])
// const printForecast = function (arr) {
//   let string = ''
//   for (let i = 0; i < arr.length; i++) {
//     string = string + `...${arr[i]}c in ${i + 1} days`
//     if (i === arr.length - 1) {
//       string += '...'
//     }
//   }
//   console.log(string)
// }
// printForecast([17, 21, 23])
// console.log(string)
// const tempruteres = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
// const temprutere = [3, -2, -60, -1, 'error', 9, 13, 170, 15, 14, 9, 5]
// console.log(Math.max(tempruteres))
// const calcTemtAmplitude = function (tempruteres) {
//   let max = tempruteres[0]
//   for (let index = 0; index < tempruteres.length; index++) {
//     if (tempruteres[index] > max) {
//       max = tempruteres[index]
//     }
//   }
//   let min = tempruteres[0]
//   for (let index = 0; index < tempruteres.length; index++) {
//     if (tempruteres[index] < min) {
//       min = tempruteres[index]
//     }
//   }
//   console.log(`max is ${max} and min is:${min}`)
//   return max - min
// }

// console.log(calcTemtAmplitude([...tempruteres, ...temprutere]))
