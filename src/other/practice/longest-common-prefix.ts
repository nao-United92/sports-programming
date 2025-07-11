/*
 * Problem: Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 */

function longestCommonPrefix(strs: string[]): string {
    // Your code here
    return "";
}

function areAllStringsEmpty(strs: string[]): boolean {
    for (const s of strs) {
        if (s.length > 0) {
            return false;
        }
    }
    return true;
}

// You can add test cases here to verify your solution
// For example:
// console.log(longestCommonPrefix(["flower","flow","flight"])); // Expected: "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"]));    // Expected: ""
// console.log(longestCommonPrefix(["apple", "apricot", "april"])); // Expected: "ap"
// console.log(longestCommonPrefix(["a"])); // Expected: "a"
// console.log(longestCommonPrefix(["", "b"])); // Expected: ""
