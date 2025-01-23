var generateParenthesis = function(n) {
    const result = [];
    function backtrack(current, open, close,max){
        if (current.length === max * 2){
            result.push(current);
            return;
        }
        if(open < max){
            backtrack( current+'(' , open+1 ,close,max);
        }
        if(close < open){
            backtrack( current+')' , open, close+1,max);
        }
    }

    backtrack('',0,0,n);

    return result;
};
