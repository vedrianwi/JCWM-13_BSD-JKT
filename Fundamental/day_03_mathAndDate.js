/*  There are some special object that useful to know : Math and Date Object
➕ Math Object : 
   Math is a built-in object that has properties and methods for mathematical constants and functions.
   📄 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math 
🕐 Date Object :
   if we want to do some certain task related to current time or some time we want to know user 
   time, we can use build-in object Date that represent time.
   📄 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date 
*/

// MATH OBJECT
let pi = 3.14
console.log(Math.PI)
console.log(Math.abs(-4.5)) // |-4.5| ==> 4.5
console.log(Math.pow(8, 2)) // 8^2 = 8 x 8 = 64
console.log(Math.sqrt(64)) // 8
console.log(Math.cbrt(8)) // 2  x 2 x 2
console.log(Math.random()) // generate random number between 0 and 1
console.log(Math.floor(4.3)) // pembulatan ke bawah
console.log(Math.ceil(4.3)) // pembulatan ke atas
console.log(Math.round(4.3)) // automatic
console.log(Math.round(4.7))

// generate random number between custom interval, ex => between 0 and 5
console.log(Math.round(Math.random() * 5))

// DATE OBJECT
let time = new Date() // current time or time now
console.log(time)
console.log(time.getFullYear())
console.log(time.getMonth()) // month start with 0
console.log(time.getDate())
console.log(time.getDay())
console.log(time.getMinutes())

// exercise
let day = 485
let month = Math.round(485 / 30 )// float --> round
let day2 = 485 % month
console.log(`in ${day} days there ${month} month and ${day2} days`)

let today = new Date()
let hari = today.getDate()
let bulan = today.getMonth() + 1
let tahun = today.getFullYear()

console.log(`
today is ${hari}-${bulan}-${tahun}
tommorow is ${hari+1}-${bulan}-${tahun}
yesterday is ${hari-1}-${bulan}-${tahun}
`)