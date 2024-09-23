const readline = require('readline-sync');

// Função principal para execução
function escolherBebida() {
    let bebida;
    let valor;

    // Loop até que uma escolha válida seja feita
    while (true) {
        // Solicita ao cliente a escolha da bebida
        bebida = readline.question('Escolha uma bebida (café, leite, chá): ').toLowerCase();

        // Avalia a opção selecionada
        switch (bebida) {
            case 'café':
                valor = 3.50;
                break;
            case 'leite':
                valor = 2.00;
                break;
            case 'chá':
                valor = 2.50;
                break;
            default:
                console.log('Escolha inválida. A opção deve ser café, leite ou chá.');
                continue; // Solicita a escolha novamente
        }

        // Exibe a mensagem personalizada se a opção for válida
        console.log(`Você escolheu ${bebida}. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
        break; // Encerra o loop após uma escolha válida
    }
}

// Chama a função principal para executar o programa
escolherBebida();