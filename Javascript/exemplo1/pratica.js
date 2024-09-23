let rlSync = require('readline-sync')
let nome = rlSync.question("Qual o seu nome?\n")
let sobrenome = rlSync.question("Qual o seu sobrenome?\n")
let nomecompleto = `${nome} ${sobrenome}`

console.log(`Oi, ${nomecompleto}!`)