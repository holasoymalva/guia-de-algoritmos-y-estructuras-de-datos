
#          0        1     2
coches = ["Ford","Malibu","BMW"]

coches.append('Honda')
coches.pop(0)
coches.remove('BMW')

numeros = [3,1,6,23,2,6,5]

print(coches.sort())

ancho = len(coches)

for coche in coches:
    print(coche)

print('coches tiene', ancho , 'coches')