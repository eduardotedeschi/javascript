
function Numbers(){
    const numero = Number(prompt("Digite um número: "));
    let texto = document.getElementById("container");
    texto.innerHTML = "";
    document.getElementById("numero").innerHTML = `${numero}.`;
    document.getElementById("button").innerHTML = `<button onclick="NumberManipulation()">Mágica</button>`;
}
function NumberManipulation(){
    let texto = document.getElementById("container");
    texto.innerHTML = "";
    const numero = Number((document.getElementById("numero").textContent).slice(0,-1));
    texto.innerHTML += `<p>Raiz quadrada: <strong>${numero**0.5}</strong>.</p>`;
    texto.innerHTML += `<p>Raiz cúbica: <strong>${numero**(1/3)}</strong>.</p>`;
    texto.innerHTML += `<p>É inteiro: <strong>${Number.isInteger(numero)}</strong>.</p>`;
    texto.innerHTML += `<p>É NaN: <strong>${isNaN(numero)}</strong>.</p>`;
    texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong>.</p>`;
    texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong>.</p>`;
    texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong>.</p>`;
}