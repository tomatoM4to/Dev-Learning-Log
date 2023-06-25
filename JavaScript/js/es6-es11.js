{
    // Shorthand property name
    const user1 = {
        name: `java`,
        age: 50,
    }

    const name = `c++`;
    const age = 70;

    const user2 = {
        name,
        age,
    }
    console.log(user1, user2); // {name: 'java', age: 50} {name: 'c++', age: 70}
}



{
    // Destructuring assignment
    const user1 = {
        name: `java`,
        age: 128,
    }

    const {name, age: newAge} = user1;
    console.log(name, newAge); // java 128


    const user2 = [`c++`, 40];
    const [a, b] = user2;
    console.log(a, b); // c++ 40
}


{
    // spread Syntax
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [1, 2];

    // array copy
    const arrayCopy = [...array];
    arrayCopy[0] = 9999;
    console.log(array, arrayCopy); // [1, 2] [9999, 2]

    const arrayCopy2 = [...array, { key: 'key3' }];
    console.log(arrayCopy2); // [1, 2, {...}]

    // object copy
    const obj3 = { ...obj1 };
    obj3.key = `key333`;
    console.log(obj1, obj3); // {key: 'key1'} {key: 'key333'}

    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits); // ['🍑', '🍓', '🍌', '🥝']

    // object merge
    const dog1 = { dog: '🐕' };
    const dog2 = { dog: '🐶', age: 20 };
    const dog = { ...dog1, ...dog2 };
    console.log(dog); // {dog: '🐶', age: 20}
}


// ES11 start

{
    // optional chaining
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };

    // 💩
    {
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1); // Bob
        printManager(person2); // undefined
    }

    // ✨
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1); // Bob
        printManager(person2); // undefined
    }
}

{
    // Logical OR operator
    {
        const user = null;
        const username = user ?? 'js';
        console.log(username); // js

        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName); // ''

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message); // 0
    }
}
