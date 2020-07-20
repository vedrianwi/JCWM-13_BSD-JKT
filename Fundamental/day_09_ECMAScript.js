// Ternary Operator, ? ... : ...
let x = 11
if (x % 2 === 0) {
    console.log('genap')
} else {
    console.log('ganjil')
}

// syntax : conditional ? if true : else
x % 2 === 0 ? console.log('genap') : console.log('ganjil')


// arrow function vs regular function
function ganjilCheck (num) {
    if (num % 2 === 0) {
        return false
    } else {
        return true
    }
}

// arrow function more than one line
const ganjilCheck2 = (num) => {
    if (num % 2 === 0) {
        return false
    } else {
        return true
    }
}

const print = str => console.log(str)
const plus = (x, y) => x + y
const ganjilCheck3 = x => x % 2 === 0 ? console.log('genap') : console.log('ganjil')

// default parameter
function minus (x = 0, y = 0) {
    return x - y
}

console.log(ganjilCheck(x))
console.log(ganjilCheck2(x))
console.log(print('hello'))
console.log(plus(1, 9))
console.log(ganjilCheck3(x))
console.log(minus(10, 3))
console.log(minus())

// setTimeout() and setInterval()
// setTimeout(() => console.log('test set timeout'), 5000)
// setInterval(() => console.log('test set interval'), 5000)

// Array method
let arr = ['mango 🥭', 'apple 🍎', 'watermelon 🍉', 'strawberry 🍓', 'lychee 🍒', 'lemon 🍋', true]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// forEach => to iterate or looping through an array
arr.forEach(item => console.log(item))
// arr.forEach(function (item) {
//     console.log(item)
// })

// every() and some(), return true or false
console.log(arr.every(item => typeof(item) === 'string'))
console.log(arr.some(item => typeof(item) === 'boolean'))

// map() and filter(), return new array
let example = [1, 3, 2, true, false, 18, 'hello']
let newArray = example.map(item => String(item))
let newFilter = example.filter(item => typeof(item) === 'boolean')
console.log(example)
console.log(newArray)
console.log(newFilter)
