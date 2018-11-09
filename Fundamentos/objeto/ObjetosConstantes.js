const pessoa = {nome : 'Pedro'}
pessoa.nome = 'Maria'
console.log(pessoa)
/* CTRL + ALT + N */

Object.freeze(pessoa) // Congela o Objeto
pessoa.nome = 'Carla'
console.log(pessoa)