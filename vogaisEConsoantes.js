/* 

Objetivo:

    Treinar loops em array de Strings.

Tarefas:

    Primeira:    
        Escrever na tela somente as vogais.

    Segunda: 
        Escrever somente as vogais.



    Saída esperada:

        Printar na tela somente cada vogal na ordem do array 's' em cada linha e depois somente as consoantes em cada linha.
*/


const s = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function vogaisEConsoantes( s ) {

    console.log("\n\tSOMENTE VOGAIS: ")
    for ( var i = 0 ; i < s.length ; i ++ ) {
        
        if ( s[ i ] == "A" || s[ i ] == "E" || s[ i ] == "I" || s[ i ] == "O" || s[ i ] == "U" )
            console.log( "\n\t" + " ' " + s[ i ] + " ' " );  

    };

    console.log( "\n\tSOMENTE CONSOANTES: ")
    for ( var i = 0 ; i < s.length ; i ++ ) {
        
        if ( s[ i ] != "A" && s[ i ] != "E" && s[ i ] != "I" && s[ i ] != "O" && s[ i ] != "U" )
            console.log( "\n\t" + " ' " + s[ i ] + " ' " );  
    }
};

vogaisEConsoantes( s );