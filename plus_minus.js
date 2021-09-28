/*
Exercicio desafio 
Titulo: "Plus Minus" - Mostrar a proporção de inteiros, negativos e zeros de um array qualquer
Fonte: Hacker Rank 

Autor da Solucao: jguerreiro

*/

function plusMinus( arr ) {
    
    var contPos = 0;
    var contNeg = 0;
    var contZero = 0;
    var ratioPos = 0.0;
    var ratioNeg = 0.0 ;
    var ratioZero = 0.0;
    var tamVet = arr.length;
    
    for ( var i = 0 ; i < tamVet ; i++ ) {
        
        if ( arr[ i ] != 0 ) 
            arr[ i ] > 0 ? contPos++ : contNeg++;
        else {
            contZero += 1;
        }

    }
    
    ratioPos = contPos / tamVet;
    ratioPos = ratioPos.toFixed( 6 );
    ratioNeg = contNeg / tamVet;
    ratioNeg = ratioNeg.toFixed( 6 );
    ratioZero = contZero / tamVet;
    ratioZero = ratioZero.toFixed( 6 );
    
    console.log( ratioPos, "\n" )
    console.log( ratioNeg, "\n" ) 
    console.log( ratioZero, "\n" );
}

const vetor = [-4, 3, -9, 0, 4, 1];

plusMinus( vetor );