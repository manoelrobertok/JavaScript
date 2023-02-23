function verificar(){
    var data = new Date() //Buscando a data atual do computador.
    var ano = data.getFullYear() //Buscando o ano atual do computador.
    var fano = document.getElementById('txtano') //Variável para o ano preenchido no formulário.
    var res = document.querySelector('div#res') //variável para o resultado.
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fano.value.length == 0 || fano.value > ano){ 
        //Se o ano preenchido no formulário for igual a "0" *OU* o ano do formulário for maior que o "ano atual", exibir alerta.
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex') //Nome comum aos gêneros.
        var idade = ano - Number(fano.value) // O resultado será o ano atual - o ano do formulário.
        res.innerHTML = `Idade calculada: ${idade} anos.`// Mensagem de resultado.
 }
        var gênero = '' //Criamos variável para gênero.
       
        if (fsex[0].checked){ //Se o "radsex" for "0", é homem.Se for "1", mulher.
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebeboy.jpg')
            
            
            }
        }

        else if (fsex[1].checked) {
                gênero = 'Mulher'
            }
        res.innerHTML = (`Detectamos ${gênero} com ${idade} anos.`)//Mensagem de resultado.
        res.style.textAlign = 'center' // Estilizando no JavaScript.
        res.appendChild(img)

        }

        
    
 
