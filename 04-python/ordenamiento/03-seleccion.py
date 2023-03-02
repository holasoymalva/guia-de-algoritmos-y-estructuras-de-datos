# input 
nums = [10,5,1,20,2,6]

def ordenamientoSeleccion(array):
    n = len(array)
    for i  in range(n):
        min = i 
        for j in range(i+1,n):
            if array[min] > array[j]:
                min = j
        # array[i], array[min] = array[min], array[i]
        temp = array[i]
        array[i] = array[min]
        array[min] = temp
    return array

print( ordenamientoSeleccion(nums))
