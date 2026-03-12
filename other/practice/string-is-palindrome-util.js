const isPalindrome = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
};

module.exports = isPalindrome;
