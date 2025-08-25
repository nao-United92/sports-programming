export const get = (obj, path, defaultValue) => {
  const travel = (regexp) =>
    String(path)
      .split(regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[].]+/);
  return result === undefined || result === obj ? defaultValue : result;
};
