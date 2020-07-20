/* Operator 🤖 
in the school we already familiar with operator such as arithmetic operator (+, -, /, x).
but we not only will discuss that, we also include some operator that you might 
not be familiar with it.

⚠ General terms: “unary”, “binary”, “operand”

-- operand : is what operators are applied to. for example 1 + 2, there two operand 
which is 1 and 2, also one operator, +
*/

/* Math operator or arithmetic operator --> 
    ➕, ➖, / (divide ➗ ), * (multiply ✖), % (modulus), ** (exponential)
*/
var x = 14
var y = 12
var plus = x + y
var minus = x - y
var divide = x / y
var multiply = x * y
var exponential = x ** y
var modulus = x % y
console.log(plus)
console.log(minus)
console.log(divide)
console.log(multiply)
console.log(exponential)
console.log(modulus)

/* unary operator : +, -, ++ (increment), -- (decrement), ! (logical not)
⚠ NOTE : An operator is unary if it has a single operand. 
*/ 
var z = 12
var unaryPlus = +12 // positive 12
var unaryNeg = -12 // negative 12
console.log(unaryPlus)
console.log(unaryNeg)
z++ // increment -> z = z + 1
z++ 
z++
console.log(z)
z--
z--
console.log(z)

// NOTE : declare multiple variable at once
var x, y, z // var x ; var y; var z;
var x = 1, y = 2, z = 3

var result = x + 1
result = z + x
result = y + z +x
