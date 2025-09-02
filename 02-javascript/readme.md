# Algoritmos y Estructuras de Datos en JavaScript 🍌

## Índice

- Algoritmos de Ordenamiento

  - [Burbuja](#burbuja)
  - [Selection](#selection)
  - [Insertion](#insertion)
  - [QuickSort](#quicksort)
  - [Análisis de Algoritmos de ordenamiento](#analisis-de-algoritmos-de-ordenamiento)

- Algoritmos de Búsqueda

  - [Búsqueda Lineal](#busqueda-lineal)
  - [Búsqueda Binaria](#busqueda-binaria)

- Estructura de Datos
  - [Arreglos](#arreglos-arrays)
  - [Listas](#listas)
  - [Listas Enlazadas](#listas-enlazadas)
  - [Pilas](#pilas)
  - [Colas](#colas)
  - [Hash Tables](#hash-tables)
  - [Árboles](#arboles)
    - [Prefix Trees](https://polaris000.medium.com/understanding-prefix-trees-13da74b3cafb)
    - [Trie Data Structure](https://www.geeksforgeeks.org/dsa/trie-insert-and-search/) 
  - [Grafos](#grafos)
  - [Análisis de estructuras de datos](#análisis-de-estructuras-de-datos)

[⬅️ Volver al inicio](../README.md)

Ver también:

- [Fundamentos](../01-fundamentos)
- [Python](../03-python)

## Algoritmos de Ordenamiento

### Burbuja

El algoritmo de ordenamiento por burbuja es uno de los algoritmos de ordenamiento más simples. Funciona iterando sobre la lista de elementos y comparando cada par adyacente de elementos. Si un par de elementos está en el orden incorrecto, el algoritmo los intercambia. Este proceso se repite hasta que la lista está ordenada.

```javascript
// Función auxiliar para intercambiar elementos en un arreglo
const swap = function (arr, posicion1, posicion2) {
  let temp = arr[posicion1];
  arr[posicion1] = arr[posicion2];
  arr[posicion2] = temp;
};

// Función de ordenamiento burbuja
const ordenamientoBurbuja = function (arr) {
  let i, j;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      // Si el elemento actual es mayor que el siguiente, se intercambian
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

// Ejemplo de uso
const arreglo1 = [5, 3, 8, 4, 6];
console.log(ordenamientoBurbuja(arreglo1)); // Output: [3, 4, 5, 6, 8]
```

### Selection

El algoritmo de ordenamiento por selección busca el elemento más pequeño en una lista y lo intercambia con el primer elemento no ordenado. Luego, busca el segundo elemento más pequeño y lo intercambia con el segundo elemento no ordenado, y así sucesivamente, hasta que toda la lista está ordenada.

```javascript
// Función auxiliar para intercambiar elementos en un arreglo
function swap(arr, primerPosicion, segundaPosicion) {
  let temp = arr[primerPosicion]; // Almacena temporalmente el valor del primer elemento
  arr[primerPosicion] = arr[segundaPosicion]; // Asigna el valor del segundo al primero
  arr[segundaPosicion] = temp; // Asigna el valor temporal al segundo
}

// Función de ordenamiento por selección
function ordenamientoSeleccion(nums) {
  let i, j, min;
  for (i = 0; i < nums.length; i++) {
    min = i;
    for (j = i + 1; j < nums.length; j++) if (nums[j] < nums[min]) min = j;
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
function ordenamientoPorInsercion(array) {
  let i, key, j;
  for (i = 1; i < array.length; i++) {
    key = array[i]; // El elemento actual que se está insertando
    j = i - 1;

    // Desplaza los elementos mayores que el "key" hacia la derecha
    while (j >= 0 && array[j] > key) {
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

```javascript
// Función de ordenamiento rápido
function quicksort(array) {
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
function busquedaLineal(nums, value) {
  let index = 0;
  for (index; index < nums.length; index++) {
    let num = nums[index];
    if (num === value) {
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

En la programación, las estructuras de datos son formas fundamentales de organizar y almacenar información para que pueda ser utilizada de manera eficiente. Piensa en ellas como diferentes tipos de contenedores, cada uno diseñado para un propósito específico. JavaScript, siendo un lenguaje muy utilizado en la web, ofrece una variedad de estructuras de datos, tanto nativas como implementadas por el programador. A continuación, exploraremos distintas estructuras de datos con explicaciones simples y ejemplos prácticos.

## Arreglos (Arrays)

### ¿Qué es un arreglo?

Un arreglo es como una lista ordenada donde puedes guardar varios elementos. Imagínalo como una fila de cajas numeradas, donde cada caja puede contener cualquier tipo de información: números, texto, objetos, incluso otros arreglos.

### ¿Cuándo usar arreglos?

- Cuando necesitas mantener elementos en un orden específico
- Cuando quieres acceder rápidamente a un elemento por su posición
- Cuando trabajas con listas de datos similares (como una lista de nombres o números)

### Características principales:

- **Indexados**: Cada elemento tiene una posición (índice) que empieza en 0
- **Dinámicos**: Pueden crecer o reducirse durante la ejecución
- **Versátiles**: Pueden contener diferentes tipos de datos

```javascript
// Crear un arreglo
let frutas = ["manzana", "banana", "naranja"];
let numeros = [1, 2, 3, 4, 5];
let mixto = ["texto", 42, true, null];

// Acceso a elementos del arreglo (recuerda que empezamos en 0)
console.log(frutas[0]); // 'manzana' (primer elemento)
console.log(frutas[1]); // 'banana' (segundo elemento)
console.log(frutas[2]); // 'naranja' (tercer elemento)

// Añadir elementos
frutas.push("uva"); // Añade al final
console.log(frutas); // ['manzana', 'banana', 'naranja', 'uva']

frutas.unshift("fresa"); // Añade al inicio
console.log(frutas); // ['fresa', 'manzana', 'banana', 'naranja', 'uva']

// Eliminar elementos
frutas.pop(); // Elimina el último
console.log(frutas); // ['fresa', 'manzana', 'banana', 'naranja']

frutas.shift(); // Elimina el primero
console.log(frutas); // ['manzana', 'banana', 'naranja']

// Recorrer un arreglo - Forma tradicional
for (let i = 0; i < frutas.length; i++) {
  console.log(`Posición ${i}: ${frutas[i]}`);
}

// Recorrer un arreglo - Forma moderna
frutas.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});

// Métodos útiles para buscar
console.log(frutas.includes("banana")); // true - ¿Existe 'banana'?
console.log(frutas.indexOf("naranja")); // 2 - ¿En qué posición está 'naranja'?

// Métodos para transformar datos
let frutasMayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log(frutasMayusculas); // ['MANZANA', 'BANANA', 'NARANJA']

let frutasLargas = frutas.filter((fruta) => fruta.length > 6);
console.log(frutasLargas); // ['naranja']
```

### Ventajas de los arreglos:

- Acceso muy rápido a cualquier elemento (solo necesitas saber su posición)
- Fáciles de usar y entender
- Muchos métodos útiles incorporados

### Desventajas:

- Insertar o eliminar elementos en el medio puede ser lento
- El tamaño puede crecer mucho y consumir memoria

## Listas

### ¿Qué es una lista?

Una lista es una colección de elementos organizados de forma secuencial, similar a un arreglo, pero con operaciones más controladas. Piensa en ella como una lista de tareas donde puedes agregar, quitar y verificar elementos, pero con reglas específicas sobre cómo hacerlo.

### ¿Cuándo usar listas?

- Cuando necesitas un control más estricto sobre las operaciones
- Cuando quieres encapsular la lógica de manejo de datos
- Cuando trabajas con colecciones que cambian frecuentemente

### Diferencias con los arreglos:

- **Arreglos**: Acceso directo por índice, más flexibles
- **Listas**: Operaciones controladas, más seguras

```javascript
class Lista {
  constructor() {
    this.items = [];
  }

  // Agregar un elemento al final
  agregar(item) {
    this.items.push(item);
    console.log(`✅ Agregado: ${item}`);
  }

  // Eliminar un elemento específico
  eliminar(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      console.log(`❌ Eliminado: ${item}`);
      return true;
    } else {
      console.log(`⚠️ No se encontró: ${item}`);
      return false;
    }
  }

  // Verificar si un elemento existe
  contiene(item) {
    return this.items.includes(item);
  }

  // Obtener el elemento en una posición específica
  obtener(indice) {
    if (indice >= 0 && indice < this.items.length) {
      return this.items[indice];
    }
    return null;
  }

  // Obtener tamaño de la lista
  tamano() {
    return this.items.length;
  }

  // Verificar si la lista está vacía
  estaVacia() {
    return this.items.length === 0;
  }

  // Limpiar toda la lista
  limpiar() {
    this.items = [];
    console.log("🧹 Lista limpiada");
  }

  // Mostrar la lista de forma bonita
  mostrar() {
    if (this.estaVacia()) {
      console.log("📝 Lista vacía");
    } else {
      console.log("📝 Lista actual:", this.items);
    }
  }

  // Convertir a arreglo normal
  aArreglo() {
    return [...this.items]; // Copia del arreglo interno
  }
}

// Ejemplo de uso práctico: Lista de compras
const listaCompras = new Lista();

listaCompras.agregar("Leche");
listaCompras.agregar("Pan");
listaCompras.agregar("Huevos");
listaCompras.mostrar(); // ['Leche', 'Pan', 'Huevos']

console.log("¿Tengo leche?", listaCompras.contiene("Leche")); // true
console.log("Tamaño de la lista:", listaCompras.tamano()); // 3

listaCompras.eliminar("Pan");
listaCompras.mostrar(); // ['Leche', 'Huevos']

// Ejemplo práctico: Lista de tareas pendientes
const tareasPendientes = new Lista();
tareasPendientes.agregar("Estudiar JavaScript");
tareasPendientes.agregar("Hacer ejercicio");
tareasPendientes.agregar("Llamar a mamá");

console.log("Primera tarea:", tareasPendientes.obtener(0));
```

### Ventajas de las listas:

- Control total sobre las operaciones permitidas
- Código más limpio y organizado
- Fácil de mantener y modificar
- Previene errores comunes

### Desventajas:

- Más código para implementar
- Menos flexibilidad que los arreglos nativos

## Listas Enlazadas (Linked Lists)

### ¿Qué es una lista enlazada?

Una lista enlazada es como una cadena de elementos donde cada eslabón (nodo) contiene dos cosas: un valor y una "dirección" que apunta al siguiente eslabón. A diferencia de los arreglos, los elementos no están almacenados en posiciones consecutivas de memoria, sino que están conectados a través de estas "direcciones" o referencias.

### Analogía simple:

Imagina una búsqueda del tesoro donde cada pista te lleva a la siguiente ubicación. No puedes saltar directamente a la pista #5, tienes que seguir el camino desde la primera pista hasta llegar ahí.

### ¿Cuándo usar listas enlazadas?

- Cuando no sabes cuántos elementos tendrás
- Cuando necesitas insertar o eliminar elementos frecuentemente
- Cuando el tamaño de los datos cambia mucho durante la ejecución
- Cuando no necesitas acceso directo por índice

### Componentes principales:

- **Nodo**: Cada elemento de la lista (contiene valor + referencia al siguiente)
- **Cabeza**: El primer nodo de la lista
- **Siguiente**: La referencia que conecta un nodo con el próximo

```javascript
// Primero creamos la estructura de un nodo
class Nodo {
  constructor(valor) {
    this.valor = valor; // El dato que guardamos
    this.siguiente = null; // Referencia al siguiente nodo
  }
}

class ListaEnlazada {
  constructor() {
    this.cabeza = null; // Al inicio, la lista está vacía
    this.tamaño = 0; // Llevamos cuenta del tamaño
  }

  // Agregar un elemento al final de la lista
  agregar(valor) {
    const nuevoNodo = new Nodo(valor);

    // Si la lista está vacía, el nuevo nodo se convierte en la cabeza
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
    } else {
      // Si no está vacía, recorremos hasta el final
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      // Conectamos el último nodo con el nuevo
      actual.siguiente = nuevoNodo;
    }
    this.tamaño++;
    console.log(`✅ Agregado: ${valor}`);
  }

  // Agregar un elemento al inicio de la lista
  agregarAlInicio(valor) {
    const nuevoNodo = new Nodo(valor);
    nuevoNodo.siguiente = this.cabeza; // El nuevo nodo apunta a la cabeza actual
    this.cabeza = nuevoNodo; // El nuevo nodo se convierte en la cabeza
    this.tamaño++;
    console.log(`✅ Agregado al inicio: ${valor}`);
  }

  // Eliminar un elemento específico
  eliminar(valor) {
    if (!this.cabeza) {
      console.log("⚠️ La lista está vacía");
      return false;
    }

    // Si el elemento a eliminar es la cabeza
    if (this.cabeza.valor === valor) {
      this.cabeza = this.cabeza.siguiente;
      this.tamaño--;
      console.log(`❌ Eliminado: ${valor}`);
      return true;
    }

    // Buscar el elemento en el resto de la lista
    let actual = this.cabeza;
    while (actual.siguiente && actual.siguiente.valor !== valor) {
      actual = actual.siguiente;
    }

    // Si encontramos el elemento
    if (actual.siguiente) {
      actual.siguiente = actual.siguiente.siguiente; // "Saltamos" el nodo a eliminar
      this.tamaño--;
      console.log(`❌ Eliminado: ${valor}`);
      return true;
    }

    console.log(`⚠️ No se encontró: ${valor}`);
    return false;
  }

  // Buscar un elemento
  buscar(valor) {
    let actual = this.cabeza;
    let posicion = 0;

    while (actual) {
      if (actual.valor === valor) {
        console.log(`🔍 Encontrado "${valor}" en la posición ${posicion}`);
        return posicion;
      }
      actual = actual.siguiente;
      posicion++;
    }

    console.log(`🔍 "${valor}" no encontrado`);
    return -1;
  }

  // Obtener el tamaño de la lista
  obtenerTamaño() {
    return this.tamaño;
  }

  // Verificar si la lista está vacía
  estaVacia() {
    return this.cabeza === null;
  }

  // Mostrar todos los elementos
  mostrar() {
    if (this.estaVacia()) {
      console.log("📝 Lista vacía");
      return;
    }

    let elementos = [];
    let actual = this.cabeza;

    while (actual) {
      elementos.push(actual.valor);
      actual = actual.siguiente;
    }

    console.log("📝 Lista:", elementos.join(" -> "));
  }

  // Convertir a arreglo normal
  aArreglo() {
    let resultado = [];
    let actual = this.cabeza;

    while (actual) {
      resultado.push(actual.valor);
      actual = actual.siguiente;
    }

    return resultado;
  }
}

// Ejemplo práctico: Lista de reproducción de música
const playList = new ListaEnlazada();

console.log("🎵 Creando playlist...");
playList.agregar("Bohemian Rhapsody");
playList.agregar("Stairway to Heaven");
playList.agregar("Hotel California");
playList.agregarAlInicio("Imagine");

playList.mostrar(); // Imagine -> Bohemian Rhapsody -> Stairway to Heaven -> Hotel California

console.log(`\n📊 Canciones en la playlist: ${playList.obtenerTamaño()}`);

playList.buscar("Hotel California");
playList.eliminar("Stairway to Heaven");
playList.mostrar();

// Ejemplo práctico: Historial de navegación
const historialNavegacion = new ListaEnlazada();
historialNavegacion.agregar("google.com");
historialNavegacion.agregar("youtube.com");
historialNavegacion.agregar("github.com");
console.log("\n🌐 Historial:", historialNavegacion.aArreglo());
```

### Ventajas de las listas enlazadas:

- **Tamaño dinámico**: Pueden crecer o reducirse según sea necesario
- **Inserción eficiente**: Agregar elementos al inicio es muy rápido
- **Uso eficiente de memoria**: Solo usan la memoria que necesitan
- **Flexibilidad**: Fácil reorganización de elementos

### Desventajas:

- **No hay acceso directo**: Para llegar al elemento 10, tienes que pasar por los primeros 9
- **Memoria extra**: Cada nodo necesita espacio adicional para guardar la referencia
- **No son cache-friendly**: Los elementos pueden estar dispersos en la memoria

### Cuándo NO usar listas enlazadas:

- Cuando necesitas acceso frecuente por índice
- Cuando trabajas con datos que no cambian mucho
- Cuando la memoria es muy limitada

## Pilas (Stacks)

### ¿Qué es una pila?

Una pila es como una pila de platos: solo puedes agregar o quitar platos desde la parte superior. Esta estructura sigue el principio **LIFO** (Last In, First Out), que significa "el último en entrar, es el primero en salir".

### Analogías de la vida real:

- **Pila de libros**: Solo puedes tomar el libro de arriba
- **Historial del navegador**: El botón "Atrás" te lleva a la página anterior (la última visitada)
- **Función "Deshacer" (Ctrl+Z)**: Deshace la última acción realizada
- **Pila de platos**: Solo accedes al plato de arriba

### ¿Cuándo usar pilas?

- Implementar funciones de "deshacer/rehacer"
- Manejar llamadas a funciones (call stack)
- Evaluar expresiones matemáticas
- Navegación entre páginas o estados
- Algoritmos de backtracking (vuelta atrás)

### Operaciones principales:

- **Push**: Agregar elemento al tope
- **Pop**: Quitar elemento del tope
- **Peek/Top**: Ver el elemento del tope sin quitarlo
- **isEmpty**: Verificar si está vacía

```javascript
class Pila {
  constructor() {
    this.items = [];
  }

  // Agregar un elemento al tope de la pila
  push(item) {
    this.items.push(item);
    console.log(`📚 Agregado a la pila: ${item}`);
  }

  // Quitar y devolver el elemento del tope
  pop() {
    if (this.isEmpty()) {
      console.log("⚠️ No se puede quitar: la pila está vacía");
      return null;
    }
    const elemento = this.items.pop();
    console.log(`📤 Quitado de la pila: ${elemento}`);
    return elemento;
  }

  // Ver el elemento del tope sin quitarlo
  peek() {
    if (this.isEmpty()) {
      console.log("⚠️ La pila está vacía");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Verificar si la pila está vacía
  isEmpty() {
    return this.items.length === 0;
  }

  // Obtener el tamaño de la pila
  size() {
    return this.items.length;
  }

  // Limpiar toda la pila
  clear() {
    this.items = [];
    console.log("🧹 Pila limpiada");
  }

  // Mostrar todos los elementos (del tope hacia abajo)
  mostrar() {
    if (this.isEmpty()) {
      console.log("📚 Pila vacía");
      return;
    }

    console.log("📚 Pila (de arriba hacia abajo):");
    for (let i = this.items.length - 1; i >= 0; i--) {
      const indicador = i === this.items.length - 1 ? "👆 TOPE" : "   ";
      console.log(`${indicador} [${this.items[i]}]`);
    }
  }

  // Convertir a arreglo (útil para debugging)
  toArray() {
    return [...this.items];
  }
}

// Ejemplo 1: Historial de navegación web
console.log("🌐 === HISTORIAL DE NAVEGACIÓN ===");
const historialNavegacion = new Pila();

historialNavegacion.push("google.com");
historialNavegacion.push("youtube.com");
historialNavegacion.push("github.com");
historialNavegacion.push("stackoverflow.com");

historialNavegacion.mostrar();

console.log("\n🔙 Navegando hacia atrás...");
console.log("Página actual:", historialNavegacion.peek());
historialNavegacion.pop(); // Volver a github.com
historialNavegacion.pop(); // Volver a youtube.com

console.log("Página actual después de ir atrás:", historialNavegacion.peek());

// Ejemplo 2: Sistema de deshacer acciones
console.log("\n✏️ === SISTEMA DE DESHACER ===");
class EditorTexto {
  constructor() {
    this.texto = "";
    this.historialAcciones = new Pila();
  }

  escribir(nuevoTexto) {
    // Guardar el estado actual antes de hacer cambios
    this.historialAcciones.push(this.texto);
    this.texto += nuevoTexto;
    console.log(`✍️ Texto actual: "${this.texto}"`);
  }

  deshacer() {
    if (this.historialAcciones.isEmpty()) {
      console.log("⚠️ No hay acciones para deshacer");
      return;
    }

    this.texto = this.historialAcciones.pop();
    console.log(`↩️ Texto después de deshacer: "${this.texto}"`);
  }
}

const editor = new EditorTexto();
editor.escribir("Hola ");
editor.escribir("mundo ");
editor.escribir("desde ");
editor.escribir("JavaScript!");

console.log("\n🔄 Deshaciendo acciones...");
editor.deshacer(); // Quita "JavaScript!"
editor.deshacer(); // Quita "desde "
editor.deshacer(); // Quita "mundo "

// Ejemplo 3: Validador de paréntesis balanceados
console.log("\n🔍 === VALIDADOR DE PARÉNTESIS ===");
function validarParentesis(expresion) {
  const pila = new Pila();
  const pares = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of expresion) {
    // Si es un paréntesis de apertura, lo agregamos a la pila
    if (char === "(" || char === "{" || char === "[") {
      pila.push(char);
    }
    // Si es un paréntesis de cierre
    else if (char === ")" || char === "}" || char === "]") {
      if (pila.isEmpty()) {
        return false; // Paréntesis de cierre sin apertura
      }

      const ultimo = pila.pop();
      if (ultimo !== pares[char]) {
        return false; // Paréntesis no coinciden
      }
    }
  }

  return pila.isEmpty(); // Debe estar vacía al final
}

// Pruebas del validador
const expresiones = ["()", "()[]{}", "([{}])", "((()))", "([)]", "(((", "))"];

expresiones.forEach((expr) => {
  const esValida = validarParentesis(expr) ? "✅ Válida" : "❌ Inválida";
  console.log(`"${expr}" -> ${esValida}`);
});
```

### Ventajas de las pilas:

- **Simplicidad**: Muy fáciles de entender e implementar
- **Eficiencia**: Operaciones push y pop son O(1) - muy rápidas
- **Control de flujo**: Perfectas para manejar secuencias de acciones
- **Memoria**: Uso eficiente de memoria

### Desventajas:

- **Acceso limitado**: Solo puedes acceder al elemento del tope
- **No hay búsqueda**: No puedes buscar elementos en el medio
- **LIFO estricto**: A veces necesitas más flexibilidad

### Casos de uso comunes:

1. **Navegadores web**: Historial de páginas visitadas
2. **Editores de texto**: Función deshacer/rehacer
3. **Compiladores**: Manejo de llamadas a funciones
4. **Calculadoras**: Evaluación de expresiones matemáticas
5. **Juegos**: Sistema de estados (pausar/reanudar)

## Colas (Queues)

### ¿Qué es una cola?

Una cola es como la fila que haces en el supermercado: la primera persona que llega es la primera que es atendida. Esta estructura sigue el principio **FIFO** (First In, First Out), que significa "el primero en entrar, es el primero en salir".

### Analogías de la vida real:

- **Fila del banco**: El primero en llegar es el primero en ser atendido
- **Cola de impresión**: Los documentos se imprimen en el orden que fueron enviados
- **Fila de un restaurante**: Se atiende por orden de llegada
- **Semáforo**: Los autos pasan en el orden que llegaron
- **Llamadas en espera**: Se atienden en orden de llegada

### ¿Cuándo usar colas?

- Procesar tareas en orden de llegada
- Sistemas de atención al cliente
- Algoritmos de búsqueda (BFS - Breadth First Search)
- Manejo de procesos en sistemas operativos
- Streaming de datos
- Sistemas de mensajería

### Operaciones principales:

- **Enqueue**: Agregar elemento al final de la cola
- **Dequeue**: Quitar elemento del frente de la cola
- **Front/Peek**: Ver el primer elemento sin quitarlo
- **isEmpty**: Verificar si está vacía

```javascript
class Cola {
  constructor() {
    this.items = [];
  }

  // Agregar un elemento al final de la cola
  enqueue(item) {
    this.items.push(item);
    console.log(`🚶 Entró a la cola: ${item}`);
  }

  // Quitar y devolver el primer elemento de la cola
  dequeue() {
    if (this.isEmpty()) {
      console.log("⚠️ No se puede atender: la cola está vacía");
      return null;
    }
    const elemento = this.items.shift();
    console.log(`✅ Atendido: ${elemento}`);
    return elemento;
  }

  // Ver el primer elemento sin quitarlo
  front() {
    if (this.isEmpty()) {
      console.log("⚠️ La cola está vacía");
      return null;
    }
    return this.items[0];
  }

  // Ver el último elemento (el que acaba de llegar)
  rear() {
    if (this.isEmpty()) {
      console.log("⚠️ La cola está vacía");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Verificar si la cola está vacía
  isEmpty() {
    return this.items.length === 0;
  }

  // Obtener el tamaño de la cola
  size() {
    return this.items.length;
  }

  // Limpiar toda la cola
  clear() {
    this.items = [];
    console.log("🧹 Cola limpiada");
  }

  // Mostrar todos los elementos (del frente hacia atrás)
  mostrar() {
    if (this.isEmpty()) {
      console.log("👥 Cola vacía");
      return;
    }

    console.log("👥 Cola (de frente hacia atrás):");
    this.items.forEach((item, index) => {
      const indicador = index === 0 ? "👉 SIGUIENTE" : `   ${index + 1}°`;
      console.log(`${indicador} [${item}]`);
    });
  }

  // Convertir a arreglo
  toArray() {
    return [...this.items];
  }
}

// Ejemplo 1: Sistema de atención al cliente
console.log("🏪 === SISTEMA DE ATENCIÓN AL CLIENTE ===");
const colaAtencion = new Cola();

// Llegan clientes
colaAtencion.enqueue("Ana");
colaAtencion.enqueue("Carlos");
colaAtencion.enqueue("María");
colaAtencion.enqueue("Pedro");

colaAtencion.mostrar();

console.log("\n🔔 Iniciando atención...");
console.log("Próximo cliente:", colaAtencion.front());

// Atender clientes
colaAtencion.dequeue(); // Atiende a Ana
colaAtencion.dequeue(); // Atiende a Carlos

console.log("\nLlega un cliente nuevo...");
colaAtencion.enqueue("Sofía");

colaAtencion.mostrar();

// Ejemplo 2: Cola de impresión
console.log("\n🖨️ === COLA DE IMPRESIÓN ===");
class ColaImpresion {
  constructor() {
    this.cola = new Cola();
    this.imprimiendo = false;
  }

  agregarDocumento(documento) {
    this.cola.enqueue(documento);
    console.log(`📄 Documento "${documento}" agregado a la cola de impresión`);

    if (!this.imprimiendo) {
      this.procesarCola();
    }
  }

  procesarCola() {
    if (this.cola.isEmpty()) {
      console.log("✅ Todos los documentos han sido impresos");
      this.imprimiendo = false;
      return;
    }

    this.imprimiendo = true;
    const documento = this.cola.dequeue();
    console.log(`🖨️ Imprimiendo: "${documento}"...`);

    // Simular tiempo de impresión
    setTimeout(() => {
      console.log(`✅ "${documento}" impreso correctamente`);
      this.procesarCola(); // Procesar siguiente documento
    }, 1000);
  }

  mostrarCola() {
    console.log(`📋 Documentos en cola: ${this.cola.size()}`);
    this.cola.mostrar();
  }
}

const impresora = new ColaImpresion();
impresora.agregarDocumento("Informe_Ventas.pdf");
impresora.agregarDocumento("Presentacion.pptx");
impresora.agregarDocumento("Contrato.docx");

// Ejemplo 3: Simulador de fila de restaurante
console.log("\n🍽️ === SIMULADOR DE RESTAURANTE ===");
class RestauranteFila {
  constructor(capacidadMaxima = 10) {
    this.cola = new Cola();
    this.capacidadMaxima = capacidadMaxima;
    this.clientesAtendidos = 0;
  }

  llegarCliente(nombre) {
    if (this.cola.size() >= this.capacidadMaxima) {
      console.log(`❌ Lo siento ${nombre}, el restaurante está lleno`);
      return false;
    }

    this.cola.enqueue(nombre);
    console.log(
      `🚶 ${nombre} se unió a la fila (posición ${this.cola.size()})`
    );
    return true;
  }

  atenderCliente() {
    if (this.cola.isEmpty()) {
      console.log("⚠️ No hay clientes esperando");
      return null;
    }

    const cliente = this.cola.dequeue();
    this.clientesAtendidos++;
    console.log(
      `🍽️ Mesa lista para ${cliente} (Cliente #${this.clientesAtendidos})`
    );
    return cliente;
  }

  estadoRestaurante() {
    console.log("\n📊 === ESTADO DEL RESTAURANTE ===");
    console.log(`👥 Clientes en fila: ${this.cola.size()}`);
    console.log(`🍽️ Clientes atendidos hoy: ${this.clientesAtendidos}`);
    console.log(
      `📍 Capacidad disponible: ${this.capacidadMaxima - this.cola.size()}`
    );

    if (!this.cola.isEmpty()) {
      console.log(`👉 Próximo cliente: ${this.cola.front()}`);
      this.cola.mostrar();
    }
  }
}

const restaurante = new RestauranteFila(5);

// Simulación de llegada de clientes
restaurante.llegarCliente("Juan");
restaurante.llegarCliente("María");
restaurante.llegarCliente("Pedro");
restaurante.llegarCliente("Ana");

restaurante.estadoRestaurante();

console.log("\n🔔 Liberando mesas...");
restaurante.atenderCliente();
restaurante.atenderCliente();

restaurante.llegarCliente("Carlos");
restaurante.estadoRestaurante();
```

### Ventajas de las colas:

- **Order**: Garantiza que se procesen elementos en orden de llegada
- **Simplicidad**: Fáciles de entender e implementar
- **Eficiencia**: Operaciones enqueue y dequeue son rápidas
- **Organización**: Mantiene un orden claro y predecible

### Desventajas:

- **Acceso limitado**: Solo puedes acceder al primer y último elemento
- **No hay prioridades**: Todos los elementos tienen la misma importancia
- **Búsqueda**: No puedes buscar elementos en el medio eficientemente

### Variaciones de colas:

1. **Cola circular**: El final se conecta con el inicio para optimizar memoria
2. **Cola de prioridad**: Los elementos con mayor prioridad salen primero
3. **Deque (Double-ended queue)**: Puedes agregar/quitar desde ambos extremos

### Casos de uso comunes:

1. **Sistemas operativos**: Manejo de procesos y tareas
2. **Redes**: Manejo de paquetes de datos
3. **Videojuegos**: Cola de acciones o comandos
4. **Aplicaciones web**: Procesamiento de requests
5. **Algoritmos**: Búsqueda en anchura (BFS)

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

### ¿Qué es una tabla hash?

Una tabla hash es como un diccionario súper eficiente donde puedes buscar cualquier palabra (clave) y encontrar instantáneamente su definición (valor). Utiliza una "función hash" que convierte las claves en direcciones específicas donde se almacenan los valores, como un sistema de casilleros numerados.

### Analogías de la vida real:

- **Diccionario**: Buscas una palabra y encuentras su significado
- **Directorio telefónico**: Buscas un nombre y encuentras el número
- **Casilleros del gimnasio**: Cada persona tiene una llave única para su casillero
- **Índice de un libro**: Te dice en qué página encontrar cada tema
- **Base de datos**: Relaciona IDs únicos con información completa

### ¿Cuándo usar tablas hash?

- Cuando necesitas búsquedas muy rápidas
- Para almacenar pares clave-valor
- Implementar cachés y memorización
- Contar frecuencias de elementos
- Eliminar duplicados
- Implementar bases de datos simples

### Conceptos clave:

- **Clave (Key)**: El identificador único (como "nombre")
- **Valor (Value)**: La información asociada (como "Juan")
- **Función Hash**: Convierte la clave en un índice numérico
- **Bucket/Casillero**: Donde se almacena realmente el par clave-valor
- **Colisión**: Cuando dos claves diferentes generan el mismo índice

```javascript
class TablaHash {
  constructor(tamaño = 50) {
    this.buckets = new Array(tamaño);
    this.tamaño = tamaño;
    this.numElementos = 0;
  }

  // Función hash: convierte una clave en un índice
  hash(clave) {
    let hashValue = 0;

    // Convertir la clave a string si no lo es
    const claveStr = String(clave);

    // Sumar los códigos ASCII de cada carácter
    for (let i = 0; i < claveStr.length; i++) {
      hashValue += claveStr.charCodeAt(i);
    }

    // Usar módulo para que el índice esté dentro del rango
    return hashValue % this.tamaño;
  }

  // Agregar o actualizar un par clave-valor
  set(clave, valor) {
    const indice = this.hash(clave);

    // Si el bucket no existe, crearlo
    if (!this.buckets[indice]) {
      this.buckets[indice] = [];
    }

    const bucket = this.buckets[indice];

    // Buscar si la clave ya existe
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === clave) {
        // Actualizar valor existente
        const valorAnterior = bucket[i][1];
        bucket[i][1] = valor;
        console.log(
          `🔄 Actualizado: "${clave}" = ${valor} (era: ${valorAnterior})`
        );
        return;
      }
    }

    // Si no existe, agregar nuevo par clave-valor
    bucket.push([clave, valor]);
    this.numElementos++;
    console.log(`✅ Agregado: "${clave}" = ${valor} (índice: ${indice})`);
  }

  // Obtener el valor asociado a una clave
  get(clave) {
    const indice = this.hash(clave);
    const bucket = this.buckets[indice];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === clave) {
          return bucket[i][1];
        }
      }
    }

    console.log(`⚠️ Clave "${clave}" no encontrada`);
    return undefined;
  }

  // Verificar si una clave existe
  has(clave) {
    const indice = this.hash(clave);
    const bucket = this.buckets[indice];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === clave) {
          return true;
        }
      }
    }
    return false;
  }

  // Eliminar un par clave-valor
  delete(clave) {
    const indice = this.hash(clave);
    const bucket = this.buckets[indice];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === clave) {
          const valorEliminado = bucket[i][1];
          bucket.splice(i, 1);
          this.numElementos--;
          console.log(`❌ Eliminado: "${clave}" = ${valorEliminado}`);
          return true;
        }
      }
    }

    console.log(`⚠️ No se pudo eliminar: "${clave}" no existe`);
    return false;
  }

  // Obtener todas las claves
  keys() {
    const claves = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          claves.push(this.buckets[i][j][0]);
        }
      }
    }
    return claves;
  }

  // Obtener todos los valores
  values() {
    const valores = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          valores.push(this.buckets[i][j][1]);
        }
      }
    }
    return valores;
  }

  // Obtener el número de elementos
  size() {
    return this.numElementos;
  }

  // Verificar si está vacía
  isEmpty() {
    return this.numElementos === 0;
  }

  // Limpiar toda la tabla
  clear() {
    this.buckets = new Array(this.tamaño);
    this.numElementos = 0;
    console.log("🧹 Tabla hash limpiada");
  }

  // Mostrar estadísticas de la tabla
  mostrarEstadisticas() {
    console.log("\n📊 === ESTADÍSTICAS DE LA TABLA HASH ===");
    console.log(`📦 Tamaño total: ${this.tamaño} buckets`);
    console.log(`📝 Elementos almacenados: ${this.numElementos}`);

    let bucketsUsados = 0;
    let colisiones = 0;

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] && this.buckets[i].length > 0) {
        bucketsUsados++;
        if (this.buckets[i].length > 1) {
          colisiones += this.buckets[i].length - 1;
        }
      }
    }

    console.log(`🎯 Buckets utilizados: ${bucketsUsados}`);
    console.log(`💥 Colisiones: ${colisiones}`);
    console.log(
      `📈 Factor de carga: ${((this.numElementos / this.tamaño) * 100).toFixed(
        1
      )}%`
    );
  }

  // Mostrar contenido completo
  mostrar() {
    console.log("\n📋 === CONTENIDO DE LA TABLA HASH ===");
    if (this.isEmpty()) {
      console.log("🗂️ Tabla vacía");
      return;
    }

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] && this.buckets[i].length > 0) {
        console.log(`Bucket ${i}:`);
        this.buckets[i].forEach(([clave, valor]) => {
          console.log(`  "${clave}" => ${valor}`);
        });
      }
    }
  }
}

