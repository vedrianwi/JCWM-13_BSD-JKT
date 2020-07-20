/* JavaScript Data Types 🗃 :
in general there two types data classification in JavaScript, primitive data type 
(include value type and non-value type) and reference data type
🧓 Primitive data type :
 - String -> text
 - Number -> 1, 2, 3 4, 5, ...
 - Boolean -> true or false
 - null --> non value type, contains only the null value
 - undefined --> non value type, The meaning of undefined is “value is not assigned”
 - Symbol
 - BigInt
🧒 Reference type
 - object 
 - array
 - date
 - etc.
*/

/* 🔡 String : 
A string in JavaScript must be surrounded by quotes. "...", '...', or `...` (Backticks)
Template literals using `...${str}`
*/

var hello = 'Hello' // string
hello = "Hello"
hello = `Hello`
console.log(hello)

// String Method and Properties: 
// 📝 Doc : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#

// length -> to calculate how many characters
console.log(hello.length)

// indexOf -> return or calculate index of given value or world in string, index begin with 0, and include space
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
console.log(paragraph.indexOf('dog'))

// substring -> return string from given start index and last index not included
const str = 'Mozilla'
const str2 = 'world'
const str3 = 'well come'
console.log(str.substring(1, 3))
console.log(str2.substring(0, 4))
console.log(str3.substring(3, 5))

// slice
console.log(str.slice(1, 3))

// split -> convert string to array
console.log(str.split())

// chartAt -> return character at give index
console.log(paragraph.charAt(40))

// convert string to upper or lower case
console.log(str.toUpperCase())
console.log(str.toLowerCase())

/* 🔢 Number :
The number type represents both integer and floating point numbers.
Besides regular numbers, there are so-called “special numeric values” 
which also belong to this data type: 
Infinity, -Infinity and NaN (not a number).
*/

var age = 12 // integer
age = 12.0 // float
age = NaN
age = Infinity

// Method and Properties
// 📃 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number 

// string plus number --> NOTE : in JavaScript String is dominant
var umur = 16
var sapa = 'hello'
console.log(umur + sapa) // data type will be string

// Boolean -> true or false
const jomblo = true
const single = false

// How to check data type ❔ use typeof
console.log(typeof(jomblo))
console.log(typeof(umur))
console.log(typeof(sapa))
console.log(typeof(umur + sapa))
console.log(typeof(jomblo + sapa))

/* 🥨 Type Conversions
Sometime wee need to explicitly convert a value to specific or the expected type.
so JavaScript has some build-in Method to do this job.
*/
// String Conversion -> this happens when we need the string form of a value.
var angka = 12
var bool = false
var convert = angka + '' // not recommended
var convert2 = String(angka)
var convert3 = String(bool)
console.log(convert)
console.log(typeof(angka))
console.log(typeof(convert))
console.log(typeof(convert2))
console.log(typeof(convert3))

// Numeric conversion --> this happens in mathematical functions and expressions automatically.
var nomor = '12.5'
var newNomor = Number(nomor) // if you want just convert its data type
var newNomor2 = parseInt(nomor) // convert to integer -> 12
var newNomor3 = parseFloat(nomor) // 12.5
console.log(newNomor)
console.log(newNomor2)
console.log(newNomor2)
console.log(typeof(nomor))
console.log(typeof(newNomor))
console.log(typeof(newNomor2))

// not valid number conversion
var angkaBaru = '' // string contain non valid value
var angkaBaru2 = true
var convert4 = parseInt(angkaBaru) // return not a number (NaN)
var convert5 = parseInt(angkaBaru2)
console.log(convert4)
console.log(convert5)
console.log(typeof(convert4))
console.log(typeof(convert5))

// Boolean Conversion --> It happens in logical operations, 👩‍💻 syntax --> Boolean(value)
// will be return true or false, regardless it data type or value
var zero = 0
var convert6 = Boolean(zero)
console.log(convert6)
console.log(typeof(convert6))

// IMPORTANT
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true, +- 1, 2, 3 4, 5
console.log(Boolean('')) // false
console.log(Boolean('string')) // true
console.log(Boolean(null)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(undefined)) // false
