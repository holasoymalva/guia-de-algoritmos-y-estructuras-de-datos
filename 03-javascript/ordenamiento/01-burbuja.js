
// input 

const arreglo1 = [5,3,8,4,6];
const arreglo2 = [5,3,8,4,6];

const swap = function(arr, posicion1, posicion2){
    let temp = arr[posicion1];
    arr[posicion1] = arr[posicion2];
    arr[posicion2] = temp;
}

const ordenamientoBurbuja = function(arr){
    let i, j;
    for ( i = 0; i < arr.length; i++) {
        for(j = 0; j< arr.length - i -1; j++ ){
            if (arr[j] > arr[j+1]) {
                swap(arr,j, j+1);
            }
        }
    }
    return arr;
}

function compararDosArreglos(arr1,arr2){
    if (arr1.length !== arr2.length) {
        return console.log('Los arreglos son distintos');
    }
    let array1 = ordenamientoBurbuja(arr1);
    let array2 = ordenamientoBurbuja(arr2);
    let i;
    for ( i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return console.log('los arreglos son distintos');
        }
    }
    return console.log('los arreglos son iguales');
}

compararDosArreglos(arreglo1,arreglo2);
