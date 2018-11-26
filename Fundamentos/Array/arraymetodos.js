const pilotos = ['Sena','Alonso','Massa','Riccardo']

pilotos.pop()
console.log(pilotos)

pilotos.push('Fittipaldi')
console.log(pilotos)

pilotos.shift()// remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//Remove
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
