
/**
 * Converts a Roman numeral string to an integer.
 *
 * @param {string} s The Roman numeral string to convert.
 * @returns {number} Returns the integer representation.
 */
export const romanToInteger = (s) => {
  if (typeof s !== 'string' || s.length === 0) {
    throw new Error('Input must be a non-empty string.');
  }

  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currentVal = romanMap[s[i]];
    if (currentVal === undefined) {
      throw new Error('Input contains invalid Roman numeral characters.');
    }
    const nextVal = romanMap[s[i + 1]];

    if (nextVal > currentVal) {
      result += nextVal - currentVal;
      i++; // Skip the next character as it's already processed
    } else {
      result += currentVal;
    }
  }

  return result;
};
