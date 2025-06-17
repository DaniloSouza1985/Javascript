/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:

1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

*/

let precoCombustivel = 5.49;
const gastoMedioPorKM = 10;
let distanciaViagem = 120;

valorViagem = (distanciaViagem / gastoMedioPorKM) * precoCombustivel;
console.log(valorViagem)
console.log('A viagem custará R$ ', valorViagem);