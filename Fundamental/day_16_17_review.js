// // variable => tempat untuk menyimpan data (type and value)
// // dalam javascript tipe data => String, Number => NaN, Infinity, BigInt, ..., Boolean

// // String => "double quote", 'single quote', `back-tic`
// // "hello world"
// // 'single quote'

// // `
// // hello
// // world
// // back-tic
// // ${}
// // `

// // number => 1, 2, 4, ....

// // boolean => true and false, 
// // true => 1, "string", ['a'], [], {}
// // false => 0, ""

// // define variable => var, let, const
// var namaVariable = "data"
// var namaVariable = "hello"

// let nama = "alee"
// name = "alo"
// // let name = "alo" // error

// const hello = "hello"
// // hello = 1
// // const hello = "hai" // error

// // declare variable
// let hai // hai = undefined
// let result = ''
// result += 1 // result = result + 1

// // assign value
// hai = "hello world"

// // change value
// hai = "hello 🌍"
// console.log(hai)
// console.log(result)

// let greeting = "hai"
// // helloWorld()

// // school

// function helloWorld () {
//     let greeting = "Hello"
//     console.log(greeting)
// }

// helloWorld()
// console.log(typeof school)

// // operator, || , &&, !==, ===, negation !

// // if ... else ... (percabangan // conditional statement)
// let macet = true
// let motor = false
// let ketemuTemen = true
// if (macet) {
//     console.log('jalan kaki')
//     if (ketemuTemen) {
//         console.log('nembeng temen')
//     }
// } else if (macet && !motor) {
//     console.log('naik grab')
// } else {
//     console.log('naik motor')
// }

// if (true) {
//     console.log('test')
// }

// // cara ke 2 if ... else ... => ternary operator ? :

// macet ? ketemuTemen ? console.log('nebeng') : console.log('jalan kaki') : console.log('naik motor')

// if (macet) {
//     console.log('jalan kaki')
// } else {
//     console.log('naik motor')
// }

// // looping => pengulangan, repeat
// // dipakai saat ingin menjalanakan program berkali-kali
// // 3 type looping : while, do...while..., for ...

// let i = 0
// while (i < 10) {
//     // let a = i
//     console.log(i)
//     i++
// }
// console.log(i)

// // // do... while...

// let n = 0
// do {
//     console.log(n)
//     n++
// } while (n < 10)


// // for ...
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// // let i = 0
// // i+2
// // // i+=2 // i = i + 2
// // i--
// // console.log(i)
// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

// // break (berhenti) and continue(skip)
// while (true) {
//     console.log('test break')
//     break
// }

// let num = 0
// while (num < 5) {
//     console.log(num)
//     if (num === 3) break
//     num++
// }

// for (let num = 0; num < 5; num++) {
//     console.log(num)
//     if (num === 3) break
// }


// // continue
// let num2 = 0
// while (num2 < 5) {
//     num2++
//     if (num2 === 3) continue // continue to check it condition
//     console.log(num2)
//     console.log(num2)
//     console.log(num2)
//     console.log(num2)
//     console.log(num2)
// }

// let nilai = 10 // assign value
// nilai == "10" // beda atau sama jenis
// nilai === 10 // sama jenis

// // nested loop => loop di dalam loop
// // for () {
// //     for () {
// //         for () {}
// //     }
// // }

// // while () {
// //     while () {
// //         while () {}
// //     }
// // }

// //


let N = -5, output = ''
for (let row = 0; row < (N * -1); row++) {
    for (let col = 0; col <= row; col++) {
        output += String.fromCharCode(65 + col)
    }
    output += '\n'
}

console.log(output)

let row = 0, output2 = ''
while (row < (N * -1)) {
    let col = 0
    while (col <= row) {
        output2 += String.fromCharCode(65 + col)
        col++
    }
    output2 += '\n'
    row++
}

console.log(output2)

let output3 = '', n = 5
for (let row = 0; row < n; row++) {
    for (let col = 0; col <= row; col++) {
        output3 += (n - row) + col
    }
    output3 += '\n'
}

console.log(output3)

let output4 = ''
for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
        // if (row === col) {
        //     output4 += row
        // } else {
        //     output4 += 0
        // }
        output4 += row === col ? row : 0
    }
    output4 += '\n'
}

console.log(output4)


let str = 'nice', output5 = '', decr = 2
for (let i = 1; i < str.length * 2; i++) {
    if (i > str.length) {
        output5 += str.slice(0, i - decr) + '\n'
        decr += 2
    } else {
        output5 += str.slice(0, i) + '\n'
    }
}

console.log(output5)
