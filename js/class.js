class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    speak() {
        console.log(`${this.name}: hi im ${this.age} years old.`)
    }

    get age() {
        console.log(`getter ON`)
        return this._age
    }

    set age(value) {
        console.log(`setter ON`)
        this._age = value
    }
}

const person = new Person('ellie', 20) // setter ON
person.speak() // getter ON, ellie: hi im 20 years old.
console.log(person.age) // gettrt ON, 20

class Experiment {
    publicField = 2;
    #privateField = 10;
}

const experiment = new Experiment();
console.log(experiment.publicField) // 2
console.log(experiment.privateField) // undefined


class Article {
    static publisher = 'coding'
}

console.log(Article.publisher)


class Shape {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    draw() {
        console.log(`${this.w}, ${this.h}, shape`);
    }
    getArea() {
        return this.w * this.h;
    }
}

class Triangle extends Shape {
    draw() {
        super.draw();
        console.log(`트라이포스`)
    }
    getArea() {
        return this.w * this.h * 0.5;
    }
}

const triangle = new Triangle(10, 10);
triangle.draw(); // 10, 10, shape & 트라이포스
console.log(triangle.getArea()); // 50


console.log(triangle instanceof Triangle) // true
console.log(triangle instanceof Person) // false
console.log(triangle instanceof Shape) // true
console.log(triangle instanceof Object) // true

