


//              0          1         2
let frutas = ['manzana', 'banana', 'uva'];
frutas.pop() // elimina ultimo elemento
frutas.shift() // elimina primer elemento
frutas.push('naranja'); // agrega un elemento al final
frutas.unshift('fresa'); // agrega un elemento al inicio

const posicion = 1, numElementos = 2;
console.log(frutas);
frutas.splice(posicion, numElementos); // elimina algunos elementos por su posiocion

let frutilla = frutas.slice(); // genera una copia del arreglo

// console.log(frutilla.0);
console.log(frutilla[0]);



// if (frutas.indexOf('Uva') !== -1) {
//     console.log("La fruta existe!!!");
// } else{
//     console.log("La fruta no existe existe!!!");
// }

console.log(frutas);

