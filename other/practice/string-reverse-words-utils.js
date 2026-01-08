const reverseWords = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the argument.');
  }
  return str.split(' ').reverse().join(' ');
};

export default reverseWords;