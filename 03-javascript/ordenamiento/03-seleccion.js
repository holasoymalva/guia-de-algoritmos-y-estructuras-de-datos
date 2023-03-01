// Input 

let nums = [72,50,10,44,8,20];

function swap(arr, primerPosicion, segundaPosicion){
    [72,50,10,44,8,20]
    //primerPosicion = 0;
    let temp = arr[primerPosicion]; // 72
    arr[primerPosicion] = arr[segundaPosicion]; // 8
    arr[segundaPosicion] = temp;
}

function ordenamientoSeleccion( nums ){
    let i, j, min;
    for (i = 0; i < nums.length; i++) {
        min = i;
        for(j = i +1; j< nums.length; j++)
            if(nums[j]< nums[min])
                min = j;
        swap(nums,min,i);
    }
    return nums;
}

let demo = ordenamientoSeleccion(nums);

console.log(demo);