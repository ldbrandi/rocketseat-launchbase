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

alunosTurmaA =[
    {
        nome: 'aluno1A',
        nota: 9
    },
    {
        nome: 'aluno2A',
        nota: 10
    },
    {
        nome: 'aluno3A',
        nota: 2
    },
    {
        nome:'Novo Aluno',
        nota: 5
    }
]

alunosTurmaB =[
    {
        nome: 'aluno1B',
        nota: 7
    },
    {
        nome: 'aluno2B',
        nota: 6
    },
    {
        nome: 'aluno3B',
        nota: 8
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for(let i = 0; i < alunos.length; i++) {
        soma += alunos[i].nota
    }
    return soma / alunos.length
}

const mediaA = calculaMedia(alunosTurmaA)
const mediaB = calculaMedia(alunosTurmaB)

console.log(mediaA, mediaB)

function enviaMensagem(media, turma) {
    if(media > 5) {
        console.log('Parabéns! Média da ' + turma + ' foi ' + media)
    } else {
        console.log('A média da ' + turma + ' é menor que 5')
    }
}

enviaMensagem(mediaA, 'turma A')
enviaMensagem(mediaB, 'turma B')

// console.log(media > 5)