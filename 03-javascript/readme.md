# Notas de Algoritmos en Javascript 🍌

Las notas de Algoritmos en JavaScript proporcionan una guía para aprender los conceptos fundamentales de los algoritmos y su implementación en el lenguaje de programación JavaScript. Las notas cubren los conceptos básicos de los algoritmos, como la búsqueda y ordenamiento, junto con ejemplos detallados y explicaciones paso a paso sobre cómo implementar algoritmos en JavaScript. Las notas también incluyen ejercicios y proyectos para ayudarte a consolidar tu comprensión de los algoritmos y su aplicación en el desarrollo de software. Al finalizar estas notas, deberías tener una sólida comprensión de los algoritmos y cómo se pueden aplicar para resolver problemas de programación en JavaScript.

## Indice:

* Algoritmos de Ordenamiento
  * [Burbuja](#burbuja)
  * [Selection](#selection)
  * Binaria
  * Merge
  * QuickSort
  * Analisis de Algoritmos de ordemamiento

* Algoritmos de Busqueda
    * Busqueda Binaria

* Estructura de Datos
  * Arreglos
  * Listas
  * Listas Enlazadas
  * Pilas
  * Colas
  * Listas Doblemente Enlazadas
  * Hash Tables
  * Arboles
  * Grafos
  * Analisis de Estructuras de datos


## Algoritmos de Ordenamiento


### Burbuja

```javascript

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
```

### Selection


```javascript

// Input 
let nums = [72,50,10,44,8,20];

function swap(arr, primerPosicion, segundaPosicion){
    [72,50,10,44,8,20]
    //primerPosicion = 0;
    let temp = arr[primerPosicion]; // 72
    arr[primerPosicion] = arr[segundaPosicion]; // 8
    arr[segundaPosicion] = temp;
}

function ordenamientoSeleccion( nums ){
    let i, j, min;
    for (i = 0; i < nums.length; i++) {
        min = i;
        for(j = i +1; j< nums.length; j++)
            if(nums[j]< nums[min])
                min = j;
        swap(nums,min,i);
    }
    return nums;
}

let demo = ordenamientoSeleccion(nums);

console.log(demo);

```
### Insertion

```javascript
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
```


### QuickSort

``` javascript


function quicksort(array){
    console.log(array);
    if( array.length <= 1){
        return array;
    } else {
        let pivot = array[0];
        let left = [];
        let right = [];
        let i;
        for (i = 1; i < array.length; i++) {
           if (array[i] < pivot) {
                left.push(array[i]);
           } else{
                right.push(array[i]);
           }
        }
        return quicksort(left).concat(pivot, quicksort(right));
    }
}

// Input
let nums = [38,27, 43, 3,9,82,10];

let test = [ 3,  9, 10, 27, 38, 43, 82];

let numOrdenados = quicksort(nums);

console.log(test);
console.log(numOrdenados);
```


### Analisis de Algoritmos de ordemamiento

# Algoritmos de Busqueda


### Busqueda Lineal
```javascript
function busquedaLineal(nums, value){
  let counter;
  nums.forEach(num => {
    counter += 1;
    if(num === value){
      return nums[counter];
    }
  });
  return -1;
}
// Inputs
const values = [1,2,3,4,5,6,7];
const valueToFind = 8;

console.log(busquedaLineal(values, valueToFind));
```

### Busqueda Binaria
```javascript

```
# Estructura de Datos

### Arreglos
### Listas
### Listas Enlazadas
### Pilas
### Colas
### Listas Doblemente Enlazadas
### Hash Tables
### Arboles
### Grafos
