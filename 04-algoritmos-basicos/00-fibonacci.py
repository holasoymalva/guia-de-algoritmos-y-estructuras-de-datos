"""
Ejercicio de entrevista 
técnica para el puesto 
de programador python jr
La sucesion de fibonacci 

salida: 0; 1; 1; 2; 3, 5; 8;
"""


def fibonacci(n):
    secuencia = [0,1]
    while len(secuencia)<n:
        siguiente_valor = secuencia[-1] + secuencia[-2]
        secuencia.append(siguiente_valor)
    return secuencia

print(fibonacci(10))

def fibo_recursiva(n):
    if n <= 1:
        return n
    else:
        return fibo_recursiva(n-1)+fibo_recursiva(n-2)
    
for i in range(10):
    print(fibo_recursiva(i))

