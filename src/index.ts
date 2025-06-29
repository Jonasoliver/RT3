import {Somador as Adicao, Subtrador as Redutor, Divisor as Quociente, Multiplicador as Produto} from 'rt3-modulo'


let operadorAdicao = new Adicao()
let operadorRedutor = new Redutor()
let operadorQuociente = new Quociente()
let operadorProduto = new Produto()

console.log(`Resultado adição: 2 + 3 = ${operadorAdicao.calcular(2,3)}`)
console.log(`Resultado redução: 7 - 5 = ${operadorRedutor.calcular(7,5)}`)
console.log(`Resultado quociente: 9 / 3 = ${operadorQuociente.calcular(9,3)}`)
console.log(`Resultado produto: 9 * 2 = ${operadorProduto.calcular(9,2)}`)