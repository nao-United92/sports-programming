const padEnd = (str, length, chars = ' ') => {
  const strLength = str.length;
  if (strLength >= length) {
    return str;
  }

  const padLength = length - strLength;
  const padding = chars.repeat(padLength);
  
  return str + padding.slice(0, padLength);
};

module.exports = padEnd;