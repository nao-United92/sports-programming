// Invert keys and values of an object
export const invert = (object) => {
  if (!object || typeof object !== 'object') return {};
  
  return Object.keys(object).reduce((acc, key) => {
    acc[object[key]] = key;
    return acc;
  }, {});
};
