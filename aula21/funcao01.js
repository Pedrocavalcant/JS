function parimpar(n){
    if(n%2 == 0){
        return 'par'
    } else{
        return 'impar'
    }
}

let res = parimpar(300)
console.log(`${res}`)

//console.log(parimpar(100))