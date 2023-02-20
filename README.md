# Curso de algoritmos y estructuras de datos. 🧮

## INDICE :

* [Fundamentos](https://github.com/malvabombom/curso-de-algoritmos#fundamentos-)
    * [Complejidad Computacional](#complejidad-computacional-wiki-reference)
    * [Analisis de algoritmos](#analisis-de-algoritmos-wiki-reference)
    * [Big O notation](#big-o-notation---notacion-de-la-gran-o)
    * [Capacidad de Memoria](#capacidad-de-memoria)
    * [Tipos de algoritmos](#tipos-de-algoritmos)
    * [Algoritmos de Ordenamiento](#algoritmos-de-ordenamiento)
    * [Algoritmos de Busqueda](#algoritmos-de-busqueda)
    * [Estructura de Datos](#estructuras-de-datos)
* [Algoritmos y Estructura de datos en Javascript](https://github.com/malvabombom/curso-de-algoritmos#js-)
* [Algoritmos y Estructura de datos en Python](https://github.com/malvabombom/curso-de-algoritmos#python-)
* [Algoritmos y Estructura de datos en Golang](https://github.com/malvabombom/curso-de-algoritmos#golang-)
* [Material Complementario](https://github.com/malvabombom/curso-de-algoritmos#bibliografia-)
* [Contribuciones abiertas](https://github.com/malvabombom/curso-de-algoritmos#contributing)

## Fundamentos 📝

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

* Algoritmo de búsqueda binaria: Este algoritmo tiene una complejidad temporal de O(log n), ya que divide la secuencia en mitades y descarta la mitad que no contiene el elemento buscado en cada iteración.

* Algoritmo de ordenamiento por selección: Este algoritmo tiene una complejidad temporal de O(n^2), ya que debe comparar cada elemento con todos los demás para encontrar el mínimo y moverlo a su posición final en la secuencia.

* Algoritmo de ordenamiento rápido (QuickSort): Este algoritmo tiene una complejidad temporal de O(n log n) en el mejor y peor de los casos, lo que lo hace mucho más eficiente que el algoritmo de ordenamiento por selección.

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

* Divide y vencerás: Este patrón se enfoca en dividir un problema grande en problemas más pequeños y manejables, y luego resolver cada uno de ellos por separado.

* Fuerza bruta: Este patrón se enfoca en probar todas las posibles soluciones hasta encontrar la correcta. Es una estrategia simple, pero puede ser ineficiente si el problema es muy grande o complejo.

* Backtracking: Este patrón se enfoca en retroceder y cambiar decisiones previas cuando se llega a un punto en el que se sabe que la solución actual no es viable.

* Programación dinámica: Este patrón se enfoca en resolver subproblemas repetitivos de manera eficiente al almacenar y reutilizar soluciones previas.

* Greedy Algorithm: Este patrón se enfoca en tomar decisiones a corto plazo en busca de una solución óptima.

Estos son solo algunos de los patrones de resolución de problemas más comunes en el análisis de algoritmos. Con el tiempo, los programadores y los investigadores en la materia continúan desarrollando y mejorando estos patrones para hacer frente a problemas más complejos.

## Tipos de algoritmos

Existen varios tipos de algoritmos computacionales, algunos de los cuales son los siguientes:

* Algoritmos de ordenamiento: como se mencionó anteriormente, estos algoritmos organizan una lista de elementos en un orden determinado.

* Algoritmos de búsqueda: estos algoritmos encuentran un elemento específico en una lista o conjunto de datos.

* Algoritmos de grafos: estos algoritmos se utilizan para resolver problemas relacionados con estructuras de grafos, como encontrar rutas óptimas, detectar ciclos y encontrar caminos más cortos.

* Algoritmos de árboles: estos algoritmos se utilizan para resolver problemas relacionados con estructuras de árboles, como encontrar el ancestro común más cercano y realizar búsquedas en profundidad o amplitud.

* Algoritmos de recursión: estos algoritmos resuelven un problema al dividirlo en subproblemas más pequeños y resolviéndolos recursivamente.

* Algoritmos de backtracking: estos algoritmos prueban todas las soluciones posibles para un problema hasta encontrar la solución correcta.

* Algoritmos de hashing: estos algoritmos se utilizan para buscar datos en una tabla hash, que es una estructura de datos que permite un acceso rápido a los elementos.
* Algoritmos de cifrado: estos algoritmos se utilizan para proteger la privacidad y la seguridad de los datos, como en la criptografía y la seguridad informática.

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

Las estructuras de datos son importantes porque permiten a los programas manejar grandes cantidades de información de manera eficiente, lo que puede mejorar el rendimiento y la velocidad de un programa. Además, las estructuras de datos pueden ser utilizadas para resolver una variedad de problemas y tareas en la programación, como búsquedas, clasificaciones, inserciones, eliminaciones, entre otras.

Es importante que los programadores conozcan las diferentes estructuras de datos y cómo se utilizan para diseñar programas efectivos y eficientes. Con una comprensión sólida de las estructuras de datos, los programadores pueden seleccionar la estructura adecuada para un problema y escribir programas más eficientes y elegantes.


## [JS](https://github.com/alchemist-301/curso-de-algoritmos/tree/main/javascript) 🍌

* Algoritmos de Ordenamiento
  * Burbuja
  * Binaria
  * Selection
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
  
## [Python](https://github.com/alchemist-301/curso-de-algoritmos/tree/main/python) 🐍

* Algoritmos de Ordenamiento
  * Burbuja
  * Binaria
  * Selection
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


## [Golang](https://github.com/alchemist-301/curso-de-algoritmos/tree/main/golang) 🫐

* Algoritmos de Ordenamiento
  * Burbuja
  * Binaria
  * Selection
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

## Bibliografia 📚

#### E-books :

* [ Competitive Programmer’s Handbook. ](https://cses.fi/book/book.pdf)
* [ Competitive Programming. ](https://www.comp.nus.edu.sg/~stevenha/myteaching/competitive_programming/cp1.pdf)
* [ Algorithms Notes for Professionals. ](https://openlibra.com/es/book/algorithms-notes-for-professionals)

#### Youtube Tutorials :

* [ Free Code Camp. ](https://www.youtube.com/watch?v=t2CEgPsws3U&t=739s)
* [ Algorthms Preparations List. ](https://www.youtube.com/watch?v=t2CEgPsws3U&list=PLVzHx209dzcWc5-OC8-Has_Jok7ft1Xfs&index=2)

#### Courses :

* [ Udacity Data Structures in Swift. ]()
* [ Udacity Data Structures in Python. ]()
* [ Coursera. ]()

#### Articles:

* [ 10 Data Structures explained. ](https://www.freecodecamp.org/news/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b/)
* [DS-A Workshop @GDGUNAM](https://www.notion.so/DS-A-Workshop-GDGUNAM-8979d2f322d647b5b871da74e862ba3d)

#### Motivation
* [How to write your first technical book. ](https://www.freecodecamp.org/news/how-to-write-your-first-technical-book/)
* [How to build an awesome data science portafolio. ](https://www.freecodecamp.org/news/how-to-build-an-awesome-data-science-portfolio/)
* [5 react projects you need. ](https://www.freecodecamp.org/news/5-react-projects-you-need-in-your-portfolio/)
* [conquering job interview code challenges. ](https://www.freecodecamp.org/news/conquering-job-interview-code-challenges-v2-0/)
* [Job Interview Artitles. ](https://www.freecodecamp.org/news/tag/job-interview/)
* [4 Design Patterns You Should Know](https://www.freecodecamp.org/news/4-design-patterns-to-use-in-web-development/)
* [how-to-write-efficient-views](https://www.freecodecamp.org/news/how-to-write-efficient-views-models-and-queries-in-django/)
* [How to Write QA Documentation That Will Actually Work](https://www.freecodecamp.org/news/how-to-write-qa-documentation-that-will-work/)
* [How to Write Testable Code | Khalil's Methodology](https://www.freecodecamp.org/news/how-to-write-testable-code/)
* [How to Write More Effectively and Develop Your Unique Style](https://www.freecodecamp.org/news/how-to-write-more-effectively-and-develop-your-unique-style/)
* [How to Write Freelance Proposals That Will Win Over Clients](https://www.freecodecamp.org/news/free-web-design-proposal-template/)
* [Data Structures 101](https://rehansattar.hashnode.dev/data-structures-101-graph-traversal-bfs-and-dfs)



## Contributing 

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## Author
Created by HolaSoyMalva.

[![ig]][ig-link] [![tt]][tt-link]

## License
[MIT](https://choosealicense.com/licenses/mit/)


[ig]: https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white
[fb]: https://img.shields.io/badge/Facebook-1877F2?style=flat-square&logo=facebook&logoColor=white
[tt]: https://img.shields.io/badge/tiktok-000000?style=flat-square&logo=tiktok&logoColor=white

[ig-link]: https://www.instagram.com/malvabombom/
[tt-link]: https://www.tiktok.com/@malvabombom
