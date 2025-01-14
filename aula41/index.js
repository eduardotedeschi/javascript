const numeroMaior = (n1, n2) => n1 >= n2 ? n1 : n2;
console.log(numeroMaior(24,12));

const ePaisagem = (width, height) => width > height;
console.log(ePaisagem(1080, 720));

const random = (min, max) => Math.round(Math.random() * (max - min) + min);
const fizzBuzz = (numero) => {
    console.log(numero);
    if(isNaN(numero)) return numero;
    
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero;
};

for(let i = 0;i<100;i++){
    console.log(i, fizzBuzz(i))
}
console.log(fizzBuzz(random(0, 100)));