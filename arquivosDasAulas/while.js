const prompt = require('prompt-sync')()
let contador = 0
while (contador < 10) {
    console.log(contador)
    contador++

while (true) {
    let saida = prompt('informe s para sair:')
    if (saida.toLowerCase() === 's') {
        break;
    }
}
}