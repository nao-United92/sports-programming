const is = (type, val) => ![, null].includes(val) && val.constructor === type;

const isObject = (val) => val !== null && typeof val === 'object' && !Array.isArray(val);

const isArray = (val) => Array.isArray(val);

const isFunction = (val) => typeof val === 'function';

const isString = (val) => typeof val === 'string';

const isNumber = (val) => typeof val === 'number' && !isNaN(val);

const isBoolean = (val) => typeof val === 'boolean';

const isDate = (val) => val instanceof Date;

const isRegExp = (val) => val instanceof RegExp;

const isSymbol = (val) => typeof val === 'symbol';

const isNull = (val) => val === null;

const isUndefined = (val) => typeof val === 'undefined';

module.exports = {
  is,
  isObject,
  isArray,
  isFunction,
  isString,
  isNumber,
  isBoolean,
  isDate,
  isRegExp,
  isSymbol,
  isNull,
  isUndefined,
};