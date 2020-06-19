const nome = 'Lucas'
console.log(nome)

const nome2 = `Paula e ${nome}`
console.log(nome2)

// const aluno1 = 'aluno1', aluno2 = 'aluno2', aluno3 = 'aluno3'
// const nota1 = 9, nota2 = 10, nota3 = 6

// const aluno1 = {
//     nome: 'aluno1',
//     nota: 9
// }

// const aluno2 = {
//     nome: 'aluno2',
//     nota: 10
// }

// const aluno1 = {
//     nome: 'aluno3',
//     nota: 2
// }

alunos =[
    {
        nome: 'aluno1',
        nota: 9
    },
    {
        nome: 'aluno2',
        nota: 10
    },
    {
        nome: 'aluno3',
        nota: 2
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
console.log(media)

if(media > 5) {
    console.log('Parabéns! Média ' + media)
} else {
    console.log('A média é menor que 5')
}

console.log(media > 5)

