export const invert = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[obj[key]] = key;
    }
  }
  return newObj;
};

export const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
