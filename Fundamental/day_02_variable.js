/* Code Structure
📒 The first thing we’ll study is the building blocks of code and syntax type rule in JavaScript
🔠 STATEMENET
    Statements are syntax constructs and commands that perform actions.
    We’ve already seen a statement, alert('Hello, world!'), which shows the message “Hello, world!”.
    Multiple statement separated by semicolon
        alert('Hello'); alert('world'); 
            or
        alert('Hello');
        alert('World');

🥓 SEMICOLON
    A semicolon may be omitted in most cases when a line break exists. the notation ; is optional,
    use to separated multiple statement especially inline statement
    alert('Hello')
    alert('world')
    but needed in multiple inline statement alert('Hello'); alert('world');

💬 COMMENT
    used for notation or documentation of our code, comment will not be executed by JS engine,
    there several comment type : 
    // this is inline comment
    /*
    this is multiple 
    line comment
    */
// ⚠ Nested comments are not supported 

// inline comment

// statement --> perintah perbaris
console.log('this is statement') // ini perintah untuk menampilkan tulisan di console
console.log('this is sceond statement')

/* Variable 🛸🛸🛸
what we do in programming is mostly related to data and how we can manipulate the data? first, 
we need something that can store data, in JavaScript and other programming language is commonly 
called variable. Variables in JavaScript are containers which hold reusable data. 
They like a box that we can fill stuff and this staff can be change anytime so that 
make the box reusable.
*/

// how to declare variable ? --> syntax -> var namaVariable = value
var name = 'Ali'
var age = 25 // JavaScript will automatically recognised this value as number
var jomblo = true

// display in console
console.log(name)
console.log(age)
console.log(jomblo)

// if we define variable without value
var school
school = 'purwadhika' // assign value
name = 'al'
age = 16
jomblo = false

console.log(school)
console.log(name)
console.log(age)
console.log(jomblo)

/* NOTE : 📦 variable naming rule : 
    - Names should begin with lowercase string.
    - Names cannot contain symbols or begin with symbols.
    - Names cannot begin with a number.
    - Names can contain a mix of uppercase strings, lowercase strings, and numbers.

 ⚠ use variable only when we use the value multiple times or make it reusable
 in JavaScript Case matters, 'apple and AppLe is different 🔖'
*/

// non-valid
var Hello = 'Hello' // its valid  but not recommended
var !simbol
var 2variable
var let
var var
var helloworld

// valid
var hello
var number2

// if variable name more than one word
// camel case rule -> first letter begin with lowercase, next world begin with uppercase
var firstName
var FirtsName

// underscore
var first_name

// important case
var hello
var heLLo
var world
var World

/* 💡 Modern JavaScript variable declaration : 'let' and 'const'
the variable type 'let' shares a lot of similarities with var but unlike var has scope constraints.
const, is a variable type (not really, but you’ll find out now) assigned to data whose value cannot 
and will not be changed throughout the script. 
⚠ NOTE : When declaring variables, it is good practice to avoid us NOTE : 
*/

// var vs let vs const
var orange = 'orange'
var orange = 'blue'
orange = 'red'
console.log(orange)

let apple = 'red apple'
let apple = 'white apple' // error, let cannot declare same variable name twice
// let apple = 'blue apple'
console.log(apple)

let gender = 'male'
gender = 'female'
gender = 'hello'

// const -> constant, this will store value that will not be change or constant
const greet = 'hello my name is alee'
const greet = 'greeting' // error
console.log(greet)
// greet = 'hello world'

// for important value, use uppercase to declare variable name
const GREET = 'Hello'
console.log(greet)

// declare variable
var namaVariable = 'nilai atau value'
namaVariable = 'new value'

var message = 'Hello'
message = 'world'