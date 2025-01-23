
# Retos de Programación 🎯

Colección de ejercicios prácticos para mejorar tus habilidades en algoritmos y estructuras de datos usando JavaScript o Python.

[⬅️ Volver al inicio](../README.md)

## Arrays y Strings

### 1. Encontrar el Elemento Faltante
Dado un array de n-1 números enteros en el rango de 1 a n, encuentra el número faltante.

**Ejemplo:**
```javascript
Input: [1, 2, 4, 6, 3, 7, 8]
Output: 5
```

### 2. Matriz en Espiral
Imprime una matriz en forma de espiral.

**Ejemplo:**
```javascript
Input: [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
]
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Estructuras de Datos

### 3. Implementar una Cola usando Pilas
Implementa una cola usando solo pilas.

### 4. LRU Cache
Implementa una estructura de caché que elimine el elemento menos recientemente usado cuando alcance su capacidad.

## Árboles y Grafos

### 5. Validar BST
Verifica si un árbol binario es un árbol de búsqueda binaria válido.

### 6. Encontrar Islas
Cuenta el número de islas en una matriz 2D (una isla está rodeada por agua y se forma conectando tierras adyacentes).

**Ejemplo:**
```javascript
Input: [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

## Programación Dinámica

### 7. Caminos Únicos
Encuentra el número de caminos únicos desde la esquina superior izquierda hasta la esquina inferior derecha de una matriz.

### 8. Subsecuencia Común más Larga
Encuentra la longitud de la subsecuencia común más larga entre dos strings.

## Backtracking

### 9. Generar Paréntesis
Genera todas las combinaciones posibles de paréntesis bien formados.

**Ejemplo:**
```javascript
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

## Intervalos y Programación

### 10. Salas de Conferencia
Dado un array de intervalos de tiempo de reuniones donde intervals[i] = [inicio_i, fin_i], devuelve el número mínimo de salas de conferencia necesarias.

**Ejemplo 1:**
```javascript
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
```

**Ejemplo 2:**
```javascript
Input: intervals = [[7,10],[2,4]]
Output: 1
```

## Grafos y Transformación de Palabras

### 11. Secuencias de Transformación de Palabras
Dadas dos palabras (beginWord y endWord) y un diccionario wordList, encuentra todas las secuencias más cortas para transformar beginWord en endWord, donde:
- Cada par de palabras adyacentes difiere en una sola letra
- Cada palabra intermedia debe estar en wordList
- endWord debe ser la última palabra

**Ejemplo 1:**
```javascript
Input: 
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]

Output: [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
]
```

**Ejemplo 2:**
```javascript
Input: 
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []
// El endWord "cog" no está en wordList
```

### 12. N-Reinas
Coloca N reinas en un tablero de ajedrez NxN sin que se amenacen entre sí.

## Algoritmos Voraces (Greedy)

### 13. Problema del Cambio
Encuentra el número mínimo de monedas que suman una cantidad dada.

### 14. Saltos Mínimos
Encuentra el número mínimo de saltos necesarios para llegar al final del array.

## Consejos para Resolver los Retos 💡

1. Antes de codificar, planifica tu solución
2. Considera casos extremos (arrays vacíos, valores negativos, etc.)
3. Optimiza la solución inicial
4. Escribe pruebas unitarias

## Estructura de las Soluciones

Las soluciones deben incluir:
- Descripción del enfoque
- Complejidad temporal y espacial
- Código documentado
- Casos de prueba

## Contribuir

Si deseas agregar nuevos retos:
1. Fork el repositorio
2. Crea una rama para tu reto
3. Añade el reto siguiendo el formato establecido
4. Envía un pull request

## Recursos de Práctica 📚

- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/)
- [CodeWars](https://www.codewars.com/)
- [Project Euler](https://projecteuler.net/)
