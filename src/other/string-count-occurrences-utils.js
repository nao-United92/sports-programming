const countOccurrences = (str, sub) => {
  str = String(str);
  sub = String(sub);
  if (sub.length <= 0) return 0;

  let n = 0;
  let pos = 0;

  while (true) {
    pos = str.indexOf(sub, pos);
    if (pos !== -1) {
      n++;
      pos += sub.length;
    } else {
      break;
    }
  }

  return n;
};

module.exports = { countOccurrences };
