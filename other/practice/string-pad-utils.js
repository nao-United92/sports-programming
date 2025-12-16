const pad = (str, length, chars = ' ') => {
  const strLength = str.length;
  if (strLength >= length) {
    return str;
  }

  const padLength = length - strLength;
  const padLeftLength = Math.floor(padLength / 2);
  const padRightLength = Math.ceil(padLength / 2);

  const padding = chars.repeat(padLength);
  
  return padding.slice(0, padLeftLength) + str + padding.slice(0, padRightLength);
};

module.exports = pad;
