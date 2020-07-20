// infinite loop
while (true) {
    console.log('hello')
    // to stop looping we us break
    break
}

// using outer variable as condition
let condition = true
while (condition) {
    console.log('hello 2')
    condition = false
}

// nesting loop or loop inside loop
while (true) {
    console.log('outer loop')
    while (true) {
        console.log('inner loop')
        while (true) {
            console.log('inner loop 2')
            break // all loop will be terminated
        }
    }
    // while (true) {
    //     console.log('inner loop')
    //     while (true) {
    //         console.log('inner loop 2')
    //     }
    // }
}

// break loop 2nd method
let outer = true
let inner = true
while (outer) {
    console.log('outer')
    while (inner) {
        console.log('inner')
        if (true) outer = false
    }
}

// 3th method : label
outer : while (true) {
    console.log('outer')
    inner : while (true) {
        console.log('inner')
        break inner
    }
}

outer : for (let i = 1; i < 20; i++) {
    inner : for (let j = 1; j < 20; j++) {
        if (j % 2 === 0) break outer
        console.log(i)
    }
}

// nested loop
let N = 10
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        console.log(`i = ${i}th and j = ${j}th`)
    }
}

// 1st star pattern
let N = 5
let result = ''
for (let i = 0; i < N; i++) {
    result += '*'
}
console.log(result)


// 2nd pattern
let result2 = ''
for (let i = 0; i < N; i++) { // draw vertical
    for (let j = 0; j < N; j++) { // draw horizontal
        result2 += ' * ' // result2 = result2  + '*'
    }
    result2 += '\n'
}
console.log(result2)

// i = 0
// result2 = '*****\n'
// i = 1
// result2 = '*****\n*****\n'

// 3rd pattern
let result3 = ''
for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
        result3 += ' * '
    }
    result3 += '\n'
}
console.log(result3)

let result4 = ''
for (let i = N; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        result4 += '*'
    }
    result4
}

// NOTE : console.log('Hello \n World')

// scope variable
let hello = 'world' // global variable
// block {...}
{
    let world = 'hello' // local variable
    console.log(world)
}

console.log(hello)
console.log(world)