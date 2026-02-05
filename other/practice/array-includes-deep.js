const isEqualDeep = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  if (obj1 && typeof obj1 === 'object' && obj2 && typeof obj2 === 'object') {
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) return false;
      for (let i = 0; i < obj1.length; i++) {
        if (!isEqualDeep(obj1[i], obj2[i])) return false;
      }
      return true;
    } else {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);

      if (keys1.length !== keys2.length) return false;

      for (const key of keys1) {
        if (!keys2.includes(key) || !isEqualDeep(obj1[key], obj2[key])) {
          return false;
        }
      }
      return true;
    }
  }

  return false;
};

const includesDeep = (arr, value) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }

  for (const item of arr) {
    if (isEqualDeep(item, value)) {
      return true;
    }
  }
  return false;
};

module.exports = { includesDeep, isEqualDeep };
