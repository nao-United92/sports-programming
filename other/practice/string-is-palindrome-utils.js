const isPalindrome = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the argument.');
  }
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
};

export default isPalindrome;