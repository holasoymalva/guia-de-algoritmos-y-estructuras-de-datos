/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(!s || !t || s.length < t.length ) return "";
    if (s === t) return s;

    const targetFreq = {};
    for(let char of t){
        targetFreq[char] = (targetFreq[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let startIndex = 0 
    let minLen = Infinity;
    let charsNeeded = t.length;

    const windowFreq = {};

    while(right < s.length){
        const rightChar = s[right];

        windowFreq[rightChar] = (windowFreq[rightChar] || 0) + 1;

        if(targetFreq[rightChar] !== undefined && windowFreq[rightChar] <= targetFreq[rightChar] ){
            charsNeeded--;
        }

        while(charsNeeded === 0){

            if(right - left + 1 < minLen){
                minLen = right - left + 1;
                startIndex = left;
            }

            const leftChar = s[left];

            windowFreq[leftChar]--;

            if(targetFreq[leftChar] !== undefined && windowFreq[leftChar] < targetFreq[leftChar] ){
                charsNeeded++;
            }

            left++;
        }
        right++;
    }

    return minLen === Infinity ? "" : s.slice(startIndex, startIndex + minLen);
};
