const fs = require('fs')

// synchronous vs asynchrounous programming
console.log('Hello')
console.log('World')

setTimeout(() => console.log('Async'), 5000) // async

console.log('my name is alee')

fs.readFile('pages/home.html', (err, file) => {
    if (err) console.log(err)
    console.log('1st file : ', file)
}) // async

// 2nd form, try and catch => handle err in async proccess
try {
    const file = fs.readFileSync('pages/home.html')
    const file2 = fs.readFileSync('pages/about.html')
    console.log('2nd', file)
} catch (err) {
    console.log(err)
}

console.log('done')
