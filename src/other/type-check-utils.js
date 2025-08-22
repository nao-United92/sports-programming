const isType = (type) => (value) => typeof value === type;

export const isObject = (value) => value !== null && typeof value === 'object';
export const isString = isType('string');
export const isNumber = isType('number');
export const isFunction = isType('function');
export const isBoolean = isType('boolean');
export const isSymbol = isType('symbol');
export const isUndefined = isType('undefined');

export const isArray = Array.isArray;

export const isDate = (value) => value instanceof Date;
export const isRegExp = (value) => value instanceof RegExp;
