class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const charCount1 = new Map();
        const charCount2 = new Map();

        for (let i = 0; i < s.length; i++) {
            charCount1.has(s[i])
                ? charCount1.set(s[i], charCount1.get(s[i]) + 1)
                : charCount1.set(s[i], 1);

            charCount2.has(t[i])
                ? charCount2.set(t[i], charCount2.get(t[i]) + 1)
                : charCount2.set(t[i], 1);
        }
        for(const [char, value] of charCount1){
            if(value !== charCount2.get(char)){
                return false;
            }
        }
        return true;
    }
}