// Ejemplo 1: Directorio telefónico
console.log("📞 === DIRECTORIO TELEFÓNICO ===");
const directorio = new TablaHash(10);

directorio.set("Juan Pérez", "555-0123");
directorio.set("María García", "555-0456");
directorio.set("Carlos López", "555-0789");
directorio.set("Ana Martínez", "555-0321");

console.log("\n🔍 Buscando números...");
console.log(`Juan Pérez: ${directorio.get("Juan Pérez")}`);
console.log(`María García: ${directorio.get("María García")}`);
console.log(`Pedro Sánchez: ${directorio.get("Pedro Sánchez")}`); // No existe

directorio.mostrarEstadisticas();

// Ejemplo 2: Contador de palabras
console.log("\n📝 === CONTADOR DE PALABRAS ===");
function contarPalabras(texto) {
  const contador = new TablaHash(20);
  const palabras = texto.toLowerCase().split(/\s+/);

  palabras.forEach((palabra) => {
    // Limpiar signos de puntuación
    palabra = palabra.replace(/[^\w]/g, "");

    if (palabra.length > 0) {
      const conteoActual = contador.get(palabra) || 0;
      contador.set(palabra, conteoActual + 1);
    }
  });

  return contador;
}

const texto =
  "JavaScript es genial. JavaScript es poderoso. Es fácil aprender JavaScript.";
