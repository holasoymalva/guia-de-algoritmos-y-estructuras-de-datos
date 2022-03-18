function merge(arr1,m,arr2,n){
	const newArray = []
	while(arr1.length && arr2.length){
		newArray.push(arr1[0]> arr2[0] ? arr2.shift() : arr1.shift() );
	}
	while(arr1.length){
		newArray.push(arr1.shift());
	}
	while(arr2.length){
		newArray.push(arr2.shft());
	}
	return newArray;
}

arr1=[1,2,3,4] 
m=3
arr2=[1,2,3]
n = 2
console.log(
    merge(arr1,m,arr2,n)
);
