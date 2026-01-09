export const isEmptyObject = (obj) => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return false;
  }
  return Object.keys(obj).length === 0;
};
