# Algoritmos Básicos 🧠

Este módulo forma parte del repositorio **"Guía de Algoritmos y Estructuras de Datos"** y está diseñado para ayudarte a mejorar tus habilidades de lógica de programación, algoritmia y manipulación de estructuras de datos. Los ejercicios aquí incluidos cubren conceptos fundamentales, como la manipulación de cadenas, el uso de operaciones matemáticas, la búsqueda y ordenamiento, y técnicas avanzadas como la **programación dinámica**.

## Objetivos 🎯
- Mejorar la capacidad de resolución de problemas.
- Entender cómo funcionan los algoritmos fundamentales.
- Practicar con **JavaScript** y **Python** para implementar algoritmos eficientes.
- Desarrollar habilidades críticas en la manipulación de estructuras de datos básicas y avanzadas.

## Ejercicios Prácticos con Soluciones 📝

### 1. Manipulación de Strings 🔤

#### 1.1 Revertir una Cadena
**Objetivo**: Crear una función que invierta una cadena de texto.

```javascript
// JavaScript
function reverseString(str) {
    // Solución 1: Usando métodos de array
    return str.split('').reverse().join('');
    
    // Solución 2: Usando un bucle
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test
console.log(reverseString("hello")); // "olleh"
```

```python
# Python
def reverse_string(s: str) -> str:
    # Solución 1: Usando slice
    return s[::-1]
    
    # Solución 2: Usando un bucle
    reversed_str = ""
    for char in s:
        reversed_str = char + reversed_str
    return reversed_str

# Test
print(reverse_string("hello"))  # "olleh"
```

#### 1.2 Verificar Palíndromo
**Objetivo**: Determinar si una cadena es un palíndromo (se lee igual al derecho y al revés).

```javascript
// JavaScript
function isPalindrome(str) {
    // Normalizar la cadena: remover espacios y convertir a minúsculas
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Comparar la cadena con su reverso
    return str === str.split('').reverse().join('');
}

// Tests
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
```

```python
# Python
def is_palindrome(s: str) -> bool:
    # Normalizar la cadena
    s = ''.join(char.lower() for char in s if char.isalnum())
    
    # Comparar la cadena con su reverso
    return s == s[::-1]

# Tests
print(is_palindrome("A man, a plan, a canal: Panama"))  # True
print(is_palindrome("race a car"))  # False
```

#### 1.3 Subcadena más Larga sin Caracteres Repetidos
**Objetivo**: Encontrar la longitud de la subcadena más larga sin caracteres que se repitan.

```javascript
// JavaScript
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = new Map();
    
    for (let end = 0; end < s.length; end++) {
        if (charMap.has(s[end])) {
            start = Math.max(start, charMap.get(s[end]) + 1);
        }
        charMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Tests
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
```

```python
# Python
def length_of_longest_substring(s: str) -> int:
    char_map = {}
    max_length = start = 0
    
    for end, char in enumerate(s):
        if char in char_map:
            start = max(start, char_map[char] + 1)
        char_map[char] = end
        max_length = max(max_length, end - start + 1)
    
    return max_length

# Tests
print(length_of_longest_substring("abcabcbb"))  # 3
print(length_of_longest_substring("bbbbb"))  # 1
```

### 2. Operaciones Matemáticas 🔢

#### 2.1 Verificar Número Primo
**Objetivo**: Determinar si un número es primo.

```javascript
// JavaScript
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    // Verificar divisibilidad hasta la raíz cuadrada
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Tests
console.log(isPrime(17)); // true
console.log(isPrime(4)); // false
```

```python
# Python
def is_prime(num: int) -> bool:
    if num <= 1:
        return False
    if num <= 3:
        return True
    
    # Verificar divisibilidad hasta la raíz cuadrada
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

# Tests
print(is_prime(17))  # True
print(is_prime(4))   # False
```

#### 2.2 Secuencia de Fibonacci
**Objetivo**: Generar los primeros n números de la secuencia de Fibonacci.

```javascript
// JavaScript
function fibonacci(n) {
    // Solución iterativa
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib.slice(0, n);
    
    // Solución recursiva (menos eficiente)
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const seq = fibonacci(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
}

// Test
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
```

```python
# Python
def fibonacci(n: int) -> list:
    # Solución iterativa
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib[:n]
    
    # Solución con generador
    def fib_gen(n):
        a, b = 0, 1
        for _ in range(n):
            yield a
            a, b = b, a + b
            
    return list(fib_gen(n))

# Test
print(fibonacci(8))  # [0, 1, 1, 2, 3, 5, 8, 13]
```

### 3. Búsqueda y Ordenamiento 🔍

#### 3.1 Encontrar Máximo y Mínimo
**Objetivo**: Encontrar el número más grande y más pequeño en una lista.

```javascript
// JavaScript
function findMinMax(arr) {
    if (!arr.length) return null;
    
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
    
    // Solución alternativa sin métodos nativos
    let min = arr[0];
    let max = arr[0];
    
    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    
    return { min, max };
}

// Test
console.log(findMinMax([1, 5, 3, 2, 4])); // { min: 1, max: 5 }
```

```python
# Python
def find_min_max(arr: list) -> dict:
    if not arr:
        return None
    
    # Solución usando funciones nativas
    return {
        'min': min(arr),
        'max': max(arr)
    }
    
    # Solución manual
    min_val = max_val = arr[0]
    for num in arr:
        if num < min_val:
            min_val = num
        if num > max_val:
            max_val = num
    
    return {'min': min_val, 'max': max_val}

# Test
print(find_min_max([1, 5, 3, 2, 4]))  # {'min': 1, 'max': 5}
```

### 4. Programación Dinámica 🧮

#### 4.1 Problema de la Escalera
**Objetivo**: Calcular de cuántas formas diferentes se pueden subir n escalones si se pueden subir 1 o 2 escalones a la vez.

```javascript
// JavaScript
function climbStairs(n) {
    if (n <= 2) return n;
    
    // Solución con programación dinámica
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

// Tests
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
```

```python
# Python
def climb_stairs(n: int) -> int:
    if n <= 2:
        return n
    
    # Solución con programación dinámica
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

# Tests
print(climb_stairs(3))  # 3
print(climb_stairs(4))  # 5
```

## Tips y Consideraciones 💡

1. **Complejidad Temporal**:
   - Siempre considera la eficiencia de tu solución
   - Busca optimizar los algoritmos cuando sea posible
   - Conoce las complejidades Big O comunes

2. **Manejo de Casos Especiales**:
   - Valores vacíos o nulos
   - Números negativos cuando no se esperan
   - Cadenas vacías o con caracteres especiales

3. **Buenas Prácticas**:
   - Nombra variables y funciones descriptivamente
   - Comenta el código cuando sea necesario
   - Incluye validaciones de entrada
   - Escribe tests para verificar la funcionalidad

## Recursos Adicionales 📚

- [LeetCode - Problemas de práctica](https://leetcode.com/)
- [HackerRank - Algoritmos](https://www.hackerrank.com/domains/algorithms)
- [Visualización de Algoritmos](https://visualgo.net/)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
