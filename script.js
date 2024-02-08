const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        'variable',
        'constant',
        'let',
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        '.push()',
        '.add()',
        '.append()',
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código JavaScript?\n\nconsole.log(typeof [1, 2, 3])",
      respostas: [
        'number',
        'array',
        'object',
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses operadores é usado para comparar igualdade de valor e tipo em JavaScript?",
      respostas: [
        '==',
        '===',
        '=',
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função de um construtor em JavaScript?",
      respostas: [
        'Criar métodos',
        'Criar instâncias de objetos',
        'Criar variáveis globais',
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array?",
      respostas: [
        '.pop()',
        '.remove()',
        '.delete()',
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código JavaScript?\n\nconsole.log(2 + '2')",
      respostas: [
        '4',
        '22',
        'Erro',
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma função em JavaScript?",
      respostas: [
        'function',
        'func',
        'def',
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos JavaScript é usado para selecionar um elemento HTML pelo ID?",
      respostas: [
        '.selectById()',
        '.getElement()',
        '.getElementById()',
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        'Converte os operandos para string',
        'Verifica se pelo menos um operando é verdadeiro',
        'Verifica se ambos os operandos são verdadeiros',
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }