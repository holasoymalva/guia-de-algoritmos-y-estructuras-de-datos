# Fundamentos de Algoritmos y Estructuras de Datos 📚

## Índice

* [Introducción](#introduccion)
* [Complejidad Computacional](#complejidad-computacional)
* [Análisis de algoritmos](#análisis-de-algoritmos)
* [Big O notation](#big-o-notation---notacion-de-la-gran-o)
* [Capacidad de Memoria](#capacidad-de-memoria)
* [Tipos de algoritmos](#tipos-de-algoritmos)
* [Algoritmos de Ordenamiento](#algoritmos-de-ordenamiento)
* [Algoritmos de Búsqueda](#algoritmos-de-busqueda)
* [Estructuras de Datos](#estructuras-de-datos)

[⬅️ Volver al inicio](../README.md)

Ver implementaciones en:
* [JavaScript](../02-javascript)
* [Python](../03-python)

## Introduccion

El análisis de algoritmos y las estructuras de datos son conceptos clave en la programación y el desarrollo de software. Estos temas nos permiten comprender cómo funcionan los programas que escribimos, y cómo podemos mejorarlos para hacerlos más eficientes en términos de tiempo y espacio. En estos apuntes, abordaremos los conceptos básicos del análisis de algoritmos, incluyendo la notación big O, la complejidad temporal y espacial, y los patrones de resolución de problemas. También exploraremos las diferentes estructuras de datos, como las listas, las pilas, las colas y los árboles, y cómo podemos utilizarlas para resolver problemas específicos de manera eficiente. Al final de estos apuntes, esperamos que tengas una comprensión profunda de estos conceptos y estés listo para aplicarlos a tus propios proyectos de programación.


## Complejidad Computacional [Wiki Reference](https://en.wikipedia.org/wiki/Computational_complexity_theory)


La teoría de la complejidad computacional clasifica problemas computacionales según el uso de recursos como tiempo y almacenamiento. Un problema es intrínsecamente difícil si su solución requiere muchos recursos, independientemente del algoritmo utilizado. Esta teoría utiliza modelos matemáticos para estudiar la complejidad de los problemas, incluyendo medidas como la cantidad de comunicación, el número de puertas en un circuito y el número de procesadores. Un objetivo clave es determinar los límites de lo que las computadoras pueden hacer, ejemplificado por el problema P vs NP.

El análisis de algoritmos y la teoría de la computabilidad están estrechamente relacionados. El análisis de algoritmos evalúa los recursos que un algoritmo específico necesita, mientras que la complejidad computacional clasifica problemas en función de todos los algoritmos posibles. La complejidad computacional se diferencia de la teoría de la computabilidad al enfocarse en las restricciones de recursos, mientras que la teoría de la computabilidad se centra en qué problemas pueden resolverse algorítmicamente.


## Analisis de algoritmos [Wiki Reference](https://en.wikipedia.org/wiki/Analysis_of_algorithms)

El análisis de algoritmos es el proceso de determinar la complejidad computacional de un algoritmo, es decir, la cantidad de tiempo, almacenamiento u otros recursos que requiere. Esto implica establecer una función que relacione la longitud de la entrada con el número de pasos que toma (complejidad temporal) o las ubicaciones de almacenamiento utilizadas (complejidad espacial). 

Un algoritmo es eficiente si estos valores son pequeños o crecen lentamente en relación con el tamaño de la entrada. Las descripciones de casos mejor, peor y promedio son útiles para entender el comportamiento del algoritmo. Generalmente, se utiliza un límite superior basado en el peor caso para describir el rendimiento de un algoritmo.

## Big O Notation - Notacion de la Gran O

La Notación Big O es una forma de medir el tiempo de ejecución y la complejidad de un algoritmo. Es una notación matemática que se utiliza para describir la relación entre el tamaño del problema y el tiempo que tarda en resolverlo un algoritmo. La Notación Big O se utiliza para describir el límite superior del tiempo de ejecución de un algoritmo y se representa como O(n), donde "n" representa el tamaño del problema.

Aquí hay algunos ejemplos de la Notación Big O en JavaScript:

### O(n)
**Algoritmo de búsqueda lineal:** Este algoritmo tiene una complejidad temporal de O(n), ya que debe revisar cada elemento en una secuencia hasta encontrar una coincidencia.

```javascript
   function linearSearch(arr, target) {
       for (let i = 0; i < arr.length; i++) {
           // Compara cada elemento con el objetivo
           if (arr[i] === target) {
               return i; // Devuelve el índice si encuentra el objetivo
           }
       }
       return -1; // Devuelve -1 si el objetivo no está en el arreglo
   }
```

### O(log n) 
**Algoritmo de búsqueda binaria:** Este algoritmo tiene una complejidad temporal de O(log n), ya que divide la secuencia en mitades y descarta la mitad que no contiene el elemento buscado en cada iteración.

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Devuelve el índice si encuentra el objetivo
        } else if (arr[mid] < target) {
            left = mid + 1; // Descarta la mitad izquierda
        } else {
            right = mid - 1; // Descarta la mitad derecha
        }
    }
    return -1; // Devuelve -1 si el objetivo no está en el arreglo
}
```

###  O(n^2) 
**Algoritmo de ordenamiento por selección:** Este algoritmo tiene una complejidad temporal de O(n^2), ya que debe comparar cada elemento con todos los demás para encontrar el mínimo y moverlo a su posición final en la secuencia.

```javascript
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // Asume que el primer elemento es el mínimo
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Encuentra el índice del menor valor
            }
        }
        if (minIndex !== i) {
            // Intercambia el elemento más pequeño encontrado con el actual
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr; // Devuelve el arreglo ordenado
}
```

### O(n log n)
**Algoritmo de ordenamiento rápido (QuickSort):** Este algoritmo tiene una complejidad temporal de O(n log n) en el mejor y peor de los casos, lo que lo hace mucho más eficiente que el algoritmo de ordenamiento por selección.

```javascript
   function quickSort(arr) {
       if (arr.length <= 1) {
           return arr; // Un arreglo de un elemento está ordenado
       }
       const pivot = arr[arr.length - 1]; // Usa el último elemento como pivote
       const left = [];
       const right = [];
       for (let i = 0; i < arr.length - 1; i++) {
           if (arr[i] < pivot) {
               left.push(arr[i]); // Elementos menores al pivote
           } else {
               right.push(arr[i]); // Elementos mayores al pivote
           }
       }
       // Concatena los arreglos ordenados con el pivote en el medio
       return [...quickSort(left), pivot, ...quickSort(right)];
   }
```

Estos son solo algunos ejemplos de la Notación Big O en JavaScript. Al comprender y aplicar esta notación, los programadores pueden mejorar el rendimiento y la eficiencia de sus algoritmos y soluciones de programación.


## Capacidad de Memoria

La capacidad de memoria es un aspecto importante a tener en cuenta en el análisis de algoritmos. Se refiere a la cantidad de memoria que un algoritmo necesita para funcionar adecuadamente.

La cantidad de memoria que un algoritmo utiliza puede afectar su rendimiento y su capacidad para manejar grandes cantidades de datos. Por ejemplo, un algoritmo que utiliza mucha memoria puede ser más lento que otro que utiliza menos memoria, ya que la memoria limita la velocidad de acceso a los datos.

Por lo tanto, es importante tener en cuenta la capacidad de memoria en el análisis de algoritmos para asegurarse de que el algoritmo sea eficiente en términos de memoria y sea capaz de manejar grandes cantidades de datos de manera eficiente.

#### Ejemplo de Capacidad de Memoria en JavaScript

A continuación se presenta un ejemplo que muestra cómo el uso de memoria puede variar entre diferentes implementaciones del mismo algoritmo.

**Implementación utilizando un Array (mayor uso de memoria):**

En este ejemplo, se utiliza un array para almacenar todos los números de Fibonacci calculados, lo cual puede ser costoso en términos de memoria si el tamaño de `n` es grande.

```javascript
function fibonacciArray(n) {
    const fib = [0, 1]; // Inicializa los primeros dos números de Fibonacci
    for (let i = 2; i <= n; i++) {
        // Calcula cada número de Fibonacci y lo almacena en el arreglo
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n]; // Devuelve el n-ésimo número de Fibonacci
}

console.log(fibonacciArray(10)); // Output: 55
```
**Implementación utilizando variables temporales (menor uso de memoria):**
En esta implementación, solo se utilizan variables temporales para calcular el número de Fibonacci, reduciendo significativamente el uso de memoria.

```javascript
function fibonacciEfficient(n) {
    let a = 0, b = 1, temp; // Variables para almacenar los dos últimos números de Fibonacci
    for (let i = 2; i <= n; i++) {
        temp = a + b; // Calcula el siguiente número de Fibonacci
        a = b; // Desplaza los números hacia adelante
        b = temp; // Asigna el nuevo número de Fibonacci a b
    }
    return b; // Devuelve el n-ésimo número de Fibonacci
}

console.log(fibonacciEfficient(10)); // Output: 55
```

En ambos ejemplos, el algoritmo calcula el número de Fibonacci para un valor `n` dado, pero la segunda implementación es más eficiente en términos de memoria porque no almacena todos los valores intermedios.

Estos ejemplos ilustran cómo diferentes enfoques pueden tener un impacto significativo en la cantidad de memoria utilizada por un algoritmo, afectando su eficiencia general.


## Introduccion a la resolucion de Problemas

La resolución de problemas en el análisis de algoritmos es un proceso sistemático para encontrar una solución óptima a un problema dado. Este proceso implica una evaluación cuidadosa y una comprensión profunda del problema y de los requisitos necesarios para resolverlo de manera efectiva.

El proceso de resolución de problemas en el análisis de algoritmos se divide en varios pasos:

* **Comprensión del problema**: Entender el problema a resolver y los requisitos necesarios para solucionarlo.

* **Análisis del problema**: Analizar el problema y identificar los factores críticos que influyen en su solución.

* **Diseño de la solución**: Diseñar un algoritmo que resuelva el problema de manera efectiva.

* **Implementación**: Implementar el algoritmo en un lenguaje de programación y asegurarse de que funcione correctamente.

* **Evaluación**: Evaluar el rendimiento del algoritmo y compararlo con otros algoritmos que puedan resolver el mismo problema.

* **Optimización**: Optimizar el algoritmo para mejorar su rendimiento y reducir su complejidad.

La resolución de problemas en el análisis de algoritmos es una habilidad esencial para los desarrolladores de software, ya que les permite diseñar soluciones eficientes y efectivas a problemas complejos.

## Patrones de Resolucion de Problemas

En el análisis de algoritmos, los patrones de resolución de problemas son un conjunto de técnicas y estrategias que se utilizan para abordar y solucionar un problema de manera eficiente. Algunos de los patrones de resolución de problemas más comunes incluyen:

* **Divide y vencerás**: Este patrón se enfoca en dividir un problema grande en problemas más pequeños y manejables, y luego resolver cada uno de ellos por separado.


```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Un arreglo de un solo elemento ya está ordenado
    }
    const mid = Math.floor(arr.length / 2); // Encuentra el punto medio del arreglo
    const left = mergeSort(arr.slice(0, mid)); // Ordena la mitad izquierda
    const right = mergeSort(arr.slice(mid)); // Ordena la mitad derecha
    return merge(left, right); // Combina las mitades ordenadas
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    // Combina los elementos de izquierda y derecha en orden
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // Concatena los elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
}
```

* **Fuerza bruta**: Este patrón se enfoca en probar todas las posibles soluciones hasta encontrar la correcta. Es una estrategia simple, pero puede ser ineficiente si el problema es muy grande o complejo.

```javascript
function findTwoSum(arr, target) {
    // Compara cada par de elementos para encontrar los que sumen el objetivo
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]; // Devuelve los índices de los elementos que suman el objetivo
            }
        }
    }
    return null; // Devuelve null si no se encuentra una solución
}
```

* **Backtracking**: Este patrón se enfoca en retroceder y cambiar decisiones previas cuando se llega a un punto en el que se sabe que la solución actual no es viable.

```javascript
function solveNQueens(n) {
    const solutions = [];
    solve([], 0, n, solutions); // Comienza el proceso de solución
    return solutions; // Devuelve todas las soluciones encontradas
}

