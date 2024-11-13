function gerarNumerosAleatorios(quantidade = 6, maximo = 60) {
    // Cria um array com todos os números possíveis
    const numeros = Array.from({ length: maximo }, (_, i) => i + 1);
    
    // Implementa o algoritmo de Fisher-Yates shuffle
    for (let i = maximo - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    
    // Retorna os primeiros 'quantidade' números
    return numeros.slice(0, quantidade);
  }
  
  // Testa a função com diferentes quantidades
  const quantidades = [6, 10, 20, 30, 40, 50];
  
  quantidades.forEach(qty => {
    console.log(`Gerando ${qty} números:`);
    const numerosGerados = gerarNumerosAleatorios(qty);
    console.log(numerosGerados.join(', '));
    console.log(); // Linha em branco para melhor legibilidade
  });