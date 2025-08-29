
import { isPlainObject } from './object-utils'; // Assuming object-utils has isPlainObject

export const deepMergeWith = (object, source, customizer) => {
  const merged = { ...object };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const objValue = merged[key];
      const srcValue = source[key];

      let value;
      if (customizer) {
        value = customizer(objValue, srcValue, key, object, source);
      }

      if (value === undefined) {
        if (Array.isArray(objValue) && Array.isArray(srcValue)) {
          value = [...objValue, ...srcValue];
        } else if (isPlainObject(objValue) && isPlainObject(srcValue)) {
          value = deepMergeWith(objValue, srcValue, customizer);
        } else {
          value = srcValue;
        }
      }
      merged[key] = value;
    }
  }
  return merged;
};
