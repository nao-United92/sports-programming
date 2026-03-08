/**
 * Finds all elements that appear more than floor(n/3) times.
 * Boyer-Moore Voting Algorithm variation.
 * @param {number[]} nums - The input numbers.
 * @returns {number[]} Majority elements.
 */
export const majorityElementN3 = (nums) => {
  let count1 = 0, count2 = 0;
  let candidate1 = null, candidate2 = null;

  for (const n of nums) {
    if (candidate1 !== null && n === candidate1) {
      count1++;
    } else if (candidate2 !== null && n === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = n;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = n;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  const result = [];
  let c1 = 0, c2 = 0;
  for (const n of nums) {
    if (candidate1 !== null && n === candidate1) c1++;
    if (candidate2 !== null && n === candidate2) c2++;
  }

  if (c1 > nums.length / 3) result.push(candidate1);
  if (c2 > nums.length / 3 && candidate2 !== candidate1) result.push(candidate2);

  return result;
};
