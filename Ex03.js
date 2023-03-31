const nome = 'Gabriel Padrão'
const idade = 20
const pesoKg = 85
const alturaEmM = 1.84
let anoNascimento

let IMC = pesoKg/(alturaEmM**2)
anoNascimento = 2023 - idade

console.log(`${nome} tem  ${idade} anos`)
console.log(`${alturaEmM} metros e IMC = ${IMC}`)
console.log(`Nasceu em ${anoNascimento}`)