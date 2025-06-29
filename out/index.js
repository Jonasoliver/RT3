import { Somador, Subtrador, Divisor, Multiplicador } from 'rt3-modulo';
let soma = new Somador();
let subtrair = new Subtrador();
let dividir = new Divisor();
let multiplicar = new Multiplicador();
console.log(`Exemplo de soma: 2 + 3 = ${soma.calcular(2, 3)}`);
console.log(`Exemplo de subtração: 7 - 5 = ${subtrair.calcular(7, 5)}`);
console.log(`Exemplo de divisão: 9 % 3 = ${dividir.calcular(9, 3)}`);
console.log(`Exemplo de multiplicação: 9 * 2 = ${multiplicar.calcular(9, 2)}`);
