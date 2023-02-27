function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    

  /*   teste ok!!  */
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ window.alert('[ERRO] Faltam dados!')
    }  
     else{
        res.innerHTML = 'Contando...'
        let i = Number(ini.value) // convertendo o valor em número.
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(c = i; c <= f; c += p){ // C é o contador
            res.innerHTML += `${c} \u{1F449} ` // Buscamos o imoji no site, unicode.or e o formatamos para JavaScript.
             }
         }
        

} 