'use strict'

// global scope -> 프로그램 시작부터 끝까지 메모리의 공간을 차지하고 있기에 최소한으로 사용
let globalName = 'global var'
{
    // block scope -> block 밖에서 blockName에 접근이 불가능
    let blockName;   // blockName이라는 변수가 메모리의 한 공간을 가리키게 된다
    blockName = 'dawon'  // blockName이 가리키는 메모리의 공간에 dawon이 추가가 된다
    console.log(globalName)    // block 내에서 global scope 접근 가능
}


// var hoisting -> var로 선언된 변수는 어디에 선언되있던지 항상 제일 위로 끌어 올려줌
// var는 block을 철저하게 무시하는 변수임
a = 4;
console.log(a)
{
    var a;
}

// const(상수), 사실상 가장 선호되는 키워드, 1. 보안, 2. thread safety, 3. 실수 방지
const b = 2


// 데이터 타입, number, string, boolean, first-class function, object....

// number, 별 다를건 없지만.. 몇가지 특별한 숫자의 값이 있음
const infinity = 1/0
const negativeInfinity = -1 / 0
const nAn = 'not a number' / 2
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)


// string, 문자든 문자열이든 다 문자열

// boolean
// false: 0, null, undefuned, NaN, ''
// true: any other value


// null. undefined
let nothing = null
console.log(`value: ${nothing}, type: ${typeof nothing}`)

let x;
console.log(`value: ${x}, type: ${typeof x}`)


const symbol1 = Symbol('id')
const symbol2 = Symbol('id')


let text = 'hello'
console.log(`value ${text}, type: ${typeof text}`) // value hello, type: string

text = 1
console.log(`value ${text}, type: ${typeof text}`) // value 1, type: number

text = '6' + 1
console.log(`value ${text}, type: ${typeof text}`) // value 61, type: string

text = '8' / '2'
console.log(`value ${text}, type: ${typeof text}`) // value 4, type: number

const ellie = {name: 'ellie', age: 20}
ellie.name = 'abcde'
console.log(ellie.name)

