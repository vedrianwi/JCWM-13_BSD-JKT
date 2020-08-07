// PROMISES and ERORR HANDLING
// promise => janji => ada kemungkinan => ditepati atau tidak => ada hasil
// promise tidak harus langsung di tepati
// promise in js => resolve, reject
// resolve => promise if fullfiled, reject => !resolve

// promise dipakai untuk bikin asynchrounous=> exp : axios
// axios.get(URL) => promise untuk get data
// resolve => result => .then(result)
// reject => error => .catch(error)
// karena process asynchrounous => tidak prioritaskan

// EXAMPLE :
// AXIOS.GET(URL) => axios give us a promise to get data from certain URL
// => AXIOS 
// => do async proccess 
// => sent request to APIs 
// => waiting for response 
// => accepted a response 
// => give data to user => resolve or reject
// NOTE : * resolve and reject always give data

// Axios.get()
// console.log()

// * PROMISE => make a function asynchronous
// sync vs async => sync win, but async still be executed

// example : asynchronous process => * need some time to completed the task
function asyncExample (numb) {
    return new Promise((resolve, reject) => {
        // fake async process
        setTimeout(() => numb < 0 ? reject(numb) : resolve(numb), 5000)
    })
}

// resolve identic dengan success
// reject identic dengan error

// asyncExample(10)
// get value or data from resolve
// .then(result => console.log('resolve : ', result))
// get value or data from reject 
// .catch(error => console.log('reject : ', error))

// console.log('example 1')
// console.log('example 2')
// console.log('example 3')

// ERORR HANDLING : try {...} catch {...}
// try {
//     throw Error('ini erorr saat try')
//     console.log('try')
//     console.log('try 2')
// } catch (err) {
//     console.log(err)
// }

function tryCatch (numb) {
    try {
        if (numb <= 0) {
            // throw Error('number bellow 0.')
            // throw 'number bellow 0.'
            throw { err : 'number below 0.' }
        } else {
            console.log(numb)
        }
    } catch (err) {
        console.log(err)
    }
}

// tryCatch(-10)

// cara kedua untuk bikin asynchronous process pakai key aysnc
async function example() {
    return setTimeout(() => 10, 5000)
}
// example()
// console.log(example())
// console.log('async process')

// async dibikin sepasang dengan key await
// await => async => seolah2 menjadi sync
// await => menunggu prosess aynsc sampai selesau


// insert multiple value in sql
const category_id = [
    {
        "id": 40
    },
    {
        "id": 4
    },
    {
        "id": 1
    }
]
// const parent_id = 8
// let query = ''
// category_id.forEach(item => query += `(${parent_id}, ${item.id}),`)
// console.log(query.slice(0, -1))

// let qry = []
// category_id.forEach(item => qry.push([parent_id, item.id]))
// console.log(qry)

console.log(Date.now())