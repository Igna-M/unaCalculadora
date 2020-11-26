const calculos = require('./calculos');

let operacion = process.argv[2];
let n1 = Number(process.argv[3]);
let n2 = Number(process.argv[4]);

if(operacion == undefined) {
    console.log();
    return console.log('Debes ingresar "node calculadora.js (sumar | restar | multiplicar | dividir) Número Número"');
} else if (isNaN(n1) || isNaN(n2)){
    console.log();
    return console.log('Debes ingresar 2 numeros');
    } else {
    switch (operacion) {
        case 'sumar':
            console.log();
            console.log('El resultado de la suma es: ' + calculos.sumar(n1, n2));
            break
        case 'restar':
            console.log();
            console.log('El resultado de la resta es: ' + calculos.restar(n1, n2));
            break
        case 'multiplicar':
            console.log();
            console.log('El resultado de la multiplicación es: ' + calculos.multiplicar(n1, n2));
            break
        case 'dividir':
           console.log();
           console.log('El resultado de la división es: ' + calculos.dividir(n1, n2));
           break
        default:
            console.log();
            console.log('No entendí. Debes ingresar node calculadora.js (sumar | restar | multiplicar | dividir) Número Número');
    }
}