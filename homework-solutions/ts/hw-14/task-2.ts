/* Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
   Затипизировать надо саму функцию и коллбэк.
   Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
   где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
   Пример:
   map([1,2,3,4,5], callback) => [0,2,6,12,20]
 */

function customMap<T, U>(array: T[], callback: (element: T, index: number, array: T[]) => U): U[] {
  const mappedArray: U[] = [];

  for (let index = 0; index < array.length; index++) {
    mappedArray.push(callback(array[index], index, array));
  }
  return mappedArray;
}

const array = [1, 2, 3, 4, 5];

console.log(customMap(array, (el, index, array) => el * index));
