// using for loop to sum all the values in an array

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// nums[0] // 1
// nums[9] // 10

// let total = 0

// for (let i = 0; i < nums.length; i++) {
//   total += nums[i] // total = total + nums[i]
// }

// console.log(total)

// defining a function without a parameter

// function sayHello() {
//   console.log("Hello user, Welcome!")
// }

// sayHello()

// defining a function with a parameter

// function sayHello(name) {
//   console.log("Hello " + name + ", Welcome!")
// }

// calling the function with an arguement
// sayHello("Joe")

// defining a function with a parameter with a default value

// function sayHello(name = "new user", gender) {
//   console.log("Hello " + name + ", Welcome! You're a " + gender)
// }

// calling the function without an arguement
// sayHello(undefined, "female")

// calling the function with an arguement
// sayHello("Mary", "female")

// Function Definition

// 1. Function Declaration
// function sayHelloTo(name = "new user", gender) {
//   console.log("Hello " + name + ", Welcome! You're a " + gender)
// }

// 2. Function Expression
// const sayHello = function (name = "new user", gender) {
//   console.log("Hello " + name + ", Welcome! You're a " + gender)
// }

// Function Expression e.g.
// new Array(10).forEach(function(item,index,array){
//     console.log('welcome' + index);
// })

// let greeting

// const isNew = false

// if (isNew) {
//   greeting = function () {
//     console.log("welcome new user")
//   }
// } else {
//   greeting = function () {
//     console.log("Oldiee, bad guy!")
//   }
// }

// greeting()

// Invoking function automatically

// function logger(item, index, array) {
//   console.log("index - " + index)
// }
// ;[...new Array(10)].forEach(logger)

// function sayName(callbackFn){
//     //...
//     callbackFn()
// }

// Return statement

// let greetingMessage

// function greetUser(name) {
//   return `You're Welcome, ${name}!`
// }

// You're welcome, Joe

// greetingMessage = greetUser("Joe")

// console.log(greetingMessage)

// function sum(num1, num2) {
//   const addition = num1 + num2
//   return addition
// }

// console.log(`The sum of 2 and 5 is ${sum(2, 5)}`)

// Arrow Function
// const sum = (num1, num2) => {
//   return num1 + num2
// }

// const sum = (num1, num2) => num1 + num2
// console.log(`The sum of 2 and 5 is ${sum(2, 5)}`)
