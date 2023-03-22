// DOM Selectors

// 1. getElementById method

// const header = document.getElementById("title")

// console.log(header)

// 2. getElementsByTagName method

// const paragraphs = document.getElementsByTagName("p")

// console.log(paragraphs[0]) // first element in the collection

// console.log(paragraphs)

// 3. getElementsByClassName method

// const blueParagraphs = document.getElementsByClassName("blue")
// const redParagraph = document.getElementsByClassName("red")

// console.log("blue paragraphs ===>", blueParagraphs)
// console.log("red paragraph ===>", redParagraph)

// 4a. querySelector method

// const blueParagraphs = document.querySelector(".blue")
// const redParagraph = document.querySelector(".red")

// console.log("blue paragraphs ===>", blueParagraphs)  // return only the first element
// console.log("red paragraph ===>", redParagraph)

// 4b. querySelectorAll method

// const blueParagraphs = document.querySelectorAll(".blue")
// const redParagraph = document.querySelectorAll(".red")

// console.log("blue paragraphs ===>", blueParagraphs)
// console.log("red paragraph ===>", redParagraph)

// Transversing the DOM
const item = document.querySelector(".items")

const parent = item.parentElement

const parentNode = item.parentNode

const previousSibling = parent.previousElementSibling

console.log(parent)
console.log(parentNode)
console.log(previousSibling)
