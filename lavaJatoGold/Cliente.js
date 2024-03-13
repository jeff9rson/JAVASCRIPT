import { Cadastro } from "./Cadastro.js";

export class Cliente extends Cadastro{
    constructor(nome,horarioDeEntrega,cpf){
        super(nome,horarioDeEntrega,cpf)
        this.horarioDeEntrega = horarioDeEntrega
        }
    get horario(){
        return this.horario
    }
    get localizacao(){
        return this.localizacao
    }

    }
    entregaDoVeiculo()
        let novoHorario = new Date().getFullYear
        if(novoHorario = this.horarioDeEntrega)
        console.log(`você pode retirar seu veiculo`)
