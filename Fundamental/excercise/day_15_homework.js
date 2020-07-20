// original function
// setTimeout(() => console.log('foo'), 5000)

// clone function
function setTimeoutClone (callback, time) {
    let initialTime = new Date().getTime(), interval // initial time == 9:32:45
    while (true) {
        interval = new Date().getTime() - initialTime // 9:33:48 - 9:32:45 = 3s
        if (interval >= time) {
            callback()
            break
        }
    }
}

// setTimeoutClone(() => console.log('foo'), 5000)

// original function
// setInterval(() => console.log('foofoo'), 3000)

// clone function
function setIntervalClone (callback, time) {
    let initialTime = new Date().getTime(), interval, n = 1
    while (true) {
        interval = new Date().getTime() - initialTime
        if (interval === n * time) {
            callback()
            n++
        }
    }
}

// setIntervalClone(() => console.log('lol'), 3000)

// map clone
let array = [1, 7, 3, 17, 5, 9, 2, 11, 10, 8]

function mapClone(callback, array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}

console.log(mapClone((item) => item + 1, array))

// filter
function filterClone (callback, array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) newArray.push(array[i])
    }
    return newArray
}

console.log(filterClone((item) => item % 2 === 0, array))
console.log(filterClone((item) => item % 2 !== 0, array))

// reduce
function reduceClone (array) {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        result += array[i]
    }
    return result
}

console.log(reduceClone(array))

// repeat
function repeatClone (str, n) {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += str
    }
    return result
}

console.log(repeatClone('hola. ', 3))

// sort function
function bubleSort (callback, array) {
    if (callback(array[0], array[1]) >= 0) {
        for (let i = 0; i < array.length; i++) { // phase
            for (let j = 0; j < array.length; j++) { // loop inside element => compare two nearest element
                if (array[j] > array[j+1]) { // swapping
                    let temp = array[j]
                    array[j] = array[j+1]
                    array[j+1] = temp
                }
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] < array[j+1]) {
                    let temp = array[j]
                    array[j] = array[j+1]
                    array[j+1] = temp
                }
            }
        }
    }
    return array
}

// console.log(bubleSort((a, b) => b - a,  array))
console.log(bubleSort((a, b) => a - b,  array))

// remove duplicate
function removeDuplicate (str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str.charAt(i))) {
            result += str.charAt(i)
        }
    }
    return result
}

console.log(removeDuplicate('foozz'))