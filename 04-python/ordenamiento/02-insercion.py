
# Inputs
nums = [8,4,6,3,1,9,5]

def ordenamientoInsercion(array):
    n = len(array)
    for i in range(1, n):
        key = array[i]
        j = i - 1
        while j>= 0 and key < array[j]:
            array[j+1] = array[j]
            j -= 1
        array[j + 1] = key
    return array

print( ordenamientoInsercion(nums))
