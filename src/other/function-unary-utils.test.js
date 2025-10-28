import { unary } from './function-unary-utils';

describe('unary', () => {
  const multiArgFunc = (a, b, c) => `a: ${a}, b: ${b}, c: ${c}`;
  const sumAll = (...args) => args.reduce((acc, val) => acc + val, 0);

  it('should create a function that accepts only one argument', () => {
    const unaryFunc = unary(multiArgFunc);
    expect(unaryFunc(1, 2, 3)).toBe('a: 1, b: undefined, c: undefined');
  });

  it('should pass the single argument correctly', () => {
    const unarySum = unary(sumAll);
    expect(unarySum(5, 10, 15)).toBe(5);
  });

  it('should maintain the `this` context', () => {
    const obj = {
      value: 10,
      add: function(a, b) {
        return this.value + a + b;
      },
    };

    const unaryAdd = unary(obj.add);
    expect(unaryAdd.call(obj, 5, 20)).toBe(15); // 10 + 5 + undefined
  });

  it('should throw an error if func is not a function', () => {
    expect(() => unary(null)).toThrow('Expected a function');
    expect(() => unary('not a function')).toThrow('Expected a function');
  });

  it('should work with functions that naturally accept one argument', () => {
    const identity = (x) => x;
    const unaryIdentity = unary(identity);
    expect(unaryIdentity(10)).toBe(10);
    expect(unaryIdentity(10, 20)).toBe(10);
  });
});