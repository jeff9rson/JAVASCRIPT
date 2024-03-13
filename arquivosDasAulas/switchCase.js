const prompt = require('prompt-sync')()

let idade = Number(prompt('Favor informar sua idade: '))

switch (true) {
    case (idade >= 0 && idade <12) :
        console.log('voce é uma criança')
        break;
    case idade >= 12 && idade <18:
        console.log('voce é um adolecente')
        break
    case idade >= 18 && idade <60:
        console.log('voce é um adulto')
        break
    case idade >=60 && idade < 150:
        console.log('voce é um idoso')
        break
    default:
        console.log('impossivel definir sua classificação')
        break

}
let mesNumero = Number(prompt('informe o numero do mes que voce nasceu')) 

switch(mesNumero){
    case 1:
        console.log('voce nasceu em Janeiro')
        break
    case 2:
        console.log('voce nasceu em Fevereiro')
        break
    case 3:
        console.log('voce nasceu em Março')
        break
    case 4:
        console.log('voce nasceu em Abril')
        break
    case 5:
        console.log('voce nasceu em Maio')
        break
    case 6:
        console.log('voce nasceu em Junho')
        break
    case 7:
        console.log('voce nasceu em Julho')
        break
    case 8:
        console.log('voce nasceu em Agosto')
        break
    case 9:
        console.log('voce nasceu em Setembro')
        break
    case 10:
        console.log('voce nasceu em Outubro')
        break
    case 11:
        console.log('voce nasceu em Novembro')
        break
    case 12:
        console.log('voce nasceu em Dezembro')
        break;
    default:
        console('mes informado não é valido')
        break;
}
    let salario = Number(prompt('Informe seu salario: '))

    switch(true) {
        case salario >= 1000 && salario <= 1500:
            console.log (`Seu desconto é de $ {salario * 0.1}`)
            break
        case salario > 1500 && salario <= 3000:
            console.log(`Seu desconto é de $ {salario * 0.15}`)
            break
        case salario > 3000:
            console.log (`Seu desconto é de ${ salario * 0.2}`)
            break
        default:
            console.log('impossivel calcular seu desconto')
            break
    }