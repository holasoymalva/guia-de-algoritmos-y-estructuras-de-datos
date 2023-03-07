
values = [1,2,3,4,5,6,7,8]
valueToFind = 7

def linealSearch(nums, value):
    counter = 0
    for num in nums:
        if num == value:
            return counter
        counter +=1
    return -1
indice = linealSearch(values, valueToFind)

print(values[indice] == valueToFind)