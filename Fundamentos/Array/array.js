console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Pedro','Ana')
console.log(aprovados)

aprovados = ['Bia','Ana','Carlos']
console.log(aprovados[0])

aprovados[3] = 'Paulo'
aprovados.push('Mariana')
console.log(aprovados.length)
console.log(aprovados)
aprovados.sort()

aprovados[9] = 'Marcelo'
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Beatriz']
aprovados.splice(1,2) //Excluí Elementos