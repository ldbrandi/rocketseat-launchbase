// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

// const usuarios = [
//     { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//     { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
//   ];

// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"], receitas: [115.3, 48.7, 98.3, 14.5], despesas: [85.3, 13.5, 19.9] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"], receitas: [24.6, 214.3, 45.3], despesas: [185.3, 12.1, 120.0]},
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"], receitas: [9.8, 120.3, 340.2, 45.3], despesas: [450.2, 29.9]}
]

for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nome + ' trabalha com ' + usuarios[i].tecnologias.join(', '))
}

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for (tec of usuario.tecnologias) {
        if (tec == 'CSS') {
            return true
        }
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}

// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).
// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

function calculaSaldo(receitas, despesas) {
    return somaNumeros(receitas) - somaNumeros(despesas)
}

// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"
    total = 0
    for (numero of numeros) {
        total += numero
    }
    return total
}

// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

// Fulano possui saldo POSITIVO de 43.3
// Sicrano possui saldo NEGATIVO de -90.3

for (usuario of usuarios) {
    saldo = Math.round(calculaSaldo(usuario.receitas, usuario.despesas) * 100) / 100
    dinheiro = 'POSITIVO'
    
    if (saldo < 0) dinheiro = 'NEGATIVO'

    console.log(`${usuario.nome} possui saldo ${dinheiro} de ${saldo}`)
}
