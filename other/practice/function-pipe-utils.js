const pipe = (...funcs) => {
  return function(...args) {
    if (funcs.length === 0) {
      return args.length > 0 ? args[0] : undefined;
    }

    // Apply functions from right to left (opposite of flow)
    // The first function (rightmost in the pipe definition) takes the initial arguments.
    // Subsequent functions (to the left) take the result of the previous one.
    // This is often implemented by reversing the array and then using flow's logic.

    // Let's implement directly for clarity
    const reversedFuncs = [...funcs].reverse();

    let result = reversedFuncs[0].apply(this, args);
    for (let i = 1; i < reversedFuncs.length; i++) {
      result = reversedFuncs[i].call(this, result);
    }
    return result;
  };
};

module.exports = pipe;
