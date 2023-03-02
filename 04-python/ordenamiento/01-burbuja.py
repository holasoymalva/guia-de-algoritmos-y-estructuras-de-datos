
# Inputs
nums = [5,3,8,4,6]

def ordenamientoBurbuja(array):
    n = len(array)
    for i in range(n):
        for j in range(0, n-i-1):
            if array[j]> array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
                # temp = array[j]
                # array[j] = array[j+1]
                # array[j+1] = temp
    return array

print( ordenamientoBurbuja(nums))


