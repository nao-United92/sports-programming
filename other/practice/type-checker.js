const isString = (value) => typeof value === 'string';

const isNumber = (value) => typeof value === 'number' && !isNaN(value);

const isBoolean = (value) => typeof value === 'boolean';

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

const isArray = (value) => Array.isArray(value);

const isFunction = (value) => typeof value === 'function';

const isNull = (value) => value === null;

const isUndefined = (value) => typeof value === 'undefined';

const isNil = (value) => value === null || typeof value === 'undefined';


module.exports = {
  isString,
  isNumber,
  isBoolean,
  isObject,
  isArray,
  isFunction,
  isNull,
  isUndefined,
  isNil,
};
