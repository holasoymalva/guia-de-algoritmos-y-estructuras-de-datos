/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(string) {
    
    const stack = [];

    const brackets_map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }


    for (let char of string){
        if(!brackets_map[char]){
            stack.push(char);
        } else {
            if (stack.pop() !== brackets_map[char]){
                return false;
            }
        }
    }
    return stack.length === 0;
};
