const truncateString = (str, maxLength, indicator = '...') => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument.');
  }
  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new TypeError('Expected a non-negative integer for maxLength.');
  }
  if (typeof indicator !== 'string') {
    throw new TypeError('Expected a string for the indicator argument.');
  }

  if (str.length <= maxLength) {
    return str;
  }

  // If maxLength is less than or equal to indicator length, just return indicator
  if (maxLength <= indicator.length) {
    return indicator.slice(0, maxLength); // Return part of indicator if it's too long
  }

  return str.slice(0, maxLength - indicator.length) + indicator;
};

export default truncateString;