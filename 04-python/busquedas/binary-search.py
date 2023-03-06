nums = [1,2,3,4,5,6,7,8,9,10]
valorAbuscar = 6

def busquedaBinaria(arr,left, right, buscar):
    if right >= left:
        medio = left + (right - left) // 2
        if arr[medio] == buscar:
            return medio
        elif arr[medio] > buscar:
            return busquedaBinaria(arr, left, medio-1, buscar)
        else:
            return busquedaBinaria(arr, medio+1, right, buscar)
    else:
        return -1

resultado = busquedaBinaria(nums, 0, len(nums), valorAbuscar)
print(valorAbuscar == nums[resultado])