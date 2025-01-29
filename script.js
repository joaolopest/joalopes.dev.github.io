// Função para gerar um número aleatório dentro de um intervalo
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para criar os quadrados animados
function createSquares() {
  const numSquares = 20; // Número de quadrados
  const squaresContainer = document.getElementById('squares-container'); // Pega o container dos quadrados

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    const size = getRandomNumber(20, 80); // Tamanho aleatório entre 20 e 80 pixels
    const x = getRandomNumber(0, window.innerWidth - size); // Posição horizontal aleatória
    const delay = getRandomNumber(0, 10); // Atraso aleatório para iniciar a animação

    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.left = `${x}px`;
    square.style.animationDelay = `${delay}s`;
    square.style.top = `100%`; // Todos os quadrados começam na parte inferior

    squaresContainer.appendChild(square); // Adiciona o quadrado ao container
  }
}

// Chama a função para criar os quadrados quando a página carregar
window.addEventListener('load', createSquares);