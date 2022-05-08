var nome, n1, n2, n3, n4, media, res;

nome = prompt("Informe o seu nome: ");
n1 = Number(prompt("Informe a 1ª nota"));
//n1 = Number.parseFloat(prompt("Informe a 1ª nota"));
n2 = Number(prompt("Informe a 2ª nota"));
n3 = Number(prompt("Informe a 3ª nota"));
n4 = Number(prompt("Informe a 4ª nota"));

media = (n1 + n2 + n3 + n4) / 4;

if (media >= 0 && media <= 10) {
    if (media >= 7) {
        res = "Parabéns você foi aprovado";
    } else {
        res = "Você foi reprovado";
    }
} else {
        res = "Erro: média maior que 10";
    }

document.write(`Olá ${nome}, suas notas do ano foram: <br>
nota 1: ${n1} <br>
nota 2: ${n2} <br>
nota 3: ${n3} <br>
nota 4: ${n4} <br>
Sua media final foi: <br>
${media.toFixed(2)} <br>
${res}`);