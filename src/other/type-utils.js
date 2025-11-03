export const isNumber = (value) => typeof value === 'number' && isFinite(value);
export const isString = (value) => typeof value === 'string' || value instanceof String;
export const isBoolean = (value) => typeof value === 'boolean';
export const isFunction = (value) => typeof value === 'function';
export const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
export const isArray = (value) => Array.isArray(value);
export const isDate = (value) => value instanceof Date;
