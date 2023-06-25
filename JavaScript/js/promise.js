// Promise를 만드는 순간(new) 전달한 콜백함수가(excutor) 바로 실행이 된다.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files) -> 데이터를 받아온후 처리하는 과정
    console.log(`doing something...`);
    setTimeout(() => {
        const error = false;
        if (error) {
            // rejected
            reject(`ERROR ERROR ERROR ERROR`);
        }
        // fulfilled
        resolve(`promise resolver state`);

    }, 2);
});


// than을 호술시 promise를 리턴하기 때문에 chaining 가능하다.
promise
    .then((value) => {
        // Promise가 fulfilled 상태가 되었을 때 호출됩니다. 이 때 value는 resolve 함수에 전달된 인자입니다.
        console.log(value);
    })
    .catch((error) => {
        // Promise가 rejected 상태가 되었을 때 호출됩니다. 이 때 error는 reject 함수에 전달된 인자입니다.
        console.log(error);
    })
    // Promise가 fulfilled 상태가 되든, rejected 상태가 되든 관계 없이 항상 호출됩니다. finally 메소드는 주로 비동기 작업 후에 실행해야 하는 정리(clean-up) 코드를 작성하는 데 사용됩니다.
    .finally(() => console.log(`promise finally`))


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    resolve(9999);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => new Promise((resolve, reject) => setTimeout(() => resolve(num - 1), 1)))
    .then(num => console.log(num));


// 4. Error Handling
const getChicken = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 100);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 100);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 100);
    });

getChicken()
    .then(hen => new Promise((resolve, reject) => reject(`ERROR!!! ${hen} => 🥚`)))
    .catch(() => `🦄`)
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(error => console.log(error));

console.log(promise);
console.log(promise.then(() => {}));
console.log(promise.then(() => `promise test`));


console.log(promise.then(() => new Promise((resolve, reject) => resolve(9999))));



// console.log(promise.then(() => {throw new Error(`Error in then`)}));


console.log(promise.then(() => {throw new Error(`Error in then`)}).catch(error => error));

// console.log(getHen().then(hen => console.log(hen)));


class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                }
                else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                }
                else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    const idInput = document.querySelector('#idInput');
    const passwordInput = document.querySelector('#passwordInput');
    const id = idInput.value;
    const password = passwordInput.value;
    idInput.value = '';
    passwordInput.value = '';

    userStorage
        .loginUser(id, password)
        .then(value => userStorage.getRoles(value))
        .then(value => alert(`Hello ${value.name}, you have a ${value.role} role`))
        .catch(error => alert(error))
});
