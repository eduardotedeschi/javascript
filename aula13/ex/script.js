function nsei(){
    const nome = prompt(`Digite seu nome completo:`);
    const qntNomes = nome.split(" ");
    let qntLetra = 0;
    qntNomes.forEach(nome => {
        qntLetra +=nome.length;
    });
    document.body.innerHTML += `Seu nome é: <strong>${nome}</strong>. <br>`;
    document.body.innerHTML += `Seu nome possui <strong>${qntLetra}</strong> letras. <br>`;
    document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong>. <br>`;
    document.body.innerHTML += `O primeiro índice da letra "r" no seu nome: <strong>${nome.search(/r/)}</strong>. <br>`;
    document.body.innerHTML += `O último índice da letra "r" no seu nome: <strong>${nome.lastIndexOf("r")}</strong>. <br>`;
    document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong>. <br>`;
    document.body.innerHTML += `As palavras do seu nome são: <strong>${qntNomes}</strong>. <br>`;
    document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong>. <br>`;
    document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong>. <br>`;
}