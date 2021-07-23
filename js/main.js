function palindrom(parola){
    var lunghezza = parola.length;
    for (var i = 0; i < lunghezza; i++){
        if (parola[i] !== parola[lunghezza - 1 - i]){
            return 'no palindromo';
        }
         
    }
    return 'palindromo';
}














// var start = document.getElementById('start');


// start.addEventListener('click',
//     function(){
//         var gioco = document.getElementById('gioco').value;
//         if (gioco == 'palindromo'){
//             alert('ciao 1');
//         }
//        else{
//            alert('noooo');
//        }
//     }
// )