const saudacao = 'Opa' // contexto léxico 1

function exec(){

    const saudacao = 'E Ai!!' // contexto léxico 2
    return saudacao
}

exec()
console.log(saudacao)


// Objetos são grupos aninhados de pares nome/valor

const cliente = {

nome : 'Marcelo',
idade : 36,
peso : 72,
endereco :{
    logradouro : 'Lourenço da Veiga',
    numero : 384
}

}

console.log(cliente)