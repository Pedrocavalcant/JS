let valores = [5,4,6,3,7,8]
valores.sort()
valores.push(10)
console.log(`Esse array tem ${valores.length} posicoes`)
console.log(`O primeiro valor desse array e ${valores[0]}, o ultimo valor desse array e ${[valores[6]]}`)
console.log(`${valores}`)
for(let pos = 0; pos<valores.length; pos++ ) {
    console.log(`na posicao ${pos} o valor correspondente e ${valores[pos]}`)
}
let pos = valores.indexOf(10)
if(pos == -1) {
    console.log('o valor nao foi encontrado')
} else{
    console.log(`o valor foi encontrado na posicao ${pos}`)
}