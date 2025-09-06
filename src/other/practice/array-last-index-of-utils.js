
export const lastIndexOf = (array, value, fromIndex) => {
  if (!Array.isArray(array)) {
    return -1;
  }

  let start = fromIndex;
  if (start === undefined) {
    start = array.length - 1;
  } else if (start < 0) {
    start = array.length + start;
  }

  for (let i = Math.min(start, array.length - 1); i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
