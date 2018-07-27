function criarProduto (nome, preco){
return {
    nome,
    preco,
    desconto: 0.1
}
}

console.log(criarProduto('Notebook',3500.45))
console.log(criarProduto('iPad',10587,78))