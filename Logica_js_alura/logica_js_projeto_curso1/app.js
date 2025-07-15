alert('Boas-vindas ao jogo do número secreto!');

let valorMaximo = 100
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
console.log("Número secreto:", numeroSecreto);

let tentativas = 1;
let chute;

while (true) {
    chute = parseInt(prompt("Escolha um número entre 1 e "+ valorMaximo));

    if (chute === numeroSecreto) {
        break;
    }

    if (chute > numeroSecreto) {
        alert("O número secreto é menor que " + chute); // Corrigido aqui
    } else {
        alert("O número secreto é maior que " + chute); // Corrigido aqui
    }

    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert("Você acertou 😁! O número secreto era " +numeroSecreto+ ". Você usou " +tentativas+" "+palavraTentativa +".");
