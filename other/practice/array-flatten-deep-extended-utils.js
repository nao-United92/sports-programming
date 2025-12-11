const flattenDeep = (array) => {
  if (!Array.isArray(array)) {
    return array;
  }

  let result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item));
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = flattenDeep;
