
// Exercício 1: Cálculo de IMC
// IMC = peso / (altura * altura);
// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;

function calcIMC(nome, peso, altura) {
    const imc = peso / (altura * altura);

    if(imc >= 30) {
        return nome + ' você está acima do peso.'
    } else {
        return nome + ', você não está acima do peso.'
    }
}

// Exercício 2: Cálculo de Aposentadoria
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos,
// enquanto a mulher precisa ter no mínimo 85 anos na soma;

// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

function calcAposentadoria(nome, sexo, idade, contribuicao) {
    const anos = idade + contribuicao

    if (idade >= 35) {
        if ((sexo == 'F' && anos >= 85) || (sexo == 'M' && anos >= 95)) {
            return nome + ', você pode se aposentar!'
        } else {
            return nome + ', você ainda não pode se aposentar!'
        }
    } else {
        return nome + ', você ainda não pode se aposentar!'
    }
    
}

// testing
const nome = 'Lucas';
const peso = 92.2;
const altura = 1.77;
const sexo = "M";
const idade = 26;
const contribuicao = 6;

console.log(calcIMC(nome, peso, altura))
console.log(calcAposentadoria(nome, sexo, idade, contribuicao))

// Lucas, você não está acima do peso.
// Lucas, você ainda não pode se aposentar!