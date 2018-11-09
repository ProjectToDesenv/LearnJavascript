// JavaScript Não suporta sobrecarga de métodos, somente para métodos get e set

const sequencia = {
    _valor: 1, //convensão de atributo somente dentro da sequência
    get valor() { return this._valor++},
    set valor(valor) {
    
        if(valor > this._valor){
            this._valor = valor
        }
     }
}

console.log(sequencia.valor,sequencia.valor)