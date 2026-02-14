const isPalindrome = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
};

module.exports = { isPalindrome };
