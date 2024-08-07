# Notas de Algoritmos en Python 🐍

Las notas de algoritmos en Python proporcionan una guía para aprender los conceptos fundamentales de los algoritmos y su implementación en el lenguaje de programación Python. Las notas cubren los conceptos básicos de los algoritmos, como la búsqueda y ordenamiento, junto con ejemplos detallados y explicaciones paso a paso sobre cómo implementar algoritmos en Python. Las notas también incluyen ejercicios y proyectos para ayudarte a consolidar tu comprensión de los algoritmos y su aplicación en el desarrollo de software. Al finalizar estas notas, deberías tener una sólida comprensión de los algoritmos y cómo se pueden aplicar para resolver problemas de programación en Python.

## Índice:

* Algoritmos de Ordenamiento
  * [Burbuja](#burbuja)
  * [Selection](#selection)
  * [Insertion](#insertion)
  * [QuickSort](#quicksort)
  * [Análisis de Algoritmos de Ordenamiento](#analisis-de-algoritmos-de-ordemamiento)

* Algoritmos de Búsqueda
  * [Búsqueda Lineal](#busqueda-lineal)
  * [Búsqueda Binaria](#busqueda-binaria)



## Algoritmos de Ordenamiento

### Burbuja

El algoritmo de ordenamiento por burbuja es uno de los algoritmos de ordenamiento más simples. Funciona iterando sobre la lista de elementos y comparando cada par adyacente de elementos. Si un par de elementos está en el orden incorrecto, el algoritmo los intercambia. Este proceso se repite hasta que la lista está ordenada.

```python
# Función auxiliar para intercambiar elementos en una lista
def swap(arr, pos1, pos2):
    temp = arr[pos1]
    arr[pos1] = arr[pos2]
    arr[pos2] = temp

# Función de ordenamiento burbuja
def ordenamiento_burbuja(arr):
    for i in range(len(arr)):
        for j in range(0, len(arr) - i - 1):
            # Si el elemento actual es mayor que el siguiente, se intercambian
            if arr[j] > arr[j + 1]:
                swap(arr, j, j + 1)
    return arr

# Ejemplo de uso
arreglo1 = [5, 3, 8, 4, 6]
print(ordenamiento_burbuja(arreglo1))  # Output: [3, 4, 5, 6, 8]
```

###  Selection
El algoritmo de ordenamiento por selección busca el elemento más pequeño en una lista y lo intercambia con el primer elemento no ordenado. Luego, busca el segundo elemento más pequeño y lo intercambia con el segundo elemento no ordenado, y así sucesivamente, hasta que toda la lista está ordenada.

```python
# Función auxiliar para intercambiar elementos en una lista
def swap(arr, pos1, pos2):
    temp = arr[pos1]
    arr[pos1] = arr[pos2]
    arr[pos2] = temp

# Función de ordenamiento por selección
def ordenamiento_seleccion(nums):
    for i in range(len(nums)):
        min_idx = i
        for j in range(i + 1, len(nums)):
            if nums[j] < nums[min_idx]:
                min_idx = j
        swap(nums, min_idx, i)
    return nums

# Ejemplo de uso
nums = [72, 50, 10, 44, 8, 20]
print(ordenamiento_seleccion(nums))  # Output: [8, 10, 20, 44, 50, 72]
```

### Insertion

El algoritmo de ordenamiento por inserción construye la lista ordenada de izquierda a derecha, un elemento a la vez. Toma un elemento y lo coloca en su posición correcta en la parte ordenada de la lista.

```python
# Función de ordenamiento por inserción
def ordenamiento_por_insercion(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        # Desplaza los elementos mayores que el "key" hacia la derecha
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        # Inserta el "key" en su posición correcta
        arr[j + 1] = key
    return arr

# Ejemplo de uso
arreglo = [8, 4, 6, 3, 1, 9, 5]
print(ordenamiento_por_insercion(arreglo))  # Output: [1, 3, 4, 5, 6, 8, 9]
```

### QuickSort

El algoritmo de ordenamiento rápido (QuickSort) es un algoritmo eficiente de ordenamiento que utiliza el método "divide y vencerás". El algoritmo selecciona un "pivote" y reordena la lista de tal manera que todos los elementos menores que el pivote están antes que él, y todos los elementos mayores están después. Luego, se aplica el mismo procedimiento recursivamente a las sublistas de elementos menores y mayores.

```python
# Función de ordenamiento rápido
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]
        left = [x for x in arr[1:] if x < pivot]
        right = [x for x in arr[1:] if x >= pivot]
        return quicksort(left) + [pivot] + quicksort(right)

# Ejemplo de uso
nums = [38, 27, 43, 3, 9, 82, 10]
print(quicksort(nums))  # Output: [3, 9, 10, 27, 38, 43, 82]
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

```python
def busqueda_lineal(arr, value):
    for i in range(len(arr)):
        if arr[i] == value:
            return i  # Devuelve el índice del valor encontrado
    return -1  # Devuelve -1 si el valor no se encuentra en la lista

# Ejemplo de uso
values = [1, 2, 3, 4, 5, 6, 7]
value_to_find = 6
print(busqueda_lineal(values, value_to_find))  # Output: 5
```

### Busqueda Binaria
La búsqueda binaria es un método eficiente para encontrar un elemento en una lista ordenada. Funciona dividiendo repetidamente el intervalo de búsqueda a la mitad hasta que se encuentra el elemento. Requiere que la lista esté ordenada previamente.

```python
def busqueda_binaria(arr, target):
    izquierda = 0
    derecha = len(arr) - 1
    while izquierda <= derecha:
        medio = (izquierda + derecha) // 2
        if arr[medio] == target:
            return medio  # Devuelve el índice del valor encontrado
        elif arr[medio] < target:
            izquierda = medio + 1  # Continúa la búsqueda en la mitad derecha
        else:
            derecha = medio - 1  # Continúa la búsqueda en la mitad izquierda
    return -1  # Devuelve -1 si el valor no se encuentra en la lista

# Ejemplo de uso
valores_ordenados = [1, 2, 3, 4, 5, 6, 7]
valor_a_buscar = 4
print(busqueda_binaria(valores_ordenados, valor_a_buscar))  # Output: 3
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
