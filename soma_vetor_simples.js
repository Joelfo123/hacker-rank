//função que recebe um array e devolve a soma dos seus valores

var array = [ 1, 2, 3 ];

var somador = 0;

function somaVetorSimples( array ) {

    for ( var i = 0 ; i < array.length ; i++ ) {

        somador += array[ i ];

    };

    return somador;
}

console.log(simpleArraySum( array ));
