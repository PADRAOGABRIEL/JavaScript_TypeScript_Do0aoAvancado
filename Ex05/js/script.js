        const nome = prompt('Digite seu nome')
        const qtd_letras = nome.length
        const idx_a = nome.indexOf('a')
        const ult_idx_a = nome.lastIndexOf('a')
        const seg_letra = nome.charAt(1)
        const palavras_nome = nome.split(' ')
        const nome_min = nome.toLowerCase()
        const nome_mai = nome.toUpperCase()
        const tres_ult_letras = nome.slice(-3)


        document.body.innerHTML = `O seu nome é:  ${nome} <br/>`
        document.body.innerHTML += `O quantidade de letras do seu nome é:  ${qtd_letras} <br/>`
        document.body.innerHTML += `O índice da primeira letra 'a' é:  ${idx_a} <br/>`
        document.body.innerHTML += `O índice da ultima letra 'a' é:  ${ult_idx_a} <br/>`
        document.body.innerHTML += `A segunda letra do nome é:  ${seg_letra} <br/>`
        document.body.innerHTML += `As palavras que tem nome são: ${palavras_nome} <br/>`
        document.body.innerHTML += `O nome minusculo: ${nome_min} <br/>`
        document.body.innerHTML += `O nome maiusculo: ${nome_mai} <br/>`
        document.body.innerHTML += `As três ultimas letras são: ${tres_ult_letras} <br/>`       