// Deeply merges two objects
export const mergeDeep = (target, source) => {
  if (typeof target !== 'object' || target === null) return target;
  if (typeof source !== 'object' || source === null) return target;

  for (const key in source) {
    if (source[key] instanceof Object && key in target && target[key] instanceof Object) {
      mergeDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};
