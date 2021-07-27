/*
Exercicio desafio 
Titulo: "Big Integers Sum from Array" - Somar um array de inteiros gigantes
Fonte: Hacker Rank 

Autor da Solucao: jguerreiro

*/

function somadorDeGigantes( array ) {

    var sum = BigInt( 0 );

    for ( var i = 0 ; i < array.length ; i ++ ) {

        sum += BigInt( array[ i ] );

    }

    return sum;

}

function main (){

    var ar = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ];

    callFunc = somadorDeGigantes( ar );
    console.log( callFunc );

}

main()