function solve(board, row, n, solutions) {
    if (row === n) {
        solutions.push([...board]); // Guarda una copia de la solución actual
        return;
    }
    for (let col = 0; col < n; col++) {
        if (isValid(board, row, col)) {
            board.push(col); // Añade la reina en la columna actual
            solve(board, row + 1, n, solutions); // Intenta resolver el siguiente nivel
            board.pop(); // Remueve la reina y retrocede
        }
    }
}

function isValid(board, row, col) {
    for (let i = 0; i < row; i++) {
        const prevCol = board[i];
        // Verifica que la posición no esté amenazada
        if (prevCol === col || Math.abs(prevCol - col) === row - i) {
            return false;
        }
    }
    return true;
}
```

* **Programación dinámica**: Este patrón se enfoca en resolver subproblemas repetitivos de manera eficiente al almacenar y reutilizar soluciones previas.

```javascript
function fibonacci(n) {
    const memo = [0, 1]; // Almacena los primeros números de Fibonacci
    for (let i = 2; i <= n; i++) {
        // Calcula cada número de Fibonacci basado en los dos anteriores
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n]; // Devuelve el n-ésimo número de Fibonacci
}
```

* **Greedy Algorithm**: Este patrón se enfoca en tomar decisiones a corto plazo en busca de una solución óptima.

```javascript
function coinChange(coins, amount) {
    coins.sort((a, b) => b - a); // Ordena las monedas de mayor a menor
    let totalCoins = 0;
    for (let i = 0; i < coins.length; i++) {
        if (amount === 0) break;
        // Calcula cuántas monedas del valor actual se pueden usar
        const currentCoinCount = Math.floor(amount / coins[i]);
        totalCoins += currentCoinCount; // Añade estas monedas al total
        amount -= currentCoinCount * coins[i]; // Reduce el monto restante
    }
    return amount === 0 ? totalCoins : -1; // Devuelve el número total de monedas o -1 si no es posible
}
```

Estos son solo algunos de los patrones de resolución de problemas más comunes en el análisis de algoritmos. Con el tiempo, los programadores y los investigadores en la materia continúan desarrollando y mejorando estos patrones para hacer frente a problemas más complejos.

## Tipos de algoritmos

Existen varios tipos de algoritmos computacionales, algunos de los cuales son los siguientes:

* **Algoritmos de ordenamiento**: como se mencionó anteriormente, estos algoritmos organizan una lista de elementos en un orden determinado.

* **Algoritmos de búsqueda**: estos algoritmos encuentran un elemento específico en una lista o conjunto de datos.

* **Algoritmos de grafos**: estos algoritmos se utilizan para resolver problemas relacionados con estructuras de grafos, como encontrar rutas óptimas, detectar ciclos y encontrar caminos más cortos.

* **Algoritmos de árboles**: estos algoritmos se utilizan para resolver problemas relacionados con estructuras de árboles, como encontrar el ancestro común más cercano y realizar búsquedas en profundidad o amplitud.

* **Algoritmos de recursión**: estos algoritmos resuelven un problema al dividirlo en subproblemas más pequeños y resolviéndolos recursivamente.

* **Algoritmos de backtracking**: estos algoritmos prueban todas las soluciones posibles para un problema hasta encontrar la solución correcta.

* **Algoritmos de hashing**: estos algoritmos se utilizan para buscar datos en una tabla hash, que es una estructura de datos que permite un acceso rápido a los elementos.

* **Algoritmos de cifrado**: estos algoritmos se utilizan para proteger la privacidad y la seguridad de los datos, como en la criptografía y la seguridad informática.

Estos son solo algunos ejemplos de los tipos de algoritmos que existen. Cada tipo de algoritmo se adapta a diferentes necesidades y problemas específicos.

## Algoritmos de Ordenamiento

Los algoritmos de ordenamiento son procedimientos computacionales que permiten organizar un conjunto de datos en un orden determinado. El objetivo principal de los algoritmos de ordenamiento es tomar una lista de elementos y reorganizarlos de forma ascendente o descendente en función de un criterio específico, como el valor numérico, alfabético o cronológico.

Existen muchos algoritmos de ordenamiento, cada uno con sus propias ventajas y desventajas en términos de eficiencia y complejidad. Algunos ejemplos de algoritmos de ordenamiento comunes incluyen la ordenación de burbuja, la ordenación por inserción, la ordenación por selección, la ordenación rápida y la ordenación por mezcla.

```javascript
// Ordenamiento de burbuja
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Intercambia elementos adyacentes si están en el orden incorrecto
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; // Marca que se ha realizado un intercambio
            }
        }
    } while (swapped); // Repite el proceso hasta que no se realicen intercambios
    return arr; // Devuelve el arreglo ordenado
}
```

Los algoritmos de ordenamiento son una parte importante de la programación y se utilizan en muchos campos, como la ciencia de datos, la investigación de operaciones, la informática empresarial, la informática de alto rendimiento y la ingeniería de software.

## Algoritmos de Busqueda

Los algoritmos de búsqueda son procedimientos utilizados para encontrar elementos específicos dentro de una colección de datos, como una lista, un árbol, un grafo, una matriz o cualquier otra estructura de datos. Los algoritmos de búsqueda se utilizan ampliamente en la programación y se aplican en muchos campos, como la informática, la electrónica, la matemática, la física, la biología y la ingeniería.

El objetivo principal de los algoritmos de búsqueda es encontrar uno o varios elementos dentro de una estructura de datos en función de un criterio de búsqueda específico. Algunos de los algoritmos de búsqueda más comunes incluyen la búsqueda lineal (o secuencial) y la búsqueda binaria.

```javascript
// Búsqueda lineal
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Devuelve el índice si encuentra el objetivo
        }
    }
    return -1; // Devuelve -1 si el objetivo no está en el arreglo
}
```

Existen muchos algoritmos de búsqueda que se utilizan en diferentes situaciones y problemas específicos, cada uno con sus propias ventajas y desventajas en términos de eficiencia, complejidad y facilidad de implementación. Los algoritmos de búsqueda son una parte fundamental de la programación y son utilizados en una amplia variedad de aplicaciones, desde la búsqueda de archivos en un sistema de archivos hasta la búsqueda de soluciones óptimas en problemas de inteligencia artificial y aprendizaje automático.

## Estructuras de Datos

Las estructuras de datos son formas organizadas y eficientes de almacenar y manipular datos en un programa. Son un concepto fundamental en la programación y se utilizan para representar información en una variedad de formas, como listas, árboles, grafos, colas, pilas, entre otras.

```javascript
// Ejemplo de estructura de datos de pila (stack)
class Stack {
    constructor() {
        this.items = []; // Arreglo para almacenar los elementos de la pila
    }

