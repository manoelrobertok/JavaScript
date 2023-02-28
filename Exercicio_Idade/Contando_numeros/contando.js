function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    

  /*   teste ok!!  */
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ window.alert('[ERRO] Faltam dados!')
    }  

     else{
        res.innerHTML = 'Contando... <br>'

        let i = Number(ini.value) // convertendo o valor em número.
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f){ //Contagem crescente.
        for(let c = i; c <= f; c += p){ 
          
          // O contador vai começar no início, e enquanto o contador for menor ou igual ao fim, o contador vai receber ele mesmo, mais o passo!

            res.innerHTML += `${c} \u{1F449} ` // Buscamos o imoji no site, unicode.org e o formatamos para JavaScript( \u{} ).
        }
      }
      else{
          for(let c = i; c >= f; c -= p){
            innerHTML += `${c} \u{1F449}`
          }
        }

        innerHTML += `\u{1F3C1}`
     }
             
   }
        

