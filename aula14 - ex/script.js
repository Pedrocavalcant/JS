function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if(hora >=0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/im1.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/im2.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'imagens/im3.png'
        document.body.style.background = '#515154'
    }
}