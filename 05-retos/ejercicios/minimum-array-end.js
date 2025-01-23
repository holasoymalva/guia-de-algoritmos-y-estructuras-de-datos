// https://leetcode.com/problems/minimum-array-end

// var minEnd = function (n, x) {
//     let a = 1;
//     for (let i = 1; i < n - 1; i++) {
//         a = a * 2;
//     }
//     return a * 2 - 1;
// }

// var minEnd = function(n, x) {
//     let num = x;

//     for(let i = 1; i < n; i ++){
//         num = (num | x) + 1;
//     }
//     return num - 1;
// };

var minEnd = function(n, x) {
    let num = x;

    for(let i = 1; i < n; i ++){
        num++;
        while ((num & x) !== x){
            num++;
        }
    }
    return num;
};
