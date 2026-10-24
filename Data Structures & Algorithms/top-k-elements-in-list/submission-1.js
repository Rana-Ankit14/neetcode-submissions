class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        for (let i=0;i<nums.length; i++){
            if(freqMap.has(nums[i])){
                freqMap.set(nums[i],freqMap.get(nums[i])+1)
            }else{
                freqMap.set(nums[i],1)
            }
        }
        const result = [...freqMap].sort((a,b)=>b[1]-a[1]);
    
        return result.map(value=>value[0]).slice(0,k);
    }
}
