// Arrays

// Define an Array
//      1. Square brackets
// const cars = []

// cars[0] = "BMW"
// cars[1] = "Lexus"
// cars[2] = "Tesla"

// console.log(cars)

//   2. new Array()

// const cars = new Array("BMW", "Lexus", "Toyota")

// cars[0] = "BMW"
// cars[1] = "Lexus"
// cars[2] = "Tesla"

// const cars = new Array(10)
// cars[1] = "Tesla"
// console.log(cars)

// const carLength = cars.length

// console.log(carLength)

// Que - Create a dynamic containing numbers 1 - 50
// const cars = []

// for (let i = 0; i < 200; i++) {
//   cars[i] = i + 1
// }

// const LastIndex = cars.length - 1

// const lastItem = cars[LastIndex]

// console.log(lastItem)

// const cars = ["BMW", "Lexus", "Toyota"]

// cars.push("Tesla")
// console.log(cars)

// const owners = ["John", "Bill", "Owen"]

// const carsOwners = cars.concat(owners)
// console.log(carsOwners)

// const cars = ["May", "BMW", "Lexus", "Toyota", "Tesla"]

// Array.every()
// const isGreaterThan3 = cars.every(function (item, index, array) {
//   return item.length > 2
// })

// console.log(isGreaterThan3)

// const lengthMoreThan4 = cars.filter((item, index, array) => {
//   if (item.length > 4) {
//     return item
//   } else {
//     return null
//   }
// })

// console.log(lengthMoreThan4)

// const item = cars.find(function (item) {
//   if (item.length === 3) {
//     return item
//   }
// })

// console.log(item)

// const cars = ["May", "BMW", "Lexus", "Toyota", "Tesla"]
// cars.forEach((item, index, array) => {
//   console.log(item)
// })

// const cars = ["May", "BMW", "Lexus", "Toyota", "Tesla"]

// const vehicles = cars.slice(-2)

// console.log(vehicles)

// const newCars = cars.splice(0, 1, "bike")

// console.log(cars)

// const num = [2, 4, 6, 8, 10]

// const squaredNum = num.map((item, index, array) => {
//   const squared = item ** 2
//   return squared
// })

// const changeNum = num.forEach((item) => {
//   const squared = item ** 2
// })

// console.log(squaredNum)

// const cart = [
//   { product: "Shirt", price: 1200 },
//   { product: "Tv", price: 19990 },
//   { product: "fan", price: 2000 },
//   { product: "chair", price: 200 },
// ]

// const num = [2, 4, 6, 8, 10]

// const total = num.reduce((previousValue, currentValue, currentIndex, array) => {
//   return previousValue + currentValue
// }, 0)

// const total = cart.reduce((previousValue, currentValue) => {
//   return previousValue + currentValue.price
// }, 0)

// console.log(total)

const cars = ["May", "BMW", "Lexus", "Toyota", "Tesla"]

const initialValue = {}

const carsObject = cars.reduce((previousValue, currentValue) => {
  const obj = {
    ...previousValue,
  }
  obj[currentValue] = currentValue
  return obj
}, initialValue)

console.log(carsObject)
