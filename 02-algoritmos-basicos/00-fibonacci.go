/*
Ejercicio de entrevista
técnica para el puesto
de programador Golang jr
La sucesion de fibonacci

salida: 0; 1; 1; 2; 3, 5; 8;
*/

package main

import "fmt"

func fibonacci(n int) []int {
	secuencia := []int{0, 1}

	for i := 2; i < n; i++ {
		siguiente_valor := secuencia[i-1] + secuencia[i-2]
		secuencia = append(secuencia, siguiente_valor)
	}
	return secuencia
}

func main() {
	resultado := fibonacci(10)
	fmt.Println(resultado)
}
