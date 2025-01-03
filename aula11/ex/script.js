function AlertasSoma(){
    alert("Soma de dois números escolhidos por você!");
    let num1 = Number(prompt("Digite o primeiro número da soma:"));
    let num2 = Number(prompt("Digite o segundo número da soma:"));
    let soma = num1+num2;
    alert(`A soma de ${num1}+${num2} é: ${soma}`);
    let confirma = confirm("Você concorda com esse resultado?");
    if (confirma == true){
        alert(`Obrigado por usar!`);
    }else{
        let userOpnion = prompt(`Qual o motivo te levou a discordar?`);
        alert(`Obrigado pelo feedback!`);
        console.log(userOpnion);
    }
}