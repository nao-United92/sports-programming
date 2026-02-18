export const objectIsEmptyCheck = (obj) => {
  if (obj == null) return true;
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