const contadorPalabras = contarPalabras(texto);

console.log("📊 Frecuencia de palabras:");
contadorPalabras.keys().forEach((palabra) => {
  console.log(`"${palabra}": ${contadorPalabras.get(palabra)} veces`);
});

// Ejemplo 3: Caché de resultados
console.log("\n💾 === SISTEMA DE CACHÉ ===");
class CalculadoraConCache {
  constructor() {
    this.cache = new TablaHash(50);
    this.calculosRealizados = 0;
  }

  // Función costosa que queremos cachear
  operacionCostosa(a, b) {
    this.calculosRealizados++;
    console.log(`🔄 Calculando ${a} * ${b} + ${a + b}...`);

    // Simular operación costosa
    let resultado = 0;
    for (let i = 0; i < 1000000; i++) {
      resultado = a * b + (a + b);
    }

    return resultado;
  }

  calcular(a, b) {
    const clave = `${a},${b}`;

    // Verificar si el resultado está en caché
    if (this.cache.has(clave)) {
      console.log(`⚡ Resultado desde caché para ${a}, ${b}`);
      return this.cache.get(clave);
    }

    // Si no está en caché, calcularlo y guardarlo
    const resultado = this.operacionCostosa(a, b);
    this.cache.set(clave, resultado);

    return resultado;
  }

