function fetchUser1() {
    return new Promise((resolve, reject) => resolve(`fetchUser1`))
}

async function fetchUser2() {
    return `fetchUser2`;
}

console.log(fetchUser1());
console.log(fetchUser2());

fetchUser1().then(console.log); // fetchUser1
fetchUser2().then(console.log); // fetchUser2


// 2. await

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function getApple() {
    await delay(1000);
    return '🍎';
}


async function getBanana() {
    await delay(1000);
    return '🍌';
}



function getFruits1() {
    return getApple().then((apple) => {
        return getBanana().then(banana => `${apple}, ${banana}`);
    })
}

// 사과를 받는데 1초, 바나나를 받는데 1초 총 2초가 걸린다.
async function getFruits2() {
    const a = await getApple();
    const b = await getBanana();
    return `${a}, ${b}`;
}


async function getFruits3() {
    // 프로미스를 만들면 내부 코드가 바로 실행이 되므로 병렬로 실행이 된다.
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const a = await applePromise;
    const b = await bananaPromise;
    return `faster ${a}, ${b}`;
}

// all API 사용하기
function getFruits4() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(`vs`));
}

getFruits3().then(console.log); // faster 🍎, 🍌
getFruits4().then(console.log); // 🍎vs🍌



getFruits1().then(console.log);
getFruits2().then(console.log);
console.log(`gerFrouts 비동기 테스트용 로그`);

function syncFunction() {
    let cnt = 0;
    for(let i = 0; i < 1e9; i++) {
        cnt++;
    }
    return cnt;
}

async function awaitTest() {
    console.log('Before');
    const result = await syncFunction(); // This is a synchronous function
    console.log('After');
}


const btn = document.querySelector(`.btn`);

btn.addEventListener('click', () => {
    console.clear();
    awaitTest();
    console.log('Outside');
})






