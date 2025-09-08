const assert = require('assert');
const {
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
} = require('./type-utils.js');

try {
  assert.strictEqual(is(Array, [1]), true, 'is(Array, [1])');
  assert.strictEqual(is(Object, {a:1}), true, 'is(Object, {a:1})');
  assert.strictEqual(is(String, 'hi'), true, 'is(String, "hi")');
  assert.strictEqual(is(String, new String('hi')), true, 'is(String, new String("hi"))');
  assert.strictEqual(is(Number, 1), true, 'is(Number, 1)');
  
  assert.strictEqual(isObject({}), true, 'isObject({})');
  assert.strictEqual(isObject(null), false, 'isObject(null)');
  assert.strictEqual(isObject([]), false, 'isObject([])');
  
  assert.strictEqual(isArray([]), true, 'isArray([])');
  assert.strictEqual(isFunction(() => {}), true, 'isFunction(() => {})');
  assert.strictEqual(isString(''), true, 'isString("")');
  assert.strictEqual(isString(new String('')), false, 'isString(new String("")) should be false');
  
  assert.strictEqual(isNumber(1), true, 'isNumber(1)');
  assert.strictEqual(isNumber(NaN), false, 'isNumber(NaN)');
  
  assert.strictEqual(isBoolean(true), true, 'isBoolean(true)');
  assert.strictEqual(isDate(new Date()), true, 'isDate(new Date())');
  assert.strictEqual(isRegExp(/a/g), true, 'isRegExp(/a/g)');
  assert.strictEqual(isSymbol(Symbol('a')), true, 'isSymbol(Symbol("a"))');
  assert.strictEqual(isNull(null), true, 'isNull(null)');
  assert.strictEqual(isUndefined(undefined), true, 'isUndefined(undefined)');

  console.log('All type-utils tests passed!');
} catch (error) {
  console.error('type-utils tests failed:', error.message);
  process.exit(1);
}