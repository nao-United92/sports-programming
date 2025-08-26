export const take = (array, n = 1) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.slice(0, n < 0 ? 0 : n);
};

export const takeRight = (array, n = 1) => {
  if (!Array.isArray(array)) {
    return [];
  }
  const length = array.length;
  if (n >= length) {
    return [...array];
  }
  return array.slice(length - n);
};

export const drop = (array, n = 1) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.slice(n < 0 ? 0 : n);
};

export const dropRight = (array, n = 1) => {
  if (!Array.isArray(array)) {
    return [];
  }
  const length = array.length;
  if (n >= length) {
    return [];
  }
  return array.slice(0, length - n);
};
