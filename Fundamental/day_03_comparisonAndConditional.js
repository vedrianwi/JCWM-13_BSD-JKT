/* 🤔 Comparison 
sometime we need to compare two result or two variable or two value to make decision in our code. 
in mathematic we sometime found comparison operator such as > (greater than), < (less than), 
>= (greater than equal), <= (less than equal), == (is equal), and != (not equal). 
that's all is basic simple comparison. the result of comparison is always 'Boolean' type mean that
its only return true or false value.
*/

// Comparison Operator : ==, ===, >, <, >=, <=, !=
// Number Comparison
let num1 = 10
let num2 = 5
console.log(num1 == num2)
console.log(num1 > num2)
console.log(num1 >= num2)
console.log(num1 < num2)
console.log(num1 <= num2)
console.log(num1 != num2)

// String comparison
console.log('Z' > 'A')
console.log('a' > 'b')
console.log('a' > 'A')
console.log('Glow' > 'Glue')
console.log('Bee' > 'Be')

// Comparison of different types --> ==
console.log('2' > 1) // string will automatically convert to number type
console.log(4 < '5')
console.log(parseInt('01'))
console.log('01' == 1)
console.log(true == 1)
console.log(false == 0)

// Strict equality --> ===, data type must be same
console.log(0 == false)
console.log(0 === false)
console.log(1 == true)
console.log(1 === true)

// special case
console.log(null === undefined) // false
console.log(null == undefined) // true

// An incomparable undefined
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)

// exercise
console.log('apple' > 'pineapple')
console.log('2' > '12')
console.log(null == "\n0\n")
console.log(null === +"\n0\n")
console.log((null + '01') === 'hello')
console.log((null + '01') < 'hello')

/* Conditional operators ❓:
Sometimes, we need to perform different actions based on different conditions.
To do that, we can use the "if statement" and the conditional operator ?, 
that’s also called a “question mark” operator. there 2 type conditional operator in JavaScript

// if ... else ...
    The if(...) statement evaluates a condition in parentheses and, if the result is true, 
    executes a block of code. The if (…) statement evaluates the expression in 
    its parentheses and converts the result to a Boolean.
    👩‍💻 Syntax
    if (condition is true) {
        ... do something
    } else {
        ... do something else
    }

    ⚠ NOTE : 
    - A number 0, an empty string "", null, undefined, and NaN all become false. 
      Because of that they are called “falsy” values.
    - Other values become true, so they are called “truthy”

    // do several condition evaluate using else if ( ... )

// switch ... case
👩‍💻 Syntax
    switch (expression) {
        case x:
            // execute case x code block
            break;
        case y:
            // execute case y code block
            break;
        default:
            // execute default code block
    }
    Following the logic of the code block above, this is the sequence of events that will take place.
    - The expression is evaluated
    - The first case, x, will be tested against the expression. 
      If it matches, the code will execute, and the break keyword will end the switch block.
    - If it does not match, x will be skipped and the y case will be tested against the expression. 
      If y matches the expression, the code will execute and exit out of the switch block.
    - If none of the cases match, the default code block will run.
*/

let year = 2020
let thisYear = new Date().getFullYear()

// single block
if (year == thisYear) {
    console.log(`${year} is greater than ${thisYear}`)
}

// double block
if (year == thisYear) {
    console.log('This is true') // if true
} else {
    console.log('This is incorrect')
}

// multiple condition
var nilai = 30
if (nilai > 80) {
    console.log('Excellent')
} else if (nilai >= 60) {
    console.log('Good Job')
} else if (nilai >= 40) {
    console.log('keep fighting')
} else {
    console.log('Don\'t give up')
}

let status = 'balalla'
if (status === 'jomblo') {
    console.log('you\'re single.')
} else {
    console.log('congratulation 🎉.')
}

// switch ... case
let job = 'model'
switch(job) {
    case 'guru' : 
        console.log('kerjanya ngajar.')
        break
    case 'sopir' :
        console.log('kerjanya nyetir.')
        break
    case 'polisi' :
        console.log('kerjanya nilang.')
        break
    default :
        console.log('kurang kerjaan.')
    
}

// odd vs even (ganjil genap)
let number = 40
if (number % 2 === 0) {
    console.log('even')
} else {
    console.log('odd')
}

// check if user input empty
let userInput = ''
if (userInput == '') {
    console.log('user input is empty')
} else {
    console.log(userInput)
}

// check if number can be divide by 4
if (number % 4 === 0) {
    console.log(true)
} else {
    console.log(false)
}

/*Logic Operator ⁉
logic operator is used when we compare two or more Boolean or the result of comparison. 
There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

// OR (||), will return true if there at least one condition true
  true || true ==> true
  true || false ==> true
  false || true ==> true
  false || false ==> false

// AND (&&), will return true only if both condition true
  true && true ==> true
  true && false ==> false
  false && true ==> false
  false && false ==> false

// NOT (!) ==> Returns the inverse value.
  !true ==> not true ==> false
  !false ==> not false ==> true
*/

// OR ||
console.log(1 || 0) // 1
console.log(5 < 4 || 6 > 3) // 6 > 3 --> true
console.log(1 > 2 || 1 > 0 || 1 == 0) // true

// AND &&
console.log(1 && 0) // false --> 0
console.log(5 < 4 && 6 > 3) // false
console.log(1 > 2 && 1 > 0 || 1 == 0) // false

// NOT !
console.log(!1)
console.log(!0)
console.log(!true)
console.log(!false)


// logic operator + if ... else ...
let hour = 10
if (hour > 12 || hour == 12) {
    console.log(true)
} else {
    console.log(false)
}

// strict equality === vs different type ==