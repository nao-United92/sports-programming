export const pick = (obj, props) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const newObj = {};
  props.forEach(prop => {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};