const produtos = [
    {nome: 'Notebook', preco : 5020, fragil: true},
    {nome: 'Ipad', preco : 2020, fragil: true},
    {nome: 'Copo de Vidro', preco : 10, fragil: true},
    {nome: 'Copo de Plastico', preco : 2.5, fragil: false},
]

console.log(produtos.filter(function(p){
    //return p.preco > 2000
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))