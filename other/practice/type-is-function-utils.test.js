const { isFunction } = require('./type-is-function-utils');

describe('isFunction', () => {
  it('should return true for function declarations', () => {
    function myFunction() {}
    expect(isFunction(myFunction)).toBe(true);
  });

  it('should return true for function expressions', () => {
    const myFunction = function() {};
    expect(isFunction(myFunction)).toBe(true);
  });

  it('should return true for arrow functions', () => {
    const myArrowFunction = () => {};
    expect(isFunction(myArrowFunction)).toBe(true);
  });

  it('should return true for async functions', () => {
    async function myAsyncFunction() {}
    expect(isFunction(myAsyncFunction)).toBe(true);
  });
  
  it('should return false for non-function values', () => {
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(123)).toBe(false);
    expect(isFunction('hello')).toBe(false);
    expect(isFunction(true)).toBe(false);
  });
});
