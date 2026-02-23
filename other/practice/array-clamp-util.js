import { clamp } from './math-clamp';

export const clampList = (arr, min, max) => {
  if (!Array.isArray(arr)) return [];
  return arr.map(val => clamp(val, min, max));
};
