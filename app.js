let nomesDosAmigos = [];

function adicionarAmigo() {
  let input = document.getElementById('amigo');
  let nome = input.value;
  
  if (nome !== '') {
    nomesDosAmigos.push(nome);
    atualizarLista();
    input.value = '';
  } else {
    alert ('Por favor, insira um nome.');
  }
}

function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  
  nomesDosAmigos.forEach((nome, index) => {
    let item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);
  });
}
  
function sortearAmigo() {
    if (nomesDosAmigos.length === 0) {
        document.getElementById('resultado').innerHTML = 'Adicione os nomes antes de sortear.';
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomesDosAmigos.length); 
    let nomeSorteado = nomesDosAmigos[indiceSorteado]; 

    document.getElementById('resultado').innerHTML = `Nome sorteado: ${nomeSorteado}`;
}