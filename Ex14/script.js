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
            resolve(msg.toUpperCase() + ' - Promise confirmada')
        }, tempo)
    });
}

const promises =[
    espera('Promise 1', rand(1, 5)),
    espera('Promise 2', rand(1, 5)),
    espera('Promise 3', rand(1, 5))
]

Promise.race(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(error){
        console.log(error)
    })