const person = {
  name: "Joe",
  age: 24,
  gender: "male",
  isAvailable: false,
  certificates: {
    FSLC: "wase",
    firstDegree: "Bsc Math",
  },
  hobbies: ["singing", "dancing", "football"],
}

// define an Object
// 1. use object literal
// const animal = {}

// 2. use new keyword

// const animal = new Object()

// console.log(typeof animal)

// Access properties in Onjects

// a. dot notation

// console.log(person.isAvailable)

// b. bracket notation
// console.log(person["name"])

// const animal = {
//   name: "Dog",
// }

// const newAnimal = animal

// newAnimal.name = "Sheep"

// console.log("newAnimal", newAnimal)
// console.log("Animal", animal)

// Adding properties
const animal = {
  name: "Dog",
}

animal.legs = 4
animal.color = "white"
animal["size"] = "medium"

//Delete a property

delete animal.name

console.log(animal)
