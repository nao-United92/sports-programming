import { sum } from './array-sum-utils.js';

export const average = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return sum(arr) / arr.length;
};
