// Tudo sobre Função    Prototype

class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome,profissao = 'Professsor'){
        super(sobrenome)
    }    
}
