const hasProperty = (obj, key) => {
  return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
};

export default hasProperty;
