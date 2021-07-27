/*
Exercicio desafio 
Titulo: "compare triplets"
Fonte: Hacker Rank 

Autor da Solucao: jguerreiro

*/


function comparaTriplets( a, b ) {

    var resultado = [0, 0];

    for ( var i = 0 ; i < 3 ; i++ ) {

        if ( a[ i ] > b[ i ] ) {
            
            resultado[ 0 ] += 1;
        }

        if ( a[ i ] < b[ i ]){
            
            resultado[ 1 ] += 1
        }    
    }


    saida = console.log(" Score A = " + resultado[ 0 ] + " | Score B = " + resultado[ 1 ] );

    return saida;
}
    
function main() {
   
    // serve de mockup pra teste de mesa / debug
    var tripletA = [ 1, 1, 4 ];
    var tripletB = [ 2, 2, 2 ];
    
    printFunc = comparaTriplets( tripletA, tripletB );

    console.log( printFunc );
}

main();