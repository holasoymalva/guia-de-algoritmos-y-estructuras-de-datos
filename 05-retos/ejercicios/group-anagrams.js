var groupAnagrams = function(strs) {
    const groups = {};

    for(let str of strs){
        const key = str.split('').sort().join('');

        if(!groups[key]){
            groups[key] = []
        }
        groups[key].push(str);
    }
    return Object.values(groups)
};
