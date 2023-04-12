function Relogio(){

    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000); // ms to s
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let seconds = 0
    let timer

    function startTimer() {
        timer = setInterval(function () {
            seconds++
            relogio.innerHTML = getTimeFromSeconds(seconds)
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const el = e.target

        if (el.classList.contains('zerar')) {
            zerar.addEventListener('click', function (e) {
                relogio.classList.remove('pausado')
                clearInterval(timer)
                relogio.innerHTML = '00:00:00'
                seconds = 0
            })
        }
        if (el.classList.contains('pausar')) {
            pausar.addEventListener('click', function (e) {
                relogio.classList.add('pausado')
                clearInterval(timer)
            })
        }
        if (el.classList.contains('iniciar')) {
            iniciar.addEventListener('click', function (e) {
                relogio.classList.remove('pausado')
                clearInterval(timer)
                startTimer()
            })
        }
    })
}

Relogio()
