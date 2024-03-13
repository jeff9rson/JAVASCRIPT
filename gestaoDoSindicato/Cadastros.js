export class Cadastros{
    constructor(nome,dataDeNascimento,cpf,endereco){
        this.nome = nome
        this.dataDeNascimento == dataDeNascimento
        this._cpf = cpf
        this.endereco
    }

    get getNome(){
        return this.nome
    }
    getDataNascimento(){
        return this.dataDeNascimento
    }
    get Cpf(){
        return this._cpf
    }
    getEndereco(){
        return this.endereco
    }

    set setNome(novoNome){
        this.nome = novoNome
    }

    set setDataNascimentos(novaDataNascimento){
        this.dataDeNascimento = novaDataNascimento
    }

    set setCpf(novoCpf){
        if(novoCpf.lenght === 14){
            this._cpf = novoCpf
        } else{
            console.log(`o cpf: ${novoCpf}`)
        }
    }

    set setEndereco(novoEndereco){
        this.endereco = novoEndereco
    }


}