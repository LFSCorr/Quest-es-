// Aqui temos a função para verificar se um número é um número de Fibonacci
function isFibonacci(n) {
  if (n < 0) return false;

  function isPerfectSquare(x) {
      const s = Math.sqrt(x);
      return s === Math.floor(s);
  }

  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

// Aqui temos a função principal para executar o código
function main() {
  const number = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci:"), 10);

  if (isNaN(number)) {
      alert("Por favor, informe um número válido.");
  } else if (isFibonacci(number)) {
      alert(`O número ${number} pertence à sequência de Fibonacci.`);
  } else {
      alert(`O número ${number} não pertence à sequência de Fibonacci.`);
  }
}

// Executa a função principal
main();