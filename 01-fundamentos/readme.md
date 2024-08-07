## Introduccion

El análisis de algoritmos y las estructuras de datos son conceptos clave en la programación y el desarrollo de software. Estos temas nos permiten comprender cómo funcionan los programas que escribimos, y cómo podemos mejorarlos para hacerlos más eficientes en términos de tiempo y espacio. En estos apuntes, abordaremos los conceptos básicos del análisis de algoritmos, incluyendo la notación big O, la complejidad temporal y espacial, y los patrones de resolución de problemas. También exploraremos las diferentes estructuras de datos, como las listas, las pilas, las colas y los árboles, y cómo podemos utilizarlas para resolver problemas específicos de manera eficiente. Al final de estos apuntes, esperamos que tengas una comprensión profunda de estos conceptos y estés listo para aplicarlos a tus propios proyectos de programación.


## Complejidad Computacional [Wiki Reference](https://en.wikipedia.org/wiki/Computational_complexity_theory)


La teoría de la complejidad computacional se enfoca en clasificar los problemas computacionales de acuerdo con su uso de recursos y relacionar estas clases entre sí. Un problema computacional es una tarea resuelta por una computadora. Un problema de cálculo se puede resolver mediante la aplicación mecánica de pasos matemáticos, como un algoritmo .

Un problema se considera intrínsecamente difícil si su solución requiere recursos importantes, sea cual sea el algoritmo utilizado. La teoría formaliza esta intuición, al introducir modelos matemáticos de computación para estudiar estos problemas y cuantificar su complejidad computacional , es decir, la cantidad de recursos necesarios para resolverlos, como el tiempo y el almacenamiento. También se utilizan otras medidas de complejidad, como la cantidad de comunicación (utilizada en la complejidad de la comunicación ), el número de puertas en un circuito (utilizado en la complejidad del circuito ) y el número de procesadores (utilizado en la computación en paralelo).). Uno de los roles de la teoría de la complejidad computacional es determinar los límites prácticos de lo que las computadoras pueden y no pueden hacer. El problema P versus NP , uno de los siete problemas del Premio del Milenio , está dedicado al campo de la complejidad computacional. [1]

Los campos estrechamente relacionados en la informática teórica son el análisis de algoritmos y la teoría de la computabilidad.. Una distinción clave entre el análisis de algoritmos y la teoría de la complejidad computacional es que el primero se dedica a analizar la cantidad de recursos que necesita un algoritmo en particular para resolver un problema, mientras que el segundo hace una pregunta más general sobre todos los algoritmos posibles que podrían usarse para resolver el mismo problema. Más precisamente, la teoría de la complejidad computacional intenta clasificar los problemas que pueden o no pueden resolverse con recursos apropiadamente restringidos. A su vez, imponer restricciones a los recursos disponibles es lo que distingue la complejidad computacional de la teoría de la computabilidad: esta última teoría pregunta qué tipos de problemas pueden, en principio, resolverse algorítmicamente.


## Analisis de algoritmos [Wiki Reference](https://en.wikipedia.org/wiki/Analysis_of_algorithms)

En informática , el análisis de algoritmos es el proceso de encontrar la complejidad computacional de los algoritmos: la cantidad de tiempo, almacenamiento u otros recursos necesarios para ejecutarlos . Por lo general, esto implica determinar una función que relaciona la longitud de la entrada de un algoritmo con el número de pasos que toma (su complejidad temporal ) o el número de ubicaciones de almacenamiento que utiliza (su complejidad espacial ). Se dice que un algoritmo es eficiente cuando los valores de esta función son pequeños o crecen lentamente en comparación con un crecimiento en el tamaño de la entrada. Diferentes entradas de la misma longitud pueden hacer que el algoritmo tenga un comportamiento diferente, por lo queLas descripciones de casos mejores, peores y promedio podrían ser de interés práctico. Cuando no se especifica lo contrario, la función que describe el rendimiento de un algoritmo suele ser un límite superior , determinado a partir de las entradas del peor caso al algoritmo.

## Big O Notation - Notacion de la Gran O

