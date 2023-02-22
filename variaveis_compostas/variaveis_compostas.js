//let num = [5, 2, 7, 6, 8]
//num[4] = 8 criamos uma espaço a mais com valor 8.
//num.push(9) acescentamos mais um valor ao final, 9.
//num.length contamos quantos espaços temos.
//num.sort() colocamos todos em ordem crescente.
//console.log(num)
//num.sort()
//console.log(`Nosso vetor tem  ${num.length} posições`)
//console.log(`O primeiro valor do vetor é ${num[0]}`)


/*console.log(valores)
for(let pos=0; pos < valores.length; pos++){
console.log(`A posição ${pos} tem o valor ${valores[pos]}
    `)
}*/

//forma simplificada!

/*let valores= [8, 1, 7, 4, 2, 9]

for(let pos in valores){ //Lê-se, "PARA cada variável DENTRO de valores"
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}*/

//Buscar uma posição!

let num =[5, 8, 2, 9, 3]
num.push(1) //Acrescentou "1", em num.
num.sort() // Colocou em ordem.
    console.log(num)
    console.log(`O vetor tem ${num.length} posições.`) //Informou quantas posições háviam em num.
    console.log(`O primeiro valor do vetor é ${num[0]}`) //mostrou o primeiro valor
let pos= num.indexOf(8)
if ( pos == -1){
    console.log(`O valor não foi encontrado!`)
}
else {
    console.log(`O valor está na posição ${pos}`)

}
