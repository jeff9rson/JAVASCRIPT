 export class Funcionarios {
    #salario
    constructor(nome, cargo,salario, turno){
        this._nome = nome
        this._cargo = cargo
        this.#salario = salario
        this._turno = turno
    }

    get Nome() {
        return this._nome
    }

    get Cargo() {
        return this._cargo
    }

    get Salario() {
        return this.#salario
    }

    get Turno() {
        return this._turno
    }

    set alteraNome(novoNome) {
        this._nome = novoNome
    }

    set alteraCargo(novoCargo) {
        this._nome = novoCargo
    }

    set alteraSalario(novoSalario) {
        if (this.#salario < novoSalario) {
        this.#salario = novoSalario
    } else {
        return `Novo salario não pode ser menor que ${ this._salario }`
}
    }
    set alteraTurno(novoTurno) {
        if (this._turno === novoTurno) {
            return `Seu turno ja é: ${this._turno}`
        }
        n 
        this._turno = novoTurno
    }
}