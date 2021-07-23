// funzione palindroma
function palindrom(parola){
    var lunghezza = parola.length;
    for (var i = 0; i < lunghezza; i++){
        if (parola[i] !== parola[lunghezza - 1 - i]){
            return 'no palindromo';
        }
         
    }
    return 'palindromo';
}

// funzione random

function rdn(){
    return Math.floor(Math.random()*5) + 1
}


// funzione somma e controllo pari dispari
function pa_di (num1, num2){

    if (((num1 + num2) % 2) == 0){
        return 'pari';
    }
    else{
    return 'dispari';}
}






// bonus con attivazione delle due funzioni su html


var start = document.getElementById('start');


start.addEventListener('click',
    function(){
        var gioco = document.getElementById('gioco').value;
        if (gioco == 'palindromo'){
            alert(palindrom(prompt('inserisci parola')));
            
        }
       else{
           var scommessa =prompt('pari o dispari?');
           var num_tuo = parseInt(prompt('dimmi un numero'));
           var num_pc = rdn();
           console.log(num_pc);
           somma = pa_di(num_pc, num_tuo);
           console.log(somma);
           if (somma == scommessa){
               console.log( 'Hai detto ' + scommessa + ' Tu hai fatto ' + num_tuo +' Il pc ha fatto ' + num_pc +' La somma è '+ somma + ' Hai vinto' )
           }
           else{
            console.log( 'Hai detto ' + scommessa + ' Tu hai fatto ' + num_tuo +' Il pc ha fatto ' + num_pc + ' La somma è '+ somma + ' Hai perso' )
           }

       }
    }
)