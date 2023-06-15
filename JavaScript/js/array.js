const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['apple', 'banana', 'lemon', 'tomato'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[10]); // undefined


for (let i = 0; i < fruits.length; i++);
for (let i of fruits);
fruits.forEach((fruit, index, arr) => console.log(fruit, index, arr, `for each`))



fruits.push('melon');
console.log(fruits);
fruits.pop();
console.log(fruits);


// 시간복잡도 n
fruits.unshift('melon');
console.log(fruits);
fruits.shift();
console.log(fruits);


console.log(fruits, `slice`); // ['apple', 'banana', 'lemon', 'tomato'] 'slice'
fruits.splice(1, 1) // 시작 인덱스, delete count
console.log(fruits, `slice`) // ['apple', 'lemon', 'tomato'] 'slice'


const a = [1, 2].concat(fruits)
console.log(a) // [1, 2, 'apple', 'lemon', 'tomato']


console.log(a.indexOf('apple')) // 2
console.log(a.indexOf('123123')) // -1
console.log(a.includes('apple')) // true
console.log(a.includes('124324')) // false
