/* 
# 904. Fruit Into Baskets
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.
*/

var totalFruit = function(fruits) {
    let left = 0;
    let maxFruits = 0;
    let basket = new Map();

    for(let right = 0; right < fruits.length; right++){
        basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);
        while(basket.size > 2) {
            basket.set(fruits[left], basket.get(fruits[left]) -1);
            if(basket.get(fruits[left]) === 0){
                basket.delete(fruits[left]);
            }
            left++;
        }
        maxFruits = Math.max(maxFruits, right - left +1);
    }
    return maxFruits;
};
