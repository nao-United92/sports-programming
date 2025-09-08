const curry = (fn, arity = fn.length) => {
  const placeholder = Symbol ? Symbol.for('_') : '_';

  function curried(...args) {
    const argsSanitized = args.slice(0, arity);
    const hasPlaceholder = argsSanitized.includes(placeholder);
    
    if (!hasPlaceholder && argsSanitized.length >= arity) {
      return fn.apply(this, argsSanitized);
    }

    return function(...nextArgs) {
      const newArgs = [...argsSanitized];
      for (let i = 0; i < newArgs.length; i++) {
        if (newArgs[i] === placeholder && nextArgs.length) {
          newArgs[i] = nextArgs.shift();
        }
      }
      return curried.apply(this, [...newArgs, ...nextArgs]);
    };
  }
  
  Object.defineProperty(curried, 'placeholder', {
      value: placeholder,
      writable: false,
      enumerable: false,
      configurable: false
  });

  return curried;
};

module.exports = { curry };