export const isNumber = (value) => typeof value === 'number' && isFinite(value);

export const isString = (value) => typeof value === 'string';

export const isBoolean = (value) => typeof value === 'boolean';

export const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

export const isArray = (value) => Array.isArray(value);

export const isFunction = (value) => typeof value === 'function';

export const isNull = (value) => value === null;

export const isUndefined = (value) => typeof value === 'undefined';

export const isNil = (value) => value === null || typeof value === 'undefined';

export const isDate = (value) => value instanceof Date;

export const isRegExp = (value) => value instanceof RegExp;

export const isError = (value) => value instanceof Error;

export const isSymbol = (value) => typeof value === 'symbol';