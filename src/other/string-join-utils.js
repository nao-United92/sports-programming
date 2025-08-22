export const join = (array, separator = ',', lastSeparator = separator) => {
  if (!Array.isArray(array) || array.length === 0) {
    return '';
  }
  if (array.length === 1) {
    return `${array[0]}`;
  }

  const allButLast = array.slice(0, -1);
  const last = array[array.length - 1];

  return `${allButLast.join(separator)}${lastSeparator}${last}`;
};
