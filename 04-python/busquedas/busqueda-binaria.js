// Imputs

let nums = [1,2,3,4,5,6,7,8,9,10];
let buscar = 6;

function busquedaBinaria(arr, izquierda, derecha, valorABuscar){
    if(derecha>= izquierda){
        let medio = izquierda + Math.floor((derecha-izquierda)/2);
        if(arr[medio] == valorABuscar){
            return medio;
        }
        if(arr[medio] > buscar){
            return busquedaBinaria(arr,izquierda, medio -1, valorABuscar);
        }
        return busquedaBinaria(arr, medio + 1, derecha, valorABuscar);
    }
    return -1;
}

const resultado =  busquedaBinaria(nums,0, nums.length, buscar);

console.log(resultado);