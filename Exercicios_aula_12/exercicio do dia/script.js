function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date() //busca data no computador
var hora = data.getHours()//busca a hora no computador
//var hora =19
msg.innerHTML = `Agora são ${hora} horas.` //mensagem para a hora

  if (hora > 0 && hora < 12) { //se a hora estiver entre 0 e 12, mostrará a imagem da manhã.
        img.src = 'manha.png'    
        document.body.style.backgroundColor = '#6B8E23' // cor de fundo para manhã
     
    
   }
    else if (hora >= 12 && hora <18 ){
        img.src = 'tardeweb.png'
        document.body.style.backgroundColor = '#B0E0E6'
    }

    else{
    img.src = 'noiteweb.png'
    document.body.style.backgroundColor = '#B0C4DE'
    
}

}