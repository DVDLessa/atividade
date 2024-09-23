var idadeMin = 18;
var experienciaMin = 2;
var educacaoMin = "Superior";
var certificadoObrig = true;

var idade = 20;
var experiencia = 3;
var educacao = "Médio";
var certificado = true;

var elegivel = 
    (idade >= idadeMin
    && experiencia >= experienciaMin
    && (educacao == educacaoMin || certificado == true)
    && (!certificadoObrig || certificado == true))
    ? "Sim, ele é elegível :)" : "Não, ele não é elegível :("

console.log(`O candidato é elegível para esta vaga?\n${elegivel}`)