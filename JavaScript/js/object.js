const obj1 = {} // 'object literal' syntax
const obj2 = new Object() // 'object constructor' syntax


obj1.name = 'ellie' // 프로퍼티 추가
obj1.age = 20
obj1.hasJob = true
console.log(obj1) // {name: 'ellie', age: 20, hasJob: true}
delete obj1.hasJob // 프로퍼티 삭제
console.log(obj1) // {name: 'ellie', age: 20}


console.log(obj1.name) // ellie
console.log(obj1['name']) // ellie

obj1['hasJob'] = true
console.log(obj1.hasJob) // true

// 이럴때 대괄호로 접근한다.
const printValue = (obj, key) => {
    console.log(obj[key])
}
printValue(obj1, 'name') // ellie
printValue(obj1, 'age') // 20


function Person(name, age) {
    // this = {}
    this.name = name;
    this.age = age;
    // return this
}

const person = new Person('name', 40)
console.log(person.age)

console.log('age' in person) // ture
console.log('bbbbb' in person) // false

// 오브젝트의 모든 키 출력
for (let key in person) {
    console.log(key)
}

// 배열과 같은 iterable 객체를 순회
let a = [1, 2, 3, 4]
for (let key of a) {
    console.log(key)
}

// 같은 ref를 참조
const user1 = {name: 'code', age: 23}
const user2 = user1
user2.age = 40
console.log(user1.age)

// Old ver
const user3 = {}
for (let key in user1) {
    user3[key] = user1[key]
}

// 정답
const user4 = Object.assign({}, user1)

console.log(user3) // {name: 'code', age: 40}
console.log(user4) // {name: 'code', age: 40}

const fruit1 = {color: 'red'}
const fruit2 = {color: 'black', size: 10}
const mixed = Object.assign({}, fruit1, fruit2)
console.log(mixed) // {color: 'black', size: 10}
