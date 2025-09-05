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

/**
 * Gets the first element of `array`.
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 */
export function first(array) {
  return array != null && array.length ? array[0] : undefined;
}

/**
 * Gets the last element of `array`.
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 */
export function last(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
