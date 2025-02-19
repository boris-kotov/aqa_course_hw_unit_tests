/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
  */

let salary;
let grade;

salary = 1000;

if (salary >= 1000) {
  grade = 'middle';
} else {
  grade = 'junior';
}

console.log(grade);

// решил и другим способом попробовать)

let salary1 = 800;

let grade1 = salary1 >= 1000 ? 'middle' : 'junior';

console.log(grade1);
