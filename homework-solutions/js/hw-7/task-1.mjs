/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...arrays) {
  // Ваш код
  return arrays.flat();
}
// console.log(mergeArrays([1,2], [3,4], [5,6]));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {
  sentence = sentence.toLowerCase();
  const arrayOfWords = sentence.split(' ');
  const result = [];

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  for (let i = 0; i < arrayOfWords.length; i++) {
    const word = arrayOfWords[i];
    result.push(i === 0 ? word.toLowerCase() : capitalize(word));
  }
  return result.join('_');
}

console.log(devideBy('I am super engineer'));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(n) {
  // Ваш код
  let result = 0;

  if (n < 0) return console.log('Введите целое положительное число или 0');
  if (n <= 1) return n;

  let first = 0;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    let result = first + second;
    first = second;
    second = result;
  }

  return second;
}

console.log(fibonacci(2));
console.log(fibonacci(8));
console.log(fibonacci(68));

export { mergeArrays, fibonacci, devideBy };
