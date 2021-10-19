// Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean undefined o null. En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.

// TIP: Piensa en el operador ternario y también en el operador OR.

// TIP: Puedes suponer que input es siempre de tipo string, incluyendo null o undefined. Es decir, no vas a recibir números, objetos, etc.

// function f(input) {
//     var result;
//     if (input === undefined) {
//         result = "Unknown";
//     } else if (input === null) {
//         result = "";
//     } else {
//         result = input;
//     }
//     return result;
// }

function e(input) {
    var resultE;
    if (input === undefined || input === null) {
        resultE = "Que dise usted?";
    }else {
        resultE = 'Messirve: '+input;
    }
    return resultE;
}

console.log(e(33))


function f(input) {
    var resultF;
    input === undefined ? resultF = "Que dise usted?"
    : input === null ? resultF = "Soy nulo para esto"
        : resultF = 'Messirve: '+input;
    return  resultF;
}

var susu  = null

console.log(f(susu))