  mostrarEstadisticas() {
    console.log(`\n📊 Cálculos realizados: ${this.calculosRealizados}`);
    console.log(`💾 Resultados en caché: ${this.cache.size()}`);
  }
}

const calculadora = new CalculadoraConCache();

// Primera vez - se calcula
console.log("Resultado:", calculadora.calcular(5, 3));

// Segunda vez - desde caché
console.log("Resultado:", calculadora.calcular(5, 3));

// Nuevo cálculo
console.log("Resultado:", calculadora.calcular(10, 7));

// Desde caché otra vez
console.log("Resultado:", calculadora.calcular(5, 3));

calculadora.mostrarEstadisticas();
```

### Ventajas de las tablas hash:

- **Velocidad**: Búsqueda, inserción y eliminación en tiempo promedio O(1)
- **Flexibilidad**: Pueden usar cualquier tipo de dato como clave
- **Eficiencia**: Muy eficientes para grandes cantidades de datos
- **Simplicidad**: Fáciles de usar una vez implementadas

### Desventajas:

- **Colisiones**: Múltiples claves pueden mapear al mismo índice
- **Memoria**: Pueden desperdiciar espacio si no están bien dimensionadas
- **Orden**: No mantienen el orden de inserción
- **Función hash**: Una mala función hash puede degradar el rendimiento

### Casos de uso comunes:

1. **Bases de datos**: Índices para búsquedas rápidas
2. **Cachés**: Almacenar resultados de operaciones costosas
3. **Compiladores**: Tablas de símbolos
4. **Navegadores**: Almacenar cookies y datos de sesión
5. **Algoritmos**: Eliminar duplicados, contar frecuencias

### En JavaScript nativo:

JavaScript tiene objetos y Maps que funcionan como tablas hash:

```javascript
// Objeto (tabla hash simple)
const obj = {};
obj["clave"] = "valor";

