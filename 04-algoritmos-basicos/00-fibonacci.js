/*
Ejercicio de entrevista
técnica para el puesto
de programador javascript
La sucesion de fibonacci

salida: 0; 1; 1; 2; 3, 5; 8;
*/

function fibonacci(n){
    let secuencia = [0,1];

    for (let i = 2; i < n; i++) {
        let siguiente_valor = secuencia[i-1] + secuencia[i-2];
        secuencia.push(siguiente_valor);
    }
    return secuencia;
}

let resultado = fibonacci(10);
console.log(resultado);