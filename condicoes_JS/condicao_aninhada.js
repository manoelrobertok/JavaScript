var idade = 16
    console.log(`Você tem ${idade} anos.`)


if (idade < 16) { //Se a idade for menor que 16, "Você não vota!"
    console.log (`Você não vota!`)
}

else if (idade < 18 || idade > 65){ //Se for menor que 18 e, maior que 65 "Voto opcional!"
    console.log(`Voto opcional!`)
}

else {//Qualquer idade entre 18 e 65 é "Voto obrigatório!"
    console.log (`Voto obrigatório!`)
}