La Notación Big O es una forma de medir el tiempo de ejecución y la complejidad de un algoritmo. Es una notación matemática que se utiliza para describir la relación entre el tamaño del problema y el tiempo que tarda en resolverlo un algoritmo. La Notación Big O se utiliza para describir el límite superior del tiempo de ejecución de un algoritmo y se representa como O(n), donde "n" representa el tamaño del problema.

Aquí hay algunos ejemplos de la Notación Big O en JavaScript:

* Algoritmo de búsqueda lineal: Este algoritmo tiene una complejidad temporal de O(n), ya que debe revisar cada elemento en una secuencia hasta encontrar una coincidencia.

```javascript
   function linearSearch(arr, target) {
       for (let i = 0; i < arr.length; i++) {
           if (arr[i] === target) {
               return i;
           }
       }
       return -1;
   }
```

* Algoritmo de búsqueda binaria: Este algoritmo tiene una complejidad temporal de O(log n), ya que divide la secuencia en mitades y descarta la mitad que no contiene el elemento buscado en cada iteración.

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```

* Algoritmo de ordenamiento por selección: Este algoritmo tiene una complejidad temporal de O(n^2), ya que debe comparar cada elemento con todos los demás para encontrar el mínimo y moverlo a su posición final en la secuencia.

```javascript
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
```

* Algoritmo de ordenamiento rápido (QuickSort): Este algoritmo tiene una complejidad temporal de O(n log n) en el mejor y peor de los casos, lo que lo hace mucho más eficiente que el algoritmo de ordenamiento por selección.

```javascript
  function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
```

Estos son solo algunos ejemplos de la Notación Big O en JavaScript. Al comprender y aplicar esta notación, los programadores pueden mejorar el rendimiento y la eficiencia de sus algoritmos y soluciones de programación.


## Capacidad de Memoria

La capacidad de memoria es un aspecto importante a tener en cuenta en el análisis de algoritmos. Se refiere a la cantidad de memoria que un algoritmo necesita para funcionar adecuadamente.

La cantidad de memoria que un algoritmo utiliza puede afectar su rendimiento y su capacidad para manejar grandes cantidades de datos. Por ejemplo, un algoritmo que utiliza mucha memoria puede ser más lento que otro que utiliza menos memoria, ya que la memoria limita la velocidad de acceso a los datos.

Por lo tanto, es importante tener en cuenta la capacidad de memoria en el análisis de algoritmos para asegurarse de que el algoritmo sea eficiente en términos de memoria y sea capaz de manejar grandes cantidades de datos de manera eficiente.

## Introduccion a la resolucion de Problemas

La resolución de problemas en el análisis de algoritmos es un proceso sistemático para encontrar una solución óptima a un problema dado. Este proceso implica una evaluación cuidadosa y una comprensión profunda del problema y de los requisitos necesarios para resolverlo de manera efectiva.

El proceso de resolución de problemas en el análisis de algoritmos se divide en varios pasos:

* Comprensión del problema: Entender el problema a resolver y los requisitos necesarios para solucionarlo.

* Análisis del problema: Analizar el problema y identificar los factores críticos que influyen en su solución.

* Diseño de la solución: Diseñar un algoritmo que resuelva el problema de manera efectiva.

* Implementación: Implementar el algoritmo en un lenguaje de programación y asegurarse de que funcione correctamente.

* Evaluación: Evaluar el rendimiento del algoritmo y compararlo con otros algoritmos que puedan resolver el mismo problema.

* Optimización: Optimizar el algoritmo para mejorar su rendimiento y reducir su complejidad.

La resolución de problemas en el análisis de algoritmos es una habilidad esencial para los desarrolladores de software, ya que les permite diseñar soluciones eficientes y efectivas a problemas complejos.

## Patrones de Resolucion de Problemas

En el análisis de algoritmos, los patrones de resolución de problemas son un conjunto de técnicas y estrategias que se utilizan para abordar y solucionar un problema de manera eficiente. Algunos de los patrones de resolución de problemas más comunes incluyen:

* **Divide y vencerás**: Este patrón se enfoca en dividir un problema grande en problemas más pequeños y manejables, y luego resolver cada uno de ellos por separado.


```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
```

* **Fuerza bruta**: Este patrón se enfoca en probar todas las posibles soluciones hasta encontrar la correcta. Es una estrategia simple, pero puede ser ineficiente si el problema es muy grande o complejo.

```javascript
function findTwoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}
```

* **Backtracking**: Este patrón se enfoca en retroceder y cambiar decisiones previas cuando se llega a un punto en el que se sabe que la solución actual no es viable.

```javascript
function solveNQueens(n) {
    const solutions = [];
    solve([], 0, n, solutions);
    return solutions;
}

