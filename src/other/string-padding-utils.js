export const padStart = (str, length, chars = ' ') => {
  str = String(str);
  let pad = '';
  while (str.length + pad.length < length) {
    pad += chars;
  }
  return pad.slice(0, length - str.length) + str;
};

export const padEnd = (str, length, chars = ' ') => {
  str = String(str);
  let pad = '';
  while (str.length + pad.length < length) {
    pad += chars;
  }
  return str + pad.slice(0, length - str.length);
};

export const pad = (str, length, chars = ' ') => {
  str = String(str);
  const padLength = length - str.length;
  if (padLength <= 0) {
    return str;
  }
  const leftPad = Math.floor(padLength / 2);
  const rightPad = Math.ceil(padLength / 2);
  return padStart('', leftPad, chars) + str + padStart('', rightPad, chars);
};
