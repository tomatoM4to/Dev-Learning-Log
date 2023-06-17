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

console.log('============================')

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result); // apple,banana,orange
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result); // ['🍎', ' 🥝', ' 🍌', ' 🍒']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // [5, 4, 3, 2, 1]
    console.log(array); // [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result); // [3, 4, 5]
    console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result); // [Student, Student, Student]
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result); // [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result); // true

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2); // true
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length); // 73.8
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result); // 80,90,66,88
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => b - a)
        .join();
    console.log(result); // 90,88,80,66,45
}
