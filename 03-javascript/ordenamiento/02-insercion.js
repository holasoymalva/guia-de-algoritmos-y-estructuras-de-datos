// Input
const arreglo = [8,4,6,3,1,9,5];

function ordenamientoPorInsercion(array){
    let i, key, j;
    for (i = 0; i < array.length; i++) {
        key = array[i];
        j =  i - 1;

        while(j >= 0 && array[j] > key){
            array[j+1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    console.log(array);
}

console.log(arreglo);
ordenamientoPorInsercion(arreglo);