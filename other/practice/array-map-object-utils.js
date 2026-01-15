export const mapObject = (arr, fn) =>
  arr.reduce((acc, el, i, arr) => {
    const [key, value] = fn(el, i, arr);
    acc[key] = value;
    return acc;
  }, {});
