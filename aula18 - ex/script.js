
//definindo função contar
function contar(){
    let n = document.getElementById('txtn').value
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let intervalo = document.getElementById('txtin')
    let res = document.getElementById('res')

    //condição onde exibirá erro caso os valores sejam nulos
    if(ini.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0 || n.length == 0) {
        res.innerHTML = 'Impossível contar!'
       // window.alert('Está faltando dados!')
    } else  {
        res.innerHTML = ` <strong>${n} contando:</strong>  <br> <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(intervalo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando intervalo como 1!')
            p = 1
           
        }

        if(n.toLowerCase() === "gabriel") {
            res.innerHTML += "<strong>BOUAAAAAA!</strong><br><br>"
        } else if (n.toLowerCase() === "nathan"){
            res.innerHTML += "<strong>Doidãoooo</strong><br><br> "
        } else if (n.toLowerCase() === "ismael") {
            res.innerHTML += "<strong>Pô, vei </strong><br><br>"
        } else if (n.toLowerCase() === "davi") {
            res.innerHTML += "<strong>Tu tá bem, mano? como está a sua recuperação, após a remoção da vassoura?</strong> <br> <br>"
        } else if (n.toLowerCase() === "lobo") {
            res.innerHTML += "<strong>Tu tá bem, mano? como está a sua recuperação, após a remoção da vassoura?</strong> <br> <br>"
        } else if(n.toLowerCase() === "matheus") {
            res.innerHTML += "<strong>Graça e paz, guerreiro</strong><br><br>"
        } else if(n.toLowerCase() === "ana") {
            res.innerHTML += "<strong>Está melhor, bem?</strong><br><br>"
        } else if(n.toLowerCase() === "naubert") {
            res.innerHTML += "<strong>Me faz um pix, mano!!</strong><br><br>"
        } else {
            res.innerHTML += "<strong>TU É, MANO?</strong> <br> <br>"
        }

        if(i < f)  {
            //contagem crescente
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
    }
        } else {
            //contagem decrescente
            for(let c = i; c >= f; c -= p ) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}