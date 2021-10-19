// //silence is golden

// // Crea una función que reciba una frase en formato string y devuelva la palabra más larga. 

// En caso de haber varias con longitud máxima que devuelva siempre la primera. 

// Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.

// TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

// function biggestWord(phrase) {
//     var splitMessage = phrase.split(' ')
//     var currentBiggest = 0
//     for (i = 0; i < splitMessage.length; i++) {        
//         if (splitMessage[i].length > currentBiggest){
//             var currentBiggest = splitMessage[i].length
//             biggest = splitMessage[i]
//         }
//     }
//     return biggest
// }
// console.log(biggestWord('a bb ccc dddd eeeee'))

function biggestWord(phrase) {
    if (typeof phrase === 'string'){
        let splitMessage = phrase.split(' ')
        let currentBiggest = '';
        for(let i = 0; i < splitMessage.length; i++){
            if(currentBiggest < splitMessage[i]){
                currentBiggest = splitMessage[i];
            }
        }
        return currentBiggest;
    }else{
        return 'Dame una cadena porfa';
    }
}
console.log(biggestWord('aaa bbb'));