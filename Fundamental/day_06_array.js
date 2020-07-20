/*🗃 Array 
if a variable can only hold a single data type and value, array can hold or store 
multiple value with different data type. array is special data structure in JavaScript.
📎 Declaration
  There are two syntaxes for creating an empty array:
  let arr = new Array() --> create new array object
  let arr = []

  📝 Note : Array Elements
    to access or get element in array we use its index and index begin with 0
    syntax : arr[index]
*/

// variable vs array
var name = 'alee'
var greeting = ['Hello', 'World']
var arr = ['Hello World', 1994, true, 'Welcome', false, 10]
console.log(name)
console.log(greeting)
console.log(typeof(greeting))

// access or get array elements => index begin with 0
console.log(greeting[0])
console.log(greeting[1])
console.log(arr[2])
let hello = greeting[0]
console.log(hello)

let fruits = ['Apple 🍎', 'Mango 🥭', 'Grape 🍇', 'Strawberry 🍓', 'Banana 🍌']
console.log(fruits[2])
console.log(fruits[0])
console.log(fruits[fruits.length - 1]) // get last element

// change array value
name = 'Kevin'
console.log(name)
fruits[1] = 'Strawberry 🍓'
console.log(fruits)
fruits[3] = 'Mango 🥭'
console.log(fruits)

// add and remove element
fruits[5] = 'Lemon 🍋' // add new element
console.log(fruits)
fruits[7] = 'New Fruits'
console.log(fruits)
fruits[6] = true
fruits[6] = 0
console.log(fruits)

// array declaration ==> [] vs new Array
let array = []
let array2 = new Array(5)
array[0] = 'hello'
array2[0] = 'hello'
console.log(array)
console.log(array2)
console.log(array.length)
console.log(array2.length)

// 📃 Methods and Properties to manipulate an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Array.isArray() => to check if variable is array or not, return Boolean true or false
console.log(Array.isArray(name))
console.log(Array.isArray(fruits))

/* 🛠 implement method and properties
  - stack and queue, and order ==> manipulate position
    -> push(), pop(), shift(), unshift(), reverse(), sort()
  - manipulation ==> element or array itself
    -> concat(), splice(), slice()
  - iterative method
    -> forEach(), some(), every(), map(), filter()
  - reduce() method
*/ 

// method to create new Array
let array3 = Array.from('hello')
let array4 = Array.of(1, 5, 6, 4, 10)
console.log(array3)
console.log(array4)

// method to add or remove elements => push(), pop(), shift(), unshift ()
let fruit = ['Apple 🍎', 'Mango 🥭']
fruit.push('Banana 🍌') // add new element to the last index
console.log(fruit)
fruit.push('Grape 🍇', 'Strawberry 🍓')
console.log(fruit)

fruit.pop() // remove last element
let lastArray = fruit.pop()

fruit.shift() // remove first element
let firstArray = fruit.shift()

fruit.unshift('Lemon 🍋') // add new element to beginning of array
fruit.unshift('Lychee 🍒')

fruit.reverse() // reverse element of array

console.log(lastArray)
console.log(firstArray)
console.log(fruit)

// sort and reduce => to array that contain number only
let array5 = [1, 4, 8, 2, 5, 6]
array5.sort(function (a, b) {
    return a - b // ascending
})
console.log(array5)
array5.sort(function (a, b) {
    return b - a // descending 
})
console.log(array5)

// to sum each element in array
console.log(array5.reduce(function(a, b) {
    return a + b
}))

// manipulate => splice(), slice(), concat()
const months = ['Jan', 'March', 'April', 'June', 'October', 'May']
months.splice(1, 2) // method to changes the contents of an array by remove or replace it element
console.log(months)
months.splice(0, 1) // syntax : Array.splice(start, count)
console.log(months)

// splice special case for replacing element, syntax : Array.splice(start, 1, replacement value)
months.splice(1, 1, 'August')
console.log(months)


// slice() => return or copy element at give index, syntax : Array.slice(startIndex, endIndex)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(animals.slice(1))
const animals2 = animals.slice(2, 4) // last index doesn't count
console.log(animals)
console.log(animals2)

// concat() to merge or join two or more array into single array
const animalMonth = animals.concat(months)
const monthAnimal = months.concat(animals)
console.log(animalMonth)
console.log(monthAnimal)

// includes() => check element in array => return true or false
console.log(animals.includes('ant'))
console.log(animals.includes('goose'))

// indexOf() => check index of given value at array
console.log(animals.indexOf('duck'))
console.log(animals.indexOf('goose')) // return -1

// convert Array to String or String to Array
let str = 'Hello My Name is Al'
let arrayFromString = str.split(' ') // convert String to Array by given parameter
let arrayFromString2 = str.split('')
let arrayFromString3 = str.split('e')
console.log(arrayFromString)
console.log(arrayFromString2)
console.log(arrayFromString3)

let str2 = ['I', 'live', 'in', 'BSD']
console.log(str2.join('')) // convert Array to String
console.log(str2.join(' '))
console.log(str2.join('💘'))

// looping inside array or loop according to each element in an array (iteration)
const planets = ['Mercurius', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Pluto']
for (let index = 0; index < planets.length; index++) {
    console.log(planets[index])
}

const numbers = [3, 5, 8, 10, 11, 14, 12, 51, 66, 86, 0, 15, 16]
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
        console.log(numbers[index])
    }
}

const multipleValue = [1, 4, 'number', 1, true, false, 'hello', 11, 'human', '🌎']
for (let index = 0; index < multipleValue.length; index++) {
    if (typeof(multipleValue[index]) === 'number') {
        console.log(multipleValue[index])
    }
}
