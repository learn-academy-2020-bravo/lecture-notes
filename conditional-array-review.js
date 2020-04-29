// Conditionals and Arrays Review 4/29/2020

// Conditionals EPIC Challenge: Password Checker

// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password". If the user’s password is equal to 8 or more characters OR includes !, then log "that password is strong enough!". Log "password is not strong enough" for every other input.

// Starting with declaring a variable as an empty string
var password = ""


// setting up a two part evaluation for the length AND the presence of "!"
if(password.length >= 12 && password.includes("!")){
  console.log("That is a mighty strong password.")
// setting up a two part evaluation for the length OR the presence of "!"
} else if(password.length >= 8 || password.includes("!")){
  console.log("That password is strong enough.")
// the else statement will handle all the other situations
} else {
  console.log("Password is not valid.")
}
// Run the code with the variable of an empty string to ensure our code functions and we get the expected output which is our "else"

// Update password to include more than 12 characters and !
// Update password to be more than 8, but less than 12 and !

// As a test of logic, we flipped the evaluation in the "if" statement with the evaluation in the "else if" statement. This code did not give us the expected outcome. Always put the most specific evaluation first.


// Palindrome checker - a palindrome is a word that is the same word spelled backwards

// creating a variable
var palindrome = "racecar"

// splitting the string into an array
var palArray = palindrome.split("")
console.log(palArray)

// reversing the contents of the array
var palReverse = palArray.reverse()
console.log(palReverse)

// joining the array back to create a string

var backwardsPal = palReverse.join("")
console.log(backwardsPal)

// now checking to see if the original string and the reverse string are the same
if(palindrome === backwardsPal){
  // if they are are the same, return a message to the user
  console.log("Yes, " + palindrome + " is a palindrome.")
} else if(palindrome !== backwardsPal){
  // if they are not the same, return a message to the user
  // this log contains string interpolation which allows us to drop javascript code directly into a string - use backticks to wrap the entire expression and ${} to pass the variable
  console.log(`No, ${palindrome} is not a palindrome.`)
} else {
  console.log("Something went wrong.")
}

// Now that the code works, we can refactor

// instead of creating a new variable for each method, we can chain them together
var palReverse = palindrome.split("").reverse().join("")

if(palindrome === palReverse){
  console.log(`Yes, ${palindrome} is a palindrome.`)
} else if(palindrome !== palReverse){
  console.log(`No, ${palindrome} is not a palindrome.`)
} else {
  console.log("Something went wrong.")
}