// Map (tabla hash más avanzada)
const map = new Map();
map.set("clave", "valor");
map.get("clave"); // 'valor'
```

## Árboles (Trees)

### ¿Qué es un árbol?

Un árbol es una estructura de datos jerárquica que se parece a un árbol genealógico o al sistema de carpetas de tu computadora. Tiene un elemento principal llamado "raíz" y desde ahí se ramifica hacia abajo en diferentes niveles. Cada elemento se llama "nodo" y puede tener "hijos" (nodos conectados debajo de él).

### Analogías de la vida real:

- **Árbol genealógico**: Ancestros, padres, hijos, nietos
- **Sistema de archivos**: Carpetas y subcarpetas
- **Organigrama de empresa**: CEO, gerentes, empleados
- **Torneo deportivo**: Eliminatorias hasta la final
- **Árbol de decisiones**: Cada decisión lleva a nuevas opciones

### ¿Cuándo usar árboles?

- Representar jerarquías (como menús de navegación)
- Búsquedas eficientes en datos ordenados
- Expresiones matemáticas y sintaxis de programación
- Sistemas de archivos
- Bases de datos (índices)
- Algoritmos de inteligencia artificial

### Terminología básica:

- **Raíz**: El nodo principal (arriba del árbol)
- **Nodo**: Cada elemento del árbol
- **Hijos**: Nodos conectados directamente debajo
- **Padre**: El nodo que está directamente arriba
- **Hojas**: Nodos que no tienen hijos
- **Altura**: Número de niveles del árbol
- **Profundidad**: Distancia desde la raíz hasta un nodo

### Tipos de árboles:

- **Árbol binario**: Cada nodo tiene máximo 2 hijos
- **Árbol binario de búsqueda**: Árbol binario ordenado
- **Árbol general**: Cada nodo puede tener cualquier número de hijos

```javascript
// Nodo básico para árbol binario
class NodoArbol {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null; // Hijo izquierdo
    this.derecha = null; // Hijo derecho
  }
}

class ArbolBinarioBusqueda {
  constructor() {
    this.raiz = null;
  }

  // Agregar un nuevo valor al árbol
  agregar(valor) {
    const nuevoNodo = new NodoArbol(valor);

    if (!this.raiz) {
      this.raiz = nuevoNodo;
      console.log(`🌱 Raíz creada: ${valor}`);
    } else {
      this._agregarRecursivamente(this.raiz, nuevoNodo);
    }
  }

  _agregarRecursivamente(nodoActual, nuevoNodo) {
    // Si el nuevo valor es menor, va a la izquierda
    if (nuevoNodo.valor < nodoActual.valor) {
      if (!nodoActual.izquierda) {
        nodoActual.izquierda = nuevoNodo;
        console.log(
          `⬅️ Agregado ${nuevoNodo.valor} a la izquierda de ${nodoActual.valor}`
        );
      } else {
        this._agregarRecursivamente(nodoActual.izquierda, nuevoNodo);
      }
    }
    // Si el nuevo valor es mayor, va a la derecha
    else if (nuevoNodo.valor > nodoActual.valor) {
      if (!nodoActual.derecha) {
        nodoActual.derecha = nuevoNodo;
        console.log(
          `➡️ Agregado ${nuevoNodo.valor} a la derecha de ${nodoActual.valor}`
        );
      } else {
        this._agregarRecursivamente(nodoActual.derecha, nuevoNodo);
      }
    }
    // Si el valor ya existe, no lo agregamos
    else {
      console.log(`⚠️ El valor ${nuevoNodo.valor} ya existe en el árbol`);
    }
  }

  // Buscar un valor en el árbol
  buscar(valor) {
    return this._buscarRecursivamente(this.raiz, valor);
  }

  _buscarRecursivamente(nodo, valor) {
    // Si llegamos a null, el valor no existe
    if (!nodo) {
      console.log(`❌ Valor ${valor} no encontrado`);
      return false;
    }

    // Si encontramos el valor
    if (valor === nodo.valor) {
      console.log(`✅ Valor ${valor} encontrado`);
      return true;
    }

    // Si el valor es menor, buscar en la izquierda
    if (valor < nodo.valor) {
      console.log(`🔍 Buscando ${valor} en la izquierda de ${nodo.valor}`);
      return this._buscarRecursivamente(nodo.izquierda, valor);
    }
    // Si el valor es mayor, buscar en la derecha
    else {
      console.log(`🔍 Buscando ${valor} en la derecha de ${nodo.valor}`);
      return this._buscarRecursivamente(nodo.derecha, valor);
    }
  }

  // Encontrar el valor mínimo (más a la izquierda)
  encontrarMinimo() {
    if (!this.raiz) return null;

    let actual = this.raiz;
    while (actual.izquierda) {
      actual = actual.izquierda;
    }
    return actual.valor;
  }

  // Encontrar el valor máximo (más a la derecha)
  encontrarMaximo() {
    if (!this.raiz) return null;

    let actual = this.raiz;
    while (actual.derecha) {
      actual = actual.derecha;
    }
    return actual.valor;
  }

  // Recorrido en orden (izquierda, raíz, derecha) - da valores ordenados
  recorrerEnOrden() {
    console.log("📊 Recorrido en orden (valores ordenados):");
    const valores = [];
    this._recorrerEnOrdenRecursivo(this.raiz, valores);
    console.log(valores.join(" -> "));
    return valores;
  }

