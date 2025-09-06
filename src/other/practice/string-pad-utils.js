
export const pad = (str, length, char = ' ') => {
  if (str.length >= length) {
    return str;
  }

  const totalPadding = length - str.length;
  const leftPadding = Math.floor(totalPadding / 2);
  const rightPadding = totalPadding - leftPadding;

  return char.repeat(leftPadding) + str + char.repeat(rightPadding);
};
