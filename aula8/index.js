const nome = "Eduardo";
const sobrenome = "Tedeschi";
const idade = 18;
const pesoKG = 72;
const alturaM = 1.70;
let imc = pesoKG/(alturaM**2); //Índice de Massa Corporal
let anoNascimento = new Date().getFullYear()-idade;
console.log(nome, sobrenome, "tem", idade, "anos, pesa", pesoKG, "kg,");
console.log(`tem ${alturaM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu no ano de ${anoNascimento}`);