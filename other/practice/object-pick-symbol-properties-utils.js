/**
 * Creates an object composed of the Symbol properties of `object`.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object with only Symbol properties.
 * @example
 *
 * const sym1 = Symbol('foo');
 * const sym2 = Symbol('bar');
 * const object = { 'a': 1, [sym1]: 'value1', 'c': 'hello', [sym2]: 123 };
 *
 * pickSymbolProperties(object);
 * // => { [Symbol('foo')]: 'value1', [Symbol('bar')]: 123 }
 */
function pickSymbolProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  // Get all symbol properties, including non-enumerable ones
  const symbols = Object.getOwnPropertySymbols(object);

  symbols.forEach((sym) => {
    result[sym] = object[sym];
  });

  return result;
}

export default pickSymbolProperties;