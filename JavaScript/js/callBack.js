// 1초뒤에 내가 전달한 함수를 다시 불러줘 call back
setTimeout(() => console.log(`time out`), 1000)
console.log(1)





// call back example
document.querySelector('.title').addEventListener('click', () => {
    // call back
})


const first = (a) => {
    console.log(`first call`);
    a();
}

first(() => console.log(`second call`))






// 동기 콜백
function printImmediately(print) {
    print();
}
printImmediately(() => console.log(`print immediately.`))

// 비동기 콜백

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log(`print with delay.`), 2000);



// loginUser를 통해 로그인, getRoles를 통해 user의 상태를 받아오는 예제 Backend 코드
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError();
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError();
            }
        }, 1000);
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

    userStorage.loginUser(
        id,
        password,
        user => {
            userStorage.getRoles(
                user,
                userWithRole => {
                    alert(
                        `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                    );
                },
                () => alert(`Nomal user`)
            );
        },
        () => alert(`로그인 에러`)
    );
});
