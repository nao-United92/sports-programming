export const toObjectByKey = (array, keyName) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }
  if (typeof keyName !== 'string' || keyName.trim() === '') {
    throw new TypeError('Expected a non-empty string for keyName');
  }

  const result = {};
  for (const item of array) {
    if (typeof item === 'object' && item !== null && Object.prototype.hasOwnProperty.call(item, keyName)) {
      result[item[keyName]] = item;
    }
  }
  return result;
};
