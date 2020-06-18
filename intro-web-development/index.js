const nome = 'Lucas'
console.log(nome)

const nome2 = `Paula e ${nome}`
console.log(nome2)

const aluno1 = 'aluno1', aluno2 = 'aluno2', aluno3 = 'aluno3'
const nota1 = 9, nota2 = 10, nota3 = 6

const media = (nota1 + nota2 + nota3) / 3
console.log(media)

if(media > 5) {
    console.log('Parabéns! Média ' + media)
} else {
    console.log('A média é menor que 5')
}

console.log(media > 5)