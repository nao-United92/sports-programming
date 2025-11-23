import { negate } from './function-negate-utils';

describe('negate', () => {
  it('should negate the result of a predicate function', () => {
    const isEven = (n) => n % 2 === 0;
    const isOdd = negate(isEven);

    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
  });

  it('should work with functions that return truthy/falsy values', () => {
    const returnsTruthy = () => 'hello';
    const returnsFalsy = () => 0;

    const negatedTruthy = negate(returnsTruthy);
    const negatedFalsy = negate(returnsFalsy);

    expect(negatedTruthy()).toBe(false);
    expect(negatedFalsy()).toBe(true);
  });

  it('should pass arguments to the original predicate', () => {
    const myPredicate = jest.fn();
    const negatedPredicate = negate(myPredicate);

    negatedPredicate(1, 'a', true);

    expect(myPredicate).toHaveBeenCalledWith(1, 'a', true);
  });

  it('should maintain the `this` context', () => {
    const myObj = {
      value: 5,
      isGreaterThanTen: function() { return this.value > 10; },
    };
    myObj.isNotGreaterThanTen = negate(myObj.isGreaterThanTen);

    expect(myObj.isNotGreaterThanTen()).toBe(true);

    myObj.value = 15;
    expect(myObj.isNotGreaterThanTen()).toBe(false);
  });
});