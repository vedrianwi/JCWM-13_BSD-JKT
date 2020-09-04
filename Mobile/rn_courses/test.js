// console.log(Date.now())

let a = [1, 2, 3, 4, 5];

let c = [...a];

let b = a; // ? reference copy

b.splice(0, 1); // return ?
a.splice(a.length - 1, 1);

console.log('a : ', a);
console.log('b : ', b);
console.log('c : ', c);

// a = b, a != c, c != b

// object destucturing
const obj = { name: 'alee', age: 19 };
const { name } = obj;
console.log(name);
