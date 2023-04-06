const form = document.querySelector('#form')
form.addEventListener('submit', function(event){
    event.preventDefault()
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso){
        setResultado('Peso inválido', false)
        return
    }
    if (!altura){
        setResultado('Altura inválida', false)
        return
    }

    const imc = getIMC(peso, altura)
    const nivelImc = getNivelImc(imc)   

    const msg = `Seu IMC é: ${imc} (${nivelImc})`

    setResultado(msg, true)

})

function criaP(){
    const p = document.createElement('p')
    return p
}

function getNivelImc(imc){
    const niveis = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 

    'Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3']



    if(imc > 39.9){
        return niveis[5]
    }
    
    if(imc >= 34.9){
        return niveis[4]
    }
    
    if (imc >= 29.9){
        return niveis[3]
    }
    
    if (imc >= 24.9){
        return niveis[2]
    }
    
    if (imc >= 18.5){
        return niveis[1]
    }

    if (imc < 18.5){
        return niveis[0]
    }
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criaP()
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('baderror')
    }


    p.innerHTML = msg
    resultado.appendChild(p)
}

function getIMC(peso, altura){
    const imc = peso/altura**2
    return imc.toFixed(2)
}