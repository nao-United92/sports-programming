export const flow = (...funcs) => {
  return (...args) => {
    let result = funcs[0](...args);
    for (let i = 1; i < funcs.length; i++) {
      result = funcs[i](result);
    }
    return result;
  };
};

export const flowRight = (...funcs) => {
  return (...args) => {
    let result = funcs[funcs.length - 1](...args);
    for (let i = funcs.length - 2; i >= 0; i--) {
      result = funcs[i](result);
    }
    return result;
  };
};
