class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu Nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () =>  console.log(`Meu Nome é ${this.nome}`)
    }
}

const p2 = criarPessoa('Marcelo')
p2.falar()