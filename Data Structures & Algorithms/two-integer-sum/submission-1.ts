class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const vistedNum = new Map();

        for(let i = 0; i< nums.length; i++){
            const remaningValue = target-nums[i]
            if(vistedNum.has(remaningValue)){
                return [vistedNum.get(remaningValue),i]
            }
            vistedNum.set(nums[i],i);
        }
        
    }
}
