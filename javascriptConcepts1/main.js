// Types of scope
// 1. Block Scope
// 2. Function Scope
// 3. Global Scope

// 1. Block scope
// var - keyword and let/const - keyword

// const isUser = true
// const user = "Mary"

// if (isUser) {
//   const user = "John Doe"
//   console.log(user)
// }

// console.log(user)

//2. Function Scope
// function sayHello() {
//   var age = 24
//   console.log(age)
// }
// console.log(age)

// sayHello()

// 3. Global Scope

// const user = "John"

// const isUser = true
// if (isUser) {
//   console.log(user)
// }

// function sayHello() {
//   console.log(user)
// }

// sayHello()

function getUser() {
  user = "Mary"
  const isFemale = true
  if (isFemale) {
    const user = "marysssss"
  }
  //   console.log(user)
}



getUser()
console.log(user)
