// char code a = 97 - 96, b = 98 - 96 , c = 99 - 96
const loveAndFriendship = str => str.toLowerCase().split('').map(item => item.charCodeAt(0) - 96).reduce((a,b) => a + b)

function loveAndFriendship3 (str) {
    // change input to array
    let arr = str.toLowerCase().split('')

    // do looping
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].charCodeAt(0) - 96
    }

    return result
}

const loveAndFriendship2 = (str) => {
    let result = 0
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i) - 96
    }
    return result
}

// test
console.log(loveAndFriendship('love'))
console.log(loveAndFriendship('friendship'))
console.log(loveAndFriendship('abc'))

function numberToWord (num) {
    const single = { 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five', 
    6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 10 :' ten'}
    const teens = {11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen', 
    15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 
    19 : 'nineteen'}
    const tendigit = {20 : 'twenty', 30 : 'thirty', 40 : 'forty', 50 : 'fifty', 
    60 : 'sixty', 70 : 'seventy', 80 : 'eighty', 90 : 'ninety'}
    let strNum = num.toString()

    // check number
    let result = ''
    if (strNum.length === 3) {
        if (num === 100) {
            result += 'one hundred'
        } else {
            result += `${single[strNum[0]]}hundred and ${tendigit[strNum[1]+0]||''} ${single[strNum[2]]||''}`
        }
    } else {
        if (Object.keys(single).includes(strNum)) { // ['1', '2', '3', ...]
            result += single[strNum]
        } else if (Object.keys(teens).includes(strNum)) { // 11-19
            result += teens[strNum]
        } else if (Object.keys(tendigit).includes(strNum)) { // 20, 30, 40, ... 
            result += tendigit[strNum]
        } else { // 45, 66, 78, 98
            result += tendigit[strNum[0]+0] + ' ' + single[strNum[1]]
        }
    }

    return result
}

// test
console.log(numberToWord(19))
console.log(numberToWord(21))
console.log(numberToWord(33))
console.log(numberToWord(543))
// console.log(numberToWord(200))

function wordToNumber (str) {
    const single = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tendigit = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    // check number
    let result = 0
    if (single.includes(str)) {
        result += single.indexOf(str) + 1
    } else if (teens.includes(str)) {
        result += teens.indexOf(str) + 11
    } else if (tendigit.includes(str)) {
        result += (tendigit.indexOf(str) + 1) * 10
    } else {
        let strNum = str.split(' ')
        result += (tendigit.indexOf(strNum[0])+1) * 10 + (single.indexOf(strNum[1]) + 1)
    }
    return result
}

console.log(wordToNumber('ninety six'))

// terbatas
function math(str) {
    let arr = str.split(' '), result = 0
    if (arr[1] === 'plus') {
        result += (wordToNumber(arr[0]) + wordToNumber(arr[2]))
    } else if (arr[1] === 'minus') {
        result += (wordToNumber(arr[0]) - wordToNumber(arr[2]))
    } else if (arr[1] === 'multiply') {
        result += (wordToNumber(arr[0]) * wordToNumber(arr[2]))
    } else if (arr[1] === 'divide') {
        result += (wordToNumber(arr[0]) / wordToNumber(arr[2]))
    }
    return result
}

console.log(math('one plus two'))
console.log(math('ninety minus eight'))
console.log(math('sixty divide twenty'))
// console.log(math('sixty nine plus one'))

// let obj = {name : 'ali', age : '24', school : 'purwadika'}
// console.log(Object.keys(obj))

console.log(true || false)
let a = NaN || 1
console.log(a)

console.log('ninety minus eight'.split(' '))
console.log('ninety minus eight'[5])
console.log(0 + 5 + 'a')

// continue and break => looping
for (let i = 0; i < 5; i++) {
    if (i === 3) continue
    console.log(i)
}

// return => (value) => function
function returnBol () {
    return true
}
console.log(returnBol())
if (returnBol()) {
    console.log('true')
} else {
    console.log('false')
}

// object vs class
// object => data type => store data
let alphabet = 'abc'
let array = ['a', 1, 5, true, false, [false, 0]] // access element using index, start from 0
let arr = ['ale', 19, true] 
console.log(arr[2])
let obj = {
    name : 'ale', // key : value || properties : value
    age : 19,
    single : true
} // object => store multiple value and data
console.log(obj.single)
console.log(obj['single'])


// loop inside array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// loop inside object
console.log(obj.name)
console.log(obj.age)
console.log(obj.single)
let arr2 = ['lollipop', true, {size : 'M', color : 'red'}]
for (let key in obj) { // for in
    // console.log(key)
    console.log(obj[key])
}

for (let key in arr2[2]) {
    console.log(key)
}

let arr3 = [{name : 'mango', stock : 4}, {type : 'car'}, {color : 'yellow'}]

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i])
    for (let key in arr3[i]) {
        console.log(arr3[i][key])
    }
}

arr = [['ale', 18, 'cooking'], ['lia', 19, 'dance']]
arr[0][2]
// arr[0].age