function solve(board, row, n, solutions) {
    if (row === n) {
        solutions.push([...board]);
        return;
    }
    for (let col = 0; col < n; col++) {
        if (isValid(board, row, col)) {
            board.push(col);
            solve(board, row + 1, n, solutions);
            board.pop();
        }
    }
}

function isValid(board, row, col) {
    for (let i = 0; i < row; i++) {
        const prevCol = board[i];
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
    const memo = [0, 1];
    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
}
```

* **Greedy Algorithm**: Este patrón se enfoca en tomar decisiones a corto plazo en busca de una solución óptima.

```javascript
function coinChange(coins, amount) {
    coins.sort((a, b) => b - a);
    let totalCoins = 0;
    for (let i = 0; i < coins.length; i++) {
        if (amount === 0) break;
        const currentCoinCount = Math.floor(amount / coins[i]);
        totalCoins += currentCoinCount;
        amount -= currentCoinCount * coins[i];
    }
    return amount === 0 ? totalCoins : -1;
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

Los algoritmos de ordenamiento son una parte importante de la programación y se utilizan en muchos campos, como la ciencia de datos, la investigación de operaciones, la informática empresarial, la informática de alto rendimiento y la ingeniería de software.

## Algoritmos de Busqueda

Los algoritmos de búsqueda son procedimientos utilizados para encontrar elementos específicos dentro de una colección de datos, como una lista, un árbol, un grafo, una matriz o cualquier otra estructura de datos. Los algoritmos de búsqueda se utilizan ampliamente en la programación y se aplican en muchos campos, como la informática, la electrónica, la matemática, la física, la biología y la ingeniería.

El objetivo principal de los algoritmos de búsqueda es encontrar uno o varios elementos dentro de una estructura de datos en función de un criterio de búsqueda específico. Algunos de los algoritmos de búsqueda más comunes incluyen la búsqueda lineal (o secuencial) y la búsqueda binaria.

Existen muchos algoritmos de búsqueda que se utilizan en diferentes situaciones y problemas específicos, cada uno con sus propias ventajas y desventajas en términos de eficiencia, complejidad y facilidad de implementación. Los algoritmos de búsqueda son una parte fundamental de la programación y son utilizados en una amplia variedad de aplicaciones, desde la búsqueda de archivos en un sistema de archivos hasta la búsqueda de soluciones óptimas en problemas de inteligencia artificial y aprendizaje automático.

## Estructuras de Datos

Las estructuras de datos son formas organizadas y eficientes de almacenar y manipular datos en un programa. Son un concepto fundamental en la programación y se utilizan para representar información en una variedad de formas, como listas, árboles, grafos, colas, pilas, entre otras.

```javascript
// Ejemplo de estructura de datos de pila (stack)
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
```

Las estructuras de datos son importantes porque permiten a los programas manejar grandes cantidades de información de manera eficiente, lo que puede mejorar el rendimiento y la velocidad de un programa. Además, las estructuras de datos pueden ser utilizadas para resolver una variedad de problemas y tareas en la programación, como búsquedas, clasificaciones, inserciones, eliminaciones, entre otras.

Es importante que los programadores conozcan las diferentes estructuras de datos y cómo se utilizan para diseñar programas efectivos y eficientes. Con una comprensión sólida de las estructuras de datos, los programadores pueden seleccionar la estructura adecuada para un problema y escribir programas más eficientes y elegantes.

