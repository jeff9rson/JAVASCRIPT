// funções literais
function soma(a,b) {
    return a+b
}
console.log(soma(2,8))

// Funções Anonimas
const minhaFuncao = function(a,b) { return a+b}
console.log(minhaFuncao(4, 9))

// Escopo das funções
// this - é uma palavra reservada que faz referencias ao PAI de um elemento. é quando o this é utilizado em funções comuns, Seu pai sera o elemento local
function aluno(nomeAluno, idadeAluno,notaAluno) {
    this.nomeAluno = nomeAluno
    this.idadeAluno = idadeAluno
    this.notaAluno = notaAluno

    console.log(this.nomeAluno)
    console.log(this.idadeAluno)
    console.log(this.notaAluno)

    this.dadosAnonimos = function(){
        setTimeout( function(){
            console.log(this.nomeAluno)
            console.log(this.idadeAluno)
            console.log(this.notaAluno = (this.notaAluno * 3) / 2)
        }, 1000)
    }
}
// arrow function = são funcções de ESCOPO ABERTO
this.dadosArrow = function () {
    setTimeout(() => {
        console.log(this.nomeAluno)
        console.log(this.idadeAluno)
        console.log(this.notaAluno = (this.notaAluno * 3) / 2)
    }, 1000)
  }




const aluno01 = new aluno('neyva', 19, 7.0)
console.log(aluno01.nomeAluno)
console.log(aluno01.idadeAluno)

// sobre ARROW FUNCTION
// 1. tem return embutido
const dobro = (a) => {return 2* a}
console.log(dobro(4))

// 2. argumento implicito 
let multiplicar = _ => 2 * 2
console.log(multiplicar())