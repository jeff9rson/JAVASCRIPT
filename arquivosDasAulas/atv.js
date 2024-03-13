// // faça um algoritimo que calcule o fatorial de um numero
const prompt = require ('prompt-sync')()

let numero = Number(prompt('Informe um numero:'))
let resultado = 1
for (let i=1; i<=numero; i++){
    resultado *= i
}
console.log(`o fatorial de ${numero} é ${ resultado}`)