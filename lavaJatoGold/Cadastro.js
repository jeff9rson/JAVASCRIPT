export class Cadastro{
    constructor(nome,horarioDeEntrega,cpf){
        this.nome = nome
        this.horarioDeEntrega = horarioDeEntrega
        this.cpf = cpf
    }

    get getNome(){
        return this.nome
    }
    get getHorarioDeEntrega(){
        return this.horarioDeEntrega
    }
    get getCpf(){
        return this.cpf
    }
    set setNome(novoNome){
        this.nome = this.nome
    }
    set setHorarioDeEntrega(novoHorarioDeEntrega){
        this.horarioDeEntrega = novoHorarioDeEntrega
    }
    set setCpf(novoCpf){
        this.cpf = novoCpf

    }
    set setNovo(novoHorario){
        if(novoHorario.lenght === 14){
            this._cpf = novoCpf
        } else{
            console.log(`o novo: ${novoHorario}`)
        }
    }
}
