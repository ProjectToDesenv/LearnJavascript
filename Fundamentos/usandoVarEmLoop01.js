// a Palavra reservada var não tem escopo de bloco
// a Palavra reservada let tem escopo de bloco
for (var i = 0; i< 10; i++){
    console.log(i)
}

console.log(i)


for (let i = 0; i< 10; i++){
    console.log(i)
}

console.log(i)