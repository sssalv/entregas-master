// Apartado A
// Implementa una función clone que devuelva un objeto clonado a partir de otro:

// function clone(source) {
//   // Implementation here.
// }
// Apartado B
// Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro. El objeto resultante debe ser la mezcla de las propiedades del objeto source sobre las del objeto target.

// TIP: Usa la función clone del apartado A.

// function merge(source, target) {
//   // Implementation here.
// }

// // Por ejemplo, dados estos 2 objetos:
// var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
// var b = { name: "Luisa", age: 31, married: true };

// // El resultado de mezclar a sobre b sería:
// merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

function clone(source) {
    var target =  new Object(source)
    console.log(source)
    console.log(target)
}

var a = { name: "🥓", surname: "Ibañez", country: "SPA" };
var b = { name: "🥩", age: 31, married: true };

clone(a)