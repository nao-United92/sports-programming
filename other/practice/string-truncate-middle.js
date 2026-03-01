const stringTruncateMiddle = (str, len, ellipsis = '...') => {
  if (str.length <= len) return str;
  if (len <= ellipsis.length) return ellipsis.slice(0, len);
  const charsLeft = len - ellipsis.length;
  const charsAtStart = Math.ceil(charsLeft / 2);
  const charsAtEnd = Math.floor(charsLeft / 2);
  return (
    str.slice(0, charsAtStart) +
    ellipsis +
    str.slice(str.length - charsAtEnd)
  );
};

module.exports = stringTruncateMiddle;
