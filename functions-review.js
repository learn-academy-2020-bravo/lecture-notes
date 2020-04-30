// Review on Loops and Functions 4/30/2020

// Write a function that can take in a variable and return the datatype of the variable

// typeof returns a string of the name of the data type
var myNum = 56

const whichData = (myVar) => {
  if(typeof myVar === "string"){
    return `${myVar} is a string.`
  } else if(typeof myVar === "number"){
    return `${myVar} is a number.`
  } else if(typeof myVar === "boolean"){
    return `${myVar} is a boolean.`
  } else {
    "Error"
  }
}
console.log(whichData("hello"))
console.log(whichData(42))
console.log(whichData(true))
console.log(whichData(myNum))


// for loops are a lot like if statements - they take action items as an argument

// for()

// 1) assigning a variable: let i = 0
// 2) setting a condition to be met: i < array.length
// 3) reassigning the variable: i = i + 1 --or-- i++


// Create a function that adds 5 to each of the numbers in the array and returns an array with the new values
var ourNums = [3, 4, 5, 6, 7]

const add5 = (array) => {
  let newNums = []
  for(let i=0; i<array.length; i++){
    newNums.push(array[i] + 5)
  }
 return newNums
}
console.log(add5(ourNums))



// Create a function that capitalize all the words in an array

var words = ["hello", "there", "bravo", "class"]

const capitalizer = (array) => {
  // store the words when they are capitalized
  let capitalized = []
  // loop through and give us access to each word
  for(let i=0; i<array.length; i++){
    // targets the first letter of each word and upcases
    let firstLetter = array[i].charAt(0).toUpperCase()
    console.log(firstLetter)
    // targets the rest of the word - sliced at the first index of the string
    let remainder = array[i].slice(1)
    console.log(remainder)
    // Combined the two variables to be a complete word
    let combo = firstLetter.concat(remainder)
    console.log(combo)
    // push the combo back to our array
    capitalized.push(combo)
  }
  // return the array with the right code
  return capitalized
}
console.log(capitalizer(words))
