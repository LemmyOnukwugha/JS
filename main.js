// DATA TYPES

// const age = "3"

// if (age == 3) {
//   console.log("Person is 3 years old.")
// } else {
//   console.log("Person is not 3 years")
// }

// console.log("3" >= 3)

/*

Types of Data
1. Primitive Data - Number, String, null, undefined, booleans
2. Reference Data - Objects(objects,array, date, function)


*/
// Primitive Data
// let numberOfEar = 2

// let numberOfAntEar = numberOfEar

// numberOfAntEar = 4

// console.log("numberOfEar = " + numberOfEar)

// console.log("numberOfAntEar = " + numberOfAntEar)

// const person = {
//   name: "John Doe",
//   age: 22,
//   hobbies: ["sports", "singing", "climbing"],
// }

// const male1 = person

// male1.name = "Joan Doe"

// console.log("In male1", male1)

// console.log("In person", person)

// Number Types
// 1. Integers = whole numbers eg 10, 12 , 200
// 2. Floats = decimal places eg 10.23, 200.4545

// Strings
// '' or ""

// Booleans
// true and false

// undefined
// no type of data value is assigned
// let name;
// wrong to do something like this,
// let name = undefined

// null
// an empty data type
// let winner = null
// winner = "John"

//BigInt
// for numbers greater than 64-bit

// typeof operator
// const nameOfPerson = "Joe"
// const numberOfLegs = 2 + 3
// const isMale = true
// let fatherName
// let motherName = null

// if(motherName === null ){
//   do somrthing...
// }

// console.log("Type of data is ", typeof nameOfPerson)
// console.log("Type of data is ", typeof numberOfLegs)
// console.log("Type of data is ", typeof isMale)
// console.log("Type of data is ", typeof fatherName)
// console.log("Type of data is ", motherName === null ? "Null" : "Not a null")

// Operator
// Arithmetic operators
// + , - , * , /, %, ++,--
// % - modulus ==> returns the remainder of a division operation
// 3/2 ==> 1 1/2

// console.log("The remainder of 3 divided by 2 is", 3 % 2)

// for (let i = 1; i <= 10; i++) {
//   // 1 to 10

//   const remainder = i % 2 // <==== modulus
//   if (remainder !== 0) {
//     console.log(i + " is an odd number")
//   }
// }

// let age = 20

// age = age + 20

// console.log("The age is", age)

// let chances = 5

// chances = --chances
// chances = --chances
// chances = --chances
// chances = --chances
// chances = --chances
// chances -= 3
// console.log("The chances remaining after 3 trails is", chances)

// console.log(2 ** 3)

// ((2 + 3 * 4) / 1.5) % 2,

// const gender = ["male", "female", "binary"]

// const isArray = Array.isArray(gender)

// console.log(isArray)

// function sayHello() {
//   console.log("Hello")
// }

// const isFunction = sayHello instanceof Function

// const isFunction = typeof sayHello

// console.log(isFunction)

// ====================== CONTROL FLOW ==================

//  let amount = 1000
// amount = '1000'

//  '1000' + 1000

// const age = 10

// const introduceBoy = "Obi is " + age + " years old." - String concatenation
// const introduceBoy = `Obi is ${age} years old` - String template literals

// console.log(introduceBoy)

// IF...ELSE STATEMENTS

// let ageRating = 18

// let viewerAge = 22

//if condition
// if (viewerAge < ageRating) {
//   console.log("Sorry, You are not allowed to watch this movie.")
// }

// if-else condition
// const student = "female"

// if (student === "male") {
//   console.log("Hurray! Welcome to hogwarts")
// } else {
//   console.log("Opps! Sorry, we don't accept female students")
// }

// else if statement
// const weekDay = "christmas"

// if (weekDay === "monday") {
//   console.log("It's a beautiful monday morninig!")
// } else if (weekDay === "tuesday") {
//   console.log("It's a beautiful tuesday morninig!")
// } else if (weekDay === "wednesday") {
//   console.log("It's a beautiful wednesday morninig!")
// } else if (weekDay === "thurday") {
//   console.log("It's a beautiful thurday morninig!")
// } else if (weekDay === "friday") {
//   console.log("It's a beautiful friday morninig!")
// } else if (weekDay === "saturday") {
//   console.log("It's a beautiful saturday morninig!")
// } else if (weekDay === "sunday") {
//   console.log("It's a beautiful sunday morninig!")
// } else {
//   console.log("Please enter a valid week day")
// }

// switch statements
// const weekDay = "tommorrow"

// switch (weekDay) {
//   case "monday":
//     console.log("It's a beautiful monday morning!")
//     break
//   case "tuesday":
//     console.log("It's a beautiful tuesday morning!")
//     break
//   case "wednesday":
//     console.log("It's a beautiful wednesday morning!")
//     break
//   case "thursday":
//     console.log("It's a beautiful thursday morning!")
//     break
//   case "friday":
//     console.log("It's a beautiful friday morning!")
//     break
//   case "saturday":
//     console.log("It's a beautiful saturday morning!")
//     break
//   case "sunday":
//     console.log("It's a beautiful sunday morning!")
//     break
//   default:
//     console.log("Please enter a valid week day")
// }

// Loops

// For Loop
// continue and break

// for (let i = 2; i <= 50; i++) {

//   if (i % 2 !== 0) {
//     continue
//   } else {
//     console.log(`Even Number - ${i}`)
//   }
// }

// for (let i = 1; i <= 15; i++) {
//   if (i <= 8) {
//     console.log(`Number - ${i}`)
//   } else {
//     break
//   }
// }

// Log prime numbers from 1 to 50

// for (let i = 2; i <= 50; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       continue
//     } else {
//       console.log(`${i} is a Prime Number`)
//     }
//   }
// }

// While Loop
// let count = 1
// let isValidInput = true

// while (isValidInput === false) {
//   console.log(`${count} try, Please Enter a valid name`)
//   count++

//   if (count === 8) {
//     isValidInput = true
//     console.log(`Finally, you entered the right input on the ${count} try`)
//   }
// }

// Do While Loop
// do {
//   console.log(`${count} try, Please Enter a valid name`)
//   count++

//   if (count === 6) {
//     isValidInput = true
//     console.log(`Finally, you entered the right input on the ${count} try`)
//   }
// } while (isValidInput === false)

// arrays

// const fruit = 'banana'
// const fruit2 = 'apple'
// const fruit3 = 'peach'
// const fruit4 = 'pear'

// const first_month = 'January'
// const second_month = 'Febuary'
// const third_month = "March"
// const fourth_month = "April"

//index           0          1        2       3        4
// const fruits = ["banana", "apple", "peach", "pear", "guava"]

// for (let i = 0; i <= fruits.length - 1; i++) {
//   console.log(fruits[i])
// }

// fruits[2] = "mango"

// console.log(fruits)
// const year = ["January", "Febuary", "March", "April"]

// Adding to an Array

// const todo = ["swimming", "gaming"]

// push - adds element to the end of the array
// todo.push("eating")

// unshift - adds element to the begining of the array
// todo.unshift("walking")

// remove an element

// remove the last element from an array
// todo.pop("gaming")

// removes the first element from an array
// todo.shift("swimming")

// console.log(todo)

// iterative array methods

// iterate through an array
// todo.forEach(function (item, index) {
//   console.log(item)
// })

// const newTodoArr = todo.map(function (item, index) {
//   return `${item} - ${index}`
// })

// console.log(newTodoArr)
