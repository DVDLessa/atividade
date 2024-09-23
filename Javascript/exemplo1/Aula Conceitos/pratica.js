// Função para solicitar e processar a escolha do cliente
function escolherBebida() {
    // Solicita a escolha da bebida ao cliente
    
    
    // Declara a variável para armazenar o valor da bebida
    let valor;
    
    // Avalia a escolha usando o switch
    switch (bebida) {
        case 'café':
            valor = 3.50;
            break;
        case 'leite':
            valor = 2.75;
            break;
        case 'chá':
            valor = 2.00;
            break;
        default:
            // Se a opção for inválida, exibe uma mensagem informativa
            console.log("Escolha inválida. Por favor, selecione entre café, leite ou chá.");
            return; // Encerra a função se a escolha for inválida
    }
    
    // Exibe a mensagem personalizada com o nome da bebida e o valor formatado
    console.log(`Você escolheu ${bebida}. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
}

// Chama a função para executar o código
escolherBebida();