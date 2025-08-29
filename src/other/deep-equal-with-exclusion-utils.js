
import { deepEqual } from './deep-equal-utils';

const omitKeys = (obj, keysToOmit) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => omitKeys(item, keysToOmit));
  }
  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keysToOmit.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

export const deepEqualWithExclusion = (obj1, obj2, excludeKeys = []) => {
  const cleanedObj1 = omitKeys(obj1, excludeKeys);
  const cleanedObj2 = omitKeys(obj2, excludeKeys);
  return deepEqual(cleanedObj1, cleanedObj2);
};
