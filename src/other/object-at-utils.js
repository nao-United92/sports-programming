import { get } from './object-path-utils.js';

export const at = (obj, paths) => {
  const result = [];
  for (const path of paths) {
    result.push(get(obj, path));
  }
  return result;
};