let rlSync = require('readline-sync');
let nome = rlSync.question("Qual o seu nome?\n");
let sobrenome = "Lessa";
let nomecompleto = nome + " " + sobrenome;

console.log(`Certo, ${nomecompleto}, vamos prosseguir!`)