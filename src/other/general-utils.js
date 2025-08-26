export const times = (n, iteratee) => {
  n = Math.floor(n);
  if (n < 1) {
    return [];
  }
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = iteratee(i);
  }
  return result;
};

export const random = (lower = 0, upper = 1, floating = false) => {
  if (floating) {
    return Math.min(lower + (Math.random() * (upper - lower)), upper);
  }
  return lower + Math.floor(Math.random() * (upper - lower + 1));
};

let idCounter = 0;
export const uniqueId = (prefix = '') => {
  idCounter++;
  return prefix + idCounter;
};