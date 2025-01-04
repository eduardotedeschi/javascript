let num1 = 10.635472;
console.log(num1.toFixed(2));

num1 = 10;
let num2 = 5.2;
console.log(num1.toString() + num2);

console.log(Number.isInteger(num1), Number.isInteger(num2));

let temp = num1 + "Olá";
console.log(Number.isNaN(temp), isNaN(temp));
temp = num1 * "Olá";
console.log(Number.isNaN(temp), isNaN(temp));
temp = num1 * "5";
console.log(Number.isNaN(temp), isNaN(temp));

num1 = 0.7;
num2 = 0.1;
num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
console.log(num1);
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));
num1 = Number(num1.toFixed(2));
console.log(Number.isInteger(num1));

