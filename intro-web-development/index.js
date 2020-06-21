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

function enviaMensagem(media, turma) {
    if(media > 5) {
        console.log('Parabéns! Média da ' + turma + ' foi ' + media)
    } else {
        console.log('A média da ' + turma + ' é menor que 5')
    }
}

enviaMensagem(mediaA, 'turma A')
enviaMensagem(mediaB, 'turma B')

function marcarComoReprovado(aluno) {
    aluno.reprovado = false

    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos) {
    for (aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosTurmaA)
alunoReprovado(alunosTurmaB)