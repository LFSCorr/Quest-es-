// Função para verificar e contar a letra 'a'
function countLetterA(inputString) {
  // Converter a string para minúsculas para facilitar a contagem
  const lowerCaseString = inputString.toLowerCase();

  // Contar o número de ocorrências da letra 'a'
  const count = lowerCaseString.split('a').length - 1;

  // Informar o resultado
  console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
}

// Exemplo 1: String informada pelo usuário
function checkUserInput() {
  const userInput = prompt("Digite uma string para verificar a quantidade de letras 'a':");
  if (userInput !== null) {
      countLetterA(userInput);
  } else {
      console.log("Nenhuma entrada fornecida.");
  }
}

// Exemplo 2: String pré-definida
function checkPredefinedString() {
  const predefinedString = "Aqui está um exemplo de string com algumas letras 'a' para contar.";
  countLetterA(predefinedString);
}

// Escolha qual função executar:
// checkUserInput(); // Descomente para usar a entrada do usuário
checkPredefinedString(); // Descomente para usar a string pré-definida
