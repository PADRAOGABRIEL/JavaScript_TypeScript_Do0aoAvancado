const num = Number(prompt('Digite 1 numero'))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = num
texto.innerHTML = `<p> Raiz quadrada: ${Math.sqrt(num)}.</p>`
texto.innerHTML += `<p> ${num} é inteiro: ${Number.isInteger(num)}.</p>`
texto.innerHTML += `<p> é NaN: ${Number.isNaN(num)}.</p>`
texto.innerHTML += `<p> Arredondando pra baixo: ${Math.floor(num)}.</p>`
texto.innerHTML += `<p> Arredondando pra cima: ${Math.ceil(num)}.</p>`
texto.innerHTML += `<p> 2 casa decimais: ${num.toFixed(2)}.</p>`

