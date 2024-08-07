

function quicksort(array){
    console.log(array);
    if( array.length <= 1){
        return array;
    } else {
        let pivot = array[0];
        let left = [];
        let right = [];
        let i;
        for (i = 1; i < array.length; i++) {
           if (array[i] < pivot) {
                left.push(array[i]);
           } else{
                right.push(array[i]);
           }
        }
        return quicksort(left).concat(pivot, quicksort(right));
    }
}

// Input
let nums = [38,27, 43, 3,9,82,10];

let test = [ 3,  9, 10, 27, 38, 43, 82];

let numOrdenados = quicksort(nums);

console.log(test);
console.log(numOrdenados);