  _recorrerEnOrdenRecursivo(nodo, valores) {
    if (nodo) {
      this._recorrerEnOrdenRecursivo(nodo.izquierda, valores);
      valores.push(nodo.valor);
      this._recorrerEnOrdenRecursivo(nodo.derecha, valores);
    }
  }

  // Recorrido pre-orden (raíz, izquierda, derecha)
  recorrerPreOrden() {
    console.log("📊 Recorrido pre-orden (raíz primero):");
    const valores = [];
    this._recorrerPreOrdenRecursivo(this.raiz, valores);
    console.log(valores.join(" -> "));
    return valores;
  }

  _recorrerPreOrdenRecursivo(nodo, valores) {
    if (nodo) {
      valores.push(nodo.valor);
      this._recorrerPreOrdenRecursivo(nodo.izquierda, valores);
      this._recorrerPreOrdenRecursivo(nodo.derecha, valores);
    }
  }

  // Recorrido post-orden (izquierda, derecha, raíz)
  recorrerPostOrden() {
    console.log("📊 Recorrido post-orden (raíz al final):");
    const valores = [];
    this._recorrerPostOrdenRecursivo(this.raiz, valores);
    console.log(valores.join(" -> "));
    return valores;
  }

  _recorrerPostOrdenRecursivo(nodo, valores) {
    if (nodo) {
      this._recorrerPostOrdenRecursivo(nodo.izquierda, valores);
      this._recorrerPostOrdenRecursivo(nodo.derecha, valores);
      valores.push(nodo.valor);
    }
  }

  // Calcular la altura del árbol
  calcularAltura() {
    return this._calcularAlturaRecursiva(this.raiz);
  }

  _calcularAlturaRecursiva(nodo) {
    if (!nodo) return 0;

    const alturaIzquierda = this._calcularAlturaRecursiva(nodo.izquierda);
    const alturaDerecha = this._calcularAlturaRecursiva(nodo.derecha);

    return Math.max(alturaIzquierda, alturaDerecha) + 1;
  }

  // Contar el número total de nodos
  contarNodos() {
    return this._contarNodosRecursivo(this.raiz);
  }

  _contarNodosRecursivo(nodo) {
    if (!nodo) return 0;
    return (
      1 +
      this._contarNodosRecursivo(nodo.izquierda) +
      this._contarNodosRecursivo(nodo.derecha)
    );
  }

  // Mostrar estadísticas del árbol
  mostrarEstadisticas() {
    console.log("\n📊 === ESTADÍSTICAS DEL ÁRBOL ===");
    console.log(`🌳 Altura: ${this.calcularAltura()}`);
    console.log(`📦 Total de nodos: ${this.contarNodos()}`);
    console.log(`⬇️ Valor mínimo: ${this.encontrarMinimo()}`);
    console.log(`⬆️ Valor máximo: ${this.encontrarMaximo()}`);
  }

  // Visualización simple del árbol
  mostrarArbol() {
    console.log("\n🌳 === ESTRUCTURA DEL ÁRBOL ===");
    if (!this.raiz) {
      console.log("Árbol vacío");
      return;
    }
    this._mostrarArbolRecursivo(this.raiz, "", true);
  }

  _mostrarArbolRecursivo(nodo, prefijo, esUltimo) {
    if (nodo) {
      console.log(prefijo + (esUltimo ? "└── " : "├── ") + nodo.valor);

      const nuevoPrefijo = prefijo + (esUltimo ? "    " : "│   ");

      if (nodo.izquierda || nodo.derecha) {
        if (nodo.izquierda) {
          this._mostrarArbolRecursivo(
            nodo.izquierda,
            nuevoPrefijo,
            !nodo.derecha
          );
        }
        if (nodo.derecha) {
          this._mostrarArbolRecursivo(nodo.derecha, nuevoPrefijo, true);
        }
      }
    }
  }
}

// Ejemplo 1: Árbol de números
console.log("🔢 === ÁRBOL BINARIO DE BÚSQUEDA ===");
const arbolNumeros = new ArbolBinarioBusqueda();

// Agregar números
const numeros = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
numeros.forEach((num) => arbolNumeros.agregar(num));

arbolNumeros.mostrarArbol();
arbolNumeros.mostrarEstadisticas();

console.log("\n🔍 Realizando búsquedas...");
arbolNumeros.buscar(25); // Existe
arbolNumeros.buscar(100); // No existe

console.log("\n📋 Diferentes recorridos:");
arbolNumeros.recorrerEnOrden(); // Números ordenados
arbolNumeros.recorrerPreOrden(); // Raíz primero
arbolNumeros.recorrerPostOrden(); // Raíz último

// Ejemplo 2: Árbol de palabras (diccionario)
console.log("\n📚 === DICCIONARIO CON ÁRBOL ===");
class DiccionarioArbol {
  constructor() {
    this.arbol = new ArbolBinarioBusqueda();
  }

  agregarPalabra(palabra) {
    this.arbol.agregar(palabra.toLowerCase());
  }

  buscarPalabra(palabra) {
    return this.arbol.buscar(palabra.toLowerCase());
  }

  obtenerPalabrasOrdenadas() {
    return this.arbol.recorrerEnOrden();
  }
}

const diccionario = new DiccionarioArbol();
const palabras = [
  "manzana",
  "banana",
  "cereza",
  "durazno",
  "fresa",
  "uva",
  "kiwi",
];

console.log("📝 Agregando palabras al diccionario...");
palabras.forEach((palabra) => diccionario.agregarPalabra(palabra));

console.log("\n🔍 Buscando palabras...");
diccionario.buscarPalabra("banana"); // Existe
diccionario.buscarPalabra("naranja"); // No existe

console.log("\n📖 Palabras en orden alfabético:");
const palabrasOrdenadas = diccionario.obtenerPalabrasOrdenadas();

// Ejemplo 3: Árbol de expresiones matemáticas
console.log("\n🧮 === ÁRBOL DE EXPRESIÓN MATEMÁTICA ===");
class NodoExpresion {
  constructor(valor, esOperador = false) {
    this.valor = valor;
    this.esOperador = esOperador;
    this.izquierda = null;
    this.derecha = null;
  }
}

class ArbolExpresion {
  constructor() {
    this.raiz = null;
  }

  // Crear árbol para la expresión: (3 + 5) * 2
  crearExpresionEjemplo() {
    // Crear nodos
    const multiplicacion = new NodoExpresion("*", true);
    const suma = new NodoExpresion("+", true);
    const tres = new NodoExpresion(3);
    const cinco = new NodoExpresion(5);
    const dos = new NodoExpresion(2);

    // Construir árbol
    this.raiz = multiplicacion;
    multiplicacion.izquierda = suma;
    multiplicacion.derecha = dos;
    suma.izquierda = tres;
    suma.derecha = cinco;

    console.log("🌳 Expresión creada: (3 + 5) * 2");
  }

  // Evaluar la expresión
  evaluar() {
    return this._evaluarRecursivo(this.raiz);
  }

  _evaluarRecursivo(nodo) {
    if (!nodo) return 0;

    // Si es un número, devolverlo
    if (!nodo.esOperador) {
      return nodo.valor;
    }

    // Si es un operador, evaluar los hijos
    const izquierda = this._evaluarRecursivo(nodo.izquierda);
    const derecha = this._evaluarRecursivo(nodo.derecha);

    switch (nodo.valor) {
      case "+":
        return izquierda + derecha;
      case "-":
        return izquierda - derecha;
      case "*":
        return izquierda * derecha;
      case "/":
        return izquierda / derecha;
      default:
        return 0;
    }
  }
}

const expresion = new ArbolExpresion();
expresion.crearExpresionEjemplo();
console.log(`🧮 Resultado: ${expresion.evaluar()}`); // (3 + 5) * 2 = 16
```

### Ventajas de los árboles:

- **Búsqueda eficiente**: O(log n) en árboles balanceados
- **Inserción y eliminación**: También O(log n) en promedio
- **Organización natural**: Representan jerarquías de forma intuitiva
- **Flexibilidad**: Pueden adaptarse a muchos problemas diferentes

### Desventajas:

- **Complejidad**: Más complejos de implementar que arrays o listas
- **Memoria extra**: Necesitan espacio para las referencias
- **Pueden desbalancearse**: En el peor caso se comportan como listas (O(n))

### Casos de uso comunes:

1. **Bases de datos**: Índices para búsquedas rápidas
2. **Sistemas de archivos**: Estructura de carpetas
3. **Compiladores**: Análisis sintáctico de código
4. **Juegos**: Árboles de decisión para IA
5. **Interfaces gráficas**: Jerarquía de elementos (DOM)

### Tipos especiales de árboles:

- **AVL**: Árbol auto-balanceado
- **Red-Black**: Otro tipo de árbol balanceado
- **B-Tree**: Usado en bases de datos
- **Trie**: Para búsqueda de palabras
- **Heap**: Para colas de prioridad

## Grafos (Graphs)

### ¿Qué es un grafo?

Un grafo es como un mapa de conexiones entre diferentes puntos. Imagínalo como una red social donde las personas (nodos/vértices) están conectadas por relaciones (aristas/edges). A diferencia de los árboles, los grafos pueden tener ciclos y conexiones más complejas.

### Analogías de la vida real:

- **Redes sociales**: Personas conectadas por amistad
- **Mapas de ciudades**: Ciudades conectadas por carreteras
- **Internet**: Páginas web conectadas por enlaces
- **Sistema de vuelos**: Aeropuertos conectados por rutas
- **Redes eléctricas**: Nodos conectados por cables
- **Juegos**: Tableros donde puedes moverte entre casillas

### ¿Cuándo usar grafos?

- Representar redes de cualquier tipo
- Encontrar rutas más cortas (GPS, navegación)
- Análisis de redes sociales
- Sistemas de recomendación
- Detección de ciclos y dependencias
- Algoritmos de búsqueda y optimización

### Tipos de grafos:

- **Dirigido**: Las conexiones tienen dirección (A → B no es igual a B → A)
- **No dirigido**: Las conexiones son bidireccionales
- **Ponderado**: Las conexiones tienen peso/costo
- **No ponderado**: Todas las conexiones son iguales

### Terminología básica:

- **Vértice/Nodo**: Cada punto del grafo
- **Arista/Edge**: Conexión entre dos vértices
- **Grado**: Número de conexiones de un vértice
- **Camino**: Secuencia de vértices conectados
- **Ciclo**: Camino que regresa al vértice inicial

```javascript
class Grafo {
  constructor(esDirigido = false) {
    this.adyacencias = {};
    this.esDirigido = esDirigido;
  }

