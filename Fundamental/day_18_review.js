// function, array, object
// console.log('Hello World')
// let greet = 'Hello World'
// console.log(greet)
// console.log(greet)
// console.log(greet)
// console.log(greet)
// console.log(greet)

// // langkah bikin mie rebus
// console.log('masak air')
// console.log('buka bungkus mine')
// console.log('masukan mie saat air mendidih')
// console.log('buka bumbunya dan tuangkan')
// console.log('tambahkan toping sesuai selera anda')
// console.log('sajiakan')

function masakMie () {
    console.log('masak air')
    console.log('buka bungkus mine')
    console.log('masukan mie saat air mendidih')
    console.log('buka bumbunya dan tuangkan')
    console.log('tambahkan toping sesuai selera anda')
    console.log('sajiakan')
}

// masakMie()
// masakMie()
// masakMie()
// masakMie()

// function with input
function kenalan (nama, umur) {
    console.log(`hello, nama saya ${nama} dan umur ${umur}`)
}

kenalan('ali', 19)
kenalan('dian', 21)

// arrow function, () => {...do something}
const kenalanv2 = (nama, umur) => console.log(`hello, nama saya ${nama} dan umur ${umur}`)
kenalanv2('ali', 19)
kenalanv2('dian', 21)

// kalau input tunggal / satu
const contoh = input1 => console.log(input1)
// input > 1
const contoh2 = (input1, input2) => console.log(input1 + input2)
// kalau program lebih dari satu baris
const contoh3 = (input1, input2) => {
    console.log(input1)
    console.log(input2)
}

// function with return value, fungsi dengan output
function penjumlahan (a, b) {
    let result = a + b
    return result
}

console.log(penjumlahan(1, 2))
let hasil = 1 + penjumlahan(3, 5)
console.log(hasil)

// function with multiple return value
function calculator (a, b) {
    let tambah = a + b
    let kurang = a - b
    let bagi = a / b
    let kali = a * b
    return [tambah, kurang, bagi, kali]
}

console.log(calculator(5, 3))
let hasilKurang = calculator(5, 3)[1]
console.log(hasilKurang)

// function that return a function
function kenalanv3 (nama, umur) {
    console.log(`kenalan, nama saya ${nama} dan umur saya ${umur}`)
    return calculator(umur, umur)
}

kenalanv3('ali', 12)
console.log(kenalanv3('ali', 12)[3])

// callback function ? function yg berguna sebagai input function lain
function example (callback) {
    console.log(callback())
    // example()
}

example(() => 5)

let array = [1, 4, 5, 2, 6, 7, 8]
console.log(array.filter((item, index) => item % 2 === 0))
console.log(array)

// array and object => collection atau kumpulan data
// array and object can store multiple data type => string, boolean, number, function(), array, object
// array [] and object {}

let array2 = ['ali', 25, 'single', true, ['BSD', 'TikTok', []], { name : 'ali'}, function () { console.log('hello')}]
console.log(array2[2])
console.log(array2[4][1])
console.log(array2[5].name)
console.log(array2[5]["name"])
console.log(array2[6]())
console.log(array2[Math.floor(Math.random() * array2.length)])

let obj = {
    // properties => key : value
    name : 'ali',
    age : 21,
    single : true,
    hobby : ['Dance', 'TikTok', 'Drawing'],
    laptop : { merk : 'Apple'},
    // method
    dance : function () {
        console.log('moonwalk')
        console.log('bounce-step')
    }
}

console.log(obj.name)
console.log(obj.age)
console.log(obj.hobby[1])
console.log(obj.laptop.merk)
console.log(obj.dance())

// constructor atau cetakan object => class
class cetakanObject {
    constructor(_name, _age, _single, _hobby, _laptop, _dance) {
        this.name = _name
        this.age = _age
        this.single = _single
        this.hobby = _hobby
        this.laptop = _laptop
        this.dance = _dance
    }
}

// cara bikin object
let verdian = new cetakanObject('verdian', 18, false, ['ngoding'], {merk : 'asus'}, () => console.log('slide'))
console.log(verdian)
console.log(verdian.name)
console.log(verdian.hobby[0])
console.log(verdian.dance())

// looping di dalam object
for (let key in obj) {
    console.log(key)
    console.log(obj[key])
}

console.log('name' in obj)

// off
{/* <div>
    <ul>
        <li></li>
    </ul>
</div> */
}

(4, 'alee')[1].hello(true).dance()[0][1][4]().end

[1][4][0]()().greet()[5]().step[1]().finish

// console.log(Math.floor(Math.random() * 9))

user.name.lastname[0](a, b)()[1].run().sleep('zzz').and()[0].dance()
