// Multidimensional array or array inside array
let arr = [true, 'Hello', 'Jupiter', 0, [false, 'Mars']]
console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])
console.log(arr[4][1])
console.log(arr[4][0])
// console.log(arr[arr.length - 1])

let mix = [9, true, 'nine', [false, '🌍 World', 13, [true, false]], 'ok', ['sun', 'space-x', 'voyager-II']]
console.log(mix[2])
console.log(mix[5][1])
console.log(mix[3][2])
console.log(mix[3][3][0])

// 🔔 Spread operator(...), use to implement full copy vs reference copy
let a = [1, 2, 3]
let b = a // reference copy
a[1] = 4

let c = [...a] // full copy
a[1] = true

console.log(a)
console.log(b)
console.log(c)

// exercise
let str = 'Hello World'
let array = str.split('')
let rev = array.reverse()
console.log(array)
console.log(rev.join(''))

console.log(str.split('').reverse().join('')) // chaining methods

let str2 = 'javascript' 
console.log(str2.split('').sort().join(''))