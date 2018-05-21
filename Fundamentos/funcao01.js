// Função Sem Retorno

function imprimirSoma(a,b){

    console.log(a + b)
}

imprimirSoma(3,3)
imprimirSoma(10)
imprimirSoma(2,5,7,8,9,3)


// Função com Retorno

function soma(a, b =0)
{
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))