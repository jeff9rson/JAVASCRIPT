
export class Operacoes {
    constructor(){
        this._saldo = 0
}
    
    get saldo() {
    return this._saldo
}

    depositar (valor) {
        if (valor <= 0) {
            return
        } else {
            this._saldo += valor
        }
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor 
        }
    }

    transferir (valor,conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}



