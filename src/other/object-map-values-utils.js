export const mapValues = (object, iteratee) => {
  const result = {};
  Object.keys(object).forEach(key => {
    result[key] = iteratee(object[key], key, object);
  });
  return result;
};
