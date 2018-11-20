// Object.preventExtensions

const produto = Object.preventExtensions({
nome: 'Qualquer', preco: 1.99, tag: 'Promoção'

})
console.log(produto)
console.log('Extensível:',Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


// Object.seal
const pessoa = {nome: 'Maria',idade: 32}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))

pessoa.sobrenome = 'Santos'
delete pessoa.nome
pessoa.idade = 28
console.log(pessoa)

//Object.freeze = selado + valores constantes