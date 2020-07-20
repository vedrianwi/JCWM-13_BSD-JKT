// let str = 'hello world'
// let result = ''
// for (let i = str.length; i >= 0; i--) {
//     result += str.charAt(i)
//     // result = result + str.charAt(i)
// }
// console.log(result)

// // prime number
// for (let i = 1; i <= 20; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (i % j === 0 && i === j && i % 2 !== 0) {
//             console.log(i)
//         }
//     }
// }

// let str = 'Hello World'
// console.log(str.charCodeAt(0))

// for (let i = 0; i < 10; i++) {
//     console.log(Math.ceil(Math.random() * 3))
// }

let users = [
    {
        username : 'admin',
        role : 'admin'
    }
]

users.forEach(item => console.log(item.username === 'admin'))