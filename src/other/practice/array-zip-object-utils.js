
export const zipObject = (props, values) => {
  const result = {};
  for (let i = 0; i < props.length; i++) {
    result[props[i]] = values[i];
  }
  return result;
};
