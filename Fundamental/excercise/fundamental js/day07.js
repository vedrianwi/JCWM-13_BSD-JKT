// 1. vowel count
function vowelCount (str) {
    // initialize parameter
    let count = [], 
    vowel = ['a', 'i', 'u', 'e', 'o'], 
    arr = str.toLowerCase().split('') // convert string to array

    // do iteration
    for (let i = 0; i < arr.length; i++) {
        if (vowel.includes(arr[i]) && !count.includes(arr[i])) {
            count.push(arr[i])
        }
    }

    // give return value
    return count.length
}

console.log(vowelCount('hello world'))
console.log(vowelCount('i love javaScript'))
console.log(vowelCount('erangel'))

// 2nd and 3rd form
const vowelCount2 = (str) => {
    let result = str.toLowerCase().split('').filter(item => ['a', 'i', 'u', 'e', 'o'].includes(item))
    return result.filter((item, index) => result.indexOf(item) === index).length
} 

const vowelCount3 = (str) => [... new Set(str.toLowerCase().split('').filter(item => ['a', 'i', 'u', 'e', 'o'].includes(item)))].length

console.log(vowelCount2('hello world'))
console.log(vowelCount2('i love javaScript'))
console.log(vowelCount3('hello world'))

// 2. Palindrome
function palindrome (str) {
    let arr = str.toLowerCase().split('').reverse().join('')
    if (arr === str.toLowerCase()) {
        return true
    } else {
        return false
    }
}

// 2nd form
const palindrome2 = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join() ? true : false

console.log(palindrome('madam'))

// 3. pattern
function pattern1 (n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++) {
            if (i == j) {
                result += ` ${i} `
            } else {
                result += ` ${0} `
            }
        }
        result += '\n'
    }
    console.log(result)
}

pattern1(7)

// recursive
function looping (n) {
    if (n > 1) {
        looping(n-1)
    }
    console.log(n)
}

looping(100)

function pattern2 (n) {
    let result = ''
    for (let i = 0; i < n; i++) {
        // drawing space
        for (let s = 0; s < n - 1 - i; s++) {
            result += '   '
        }

        // drawing pattern
        for (let p = 0; p < 2 * i + 1; p++) {
            if (i % 2 !== 0 && i !== 0) {
                if (p % 2 !== 0) {
                    result += '   '
                } else if (p === 0){
                    result += ` ${p + 1} `
                } else {
                    result += ` ${p} `
                }
            } else {
                if (p% 2 !== 0) {
                    result += `   `
                } else {
                    result += ' * '
                }
            }
        }
        result += '\n'
    }
    console.log(result)
}

pattern2(5)

function pattern3 (n) {
    let result = '', count = 0, pattern = ''
    for (let i = 0; i < n; i++) {
        
        if (i === 0 && count === 0) {
            pattern += 1
        } else if (count <= 2 && i % 2 !== 0) {
            pattern = 0 + pattern
        } else if (count <= 2 && i % 2 === 0) {
            pattern = pattern + 0
        } else if (count >= 3 && i % 2 !== 0) {
            pattern = 1 + pattern
        } else {
            pattern = pattern + 1
        }

        if (count === 4) {
            count = 1
        } else { count ++ }

        result += pattern + '\n'
    }
    console.log(result)
}

pattern3(5)