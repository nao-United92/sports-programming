export const isString = (value) => {
  return typeof value === 'string';
};

export const isNumber = (value) => {
  return typeof value === 'number' && !isNaN(value);
};

export const isObject = (value) => {
  return value !== null && typeof value === 'object';
};

export const isArray = (value) => {
  return Array.isArray(value);
};