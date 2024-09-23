var rl = require('readline-sync');

var cardapio = ["cafe", "leite", "cha"];
var valor = 0;
var bebida = rl.question(`qual bebida voce deseja?\n${cardapio}\n`).toLowerCase();

switch (bebida) {
    case "cafe":
    valor = 1.00;
    console.log(`Obrigado por escolher ${bebida}. Custa R$${valor.toFixed(2)}.`);
    break;

    case "leite":
    valor = 2.50;
    console.log(`Obrigado por escolher ${bebida}. Custa R$${valor.toFixed(2)}.`);
    break;

    case "cha":
    valor = 1.75;
    console.log(`Obrigado por escolher ${bebida}. Custa R$${valor.toFixed(2)}.`);
    break;

    default:
    console.log(`${bebida} eu nao vou ter, tenho apenas: ${cardapio}.`);
    break;
}