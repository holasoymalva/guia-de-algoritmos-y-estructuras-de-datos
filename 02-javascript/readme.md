# Notas de Algoritmos en Javascript 🍌

Las notas de Algoritmos en JavaScript proporcionan una guía para aprender los conceptos fundamentales de los algoritmos y su implementación en el lenguaje de programación JavaScript. Las notas cubren los conceptos básicos de los algoritmos, como la búsqueda y ordenamiento, junto con ejemplos detallados y explicaciones paso a paso sobre cómo implementar algoritmos en JavaScript. Las notas también incluyen ejercicios y proyectos para ayudarte a consolidar tu comprensión de los algoritmos y su aplicación en el desarrollo de software. Al finalizar estas notas, deberías tener una sólida comprensión de los algoritmos y cómo se pueden aplicar para resolver problemas de programación en JavaScript.

## Indice:

* [Algoritmos de Ordenamiento](#algoritmos-de-ordenamiento)
  * [Burbuja](#burbuja)
  * [Selection](#selection)
  * [Insertion](#insertion)
  * [QuickSort](#quicksort)
  * [Análisis de Algoritmos de Ordenamiento](#analisis-de-algoritmos-de-ordemamiento)

* [Algoritmos de Búsqueda](#algoritmos-de-busqueda)
  * [Búsqueda Lineal](#busqueda-lineal)
  * [Búsqueda Binaria](#busqueda-binaria)

* [Estructura de Datos](#estructura-de-datos)
  * [Arreglos](#arreglos-arrays)
  * [Listas](#listas)
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

El algoritmo de ordenamiento por burbuja es uno de los algoritmos de ordenamiento más simples. Funciona iterando sobre la lista de elementos y comparando cada par adyacente de elementos. Si un par de elementos está en el orden incorrecto, el algoritmo los intercambia. Este proceso se repite hasta que la lista está ordenada.

```javascript
// Función auxiliar para intercambiar elementos en un arreglo
const swap = function(arr, posicion1, posicion2){
    let temp = arr[posicion1];
    arr[posicion1] = arr[posicion2];
    arr[posicion2] = temp;
}

// Función de ordenamiento burbuja
const ordenamientoBurbuja = function(arr){
    let i, j;
    for (i = 0; i < arr.length; i++) {
        for(j = 0; j < arr.length - i - 1; j++ ){
            // Si el elemento actual es mayor que el siguiente, se intercambian
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

// Ejemplo de uso
const arreglo1 = [5, 3, 8, 4, 6];
console.log(ordenamientoBurbuja(arreglo1)); // Output: [3, 4, 5, 6, 8]
```

### Selection

El algoritmo de ordenamiento por selección busca el elemento más pequeño en una lista y lo intercambia con el primer elemento no ordenado. Luego, busca el segundo elemento más pequeño y lo intercambia con el segundo elemento no ordenado, y así sucesivamente, hasta que toda la lista está ordenada.

```javascript
// Función auxiliar para intercambiar elementos en un arreglo
function swap(arr, primerPosicion, segundaPosicion){
    let temp = arr[primerPosicion]; // Almacena temporalmente el valor del primer elemento
    arr[primerPosicion] = arr[segundaPosicion]; // Asigna el valor del segundo al primero
    arr[segundaPosicion] = temp; // Asigna el valor temporal al segundo
}

// Función de ordenamiento por selección
function ordenamientoSeleccion(nums){
    let i, j, min;
    for (i = 0; i < nums.length; i++) {
        min = i;
        for(j = i + 1; j < nums.length; j++)
            if(nums[j] < nums[min])
                min = j;
        swap(nums, min, i); // Intercambia el mínimo encontrado con el elemento actual
    }
    return nums;
}

// Ejemplo de uso
let nums = [72, 50, 10, 44, 8, 20];
let demo = ordenamientoSeleccion(nums);
console.log(demo); // Output: [8, 10, 20, 44, 50, 72]

```
### Insertion

El algoritmo de ordenamiento por inserción construye la lista ordenada de izquierda a derecha, un elemento a la vez. Toma un elemento y lo coloca en su posición correcta en la parte ordenada de la lista.

```javascript
// Función de ordenamiento por inserción
function ordenamientoPorInsercion(array){
    let i, key, j;
    for (i = 1; i < array.length; i++) {
        key = array[i]; // El elemento actual que se está insertando
        j = i - 1;

        // Desplaza los elementos mayores que el "key" hacia la derecha
        while(j >= 0 && array[j] > key){
            array[j + 1] = array[j];
            j = j - 1;
        }
        // Inserta el "key" en su posición correcta
        array[j + 1] = key;
    }
    return array;
}

// Ejemplo de uso
const arreglo = [8, 4, 6, 3, 1, 9, 5];
console.log(ordenamientoPorInsercion(arreglo)); // Output: [1, 3, 4, 5, 6, 8, 9]
```


### QuickSort
El algoritmo de ordenamiento rápido (QuickSort) es un algoritmo eficiente de ordenamiento que utiliza el método "divide y vencerás". El algoritmo selecciona un "pivote" y reordena la lista de tal manera que todos los elementos menores que el pivote están antes que él, y todos los elementos mayores están después. Luego, se aplica el mismo procedimiento recursivamente a las sublistas de elementos menores y mayores.

``` javascript
// Función de ordenamiento rápido
function quicksort(array){
    if (array.length <= 1) {
        return array; // Si el arreglo tiene un solo elemento, ya está ordenado
    } else {
        let pivot = array[0]; // Selecciona el primer elemento como pivote
        let left = [];
        let right = [];
        for (let i = 1; i < array.length; i++) {
            // Coloca los elementos menores al pivote en el arreglo "left"
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                // Coloca los elementos mayores al pivote en el arreglo "right"
                right.push(array[i]);
            }
        }
        // Concatena los arreglos ordenados "left", "pivot" y "right"
        return quicksort(left).concat(pivot, quicksort(right));
    }
}

// Ejemplo de uso
let nums = [38, 27, 43, 3, 9, 82, 10];
let numOrdenados = quicksort(nums);
console.log(numOrdenados); // Output: [3, 9, 10, 27, 38, 43, 82]
```

### Analisis de Algoritmos de ordemamiento

El análisis de algoritmos de ordenamiento involucra evaluar su eficiencia en términos de tiempo y espacio. Los algoritmos de ordenamiento se clasifican a menudo por su complejidad temporal en el peor, mejor y promedio de los casos.

1. **Ordenamiento Burbuja**: **O(n²)** en el peor y promedio de los casos, ya que compara cada elemento con cada otro elemento.
2. **Ordenamiento por Selección**: **O(n²)** en el peor y promedio de los casos, ya que selecciona el elemento mínimo para cada posición.
3. **Ordenamiento por Inserción**: **O(n²)** en el peor y promedio de los casos, O(n) en el mejor de los casos cuando el arreglo ya está ordenado.
4. **QuickSort**: **O(n log n)** en promedio, pero O(n²) en el peor de los casos si el pivote es siempre el mayor o menor elemento. QuickSort es generalmente eficiente y se utiliza ampliamente debido a su buen rendimiento promedio.

## Algoritmos de Busqueda

### Busqueda Lineal

La búsqueda lineal es un método simple para encontrar un elemento en una lista. Recorre cada elemento de la lista de principio a fin y compara cada elemento con el valor que se busca hasta que encuentra una coincidencia o llega al final de la lista.

```javascript
function busquedaLineal(nums, value){
    let index = 0;
    for (index; index < nums.length; index++) {
        let num = nums[index];
        if(num === value){
            return index; // Devuelve el índice del valor encontrado
        }
    }
    return -1; // Devuelve -1 si el valor no se encuentra en la lista
}

// Ejemplo de uso
const values = [1, 2, 3, 4, 5, 6, 7];
const valueToFind = 6;
const indice = busquedaLineal(values, valueToFind);
console.log(indice); // Output: 5
```

### Busqueda Binaria
La búsqueda binaria es un método eficiente para encontrar un elemento en una lista ordenada. Funciona dividiendo repetidamente el intervalo de búsqueda a la mitad hasta que se encuentra el elemento. Requiere que la lista esté ordenada previamente.

```javascript
function busquedaBinaria(arr, target) {
    let izquierda = 0;
    let derecha = arr.length - 1;
    while (izquierda <= derecha) {
        const medio = Math.floor((izquierda + derecha) / 2);
        if (arr[medio] === target) {
            return medio; // Devuelve el índice del valor encontrado
        } else if (arr[medio] < target) {
            izquierda = medio + 1; // Continúa la búsqueda en la mitad derecha
        } else {
            derecha = medio - 1; // Continúa la búsqueda en la mitad izquierda
        }
    }
    return -1; // Devuelve -1 si el valor no se encuentra en la lista
}

// Ejemplo de uso
const valoresOrdenados = [1, 2, 3, 4, 5, 6, 7];
const valorBuscar = 4;
const indiceEncontrado = busquedaBinaria(valoresOrdenados, valorBuscar);
console.log(indiceEncontrado); // Output: 3
```

# Estructura de Datos

En la programación, las estructuras de datos son formas fundamentales de organizar y almacenar información para que pueda ser utilizada de manera eficiente. JavaScript, siendo un lenguaje muy utilizado en la web, ofrece una variedad de estructuras de datos, tanto nativas como implementadas por el programador. A continuación, exploraremos distintas estructuras de datos con ejemplos prácticos en JavaScript.

### Arreglos (Arrays)

Un arreglo es una colección de elementos ordenados. Los arreglos en JavaScript pueden contener cualquier tipo de datos, incluyendo otros arreglos.

```javascript
 let frutas = ['manzana', 'banana', 'naranja'];
 
 // Acceso a elementos del arreglo
 console.log(frutas[0]); // 'manzana'
 
 // Añadir un nuevo elemento
 frutas.push('uva');
 console.log(frutas); // ['manzana', 'banana', 'naranja', 'uva']
 
 // Eliminar el último elemento
 frutas.pop();
 console.log(frutas); // ['manzana', 'banana', 'naranja']
 
 // Recorrer un arreglo
 for (let i = 0; i < frutas.length; i++) {
   console.log(frutas[i]);
 }
 
 // Métodos útiles
 console.log(frutas.includes('banana')); // true
 console.log(frutas.indexOf('naranja')); // 2
```

Los arreglos en JavaScript son versátiles y cuentan con varios métodos nativos como `map()`, `filter()`, `reduce()`, entre otros, que los hacen muy útiles para manipular grandes cantidades de datos.

### Listas

Una lista es una colección de elementos almacenados secuencialmente. La diferencia principal entre una lista y un arreglo es que la lista tiene más restricciones en las operaciones de acceso y actualización.

En JavaScript, podemos simular listas utilizando arreglos.

```javascript
 class Lista {
   constructor() {
     this.items = [];
   }
 
   // Agregar un elemento al final
   agregar(item) {
     this.items.push(item);
   }
 
   // Eliminar un elemento específico
   eliminar(item) {
     const index = this.items.indexOf(item);
     if (index > -1) {
       this.items.splice(index, 1);
     }
   }
 
   // Verificar si un elemento existe
   contiene(item) {
     return this.items.includes(item);
   }
 
   // Obtener tamaño de la lista
   tamano() {
     return this.items.length;
   }
 
   // Mostrar la lista
   mostrar() {
     console.log(this.items);
   }
 }
 
 const miLista = new Lista();
 miLista.agregar('A');
 miLista.agregar('B');
 miLista.mostrar(); // ['A', 'B']
 miLista.eliminar('A');
 miLista.mostrar(); // ['B']
```

## Listas Enlazadas (Linked Lists)

Una lista enlazada es una estructura de datos en la que cada elemento (nodo) contiene un valor y un puntero o referencia al siguiente nodo en la secuencia. No se utilizan índices como en un arreglo, lo que permite una inserción y eliminación más eficiente.

```javascript
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

class ListaEnlazada {
  constructor() {
    this.cabeza = null;
  }

  agregar(valor) {
    const nuevoNodo = new Nodo(valor);
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
    }
  }

  mostrar() {
    let actual = this.cabeza;
    while (actual) {
      console.log(actual.valor);
      actual = actual.siguiente;
    }
  }
}

const miListaEnlazada = new ListaEnlazada();
miListaEnlazada.agregar(1);
miListaEnlazada.agregar(2);
miListaEnlazada.agregar(3);
miListaEnlazada.mostrar(); // 1, 2, 3
```

## Pilas (Stacks)

Una pila es una estructura de datos que sigue el principio LIFO (Last In, First Out). El último elemento agregado es el primero en ser retirado.

```javascript
class Pila {
  constructor() {
    this.items = [];
  }

  // Agregar un elemento a la pila
  push(item) {
    this.items.push(item);
  }

  // Retirar el último elemento
  pop() {
    if (this.items.length === 0) return "Pila vacía";
    return this.items.pop();
  }

  // Ver el último elemento sin retirarlo
  peek() {
    return this.items[this.items.length - 1];
  }

  // Verificar si la pila está vacía
  isEmpty() {
    return this.items.length === 0;
  }
}

const miPila = new Pila();
miPila.push(1);
miPila.push(2);
console.log(miPila.peek()); // 2
console.log(miPila.pop()); // 2
console.log(miPila.isEmpty()); // false
```

## Colas (Queues)

Una cola es una estructura de datos que sigue el principio FIFO (First In, First Out). El primer elemento que entra es el primero en salir.

```javascript
class Cola {
  constructor() {
    this.items = [];
  }

  // Agregar un elemento a la cola
  enqueue(item) {
    this.items.push(item);
  }

  // Retirar el primer elemento de la cola
  dequeue() {
    if (this.items.length === 0) return "Cola vacía";
    return this.items.shift();
  }

  // Verificar si la cola está vacía
  isEmpty() {
    return this.items.length === 0;
  }
}

const miCola = new Cola();
miCola.enqueue(1);
miCola.enqueue(2);
console.log(miCola.dequeue()); // 1
console.log(miCola.isEmpty()); // false

```

## Listas Doblemente Enlazadas (Doubly Linked Lists)

Una lista doblemente enlazada es una lista en la que cada nodo tiene dos referencias: una al siguiente nodo y otra al nodo anterior.

```javascript
class NodoDoble {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
    this.anterior = null;
  }
}

class ListaDoblementeEnlazada {
  constructor() {
    this.cabeza = null;
  }

  agregar(valor) {
    const nuevoNodo = new NodoDoble(valor);
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
      nuevoNodo.anterior = actual;
    }
  }

  mostrar() {
    let actual = this.cabeza;
    while (actual) {
      console.log(actual.valor);
      actual = actual.siguiente;
    }
  }
}

const miListaDoblementeEnlazada = new ListaDoblementeEnlazada();
miListaDoblementeEnlazada.agregar(1);
miListaDoblementeEnlazada.agregar(2);
miListaDoblementeEnlazada.agregar(3);
miListaDoblementeEnlazada.mostrar(); // 1, 2, 3

```
## Tablas Hash (Hash Tables)

Una tabla hash es una estructura de datos que asocia claves únicas con valores. Utiliza una función hash para mapear claves a índices en una matriz.

```javascript
class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = size;
  }

  // Función hash
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  // Agregar o actualizar un par clave-valor
  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
  }

  // Obtener el valor asociado a una clave
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const miTablaHash = new HashTable();
miTablaHash.set("nombre", "Juan");
miTablaHash.set("edad", 30);
console.log(miTablaHash.get("nombre")); // 'Juan'
console.log(miTablaHash.get("edad")); // 30

```

## Material Complementario y Fuentes 📚

Para profundizar en los conceptos de algoritmos y estructuras de datos, aquí tienes una lista de recursos adicionales que pueden ser útiles:

### E-books :

* [Competitive Programmer’s Handbook](https://cses.fi/book/book.pdf) - Un recurso gratuito para aprender algoritmos y técnicas de programación competitiva.
* [Algorithms Notes for Professionals](https://goalkicker.com/AlgorithmsBook/) - Una guía gratuita que cubre una amplia gama de algoritmos con ejemplos en varios lenguajes de programación.
* [Introduction to Algorithms](https://mitpress.mit.edu/9780262033848/introduction-to-algorithms/) - Un libro de referencia popular para el estudio de algoritmos.

### Cursos en Línea :

* [Data Structures and Algorithms Specialization](https://www.coursera.org/specializations/data-structures-algorithms) - Un curso de Coursera que cubre los conceptos fundamentales de estructuras de datos y algoritmos.
* [Algorithms, Part I and II](https://www.coursera.org/specializations/algorithms) - Un curso de Princeton University en Coursera que cubre algoritmos y estructuras de datos fundamentales.

### Videos y Tutoriales :

* [Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer](https://www.youtube.com/watch?v=RBSGKlAvoiM) - Un curso completo de estructuras de datos disponible en YouTube.
* [Khan Academy - Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms) - Una serie de videos gratuitos sobre algoritmos básicos.

### Artículos :

* [10 Data Structures explained](https://www.freecodecamp.org/news/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b/) - Un artículo de FreeCodeCamp que explica estructuras de datos comunes con ejercicios.
* [Big-O Algorithm Complexity Cheat Sheet](https://www.bigocheatsheet.com/) - Una referencia rápida para la complejidad de los algoritmos.

### Libros Recomendados :

* [Grokking Algorithms: An illustrated guide for programmers and other curious people](https://www.manning.com/books/grokking-algorithms) - Un libro que proporciona una introducción visualmente atractiva a los algoritmos.
* [The Algorithm Design Manual](http://algorist.com/) - Un recurso completo para aprender diseño de algoritmos y resolución de problemas.

Estos recursos pueden ayudarte a mejorar tu comprensión de algoritmos y estructuras de datos, así como a prepararte para entrevistas técnicas y concursos de programación.
