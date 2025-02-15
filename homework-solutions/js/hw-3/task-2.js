/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/


let n;
let nn;
let nnn;

n = 9;

nn = String(n) + n;
nnn = "" + n + n + n;

console.log(n);
console.log(nn);
console.log(nnn);

console.log(+n + Number(nn) + parseInt(nnn));
