/**
 * Finds the majority element in an array (element that appears more than n/2 times).
 * Uses Boyer-Moore Voting Algorithm.
 * @param {any[]} arr - The input array.
 * @returns {any|null} The majority element or null if none exists.
 */
export const majorityElement = (arr) => {
  let count = 0;
  let candidate = null;

  for (const x of arr) {
    if (count === 0) {
      candidate = x;
    }
    count += (x === candidate) ? 1 : -1;
  }

  // Verify if it is actually a majority element
  let actualCount = 0;
  for (const x of arr) {
    if (x === candidate) actualCount++;
  }

  return actualCount > arr.length / 2 ? candidate : null;
};
