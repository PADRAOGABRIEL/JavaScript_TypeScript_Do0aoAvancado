/*import { nome,sobrenome, idade,soma } from "./modulo1";

console.log(nome, sobrenome, idade)
console.log(soma(40,3))*/

import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css'

(function() {
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geraNovoCpf()
})()