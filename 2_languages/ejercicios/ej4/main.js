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

const roberto = { name: "Roberto", surname: "Ibañez", country: "ESP" };
const lucia = { name: "Lucía", age: 31, married: false };


const clone = (target,source) =>{
    console.log(Object.assign(target,source))
}

merge = (target,source) =>{
    console.log(`Convirtiendo a ${target.name} en ${source.name}...`)

    const prevName = target.name
    Object.assign(target,source)
    
    console.log(`Ahora ${prevName} se llama ${source.name}`)
}

merge(lucia,roberto)