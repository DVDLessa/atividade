var arrOriginal = [1, 2, "david", 3, 4, "felipe", 5, 6, "joão", 7, 8];
console.log(`${arrOriginal}`)

arr2 = arrOriginal.filter(item => typeof item == 'number');
console.log(`${arr2}`)

var total = 0
arr3 = arrOriginal.reduce(item => total + item)
console.log(`${arr3}`)

var numero = 14;
var comp = 14;
if (numero > comp) {
    console.log(`${numero} é maior que ${comp}`)
} else if (numero = comp) {
    console.log(`${numero} é igual a ${comp}`)
}

switch (numero){
    case comp:
        console.log(`${numero} é ${comp}!`);
        break;
    default:
        console.log(`${numero} não é ${comp}!`);
        break;
}