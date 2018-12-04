Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco : 5020, fragil: true},
    {nome: 'Ipad', preco : 2020, fragil: true},
    {nome: 'Copo de Vidro', preco : 10, fragil: true},
    {nome: 'Copo de Plastico', preco : 2.5, fragil: false},
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))