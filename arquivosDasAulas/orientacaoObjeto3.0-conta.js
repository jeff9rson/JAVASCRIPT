import { Operacoes } from './orientacaoObjeto3.0.-operacoes.js'

export class Conta extends Operacoes{
    constructor(nome,conta,cpf, saldo){
        super(saldo)
        this.nome = nome
        this.conta = conta 
        this._cpf = cpf
}
    get mostraNome() {
        return this.nome
    }    

    get cpf(){
        return this._cpf
    }
    get obterConta() {
        return this.conta
    }
}
