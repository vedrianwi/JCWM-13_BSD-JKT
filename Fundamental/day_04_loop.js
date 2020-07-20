/* ♾ Loops: for, while, and do...while  
when we are code, sometime we need to performs a task repeatedly. in JavaScript we do that
with loop. there 3 type of loop in JavaScript, for..., while..., and do...while... 
loop in JavaScript statements in JavaScript are similar to conditional statements if...else...,
which are blocks of code that will execute if a specified condition results in true. 
*/

/* 1️⃣ for loop :
    syntax :
    for (initialization; condition; final expression) {
        // code to be executed
    }
    initialization just run once
*/

// if we want to execute console.log() command 10x
for (let i = 0; i < 10; i++) { // initial i = 0; i < 10; step : i increment by 1
    console.log(i)
}

/* 2️⃣ While Loop
    In JavaScript, a while statement is a loop that executes as long as the specified condition 
    evaluates to true. it can cause infinite loop when we set condition always true.
    syntax :
    while (condition) {
        // execute code as long as condition is true
    }
*/

let number = 12 // initialization
while (number < 10) {
    console.log(`while number ${number}`)
    number++ // increment by 1
}

/* 3️⃣ do...while...
    which is very similar to while with the major difference being that a do...while 
    loop will always execute once, even if the condition is never true.
    syntax :
    do {
        // execute code
    } while (condition)
*/
let number2 = 0
do {
    console.log(`do while number ${number2}`)
    number2++ //number2 = number2 + 1
} while (number2 < 10)

// change looping step
let number3 = 0
while (number3 < 10) {
    console.log(`number ${number3}`)
    number3 += 4 // number3 = number3 + 4
}

let number4 = 0
do {
    console.log(`number do while ${number4}`)
    number4 += 2
} while (number4 < 10)

for (let number5 = 0; number5 < 10; number5+=2) {
    console.log(number5)
}

/* 📒 break and continue, break will terminate or stop loop process while continue only skip the
step of loop, so the code bellow it will be skip.
*/
// break
let grade = 0
while (grade < 100) {
    console.log(`${grade}th grade`)
    grade += 5
    // add logic statement or if...else..
    if (grade === 50) {
        break
    }
}

let grade2 = 0
do {
    console.log(`${grade2}th grade two`)
    grade2 += 5
    if (grade2 === 50) break
} while (grade2 < 100)

for (let grade3 = 0; grade3 < 100; grade3 += 5) {
    console.log(`${grade3}th grade three`)
    if (grade3 === 50) break
}

let genap = 0
while (genap < 10) {
    if (genap % 2 === 0) {
        console.log(`${genap} is even number`)
    }
    genap++
}

// continue ==> skip step in final expression
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) { // even
        continue
    }
    console.log(i)
}
