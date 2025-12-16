const padStart = (str, length, chars = ' ') => {
  const strLength = str.length;
  if (strLength >= length) {
    return str;
  }

  const padLength = length - strLength;
  const padding = chars.repeat(padLength);
  
  return padding.slice(0, padLength) + str;
};

module.exports = padStart;