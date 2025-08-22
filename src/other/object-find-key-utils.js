export const findKey = (object, predicate) => {
  if (object == null) {
    return undefined;
  }
  const keys = Object.keys(object);
  for (const key of keys) {
    if (predicate(object[key], key, object)) {
      return key;
    }
  }
  return undefined;
};
