// Objects Lecture 5/1/2020

// Objects are another JS data type that describe a collection of data
// Technically arrays are actually also objects

// The structure of an object is a collection of key: value pairs wrapped in curly braces
// Values can be anything as long as it is a data type that JavaScript recognizes - including arrays and other objects

let myObject = {
  key: "value",
  key1: "vaue1",
  key2: "value2"
}
// We can log the variable and recieve the full object
console.log(myObject)
// But just like arrays, we probably want to be able to access certain information from within the object.
// Where in arrays we access an item by referencing the index, in objects we retrieve the values by referencing the keys
console.log(myObject.key)


// This syntax is called JSON - JavaScript Object Notation

// Destructuring
// There is a shortcut to using dot notation that is very common as we get into more complex objects. It is called destructuring.
var breakfast = {
  item1: "eggs",
  item2: "bacon",
  item3: "toast",
  item4: {
    fruit1: "banana",
    fruit2: "blueberry",
    fruit3: "strawberry",
  }
}
// Nested objects require additional dot notation
console.log(breakfast.item4.fruit1)

// Or we can destructure to assign the key the additonal "packaging" of the objects

// This would get an error
// console.log(fruit3)

// Destructuring
let { fruit3 } = breakfast.item4

// Now this returns "strawberry"
console.log(fruit3)
console.log(fruit3)


// Objects can contain static information but they also can contain functions which make objects the intersection of data and behavior
var friends = {
  friend1: "Monica",
  friend2: "Chandler",
  friend3: "Ross",
}

// To get info back from this object we could do this:
console.log(`My friends are ${friends.friend1}, ${friends.friend2}, and ${friends.friend3}.`)

// Or we could add a method to the object the value to a key

// "this" is the JavaScript keyword that refers to the object itself
var friends = {
  friend1: "Monica",
  friend2: "Chandler",
  friend3: "Ross",
  bio: function(){
    return `My friends are ${this.friend1}, ${this.friend2}, and ${this.friend3}.`
  }
}
console.log(friends.bio())


// Refactoring the object from earlier - "this" refers to the most immediate scope of the object
var breakfast = {
  item1: "eggs",
  item2: "bacon",
  item3: "toast",
  item4: {
    fruit1: "banana",
    fruit2: "blueberry",
    fruit3: "strawberry",
    fruit: function (){
      return `${this.fruit1}`
    }
  }
}
console.log(breakfast.item4.fruit())


// An array of objects, each object is one index in the array
var cashMoney = [
  {worth: 1, president: "George"},
  {worth: 5, president: "Lincoln"},
  {worth: 10, president: "Hamilton"},
  {worth: 20, president: "Jackson"}
]
// Challenge - return whether the president is worth an odd or even amount

const getPres = (array) => {
  let presStats = array.map(value => {
    console.log(value) // returned each object
    if(value.worth % 2 === 0){
      return `${value.president} is even.`
    } else if(value.worth % 2 !== 0){
      return `${value.president} is odd.`
    } else {
      return "error"
    }
  })
  return presStats.join(" ")
}
console.log(getPres(cashMoney))

// In reference to the map higher order function:
// value === array[i]
// index = i
