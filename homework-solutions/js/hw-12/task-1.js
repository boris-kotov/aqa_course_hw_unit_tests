/* 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после 
вызова delayTwoSeconds

2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then 
и выведите результат его резолва в консоль

3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его реджекта в консоль

4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then

6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты 
и последовательно выведите в консоль статус и результат каждого промиса через .then

7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
 */

function delayTwoSeconds(callback) {
  if (!callback) return;
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => console.log('Two seconds passed'));

const tryResolve = new Promise((resolve, reject) => {
  resolve(1);
});

tryResolve.then((number) => {
  console.log(number);
});

const tryReject = new Promise((resolve, reject) => {
  reject('Promise failed');
});

tryReject.catch((message) => {
  console.log(message);
});

function promiseNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number === 'number') {
      resolve(number);
    } else {
      reject('Not a number');
    }
  });
}

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(([numberOne, numberTwo, numberThree]) => {
  console.log(numberOne);
  console.log(numberTwo);
  console.log(numberThree);
});

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log(result.status, result.value);
    } else {
      console.log(result.status, result.reason);
    }
  });
});

async function runPromiseAll() {
  try {
    await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(
      ([numberOne, numberTwo, numberThree]) => {
        console.log(numberOne);
        console.log(numberTwo);
        console.log(numberThree);
      },
    );
  } catch (error) {
    console.log(error.message);
  }
}
runPromiseAll();

async function runPromiseAllSettled() {
  try {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log(result.status, result.value);
      } else {
        console.log(result.status, result.reason);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}
runPromiseAllSettled();
