'use strict'

let a = 5
function changeA(a) {
    a = 10
}
changeA(a)
console.log(a) // 5

const ellie = {name: 'ellie'}
function changeEllie(e) {
    e.name = 'change name'
}
changeEllie(ellie)
console.log(ellie) // {name: 'change name'}

function showMessage(message = '디폴트') {
    console.log(message + ' 파라미터')
}
showMessage() // 디폴트 파라미터

function printAll(...args) {
    args.forEach(arg => console.log(arg)) // 1 ~ 5 출력
    return undefined // 생략 가능
}
printAll(1, 2, 3, 4, 5)


let globalMessage = 'globalMessage var'
function printMessage() {
    let message = 'printMessage var'
    console.log(globalMessage)
    function printAnother() {
        let anotherMessage = 'anotherMessage var'
        console.log(message)
    }
    // console.log(anotherMessage) // Uncaught ReferenceError: anotherMessage is not defined
}
// console.log(message) // Uncaught ReferenceError: message is not defined
printMessage()

function upgradeUser1(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

function  upgradeUser2(user) {
    if (user.point <= 10) return;
    // long upgrade logic...
}


const print = function () {
    // 익명 함수
    console.log('print')
}

const printAgain = print

console.log(print) // ƒ () { console.log('print') }

print() // print
printAgain() // print
console.log(print === printAgain) // true, 같은 함수를 가리키고 있다.

hoistingF() // 에러 X
function hoistingF() {
    console.log('hoisting function')
}

const randomQuiz = function (a, b, c) {
    if (a === 'love') {
        b()
    }
    else {
        c()
    }
}

randomQuiz('love', () => console.log('정답'), function () {console.log('XXX')}) // 정답


const simplePrint1 = function () {
    console.log('simple f')
}
const simplePrint2 = () => console.log('simple arrow f');


const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    return a * b;
}
