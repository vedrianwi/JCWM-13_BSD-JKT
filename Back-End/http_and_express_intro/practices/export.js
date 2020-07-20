// export module in node js

// function hello () {
//     console.log('hello')
// }

// function add (x, y) {
//     console.log(x + y)
// }

// module.exports = hello
// module.exports = { hello, add }

module.exports = {
    hello : () => {
        console.log('hello')
    },
    add : (x, y) => {
        console.log(x + y)
    }
}