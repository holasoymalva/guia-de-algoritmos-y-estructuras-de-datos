num1=[1,2,3,4,5]
num2=[1,2,3]
m=3
n=2
def merge(num1,m,num2,n):
    for i in range(n):
        num1[i+m] = num2[i]
    num1.sort()
    print(num1)

merge(num1,m,num2,n)
