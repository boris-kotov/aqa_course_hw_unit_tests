/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

/*
Не совсем понял задание. Сделаю, пожалуй, два решения, в зависимости от того, как я это понял:
*/

// Решение 1. Не пропускать дальше в программу не-числа:

let minAge;
let maxAge;
let age;

minAge = 18;
maxAge = 60;
age = '17';

if (typeof age != 'number') {
  console.log('Incorrect data type. Please try again.');
} else if (age < minAge) {
  console.log("You don't have access cause your age is " + age + " It's less then " + minAge);
} else if (age >= minAge && age < maxAge) {
  console.log('Welcome  !');
} else if (age > maxAge) {
  console.log('Keep calm and look Culture channel');
} else {
  console.log('Technical work');
}

// Решение 2. Преобразование чисел, записанных строкой в тип "число"

let minAge1;
let maxAge1;
let age1;

minAge1 = 18;
maxAge1 = 60;
age1 = '17';

if (isNaN(age1)) {
  console.log('Please input your age as a number.');
} else {
  age1 = +age1;
}

if (age1 < minAge1) {
  console.log("Unfortunately, you don't have access cause your age is " + age1 + " It's less then " + minAge1);
} else if (age1 >= minAge1 && age1 < maxAge1) {
  console.log('Welcome  !');
} else if (age1 > maxAge1) {
  console.log('Keep calm and look Culture channel');
} else {
  console.log('Technical work');
}