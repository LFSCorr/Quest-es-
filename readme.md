Explicações:

**FIBONACCI**

```isFibonacci(n)```: Função que verifica se o número n pertence à sequência de Fibonacci usando uma propriedade matemática.

```main()```: Função principal que solicita ao usuário um número e usa a função isFibonacci para verificar se ele está na sequência. Mostra uma mensagem usando alert.

```window.onload```: Executa a função main quando a página é carregada.

**CONTAGEM DE "A"**

```countLetterA(inputString)```: Função que conta as ocorrências da letra 'a' na string, convertendo-a para minúsculas para garantir que a contagem seja insensível a maiúsculas/minúsculas.

```checkUserInput()```: Solicita uma entrada do usuário e passa para a função countLetterA.

```checkPredefinedString()```: Usa uma string pré-definida e passa para a função countLetterA.

```window.onload```: Define qual função será executada quando a página for carregada.


**SOMA CORRETA**

*Inicialização das Variáveis:*

``const INDICE = 12``;: Define o limite superior para o loop.

``let SOMA = 0``;: Inicializa a variável que armazenará a soma total.

``let K = 1;``: Inicializa a variável que será incrementada no loop.

*Loop de Cálculo:*

``while (K < INDICE) { ... }``: O loop executa enquanto K for menor que INDICE (12).

``K = K + 1;``: Incrementa o valor de K em 1 a cada iteração.

``SOMA = SOMA + K;``: Adiciona o valor atual de K à variável SOMA.

*Saída do Resultado:*

``console.log(SOMA);``: Imprime o valor final de SOMA no console.

**DESCUBRA A LOGICA**

**1. Sequência de Números Ímpares**

**Sequência:** 1, 3, 5, 7, ___

**Lógica:** Esta sequência é composta por números ímpares consecutivos. Cada número é 2 unidades maior que o anterior.

**Próximo Elemento:** 9

**2. Sequência Geométrica**

**Sequência:** 2, 4, 8, 16, 32, 64, ____

**Lógica:** Cada número é o dobro do anterior, formando uma progressão geométrica com razão 2.

**Próximo Elemento:** 128

**3. Sequência dos Quadrados Perfeitos**

**Sequência:** 0, 1, 4, 9, 16, 25, 36, ____

**Lógica:** Cada número é o quadrado do índice correspondente (0², 1², 2², 3², 4², 5², 6², ...).

**Próximo Elemento:** 49 (que é 7²)

**4. Sequência dos Quadrados de Números Pares**

**Sequência:** 4, 16, 36, 64, ____

**Lógica:** Cada número é o quadrado de números pares consecutivos (2², 4², 6², 8², ...).

**Próximo Elemento:** 100 (que é 10²)

**5. Sequência de Fibonacci**

**Sequência:** 1, 1, 2, 3, 5, 8, ____

**Lógica:** Esta é a sequência de Fibonacci, onde cada número é a soma dos dois números anteriores.

**Próximo Elemento:** 13

**6. Sequência de Números Próximos**

**Sequência:** 2, 10, 12, 16, 17, 18, 19, ____

**Lógica:** A sequência mostra um padrão onde os números são próximos entre si, mas o próximo número após 19 parece seguir a lógica de adicionar 1 continuamente.

**Próximo Elemento:** 20

**CHARADA DAS LAMPADAS**

**Processo de verificação:**

Ligaria a primeiro interruptor e aguardaria 1 minuto, apos o tempo, desligaria o interruptor, depois ligaria o segundo interruptor, e deixaria o ultimo interruptor desligado.

**Idas:**

Iria até a primeira sala, se a lampada estivesse deligada, verificaria sua temperatura se quente, saberia que o primeiro interruptor é desta lampada, se fria, saberia que o interruptor desta lampada é o Terceiro.

Iria até a segunda sala e aplicaria o mesmo teste, se estivesse acesa, saberia que é o segundo interruptor, se estivesse apagada, iria pela temperatura novamente.

Desta forma, se a lampada da primeira sala esta quente e da segunda esta acesa, temos que o primeiro interruptor é da primeira sala, o segundo interruptor é da segunda sala e o terceiro interruptor é da sala dos interruptores.