class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // target = 7
        // array = [1,2,4,5]
        const numMap = new Map();

        for(let i = 1; i < nums.length; i++){
            const complement = target - num[i];
            // comple = 7 - 2 = 5
            if(numMap.has(complement)){
                return [numMap.get(complement), i]
            }
            numMap.set(num[i], i);
        }
        return [];
    }
}
