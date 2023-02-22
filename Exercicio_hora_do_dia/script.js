function carregar() {
    var msg = window.document.getElementById('msg') //Criando a Var "msg"
    var img = window.document.getElementById('imagem') // criando a var "img"
    var data = new Date() // buscando a data atual
    var hora = 18//data.getHours()  // buscando a hora atual(computador)
    msg.innerHTML= `Agora são ${hora} horas.` //Definindo a mensagem.

    if (hora >=0 && hora <12){ //Se a hora for entre 0 e 12, manhã.
        img.src = 'manha.jpg'
        document.body.style.background = '#d1b59f' //mudando a cor de fundo conforme horário.

    } else if(hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#CCF1FF'
        

    } else {
        img.src ='noite.jpg'
        document.body.style.background = '#666666'

    }


}