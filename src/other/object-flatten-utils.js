const isRecurseTarget = (val) => val && typeof val === 'object' && !Array.isArray(val) && !(val instanceof Date);

export const flattenObject = (obj, prefix = '') => {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (isRecurseTarget(obj[key]) || Array.isArray(obj[key])) {
      Object.assign(acc, flattenObject(obj[key], newKey));
    } else {
      acc[newKey] = obj[key];
    }
    return acc;
  }, {});
};
