const isPlainObject = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(obj);
  return proto === Object.prototype || proto === null;
};

export default isPlainObject;
