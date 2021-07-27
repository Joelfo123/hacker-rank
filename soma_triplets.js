
function comparaTriplets( a, b ) {
    
    var resultado = [ 0, 0 ];

    var scoreA = 0;
    var scoreB = 0;

    // index [ 0 ]
     
    if ( a[ 0 ] > b[ 0 ] ) {

        ++scoreA;
        resultado[ 0 ] = scoreA;

    } 

    else if ( a[ 0 ] < b[ 0 ] ) {

        ++scoreB;
        resultado[ 1 ] = scoreB;


    } else {

        a[ 0 ] = 0;
        b[ 0 ] = 0;
        
    }

    // index [ 1 ]
    
    if ( a[ 1 ] > b[ 1 ] ) {

        ++scoreA;
        resultado[ 0 ] = scoreA;
        
    } 

    else if ( a[ 1 ] < b[ 1 ] ) {

        ++scoreB;
        resultado[ 1 ] = scoreB;


    } else {

        a[ 1 ] = 0;
        b[ 1 ] = 0;
        
    }

    // index [ 2 ]

    if ( a[ 2 ] > b[ 2 ] ) {

        ++scoreA;
        resultado[ 0 ] = scoreA;
        
    } 

    else if ( a[ 2 ] < b[ 2 ] ) {

        ++scoreB;
        resultado[ 1 ] = scoreB;


    } else {

        a[ 2 ] = 0;
        b[ 2 ] = 0;
        
    }
    
    return resultado;
}

function main() {


    var tripletA = [ 6, 9, 7 ];
    var tripletB = [ 4, 9, 10 ];
    
    printFunc = comparaTriplets( tripletA, tripletB );

    console.log( printFunc );
}

main();