    push(element) {
        this.items.push(element); // Añade un elemento al final de la pila
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // Devuelve un mensaje si la pila está vacía
        }
        return this.items.pop(); // Elimina y devuelve el último elemento de la pila
    }

    peek() {
        return this.items[this.items.length - 1]; // Devuelve el último elemento sin eliminarlo
    }

    isEmpty() {
        return this.items.length === 0; // Devuelve true si la pila está vacía
    }
}
```

Las estructuras de datos son importantes porque permiten a los programas manejar grandes cantidades de información de manera eficiente, lo que puede mejorar el rendimiento y la velocidad de un programa. Además, las estructuras de datos pueden ser utilizadas para resolver una variedad de problemas y tareas en la programación, como búsquedas, clasificaciones, inserciones, eliminaciones, entre otras.

Es importante que los programadores conozcan las diferentes estructuras de datos y cómo se utilizan para diseñar programas efectivos y eficientes. Con una comprensión sólida de las estructuras de datos, los programadores pueden seleccionar la estructura adecuada para un problema y escribir programas más eficientes y elegantes.

[⬅️ Volver al inicio](../README.md)

Ver también:
* [Algoritmos y Estructura de datos en Javascript](../02-javascript)
* [Algoritmos y Estructura de datos en Python](../02-python)

