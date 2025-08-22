export const invert = (object) => {
  const result = {};
  const keys = Object.keys(object);
  for (let i = 0, length = keys.length; i < length; i++) {
    const key = keys[i];
    result[object[key]] = key;
  }
  return result;
};