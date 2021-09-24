let numeroAlunos = 5

for (let contador = 0; contador <= numeroAlunos; contador++) { // Contagem de alunos
    console.log(contador)

    if (contador == 0) {
        console.log('Numero é ZERO');
    } else if (contador % 2 == 0) { // Se contador dividido por 2 e o resto for igual 0
        console.log('Numero ' + contador +' é par') // Forma concatenada
    } else {
        console.log(`Numero ${contador} é impar`) // Forma com interpolação
    }
}