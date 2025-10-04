
/**
 * Converts an integer to a Roman numeral.
 *
 * @param {number} num The integer to convert (1 to 3999).
 * @returns {string} Returns the Roman numeral representation.
 */
export const integerToRoman = (num) => {
  if (num < 1 || num > 3999 || !Number.isInteger(num)) {
    throw new Error('Input must be an integer between 1 and 3999.');
  }

  const numerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];

  let result = '';
  for (const { value, symbol } of numerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};
