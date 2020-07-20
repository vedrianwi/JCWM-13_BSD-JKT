/* 🧰 Function 
Quite often we need to perform a similar action in many places of the script. 
for example : we need to perform message with a certain template (ex : greeting message), 
or we need to do mathematic operation, or in real life we do a similar activity or task
in the morning such as doing a shower, eat breakfast, and etc or 
even monthly activity like shopping list . if we do perform a similar
or same task repeatedly or not we can wrapped it into a function that do a certain task, 
it like we make a task or note list in our life and we can use it every time we need it and
make it "reusable" 👋.

1️⃣ Function Declaration
    To create a function we can use a function declaration.
    syntax :
    function functionName () {
        ...do some task
    }
*/

// template message
console.log('Hello')
console.log('My name is alee')
console.log('I love JavaScript')

// convert it to function
function greeting () {
    console.log('Hello')
    console.log('My name is Ade')
    console.log('I love JavaScript')
}

// how to invoke or call the function
greeting()

let a = 12
let b = 15

function example () {
    console.log(a + b)
}

example()

/* 🌏 Function expressions
    in JavaScript there another way to create a function, its called function expression.
    syntax : 
    var variableName = function () {
        ... do something
    }
    ⚠ NOTE : Here, the function is created and assigned to the variable explicitly
*/
let example2 = function () {
    console.log('example')
    console.log('Hello World')
}

example2()

/* 🔢 Function parameter, 
   We can pass arbitrary data to functions using parameters (also called function arguments).
   a function can have more than one parameters
*/
// function with single parameter
function greeting2 (name) {
    console.log('Hello,')
    console.log(`My name is ${name}.`)
    console.log('I love JavaScript.')
}

greeting2('Ali') // name = 'Ali
greeting2('Yayan') // name = 'Yayan'
greeting2('Tiara') // name = 'Tiara
greeting2() // name = undefined

// function with two parameter
function greeting3 (name, hobby) {
    console.log('Hello',)
    console.log(`My name is ${name}`)
    console.log(`I love ${hobby}`)
    console.log('and JavaScript')
}

greeting3('Ali', 'Dance')
greeting3('Kevin', 'Play Game')
greeting3('Kiki', 'Codding')
greeting3('Dance', 'Ali')
greeting3('Tiara')

function plus (x, y) {
    console.log(x + y)
}

plus(1, 3)

/* 🔭 Returning a value, A function can return a value back into the calling code as the result.
   for logical comparison : if we do a shopping list, we need money as our parameter and 
   and if we get refund if our total purchase is less than our money. 
   it similar with return in a function.
*/
console.log(plus(1, 1)) // undefined

function minus (x, y) {
    return x - y // function give output
}

let result = minus(4, 3)
console.log(result)

function areaTriangle (a, t) {
    let area = 0.5 * a * t // local variable
    return area
}

function areaTriangle2 (a, t) {
    return 0.5 * a * t
}

console.log(areaTriangle(5, 9))
console.log(areaTriangle(9, 11))

/* 🍎 Default value, If a parameter is not provided, then its value becomes undefined.
   So, we can provide default value if user doesn't give an input parameter
*/

function plus2 (x = 0, y = 0) {
    return x + y
}

function areaTriangle2(a = 0, t = 0) {
    return 0.5 * a * t
}
console.log(plus2())
console.log(plus2(3))
// console.log(plus2(, 4)) // error
console.log(areaTriangle2(5))


// Function return function
function greeting4 () {
    console.log('Hello, this is function that return a function')
    return greeting()
}

greeting4()

function operator (x, y) {
    return minus(x, y)
}

console.log(operator())
console.log(operator(9, 4))
console.log(operator(6, 2))

// callback function ==> passing function as parameter in another function
function mathematicOperator (plus, minus) { // minus and plus is callback function
    return plus() * minus()
}

console.log(mathematicOperator(function () {
    return 1 + 2
}, function () {
    return 1 - 2
}))

// NOTE : function without name is called anonymous function

let plusResult = plus2(1, 3)
let plusResult2 = plus2(4, 5)
console.log(plusResult * plusResult2)

/* 🎁 local variable (define variable inside a function) vs outer variable (use 
    variable outside function, and The function has full access to the outer variable. 
    It can modify it as well.)
    📝 NOTE : Variables declared outside of any function, such as the outer userName 
    in the code above, are called global.
*/
let glob = 1 // global variable
function areaTriangle4 (a, t) {
    let area = 0.5 * a * t // local variable
    return area
}

console.log(area)
