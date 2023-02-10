/*
El algoritmo de ordenamiento por burbuja es uno de los más básicos, pero también uno de los más lentos debido a su complejidad O(n^2). A continuación presento algunos cambios que pueden ayudar a optimizar el rendimiento del código:
*/

const ordenamientoBurbuja = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < (nums.length - i - 1); j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j+1]=temp;
            }
        }
    }
    console.log(nums);
}


/*
Interrupción temprana: En caso de que la lista esté ordenada, podemos interrumpir el proceso de ordenamiento para evitar hacer innecesariamente más intercambios.

Cambiar el tipo de dato a utilizar: En JavaScript, el tipo de dato Number puede ser lento para realizar operaciones matemáticas en comparación con otros tipos como Int32Array o Float64Array.
*/
const ordenamientoBurbujaMejorado = function (nums) {
    let intercambios = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < (nums.length - i - 1); j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j+1]=temp;
                intercambios = true;
            }
        }
        if (!intercambios) {
            break;
        }
    }
    console.log(nums);
}


let demoArr = [5,3,2,4,8];
ordenamientoBurbujaMejorado(demoArr);