// Função para criptografar o texto no textarea
function criptografarTexto() {
    // Captura o valor do textarea
    let mensagem = document.getElementById('mensagem').value;

    // Define a lógica de substituição
    let substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Realiza a substituição
    let mensagemCriptografada = mensagem.split('').map(function(char) {
        return substituicoes[char] || char; 
    }).join('');

    // Atualiza o valor do textarea com o texto criptografado
    document.getElementById('resultado').value = mensagemCriptografada;
}

// Adiciona um ouvinte de evento ao botão para chamar a função de criptografia ao clicar
document.getElementById('botaocriptografar').addEventListener('click', criptografarTexto);

// função descriptografar (foi a mais difícil)
function descriptografarTexto() {
    let mensagem = document.getElementById('mensagem').value;

    let substituicoesReversas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Realiza a substituição reversa
    for (let [key, value] of Object.entries(substituicoesReversas)) {
        mensagem = mensagem.split(key).join(value);
    }

    // Atualiza o valor do textarea com o texto descriptografado
    document.getElementById('resultado').value = mensagem;
}

// Adiciona ouvintes de eventos aos botões
document.getElementById('botaodescriptografar').addEventListener('click', criptografarTexto);
document.getElementById('botaodescriptografar').addEventListener('click', descriptografarTexto);


function esconderLadodois() {
    document.getElementById("ladodois").style.display = "none";
}



// Adiciona eventos de clique aos botões
document.getElementById("botaocriptografar").addEventListener('click', esconderLadodois);

document.getElementById("botaodescriptografar").addEventListener('click', esconderLadodois);


// Seleciona os elementos
const resultado = document.getElementById('resultado');
const ladoResultado = document.getElementById('ladoResultado');
const botaoCriptografar = document.getElementById('botaocriptografar');
const botaoDescriptografar = document.getElementById('botaodescriptografar');

// Adiciona um evento de clique ao botão de criptografar
botaoCriptografar.addEventListener('click', function() {
    ladoResultado.style.display = 'block';
    resultado.style.display = 'block'; // Faz o elemento aparecer
});

// Adiciona um evento de clique ao botão de descriptografar
botaoDescriptografar.addEventListener('click', function() {
    ladoResultado.style.display = 'block'; 
});

// funcao copiar texto

  function copyText(htmlElement) {

  }
  document.querySelector('copiar').onclick = function() {
    copyText(document.querySelector('#text'));
  }

/////

  function myFunction() {
    // pega o texto do campo resultado da criptografia/descriptografia
    var copyText = document.getElementById("resultado");
  
    // seleciona o texto
    copyText.select();
    copyText.setSelectionRange(0, 99999); // para celular
  
    // copia o texto do campo resultado
    navigator.clipboard.writeText(copyText.value);
    
    // Alerta do texto copiado
    alert("Texto copiado: " + copyText.value);
  }