  // Agregar un vértice al grafo
  agregarVertice(vertice) {
    if (!this.adyacencias[vertice]) {
      this.adyacencias[vertice] = [];
      console.log(`🔵 Vértice agregado: ${vertice}`);
    } else {
      console.log(`⚠️ El vértice ${vertice} ya existe`);
    }
  }

  // Agregar una arista entre dos vértices
  agregarArista(vertice1, vertice2, peso = 1) {
    // Asegurarse de que ambos vértices existen
    if (!this.adyacencias[vertice1]) {
      this.agregarVertice(vertice1);
    }
    if (!this.adyacencias[vertice2]) {
      this.agregarVertice(vertice2);
    }

    // Agregar la conexión
    if (this.esDirigido) {
      // Solo de vertice1 a vertice2
      this.adyacencias[vertice1].push({ nodo: vertice2, peso });
      console.log(
        `➡️ Arista dirigida: ${vertice1} → ${vertice2} (peso: ${peso})`
      );
    } else {
      // Bidireccional
      this.adyacencias[vertice1].push({ nodo: vertice2, peso });
      this.adyacencias[vertice2].push({ nodo: vertice1, peso });
      console.log(`↔️ Arista: ${vertice1} ↔ ${vertice2} (peso: ${peso})`);
    }
  }

  // Eliminar una arista
  eliminarArista(vertice1, vertice2) {
    if (this.adyacencias[vertice1]) {
      this.adyacencias[vertice1] = this.adyacencias[vertice1].filter(
        (conexion) => conexion.nodo !== vertice2
      );
    }

    if (!this.esDirigido && this.adyacencias[vertice2]) {
      this.adyacencias[vertice2] = this.adyacencias[vertice2].filter(
        (conexion) => conexion.nodo !== vertice1
      );
    }

    console.log(`❌ Arista eliminada: ${vertice1} - ${vertice2}`);
  }

  // Eliminar un vértice y todas sus conexiones
  eliminarVertice(vertice) {
    if (!this.adyacencias[vertice]) {
      console.log(`⚠️ El vértice ${vertice} no existe`);
      return;
    }

    // Eliminar todas las aristas que apuntan a este vértice
    for (let v in this.adyacencias) {
      this.adyacencias[v] = this.adyacencias[v].filter(
        (conexion) => conexion.nodo !== vertice
      );
    }

    // Eliminar el vértice
    delete this.adyacencias[vertice];
    console.log(`🗑️ Vértice eliminado: ${vertice}`);
  }

  // Verificar si existe una arista entre dos vértices
  existeArista(vertice1, vertice2) {
    if (!this.adyacencias[vertice1]) return false;

    return this.adyacencias[vertice1].some(
      (conexion) => conexion.nodo === vertice2
    );
  }

  // Obtener los vecinos de un vértice
  obtenerVecinos(vertice) {
    if (!this.adyacencias[vertice]) {
      console.log(`⚠️ El vértice ${vertice} no existe`);
      return [];
    }

    return this.adyacencias[vertice].map((conexion) => conexion.nodo);
  }

  // Obtener el grado de un vértice (número de conexiones)
  obtenerGrado(vertice) {
    if (!this.adyacencias[vertice]) return 0;
    return this.adyacencias[vertice].length;
  }

  // Búsqueda en profundidad (DFS - Depth First Search)
  busquedaProfundidad(verticeInicio, callback) {
    const visitados = new Set();
    const resultado = [];

    const dfs = (vertice) => {
      visitados.add(vertice);
      resultado.push(vertice);

      if (callback) callback(vertice);

      if (this.adyacencias[vertice]) {
        this.adyacencias[vertice].forEach((conexion) => {
          if (!visitados.has(conexion.nodo)) {
            dfs(conexion.nodo);
          }
        });
      }
    };

    dfs(verticeInicio);
    return resultado;
  }

  // Búsqueda en anchura (BFS - Breadth First Search)
  busquedaAnchura(verticeInicio, callback) {
    const visitados = new Set();
    const cola = [verticeInicio];
    const resultado = [];

    visitados.add(verticeInicio);

    while (cola.length > 0) {
      const verticeActual = cola.shift();
      resultado.push(verticeActual);

      if (callback) callback(verticeActual);

      if (this.adyacencias[verticeActual]) {
        this.adyacencias[verticeActual].forEach((conexion) => {
          if (!visitados.has(conexion.nodo)) {
            visitados.add(conexion.nodo);
            cola.push(conexion.nodo);
          }
        });
      }
    }

    return resultado;
  }

  // Encontrar camino entre dos vértices usando BFS
  encontrarCamino(inicio, destino) {
    if (inicio === destino) return [inicio];

    const visitados = new Set();
    const cola = [[inicio]]; // Cola de caminos
    visitados.add(inicio);

    while (cola.length > 0) {
      const caminoActual = cola.shift();
      const verticeActual = caminoActual[caminoActual.length - 1];

      if (this.adyacencias[verticeActual]) {
        for (let conexion of this.adyacencias[verticeActual]) {
          const vecino = conexion.nodo;

          if (vecino === destino) {
            return [...caminoActual, vecino];
          }

          if (!visitados.has(vecino)) {
            visitados.add(vecino);
            cola.push([...caminoActual, vecino]);
          }
        }
      }
    }

    return null; // No hay camino
  }

  // Detectar si el grafo tiene ciclos
  tieneCiclos() {
    const visitados = new Set();
    const enProceso = new Set();

    const tieneCiclo = (vertice) => {
      visitados.add(vertice);
      enProceso.add(vertice);

      if (this.adyacencias[vertice]) {
        for (let conexion of this.adyacencias[vertice]) {
          const vecino = conexion.nodo;

          if (enProceso.has(vecino)) {
            return true; // Ciclo detectado
          }

          if (!visitados.has(vecino) && tieneCiclo(vecino)) {
            return true;
          }
        }
      }

      enProceso.delete(vertice);
      return false;
    };

    for (let vertice in this.adyacencias) {
      if (!visitados.has(vertice)) {
        if (tieneCiclo(vertice)) {
          return true;
        }
      }
    }

    return false;
  }

  // Mostrar el grafo de forma legible
  mostrar() {
    console.log("\n🕸️ === ESTRUCTURA DEL GRAFO ===");
    console.log(`Tipo: ${this.esDirigido ? "Dirigido" : "No dirigido"}`);

    for (let vertice in this.adyacencias) {
      const conexiones = this.adyacencias[vertice];
      if (conexiones.length === 0) {
        console.log(`${vertice}: (sin conexiones)`);
      } else {
        const conexionesStr = conexiones
          .map((c) => `${c.nodo}${c.peso !== 1 ? `(${c.peso})` : ""}`)
          .join(", ");

        const flecha = this.esDirigido ? "→" : "↔";
        console.log(`${vertice} ${flecha} ${conexionesStr}`);
      }
    }
  }

  // Obtener estadísticas del grafo
  obtenerEstadisticas() {
    const vertices = Object.keys(this.adyacencias);
    let totalAristas = 0;

    for (let vertice in this.adyacencias) {
      totalAristas += this.adyacencias[vertice].length;
    }

    // En grafos no dirigidos, cada arista se cuenta dos veces
    if (!this.esDirigido) {
      totalAristas = totalAristas / 2;
    }

    console.log("\n📊 === ESTADÍSTICAS DEL GRAFO ===");
    console.log(`🔵 Vértices: ${vertices.length}`);
    console.log(`🔗 Aristas: ${totalAristas}`);
    console.log(
      `📈 Densidad: ${(
        (totalAristas / (vertices.length * (vertices.length - 1))) *
        100
      ).toFixed(1)}%`
    );
    console.log(`🔄 Tiene ciclos: ${this.tieneCiclos() ? "Sí" : "No"}`);
  }
}

// Ejemplo 1: Red social simple
console.log("👥 === RED SOCIAL ===");
const redSocial = new Grafo(false); // No dirigido

