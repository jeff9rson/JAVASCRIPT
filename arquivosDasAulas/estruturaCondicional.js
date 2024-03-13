const prompt = require ('prompt-sync')()

let idade = Number(prompt('informe sua idade:'))

if (idade < 12 && idade >= 0 ) {
    console.log('você é uma criança')
} else if (idade < 18 && idade >= 12){
    console.log('você é um adolecente')
} else if ( idade >= 18 && idade < 60) {
    console.log('voce é um adulto')
} else if (idade >= 60 && idade < 150) {
    console.log('voce é um idoso')
} else {
    console.log('impossivel validar sua idade') 
}