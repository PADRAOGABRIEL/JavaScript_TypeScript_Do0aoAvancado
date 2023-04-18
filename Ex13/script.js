function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max -min) + min)
}

function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string' ) {
            reject('BAD VALUE') 
        }
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    });
}

espera('Oi', rand(1, 5))
    .then(resposta => {
        console.log(resposta);
        return espera('Oi2', rand(1, 5));
    })
    .then(resposta =>{
        console.log(resposta);
        return espera(3434, rand(1, 5));
    })
    .then(resposta  => {
        console.log(resposta)
    })
    .catch( e =>{
        console.log('ERRO:', e)
    });

