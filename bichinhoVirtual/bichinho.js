class bichinho {
    constructor(nome,energia,brincar,dormir){
        this.nome = nome
        this.energia = 100
        this.brincar = 150
        this.dormir = 0

    }

    get obterNome() {
        return this.nome
    }
    get obterBrincadeira() {
        return this.dormir
    
    }
}