// Agregar personas
const personas = ["Ana", "Bob", "Carlos", "Diana", "Eva"];
personas.forEach((persona) => redSocial.agregarVertice(persona));

// Agregar amistades
redSocial.agregarArista("Ana", "Bob");
redSocial.agregarArista("Ana", "Carlos");
redSocial.agregarArista("Bob", "Diana");
redSocial.agregarArista("Carlos", "Diana");
redSocial.agregarArista("Diana", "Eva");

redSocial.mostrar();

console.log("\n🔍 Análisis de la red:");
console.log(`Amigos de Ana: ${redSocial.obtenerVecinos("Ana").join(", ")}`);
console.log(`Grado de Diana: ${redSocial.obtenerGrado("Diana")} conexiones`);

// Encontrar camino entre dos personas
const camino = redSocial.encontrarCamino("Ana", "Eva");
console.log(
  `Camino de Ana a Eva: ${camino ? camino.join(" → ") : "No hay camino"}`
);

redSocial.obtenerEstadisticas();

// Ejemplo 2: Mapa de ciudades con distancias
console.log("\n🗺️ === MAPA DE CIUDADES ===");
const mapaCiudades = new Grafo(false); // No dirigido, con pesos

// Agregar ciudades y rutas con distancias
mapaCiudades.agregarArista("Madrid", "Barcelona", 620);
mapaCiudades.agregarArista("Madrid", "Sevilla", 530);
mapaCiudades.agregarArista("Barcelona", "Valencia", 350);
mapaCiudades.agregarArista("Valencia", "Sevilla", 650);
mapaCiudades.agregarArista("Madrid", "Valencia", 350);

mapaCiudades.mostrar();

console.log("\n🛣️ Rutas disponibles desde Madrid:");
console.log(mapaCiudades.obtenerVecinos("Madrid").join(", "));

// Ejemplo 3: Grafo dirigido - Dependencias de tareas
console.log("\n📋 === DEPENDENCIAS DE TAREAS ===");
const dependencias = new Grafo(true); // Dirigido

// Tareas de un proyecto
dependencias.agregarArista("Planificación", "Diseño");
dependencias.agregarArista("Diseño", "Desarrollo");
dependencias.agregarArista("Desarrollo", "Pruebas");
dependencias.agregarArista("Pruebas", "Despliegue");
dependencias.agregarArista("Planificación", "Documentación");
dependencias.agregarArista("Documentación", "Despliegue");

dependencias.mostrar();

console.log("\n📊 Análisis de dependencias:");
console.log("Recorrido DFS desde Planificación:");
const recorridoDFS = dependencias.busquedaProfundidad("Planificación");
console.log(recorridoDFS.join(" → "));

console.log("\nRecorrido BFS desde Planificación:");
const recorridoBFS = dependencias.busquedaAnchura("Planificación");
console.log(recorridoBFS.join(" → "));

dependencias.obtenerEstadisticas();

// Ejemplo 4: Laberinto simple
console.log("\n🏰 === LABERINTO ===");
const laberinto = new Grafo(false);

// Crear un laberinto 3x3 simple
// Posiciones: (0,0), (0,1), (0,2)
//            (1,0), (1,1), (1,2)
//            (2,0), (2,1), (2,2)

const posiciones = [
  "0,0",
  "0,1",
  "0,2",
  "1,0",
  "1,1",
  "1,2",
  "2,0",
  "2,1",
  "2,2",
];

posiciones.forEach((pos) => laberinto.agregarVertice(pos));

// Conectar posiciones adyacentes (sin paredes)
laberinto.agregarArista("0,0", "0,1");
laberinto.agregarArista("0,1", "0,2");
laberinto.agregarArista("0,0", "1,0");
laberinto.agregarArista("1,0", "2,0");
laberinto.agregarArista("2,0", "2,1");
laberinto.agregarArista("2,1", "2,2");
laberinto.agregarArista("1,1", "2,1");
laberinto.agregarArista("0,2", "1,2");

console.log("🚪 Buscando salida del laberinto...");
const entrada = "0,0";
const salida = "2,2";
const caminoSalida = laberinto.encontrarCamino(entrada, salida);

if (caminoSalida) {
  console.log(`✅ Camino encontrado: ${caminoSalida.join(" → ")}`);
  console.log(`📏 Longitud del camino: ${caminoSalida.length - 1} pasos`);
} else {
  console.log("❌ No hay salida del laberinto");
}
```

### Ventajas de los grafos:

- **Flexibilidad**: Pueden representar cualquier tipo de relación
- **Realismo**: Modelan problemas del mundo real de forma natural
- **Algoritmos potentes**: Muchos algoritmos útiles disponibles
- **Análisis de redes**: Permiten estudiar propiedades de conexiones

### Desventajas:

- **Complejidad**: Más complejos que otras estructuras
- **Memoria**: Pueden consumir mucha memoria en grafos densos
- **Algoritmos costosos**: Algunos algoritmos son computacionalmente caros

### Algoritmos importantes en grafos:

1. **DFS (Depth-First Search)**: Búsqueda en profundidad
2. **BFS (Breadth-First Search)**: Búsqueda en anchura
3. **Dijkstra**: Camino más corto con pesos
4. **Floyd-Warshall**: Todos los caminos más cortos
5. **Kruskal/Prim**: Árbol de expansión mínima

### Casos de uso comunes:

1. **GPS y navegación**: Encontrar rutas óptimas
2. **Redes sociales**: Análisis de conexiones y recomendaciones
3. **Internet**: Enrutamiento de paquetes
4. **Juegos**: Mapas y pathfinding
5. **Biología**: Redes de proteínas y genes
6. **Economía**: Análisis de mercados y dependencias

## Análisis de Estructuras de Datos

Cuando se selecciona una estructura de datos, es importante tener en cuenta las operaciones que se realizarán con frecuencia. Aquí hay una breve comparación del rendimiento de algunas estructuras de datos para las operaciones más comunes:

| **Estructura** | **Acceso** | **Búsqueda** | **Inserción** | **Eliminación** |
| -------------- | ---------- | ------------ | ------------- | --------------- |
| Arreglo        | O(1)       | O(n)         | O(n)          | O(n)            |
| Lista Enlazada | O(n)       | O(n)         | O(1)          | O(1)            |
| Pila           | O(n)       | O(n)         | O(1)          | O(1)            |
| Cola           | O(n)       | O(n)         | O(1)          | O(1)            |
| Hash Table     | O(1)       | O(1)         | O(1)          | O(1)            |
| Árbol Binario  | O(log n)   | O(log n)     | O(log n)      | O(log n)        |
| Grafo          | O(V+E)     | O(V+E)       | O(1)          | O(1)            |

### Notación Big-O

- **O(1)**: Tiempo constante
- **O(n)**: Tiempo lineal
- **O(log n)**: Tiempo logarítmico

La eficiencia de una estructura de datos depende en gran medida del contexto en el que se usa. Por ejemplo, los arreglos son ideales para el acceso rápido a elementos, mientras que las listas enlazadas son más eficientes en la inserción y eliminación.

## Material Complementario y Fuentes 📚

Para profundizar en los conceptos de algoritmos y estructuras de datos, aquí tienes una lista de recursos adicionales que pueden ser útiles:

### E-books :

- [Competitive Programmer’s Handbook](https://cses.fi/book/book.pdf) - Un recurso gratuito para aprender algoritmos y técnicas de programación competitiva.
- [Algorithms Notes for Professionals](https://goalkicker.com/AlgorithmsBook/) - Una guía gratuita que cubre una amplia gama de algoritmos con ejemplos en varios lenguajes de programación.
- [Introduction to Algorithms](https://mitpress.mit.edu/9780262033848/introduction-to-algorithms/) - Un libro de referencia popular para el estudio de algoritmos.

### Cursos en Línea :

- [Data Structures and Algorithms Specialization](https://www.coursera.org/specializations/data-structures-algorithms) - Un curso de Coursera que cubre los conceptos fundamentales de estructuras de datos y algoritmos.
- [Algorithms, Part I and II](https://www.coursera.org/specializations/algorithms) - Un curso de Princeton University en Coursera que cubre algoritmos y estructuras de datos fundamentales.

### Videos y Tutoriales :

- [Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer](https://www.youtube.com/watch?v=RBSGKlAvoiM) - Un curso completo de estructuras de datos disponible en YouTube.
- [Khan Academy - Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms) - Una serie de videos gratuitos sobre algoritmos básicos.

### Artículos :

- [10 Data Structures explained](https://www.freecodecamp.org/news/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b/) - Un artículo de FreeCodeCamp que explica estructuras de datos comunes con ejercicios.
- [Big-O Algorithm Complexity Cheat Sheet](https://www.bigocheatsheet.com/) - Una referencia rápida para la complejidad de los algoritmos.

### Libros Recomendados :

- [Grokking Algorithms: An illustrated guide for programmers and other curious people](https://www.manning.com/books/grokking-algorithms) - Un libro que proporciona una introducción visualmente atractiva a los algoritmos.
- [The Algorithm Design Manual](http://algorist.com/) - Un recurso completo para aprender diseño de algoritmos y resolución de problemas.

Estos recursos pueden ayudarte a mejorar tu comprensión de algoritmos y estructuras de datos, así como a prepararte para entrevistas técnicas y concursos de programación.
