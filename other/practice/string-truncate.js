function truncateString(str, maxLength, suffix = '...') {
  if (typeof str !== 'string') {
    throw new Error('First argument must be a string.');
  }
  if (typeof maxLength !== 'number' || maxLength < 0 || !Number.isInteger(maxLength)) {
    throw new Error('Second argument (maxLength) must be a non-negative integer.');
  }
  if (typeof suffix !== 'string') {
    throw new Error('Third argument (suffix) must be a string.');
  }

  if (str.length > maxLength) {
    // Ensure that the truncated string + suffix doesn't exceed maxLength
    // If suffix itself is longer than maxLength, just return suffix
    if (maxLength <= suffix.length) {
      return suffix.substring(0, maxLength);
    }
    return str.substring(0, maxLength - suffix.length) + suffix;
  }
  return str;
}

module.exports = truncateString;
