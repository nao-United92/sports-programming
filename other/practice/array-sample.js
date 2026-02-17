const arraySample = (arr, n = 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new TypeError('Expected a non-negative integer for the second argument.');
  }

  const len = arr.length;
  if (len === 0 || n === 0) {
    return n === 1 ? undefined : [];
  }

  if (n === 1) {
    return arr[Math.floor(Math.random() * len)];
  }

  // If n is greater than or equal to the array length, return a shuffled copy
  if (n >= len) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Otherwise, take n random elements without replacement
  const sampled = new Set();
  while (sampled.size < n) {
    sampled.add(arr[Math.floor(Math.random() * len)]);
  }
  return Array.from(sampled);
};

export default arraySample;