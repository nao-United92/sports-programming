/**
 * Finds all elements that appear more than n/k times.
 * Generalization of Boyer-Moore.
 * @param {any[]} arr - The input array.
 * @param {number} k - The divisor.
 * @returns {any[]} Elements appearing more than n/k times.
 */
export const majorityElementsK = (arr, k) => {
  if (k <= 1) return [];
  
  const candidates = new Map();

  for (const x of arr) {
    if (candidates.has(x)) {
      candidates.set(x, candidates.get(x) + 1);
    } else if (candidates.size < k - 1) {
      candidates.set(x, 1);
    } else {
      for (const [key, count] of candidates.entries()) {
        if (count === 1) {
          candidates.delete(key);
        } else {
          candidates.set(key, count - 1);
        }
      }
    }
  }

  // Verification
  const result = [];
  const actualCounts = new Map();
  for (const x of arr) {
    if (candidates.has(x)) {
      actualCounts.set(x, (actualCounts.get(x) || 0) + 1);
    }
  }

  for (const [key, count] of actualCounts.entries()) {
    if (count > arr.length / k) {
      result.push(key);
    }
  }

  return result;
};
