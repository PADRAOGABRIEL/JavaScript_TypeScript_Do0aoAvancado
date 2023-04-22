function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE')
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Promise confirmada!')
        }, tempo)
    });
}

async function executaPromises(){
    try{
    const fase1 = await espera('Fase1', rand(0,3))
    console.log(fase1)
    const fase2 = await espera('Fase2', rand(0,3))
    console.log(fase2)
    const fase3 = await espera('Fase3', rand(0,3))
    console.log(fase3)
    console.log('Terminamos na Fase3')
    }
    catch(e){
        console.log(e)
    }
}

executaPromises()