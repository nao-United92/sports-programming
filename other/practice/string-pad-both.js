const stringPadBoth = (str, len, char = ' ') => {
  if (str.length >= len) return str;
  const paddingLen = len - str.length;
  const padStartLen = Math.floor(paddingLen / 2);
  const padEndLen = paddingLen - padStartLen;
  return str.padStart(str.length + padStartLen, char).padEnd(len, char);
};

module.exports = stringPadBoth;
