const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Pedro',
        nota: 8.3
    },{
    nome: 'Pedro',
    nota: 8.3
}]
},{
    nome: 'Turma M2',
    alunos:[{
        nome:'Rebeca',
        nota: 8.7
    },{
        nome:'Carlos',
        nota: 9.2
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const nota1 = escola.map(getNotasDaTurma)
console.log(nota1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const nota2 = escola.flatMap(getNotasDaTurma)
console.log(nota2)