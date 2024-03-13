// Estruturas Globais: object, string, Number, Array e as functions
const animal = new Array('gato', 'cachorro', 'rato')

console.log(animal)
console.log (animal.filter(function(animal) {return animal ==='rato'}))

const animais ={
    som:'um som de animal',
    tipo: 'animal',
    emitirSom: function() {
        console.log(this.som)
    }
}
animais.emitirSom()

const gato = {
    tipo: 'gato',
    som: 'miauuuu'
}
Object.setPrototypeOf(gato, animais)

gato.emitirSom
console.log = {
    tipo: 'gato'
}

const gatoRaivoso = {
    tipo: 'gato raivoso',
    miarForte: function() {
        console.log(this.som.toUpperCase())
    }
}