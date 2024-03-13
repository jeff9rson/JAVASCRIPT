const Funcionarios = {
    nome:'',
    cargo: ''

}

const fun01 = {}
const fun02 = {}

Object.setPrototypeOf(fun01,Funcionarios)
Object.setPrototypeOf(func02,Funcionarios)

fun01.nome = 'paulo'
func02.nome = 'vaniele'