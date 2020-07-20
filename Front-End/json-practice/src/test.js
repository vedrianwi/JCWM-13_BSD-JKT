let str = '.@gmail.com'
let str2 = 'helo@@gmail.com'
let str3 = 'hellogmail..com'
let str4 = 'hello.@.com'

// include @, "."domain, "." after @
console.log(str.includes('.'))
console.log(str.includes('@'))

// check if include single @
console.log(str2.split('@'))
console.log(str.split('@'))
console.log(str2.split('.'))
console.log(str.indexOf('@') < str.indexOf('.'))

