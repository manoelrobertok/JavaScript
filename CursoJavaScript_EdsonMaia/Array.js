let produtos = ['Arroz', 'Feijão', 'Leite']
//produtos.push('Macarrão')   "push" Para acrescentar um íten no final da lista.

//Ex: produtos
//(4) ['Arroz', 'Feijão', 'Leite', 'Macarrão']

//produtos.pop('Macarrão', 'Leite')  "pop" Remove do final da lista.
//Ex:
//(2) ['Arroz', 'Feijão'] 
let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai']
//meses.push('Dez')
//Ex: (6) ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Dez']
//meses.pop('Dez')
//Ex: (5) ['Jan', 'Fev', 'Mar', 'Abr', 'Mai']

//produtos.unshift('Uva', 'Maçã')
//Ex: (5) ['Uva', 'Maçâ', 'Arroz', 'Feijão', 'Leite']
//produtos.shift()

//meses.splice(1,2)// O n. 1 referece ao índice e o n. 2, quantos elementos vamos tirar a partir do índice.

let meses1 = meses.slice()
meses2 = meses.slice(1,5)
//Ex: (4) ['Fev', 'Mar', 'Abr', 'Mai']

meses.length()
//Ex: meses.length
// 5

