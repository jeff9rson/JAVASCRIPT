function soma(a, b) {
    return a + b
}
console.log (soma(5,7))
console.log (soma(2,9))
console.log (soma(12,2))
console.log (soma(14,2))

function deMaior(idade) {
    if (idade === 18) {
        return 'Voce tem exatamente 18 anos'
    } else if (idade > 18){
        console.log ('Voce tem mais de 18 anos!')
    } else if (idade < 18) {
        console.log ('Voce tem menos de 18 anos!')
    } else{
        console.log('Impossivel analisar sua idade')
    }
}
const prompt = require('prompt-sync')()

let idade = Number (prompt('informe sua idade'))
let mensagem = deMaior(idade)
// função anonima - funçao dentro de uma variavel
const minhaFuncao = function () { return 2 + 2}
// função anonima - função dentro de uma Array
const meuArray = [function(a,b) { return a -b}, 'Paulo', 2024, 'a', true]
console.log(meuArray[0],(3,2))

// funçao anonima - dentro de um objeto
const meuObjeto = {}
meuObjeto.saudacao = function() {return 'Ola pessoal '}
console.log(meuObjeto)
console.log(meuObjeto.saudacao())

// funçao anonima - função como argumento de uma função
function qualquerCoisa(funçao) {
    Funcao()
}
qualquerCoisa(function() {console.log ('Executando uma função interna...')})

function calculaImposto(Funcao, valor) {
    Funcao(valor)
}
calculaImposto(
    function(valor) {
        let imposto = valor * 0.05
        console.log(imposto)
    }, 2500
)
// argumentos variaveis nas funções 
function multiplicar() {
    let multiplicar = 1
    for (i in arguments){
        multiplicar *= arguments[i]
    }
    return {multiplicar, arguments}
}
console.log(multiplicar())
console.log(multiplicar(6))
console.log(multiplicar(2,6))

function novaSoma(a,b,c,d,e,f,g) {
    let somaTudo= a+b+c+d+e+f+g
    return somaTudo
}
console.log(novaSoma(3,4))