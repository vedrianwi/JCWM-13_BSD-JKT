console.log(Boolean({}))
console.log(Boolean([]))

console.log(Boolean(""))

// array => keys/properties dari object
console.log(Object.keys({ name : "alee", age : 16})) 
console.log(Object.keys({}))

// looping inside object
let obj = { name : 'alee', age : 16, hobby : 'dance' }
for (let key in obj) {
    console.log(key)
    console.log(obj[key])
}

// get value from object
console.log(obj.name)
console.log(obj['name'])

// trim ()
console.log("".trim())
console.log(" hello world ".trim())


// test
console.log(Boolean(0 !== 0))