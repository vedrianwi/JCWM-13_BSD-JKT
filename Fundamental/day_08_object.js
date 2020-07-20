/*Object 🐪 
Remember that JavaScript is OPP (Object Oriented Programming), means that everything in 
JavaScript is an Object. Object is like an array, its one kind of Data type in JavaScript 
with special treatment. like a JavaScript, object also can hold multiple data, 
but in term of accessing element its used term of properties instead of index (in Array). 
Also, we can create multiple Object that has similar structure using Class key in JavaScript.

You can imagine object like a real object (Object in the real world). each object has properties
and function, it like human (as object) that has properties such as skin colour, 
eye colour, hair colour, height, etc. also each human general ability, such as human can 
talk, walk, running, etc. in JavaScript is called method. 

🙋‍♂️ How we declare Object ?  ==> use { ... } to declare object
   syntax :
   - let human = {...add properties} // "object literal" syntax
   - let human = new Object() // "object constructor" syntax
   - define object constructor using class ==>
        class ClassName () {
            ... add properties and methods
        }
   ⚠ NOTE : Object with const can be changed and Property keys must be 
   strings or symbols (usually strings).
*/

// declare an object
let human = {
    name : 'Ali', // key : value
    age : 20,
    hobby : 'dance',
    single : true
}

// Object properties (using dot (.) or [properties name]) and value
// how to access object properties?
console.log(human.name)
console.log(human.age)
console.log(human.hobby)
console.log(human.single)

// 2nd method to get properties
console.log(human['name'])
console.log(human['age'])
console.log(human['hobby'])
console.log(human['single'])
// console.log(human[name]) // error

// change object properties value
human.name = 'Kevin'
console.log(human)
human.age = 19
console.log(human)

// add or delete object properties
human.lastName = 'Nine'
human.skill = 'Code'
console.log(human)
delete human.skill
console.log(human)

// object method ==> function inside object
let Animal = {
    color : 'white',
    leg : 4,
    type : 'Mammalia',
    running : function () {
        console.log('this animal can running')
    },
    bark : function () {
        console.log('this animal can bark')
    }
}

console.log(Animal)
console.log(Animal.type)
console.log(Animal.color)
console.log(Animal.running())
console.log(Animal.bark())


// compare to an array
let Human = ['Ali', 20]
console.log(Human[0])
Human[0] = 'Kevin' // change value
console.log(Human)
Human.push(true) // add new element
Human[3] = 'new'
console.log(Human)
delete Human[3] // delete
Human.splice(3, 1)
console.log(Human)


/* 🏛 Class 
the second way to create object is using class. class is like object constructor, where we
can crate multiple object that has similar method and properties also make it reusable. 
"this" keyword meaning that we binding our properties or methods into our class.
*/

// declare class
class Car {
    constructor(_wheel, _color, _type) {
        this.wheel = _wheel,
        this.color = _color,
        this.type = _type
    }
}

// create class instance => similar with invoke a function
let BMW = new Car(4, 'Black', 'Auto')
let Audi = new Car(4, 'Blue', 'Auto')
console.log(BMW)
console.log(Audi)
console.log(BMW.color)
console.log(Audi.color)

// add new properties to new class instance
Audi.battrey = 100
delete Audi.battrey
console.log(Audi)

// add method to class
class Plan {
    // literal properties and methods => when we doesn't need user input
    branch = true
    breath = function () {
        console.log('this plan is breathing')
    }
    constructor(_root, _fruit, _flower, _leaftColor) { // constructor is used when we need user input
        this.root = _root,
        this.fruit = _fruit,
        this.flower = _flower,
        this.leaftColor = _leaftColor
        this.photosynthesis = function () {
            console.log('this plan can do photosynthesis')
        }
        this.fullSpec = function () {
            console.log(`this plan is ${this.root}, has fruit ${this.fruit}, has flower ${this.flower}`)
        }
    }
}

let Manggo = new Plan('single', true, true, 'green')
console.log(Manggo)
console.log(Manggo.flower)
console.log(Manggo.root)
console.log(Manggo.photosynthesis())
console.log(Manggo.fullSpec())
console.log(Manggo.branch)
console.log(Manggo.breath())

// inheritance 
class Person { // parent class
    eyes = 2
    head = 'head'
    ear = 'ear'
    speaking = function () {
        console.log('speaking.')
    }
    eat = function () {
        console.log('need eat.')
    }
    constructor(_sing) {
        this.sing = _sing
    }
}

// child class
class Man extends Person { // make new child that inherit from parent class using extends
    constructor(_sing) {
        super(_sing)
    }
    gender = 'male'
}

let person = new Person(true)
let Ali = new Man(false)
console.log(person)
console.log(Ali)

// Object inside Array
let arr = [
    {
        name : 'Ali',
        age : 19,
        hobby : 'Dance'
    },
    {
        name : 'Sana',
        age : 20,
        hobby : 'Singing'
    }
]

// how to access it element or value?
console.log(arr[0])
console.log(arr[0].name)
console.log(arr[0]['name'])
console.log(arr[1].hobby)

// intermediate term :
// Property existence test, “in” operator, to check existence if properties inside an object
// return true or false
// for loop inside object using for (let key in object) {...}