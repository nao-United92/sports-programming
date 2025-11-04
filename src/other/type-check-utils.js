
export const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
export const isArray = (value) => Array.isArray(value);
export const isFunction = (value) => typeof value === 'function';
export const isString = (value) => typeof value === 'string';
export const isNumber = (value) => typeof value === 'number' && !isNaN(value);
export const isBoolean = (value) => typeof value === 'boolean';
export const isNull = (value) => value === null;
export const isUndefined = (value) => typeof value === 'undefined';
export const isDate = (value) => value instanceof Date;
