const { curry } = require('./function-curry-utils.js');

describe('curry', () => {
  const add = (a, b, c) => a + b + c;

  it('should curry a function and allow partial application', () => {
    const curriedAdd = curry(add);
    const add5 = curriedAdd(2, 3);
    expect(add5(5)).toBe(10);
  });

  it('should return the result immediately if all arguments are provided', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });

  it('should work with multiple partial applications', () => {
    const curriedAdd = curry(add);
    const add1 = curriedAdd(1);
    const add1and2 = add1(2);
    expect(add1and2(3)).toBe(6);
  });

  it('should maintain the correct `this` context (though not explicitly used here)', () => {
    const obj = {
      x: 10,
      addThis: function(a, b) { return this.x + a + b; }
    };
    const curriedAddThis = curry(obj.addThis);
    const boundAdd = curriedAddThis.bind(obj);
    expect(boundAdd(1, 2)).toBe(13);
  });
});