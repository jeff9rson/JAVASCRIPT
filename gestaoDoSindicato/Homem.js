import { Cadastro } from "./Cadastros.js";

export class Homem extends Cadastro{
    constructor(nome,dataDeNascimento,cpf,endereco){
        super(nome,dataDeNascimento,cpf,endereco)
        this.contato = this.contato
    }

    get getContato(){
        return this.getContato
    }

    setContato(novoContato){
        this.contato = novoContato
    }
    aposentarHomem(){
        let anoAtual = new Date().getFullYear
        if(anoAtual - this.dataDeNascimento.split('-')[0] >= 60){
            console.log('você tem os requistos para se aposentar')
    }
    }
}