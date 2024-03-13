//  execuções / chamadas
import { Cachorro } from'./Cachorro.js'
import { Gatos } from './Gatos.js'

let bob = new Cachorro('Bob', 'Pug', 4)
let mel = new Gatos('Mel', 'Raça de alto nivel de definição', 4)

console.log(bob)
console.log(`olá, sou o cãozinho ${bob.obterNome}`)
console.log(`Eu tenho ${bob.obterPatas } patas`)

function TipoMamifero(valor) {
    if ( valor === 'Miauuu') {
        console.log('você é dona(o) de um (a) gata(o)')
    } else if ( valor === 'Auau') {
        console.log('você é dona(o) de um (a) cachorra (o)')
    } else{
        console.log ('não foi possivel definir seu tipo de mamifero')
    }
}

TipoMamifero(bob.late)
TipoMamifero(mel.mia)