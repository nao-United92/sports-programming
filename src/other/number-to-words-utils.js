
/**
 * Converts a number to its word representation.
 *
 * @param {number} num The number to convert.
 * @returns {string} Returns the word representation of the number.
 */
export const numberToWords = (num) => {
  if (!Number.isFinite(num)) {
    throw new Error('Input must be a finite number.');
  }
  if (num === 0) {
    return 'zero';
  }

  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const scales = ['', 'thousand', 'million', 'billion', 'trillion'];

  let words = '';
  let isNegative = false;

  if (num < 0) {
    isNegative = true;
    num = Math.abs(num);
  }

  const convertChunk = (n) => {
    let chunkWords = '';
    if (n % 100 < 20) {
      chunkWords = teens[n % 100 - 10] || units[n % 10];
      n = Math.floor(n / 100);
    } else {
      chunkWords = units[n % 10];
      n = Math.floor(n / 10);
      chunkWords = tens[n % 10] + (chunkWords ? '-' + chunkWords : '');
      n = Math.floor(n / 10);
    }
    if (n > 0) {
      chunkWords = units[n] + ' hundred' + (chunkWords ? ' ' + chunkWords : '');
    }
    return chunkWords;
  };

  let i = 0;
  while (num > 0) {
    const chunk = num % 1000;
    if (chunk !== 0) {
      const chunkWords = convertChunk(chunk);
      words = chunkWords + ' ' + scales[i] + (words ? ' ' + words : '');
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return (isNegative ? 'negative ' : '') + words.trim();
};
