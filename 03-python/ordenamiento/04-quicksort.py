# input 
nums = [8,4,3,1,6,7,11,9,2,10,5]

def particion(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i = i + 1
            # Swapping
            (arr[i], arr[j]) = (arr[j], arr[i])
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1

def quickSort(arr, low, high):
    if( low < high):
        pivot = particion(arr, low, high)
        print(f'Pivot : {pivot}')
        print(f'ARRAY : {arr}')
        quickSort(arr, low, pivot - 1)
        quickSort(arr, pivot + 1, high)
        
quickSort(nums,0,len(nums) - 1)

print(nums)