//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

// Nome: Rocketseat
// Cor: Roxo
// Foco: Programação
// Endereço:
// Rua: Rua Guilherme Gembala
// Número: 260

// Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
// A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

function imprimeEmpresa(empresa) {
    console.log(`A empresa ${empresa.nome} está localizada em ${empresa.enredereco.rua}, ${empresa.enredereco.numero}`)
}

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    enredereco: {
        rua: 'Rua Guilherme Gembala',
        numero: '260'
    }
}

imprimeEmpresa(empresa)
// A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260


//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }

//Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

function imprimeUsuario(usuario) {
    console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologias[0].nome} ` +
                `com especialidade em ${usuario.tecnologias[0].especialidade}`)
} 

const usuario = {
    nome: 'Carlos',
    idade: 32,
    tecnologias: [
      { nome: "C++", especialidade: "Desktop" },
      { nome: "JavaScript", especialidade: "Web/Mobile" }
    ]
}

imprimeUsuario(usuario)
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop