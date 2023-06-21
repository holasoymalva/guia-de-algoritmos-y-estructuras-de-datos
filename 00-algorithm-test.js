function analizarComplejidad(programa, tamañoEntrada) {
  const start = performance.now();
  
  // Ejecutar el programa con el tamaño de entrada dado
  // Aquí debes insertar el código del usuario en el contexto adecuado para ejecutarlo
  
  const end = performance.now();
  const tiempoEjecucion = end - start;
  
  console.log(`Tiempo de ejecución: ${tiempoEjecucion} milisegundos`);
}

// Obtener el código del usuario y el tamaño de entrada
const codigoUsuario = prompt('Ingrese su programa en JavaScript:');
const tamañoEntrada = prompt('Ingrese el tamaño de entrada:');

// Llamar a la función para analizar la complejidad algorítmica del programa
analizarComplejidad(codigoUsuario, tamañoEntrada);
