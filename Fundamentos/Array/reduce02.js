const alunos = [
    {nome: 'Pedro', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 8.5, bolsista: true},
    {nome: 'João', nota: 9.2, bolsista: false},
    {nome: 'Joaquim', nota: 8.8, bolsista: true},
    {nome: 'Jéssica', nota: 10, bolsista: false},

]

// Todos os alunos são bolsitas

const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// Algum aluno é bolsista?

const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))