const flow = (...funcs) => {
  return function(...args) {
    if (funcs.length === 0) {
      return args.length > 0 ? args[0] : undefined;
    }

    let result = funcs[0].apply(this, args);
    for (let i = 1; i < funcs.length; i++) {
      result = funcs[i].call(this, result);
    }
    return result;
  };
};

module.exports = flow;
