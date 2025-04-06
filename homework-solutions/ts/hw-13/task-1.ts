/* 1. Объявите переменные для каждого из следующих типов данных с явным указанием типа после символв "двоеточие":
    - Число: переменная num1, значение 42.
    - Строка: переменная str, значение "Hello, TypeScript!".
    - Булево: переменная isComplete, значение true.
    - Массив чисел: переменная numbers, значения [1, 2, 3, 4, 5].
    - Массив строк: переменная cities, значения ["Minsk", "Warsaw", "London"].
    - Объект: переменная person, объект с полями name: "Alice", age: 30, city: "Minsk".

2. Создайте псевдонимы типов:
    - Тип User, который содержит поля name (строка), age (число), и опциональное поле email (строка).
    - Тип Grade, который может принимать одно из значений: 'junior' | 'middle' | 'senior'.

3. Создайте интерфейс для объекта Car, который должен содержать поля:
    - brand (строка),
    - model (строка),
    - опциональное поле year (число).

4. Создайте интерфейсы для:
    - Интерфейса Address с полями street (строка), city (строка), и zipCode (число).
    - Интерфейса FullAddress, который наследует интерфейс Address и добавляет поле country (строка).
  
5. Создайте объединение типов:
    - Тип Product с полями id (число), name (строка), и price (число).
    - Тип DiscountedProduct, который объединяет Product и добавляет поле discount (число).

6. Создайте функцию calculateDiscount, которая принимает объект типа DiscountedProduct и возвращает итоговую цену с учетом скидки. 
   Затипизировать явно и входные и выходные данные. Используйте следующие данные:

   const product: DiscountedProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
  };

  console.log(calculateDiscount(product)); // Ожидается: 900
*/

const num1: number = 42;
const str: string = 'Hello, TypeScript!';
const isComplete: boolean = true;
const numbers: number[] = [1, 2, 3, 4, 5];
const cities: string[] = ['Minsk', 'Warsaw', 'London'];
const person : {name: string; age: number; city: string} = { name: 'Alice', age: 30, city: 'Minsk' };

type User = { name: string; age: number; email?: string };
type Grade = 'junior' | 'middle' | 'senior';

interface ICar {
  brand: string;
  model: string;
  year?: number;
}

interface IAddress {
  street: string;
  city: string;
  zipCode: number;
}

interface IFullAddress extends IAddress {
  country: string;
}

type Product = {
  id: number;
  name: string;
  price: number;
};

type Discount = {
  discount: number;
};

type DiscountedProduct = Product & Discount;

function calculateDiscount(product: DiscountedProduct) {
  return product.price - (product.price * product.discount) / 100;
}

const product: DiscountedProduct = {
  id: 1,
  name: 'Laptop',
  price: 1000,
  discount: 10,
};

console.log(calculateDiscount(product));
