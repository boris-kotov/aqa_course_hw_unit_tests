/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const competitorPizzasLower = [];
const myPizzasT1Lower = [];
const myPizzasT2Lower = [];

const resultUnique = [];
let resultNull;

for (let i = 0; i < competitorPizzas.length; i++) {
  competitorPizzasLower.push(competitorPizzas[i].toLowerCase());
}

for (let i = 0; i < myPizzasT1.length; i++) {
  myPizzasT1Lower.push(myPizzasT1[i].toLowerCase());
}

for (let i = 0; i < myPizzasT2.length; i++) {
  myPizzasT2Lower.push(myPizzasT2[i].toLowerCase());
}

for (let i = 0; i < myPizzasT1Lower.length; i++) {
  if (!competitorPizzasLower.includes(myPizzasT1Lower[i])) {
    resultUnique.push(myPizzasT1[i]);
  } else {
    resultNull = null;
  }
}

for (let i = 0; i < myPizzasT2Lower.length; i++) {
  if (!competitorPizzasLower.includes(myPizzasT2Lower[i])) {
    resultUnique.push(myPizzasT2[i]);
  } else {
    resultNull = null;
  }
}

console.log(resultUnique);
console.log(resultNull);

export { resultNull, resultUnique };
