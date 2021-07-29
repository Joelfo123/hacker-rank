/*
Exercicio desafio 

Titulo: "Diagonal Difference" - Somar as diagonais principais de um array 2d ( bidimensional ) 3x3
e obter o valor absoluto

Exemplo de matriz 2D

        11   2  4

        4    5   6

        10   8  -12
    
Soma diagonal principal = 11 + 5 + ( -12 ) = 4
Soma diagonal secundária = 4 + 5 + 10 = 19
Diferença = 4 - 19 = -15

Valor absoluto de -15 = 15

Exemplo:

Na reta numérica de números reais:

- 3 - 2 - 1 0 1 2 3
  ^               ^
  
O valor absoluto de 3 é -3 e vice versa

Fonte: Hacker Rank 

Autor da Solucao: jguerreiro

*/



function diferencaDiagonal( arr ) {
    
    /*
        # arr 2D

        11  2  4

        4  5  6

        10  8 -12
        
        #indices 

        00   01  02 
        10   11  12
        20   21  22 

    */
    
    var d1 = arr[ 0 ][ 0 ] + arr[ 1 ][ 1 ] + arr[ 2 ][ 2 ] ; 
    var d2 = arr[ 0 ][ 2 ] + arr[ 1 ][ 1 ] + arr[ 2 ][ 0 ];

    valorAbsoluto = Math.abs( d1 - d2 );
    
    console.log( valorAbsoluto );
}

function main ( ){
    
    var array2D = [
        [ 11, 2,  4 ],
        [  4, 5,  6 ],
        [ 10, 8, -12]
    ];

  var chamaFunc = diferencaDiagonal( array2D );
  console.log( chamaFunc );
}

main();