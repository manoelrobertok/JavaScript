function verificar() {

    var data = new Date() //vai buscar a data atual.
    var ano = data.getFullYear() // buscar data com 4 dígitos.
    var fano = window.document.getElementById('iano')
    var res = document.getElementById('res')
    var img = document.getElementById('foto')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)

    var gênero = ''
            if (fsex[0].checked){
            gênero = 'Homem'
        }

            else if (fsex[1].checked){
            gênero = 'Mulher'
        }

         if(idade >=0 && idade < 10) {
                img.src = 'menino.png'
            }

        else if (idade < 18) {
                img.src = 'adolemasc.png'
         }
          
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
   
}