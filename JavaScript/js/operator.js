console.log('my' + ' cat') // my cat
console.log('1' + 2) // 12
console.log(`1 + 2 = ${1 + 2}`) // 1 + 2 = 3


console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 2);
console.log(2 * 2);
console.log(1 % 2);
console.log(1 ** 2);

let counter = 2;
counter++;
--counter;


let x = 3;
let y = 26;
x += y;
y *= x;


let log1 = true || !false || !false;
let log2 = false && true && true;


const stringFive = '5';
const numberFive = 5;

// == loose equality, 타입을 변경하여 비교한다.
console.log(`string 5 and number 5 is ${stringFive == numberFive}`); // string 5 and number 5 is true

// === strict equality, 타입까지 신경써서 비교한다.
console.log(`string 5 and number 5 is ${stringFive === numberFive}`); // string 5 and number 5 is false



