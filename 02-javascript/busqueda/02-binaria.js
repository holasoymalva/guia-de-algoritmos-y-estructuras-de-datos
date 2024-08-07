

function busquedaBinaria(arr, izquierda, derecha, buscar){
    if(derecha >= izquierda){
        let medio = izquierda + Math.floor((derecha-izquierda)/2);
        if (arr[medio] == buscar) {
            return medio;
        }
        if( arr[medio]  > buscar){
            return busquedaBinaria(arr, izquierda, medio -1, buscar);
        }
        return busquedaBinaria(arr,medio + 1, derecha, buscar);
    }
    return -1;
}

let nums =  [1,3,12,14,23,34,55,65,75,78];

let buscar = 12;

let result = busquedaBinaria(nums, 0, nums.length, buscar);
console.log(result);
