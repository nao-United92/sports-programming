export const omit = (obj, props) => {
  const newObj = { ...obj };
  props.forEach(prop => {
    delete newObj[prop];
  });
  return newObj;
};