const numeros = [100, 200, 300, 400, 500, 600];
const [num1, num2, ...resto] = numeros;
console.log(resto, num1, num2);

const numeros2 = [100, 200, 300, 400, 500, 600];
const [nume1, , nume3, , nume5, ...resto2] = numeros2;
console.log(resto2, nume1, nume3, nume5);
