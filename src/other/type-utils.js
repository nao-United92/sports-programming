export const isObject = (value) => value !== null && typeof value === 'object';

export const isFunction = (value) => typeof value === 'function';

export const isString = (value) => typeof value === 'string';

export const isNumber = (value) => typeof value === 'number';

export const isBoolean = (value) => typeof value === 'boolean';

export const isUndefined = (value) => typeof value === 'undefined';

export const isNull = (value) => value === null;

export const isArray = (value) => Array.isArray(value);

export const isDate = (value) => value instanceof Date;

export const isRegExp = (value) => value instanceof RegExp;
