class Professor {
    constructor(Materias,Horario,Alunos){
        this.materias = Materias
        this.horario = turno
        this.alunos = alunos
    }

    get Materias() {
        return this.Materias
    }
    get Horario() {
        return this.horario
    }
    get Alunos() {
        return this.alunos
    }

    set alteraMaterias(novoMaterias) {
        this.Materias = novoMaterias
    }
    set alteraHorario(novoHorario) {
        this.horario = novoHorario
    }
}