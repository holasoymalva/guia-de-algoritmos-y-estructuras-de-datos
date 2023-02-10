def ordenamientoBurbuja(arr):
    n = len(arr)
    intercambios = False
    for i in range(n - 1):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                intercambios = True
                arr[j], arr[j+1] = arr[j+1], arr[j]
        if not intercambios:
            return
    return arr
arr = [5,3,2,4,8];


nums = ordenamientoBurbuja(arr);
print(nums);