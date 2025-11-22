const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const isObject = (obj) => obj === Object(obj) && !Array.isArray(obj);

export const keysToSnakeCase = (obj) => {
  if (isObject(obj)) {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      newObj[toSnakeCase(key)] = keysToSnakeCase(obj[key]);
    });
    return newObj;
  } else if (Array.isArray(obj)) {
    return obj.map((i) => keysToSnakeCase(i));
  }
  return obj;
};