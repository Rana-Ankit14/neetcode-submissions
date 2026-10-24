class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map();

        for (let i = 0; i < strs.length; i++) {
            const currWord = strs[i]
            const charArr = new Array(26).fill(0)
            for(let j=0; j<currWord.length; j++){
                const ascIIvalue = currWord.charCodeAt(j)-97
                charArr[ascIIvalue] = charArr[ascIIvalue]+1;
            }
            const key = charArr.join(',')
            if(!hashMap.has(key)){
                hashMap.set(key,[])
            }
            hashMap.get(key).push(currWord)
        }   
        return Array.from(hashMap.values());
    }
}
