const bebidas = {
    nome: 'Nome do produto',
    marca: 'fabricante do produto',
    datadeValidade: 'Data de validade',
    dataDeFabricação: 'Data de fabricacao',
    volume:'',
    preco: 0,
    quantidade: 0,
    setQuantidade: function(novaQuantidade) {
        if ( this.quantidade != 0) {
            if (novaQuantidade > 0) {
                this.quantidade += novaQuantidade
                return  true
            } else {
                if ( this.quantidade < Math.abs(novaQuantidade)) {
                    console.log(`Você tem ${ this.quantidade } impossivel retirar ${ Math.abs(novaQuantidade) }`)
                    return false
                } else {
                    this.quantidade += novaQuantidade
                    return true
                }
            }
        } else {
            if ( novaQuantidade > 0 ) {
                this.quantidade += novaQuantidade
                return true
             } else {
                console.log(`Você tem ${ this.quantidade } impossivel retirar ${ Math.abs(novaQuantidade) }`)
                return false
            }
        }
    },
    obterValidade: function() {
        const dataAtual = new Date()
        if ( this.datadeValidade < dataAtual ) {
            console.log('Dentro da validade')
        } else {
            console.log('Produto vencido. favor Recolher.')
        }
    },
    setDataFabricacao: Function(novaData)
        
        }
    }
}