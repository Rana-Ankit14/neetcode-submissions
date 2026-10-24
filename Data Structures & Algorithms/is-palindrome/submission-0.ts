class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    private isValid(char: string): boolean {
        const code = char.charCodeAt(0);

        const isNumeric = code >= 48 && code <= 57; 
        const isUppercase = code >= 65 && code <= 90; 
        const isLowercase = code >= 97 && code <= 122; 

        return isNumeric || isUppercase || isLowercase;
    }

    isPalindrome(s: string): boolean {
        let start = 0;
        let end = s.length - 1;

        while (start < end) {

            while (start<end && !this.isValid(s[start])) {
                start++;
            }

            while (start<end && !this.isValid(s[end])) {
                end--;
            }
            if (s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}
